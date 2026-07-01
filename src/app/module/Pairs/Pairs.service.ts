import ApiError from "../../../error/ApiError";
import notification from "../../../helper/notification";
import { IJwtPayload } from "../../../interface/jwt.interface";
import deleteOldFile from "../../../utilities/deleteFile";
import { ENUM_NOTIFICATION_TYPE, ENUM_PAIR_REQUEST_STATUS, ENUM_PRODUCT_TYPE, ENUM_USER_Type } from "../../../utilities/enum";
import AuthModel from "../auth/auth.model";
import { IPairs } from "./Pairs.interface";
import {PairRequestModel, PairsModel} from "./Pairs.model";


//add new pairs to the reseller's listing
const addNewPairsToReseller = async (
    userDetails: IJwtPayload,
    files: Express.Multer.File[],
    payload: Partial<IPairs>
) => {

    const {profileId} = userDetails;

    // if (!files || files.length === 0) {
    //     throw new ApiError(400, "At least one pair image is required.");
    // }

    // const imageUrls = files.map(file => {
    //     // Assuming you have a function to upload the file and get its URL
    //     return `uploads/product-image/${file.filename}`; // Replace with actual URL generation logic
    // });

    // console.log("product images:",imageUrls);

    const { name, type, brand, details, variant,styleCode,askingPrice, sneakerAttributes, tshirtAttributes} = payload;

    const pairPayload: Record<string, unknown> = {
        name,
        type,
        brand,
        details,
        variant,
        styleCode,
        askingPrice,
    };

    // console.log("payload before:", pairPayload);

    if (type === ENUM_PRODUCT_TYPE.SNEAKERS) {
        //  console.log("entered 1");
      pairPayload.sneakerAttributes = sneakerAttributes;
      pairPayload.tshirtAttributes = null;
    }

    if (type === ENUM_PRODUCT_TYPE.CLOTHING) {
        //  console.log("entered 2");
      pairPayload.tshirtAttributes = tshirtAttributes;
      pairPayload.sneakerAttributes = null;
    }

    //  console.log("payload after:", pairPayload);


    const newPairs = new PairsModel({
        resellerId: profileId,
        images:  [],
        ...pairPayload,
    });

    await newPairs.save();

    return newPairs;

};

//edit pairs details by the reseller
const editPairsDetails = async (
    userDetails: IJwtPayload, 
    pairId: string,
    files: Express.Multer.File[],
     payload: Partial<IPairs>
    ) => {

    const {profileId} = userDetails;

    const product = await PairsModel.findOne({ _id: pairId, resellerId: profileId });

    if (!product) {
        throw new ApiError(404, "Product not found or you do not have permission to edit this product.");
    }

    const existingImages = product.images || [];

    if (files && files.length > 0) {
        const imageUrls = files.map(file => {
            return `uploads/product-image/${file.filename}`;
        });
        product.images = imageUrls;
    }

    console.log("edit pair payload",payload);

    Object.assign(product, payload);

    await product.save();

    if(!product){
        throw new ApiError(500,"Failed to edit product.");
    }

    //delete old images from server if new images are uploaded
    if (files && files.length > 0 && existingImages.length > 0) {
        existingImages.forEach( (imageUrl:any) => {
            // Implement your logic to delete the image file from the server
           deleteOldFile(imageUrl);
        });
    }

    return product;
};



const getMyListedPairs = async (userDetails: IJwtPayload,query: Record<string,unknown>) => {

    const { profileId } = userDetails;

    const { visiblityStatus, soldStatus } = query;

    const filter: Record<string, any> = {
        resellerId: profileId,
    };

    if (visiblityStatus !== undefined) {
        filter.isVisibleToStore = visiblityStatus;
    }

    if (soldStatus !== undefined) {
        filter.isSold = soldStatus;
    }

    const pairs = await PairsModel.find(filter).lean();

    return {
        pairs,
        pairCount: pairs.length
    };
}

const getSinglePairDetails = async (pairId: string) => {

    // console.log(pairId);

    const pair = await PairsModel.findById(pairId).lean();

    // console.log(pair);

    if(!pair){
        throw new ApiError(404,"Pair detail not found.");
    }

    return pair;
    
}


//retailer
//retailer makes request for a pair to the reseller
const makeRequestForPairService = async (userDetails: IJwtPayload, payload: any) => {
    const {profileId} = userDetails;

    const {pairId, quantity, variant, askingPrice,offerPrice, validityHours, note, dealCompletionType} = payload;

    const pair: any = await PairsModel.findById(pairId).lean();

    if (!pair) {
        throw new ApiError(404, "Pairs not found.");
    }

    if (pair.resellerId.toString() === profileId) {
        throw new ApiError(400, "You cannot make a request for your own pairs.");
    }

    //check if the quantity is valid or not
    const pairStock = pair.variants.find( (item:any) =>  item?.size == variant?.size.toString() && item?.gender == variant?.gender );

    if (!pairStock) {
        throw new ApiError( 404,    "Selected variant not found." );
    }

    if(pairStock?.stock < quantity){
        throw new ApiError(400,"Your selected quantity exceeds pair's current stock.");
    }

    const newPairRequest = new PairRequestModel({
        resellerId: pair?.resellerId,
        retailerId: profileId,
        pairId,
        quantity,
        variant,
        askingPrice: pair?.askingPrice,
        offerHistory: [
            {
                offeredBy: ENUM_USER_Type.RETAILER,
                price: offerPrice,
                // note: note || ""
            }
        ],
        status: ENUM_PAIR_REQUEST_STATUS.PENDING,
        note,
        validity: {
            validForHours: validityHours,
            from: new Date(),
            to: new Date(Date.now() + validityHours * 60 * 60 * 1000)
        },
        // dealCompletionType
    });

    await newPairRequest.save();

    //send notification to the reseller about the new pair request (this can be implemented using a notification service or system)
    await notification.createNotification({
        toId: pair?.resellerId,
        toModel: "Reseller",
        title: "You have received a pair request.",
        description: "You have received a new pair request offer. Kindly response to proceed the deal done.",
        // message?: string;
        type: ENUM_NOTIFICATION_TYPE.NEW_PAIR_REQUEST,
        referenceId: newPairRequest?._id,
        referenceModel: "PairRequestModel",
        metadata: {}
    });

    return newPairRequest;

};

const getAllPairRequestsForRetailer = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const {status = 'all'} = query;

    let filter: Record<string, any> = { retailerId: profileId };

    if (status !== "all") {
        filter.status = status;
    }

    const pairRequests = await PairRequestModel.find(filter).lean();
    

    return pairRequests;
}

const getAllResellerWithLowStockShoes = async () => {

    //get all reseller with shoe
}

const getResellerDetailWithShoes = async () => {

    //when this api is being called 
    //analytics model will be excuted here.

    
}


//get all pair requests for the reseller
const getAllPairRequestsForReseller = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const {status = 'all'} = query;

    let filter: Record<string, any> = { resellerId: profileId };

    if (status !== "all") {
        filter.status = status;
    }

    const pairRequests = await PairRequestModel.find(filter).lean();
    

    return pairRequests;
}

const getSInglePairRequestService = async (pairRequestId: string) => {

    const pairRequest = await PairRequestModel.findById(pairRequestId).lean();

    if(!pairRequest){
        throw new ApiError(404,"Pair request not found.");
    }

    return pairRequest;
}

const acceptPairRequest = async (userDetails: IJwtPayload, pairRequestId: string) => {
    const {profileId} = userDetails;

    const pairRequest:any = await PairRequestModel.findById(pairRequestId);

    if (!pairRequest) {
        throw new ApiError(404, "Pair request not found to accept.");
    }

    if (pairRequest.resellerId.toString() !== profileId) {
        throw new ApiError(403, "You can not accept this pair request.");
    }

    pairRequest.status = ENUM_PAIR_REQUEST_STATUS.ACCEPTED;
    await pairRequest.save();

    //adjust the quantity of the pairs based on the accepted request
    // await PairsModel.updateOne(
    //     {
    //         _id: pairRequest?.pairId,
    //         "variants.gender": pairRequest?.variant?.gender,
    //         "variants.size": pairRequest?.variant?.size,
    //     },
    //     {
    //         $inc: {
    //             "variants.$.stock": -pairRequest?.quantity,
    //         },
    //     }
    // );
    const adjustPairStock = await PairsModel.findOneAndUpdate(
        {
            _id: pairRequest?.pairId,
            variants: {
                $elemMatch: {
                    gender: pairRequest?.variant?.gender,
                    size: pairRequest?.variant?.size,
                    stock: { $gte: pairRequest?.quantity },
                },
            },
        },
        {
            $inc: {
                "variants.$.stock": -pairRequest?.quantity,
            },
        },
        { new: true }
    );

    if (!adjustPairStock) {
        throw new ApiError( 400,"Your selected quantity exceeds pair's current stock.");
    }

    //send notification to the retailer about the acceptance of their pair request (this can be implemented using a notification service or system)
    //notification to reseller
    await Promise.all([
        notification.createNotification({
            toId: profileId,
            toModel: "Reseller",
            title: "You have accepted a pair request.",
            description: "You have acepted a pair request offer",
            // message?: string;
            type: ENUM_NOTIFICATION_TYPE.ACCEPTED_PAIR_REQUEST,
            referenceId: pairRequest._id,
            referenceModel: "PairRequestModel",
            metadata: {}
        }),

        //notification to retailer
        notification.createNotification({
            toId: pairRequest?.retailerId,
            toModel: "Retailer",
            title: "Your new pair request is accepted.",
            description: "Reseller has accepted your pair request offer.",
            // message?: string;
            type: ENUM_NOTIFICATION_TYPE.ACCEPTED_PAIR_REQUEST,
            referenceId: pairRequest._id,
            referenceModel: "PairRequestModel",
            metadata: {}
        }),
    ]);

    return null;
};

const rejectPairRequest = async (userDetails: IJwtPayload, pairRequestId: string) => {
    const {profileId} = userDetails;

    const pairRequest = await PairRequestModel.findById(pairRequestId);

    if (!pairRequest) {
        throw new ApiError(404, "Pair request not found.");
    }

    if (pairRequest.resellerId.toString() !== profileId) {
        throw new ApiError(403, "You can not reject this pair request.");
    }

    pairRequest.status = ENUM_PAIR_REQUEST_STATUS.REJECTED;
    await pairRequest.save();

    await notification.createNotification({
        toId: pairRequest?.retailerId,
        toModel: "Retailer",
        title: "Your is pair request is rejected",
        description: "Your request to resource new pair is rejected by the reseller.",
        // message?: string;
        type: ENUM_NOTIFICATION_TYPE.REJECTED_PAIR_REQUEST,
        referenceId: pairRequest._id,
        referenceModel: "PairRequestModel",
        metadata: {}
    });

    return null;
};

const proposeCounterOfferToPairRequest = async (userDetails: IJwtPayload, payload: any) => {
    const {profileId,authId} = userDetails;

    const auth:any = AuthModel.findById(authId).select("role").lean();

    const {pairRequestId, offerPrice,  dealCompletionType} = payload;

    const pairRequest = await PairRequestModel.findById(pairRequestId);

    if (!pairRequest) {
        throw new ApiError(404, "Pair request not found.");
    }

    if ( pairRequest?.resellerId.toString() !== profileId || pairRequest?.retailerId.toString() !== profileId) {
        throw new ApiError(403, "You can not make counter offer of this pair request.");
    }

    pairRequest.status = ENUM_PAIR_REQUEST_STATUS.COUNTER;

    pairRequest.offerHistory.push({
        offeredBy: auth?.role,
        price: offerPrice,
        // note: payload.note || ""
    });

    if(dealCompletionType) pairRequest.dealCompletionType = dealCompletionType;

    await pairRequest.save();

    return null;
};


const PairsServices = { 
    addNewPairsToReseller,
    editPairsDetails,
    getMyListedPairs,
    getSinglePairDetails,

    makeRequestForPairService,
    getAllPairRequestsForRetailer,

    getAllPairRequestsForReseller,
    getSInglePairRequestService,
    acceptPairRequest,
    rejectPairRequest,
    proposeCounterOfferToPairRequest
};

export default PairsServices;