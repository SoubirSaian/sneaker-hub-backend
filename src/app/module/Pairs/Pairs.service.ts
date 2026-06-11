import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { ENUM_PAIR_REQUEST_STATUS, ENUM_USER_Type } from "../../../utilities/enum";
import { IPairs } from "./Pairs.interface";
import {PairRequestModel, PairsModel} from "./Pairs.model";

//add new pairs to the reseller's listing
const addNewPairsToReseller = async (userDetails: IJwtPayload,payload: Partial<IPairs>) => {

    const {profileId} = userDetails;

    const newPairs = new PairsModel({
        ...payload,
        resellerId: profileId
    });

    await newPairs.save();

    return newPairs;

};

//edit pairs details by the reseller
const editPairsDetails = async (userDetails: IJwtPayload, pairId: string, payload: Partial<IPairs>) => {

    const {profileId} = userDetails;

    const pairs = await PairsModel.findById(pairId);

    if (!pairs) {
        throw new ApiError(404, "Pairs not found to update.");
    }

    if (pairs.resellerId.toString() !== profileId) {
        throw new ApiError(403, "You are not the owner of this pairs. You cannot edit the details.");
    }

    Object.assign(pairs, payload);
    await pairs.save();

    return pairs;
};



const getMyListedPairs = async (userDetails: IJwtPayload,query: Record<string,unknown>) => {
    // const {profileId} = userDetails;

    // const {visiblityStatus, soldStatus} = query;

    // let pairs;

    // if(visiblityStatus){

    //     await PairsModel.find({resellerId: profileId,isVisibleToStore: visiblityStatus}).lean();
    // }
    // else if(soldStatus){

    //      await PairsModel.find({resellerId: profileId,isSold: soldStatus}).lean();
    // }
    // // const pairs = await PairsModel.find({resellerId: profileId,isVisibleToStore: visiblityStatus}).lean();


    // return pairs;

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

    return pairs;
}

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

    if (pair.quantity < quantity) {
        throw new ApiError(400, "Requested quantity exceeds available quantity.");
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

    return newPairRequest;

};

//get all pair requests for the reseller
const getAllPairRequestsForReseller = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const {status} = query;

    let filter: Record<string, any> = { resellerId: profileId };

    if (status) {
        filter.status = status;
    }

    const pairRequests = await PairRequestModel.find(filter).lean();

    return pairRequests;
}

const acceptPairRequest = async (userDetails: IJwtPayload, pairRequestId: string) => {
    const {profileId} = userDetails;

    const pairRequest = await PairRequestModel.findById(pairRequestId);

    if (!pairRequest) {
        throw new ApiError(404, "Pair request not found.");
    }

    if (pairRequest.resellerId.toString() !== profileId) {
        throw new ApiError(403, "You are not the owner of this pair request.");
    }

    pairRequest.status = ENUM_PAIR_REQUEST_STATUS.ACCEPTED;
    await pairRequest.save();

    //adjust the quantity of the pairs based on the accepted request

    //send notification to the retailer about the acceptance of their pair request (this can be implemented using a notification service or system)

    return null;
};

const rejectPairRequest = async (userDetails: IJwtPayload, pairRequestId: string) => {
    const {profileId} = userDetails;

    const pairRequest = await PairRequestModel.findById(pairRequestId);

    if (!pairRequest) {
        throw new ApiError(404, "Pair request not found.");
    }

    if (pairRequest.resellerId.toString() !== profileId) {
        throw new ApiError(403, "You are not the owner of this pair request.");
    }

    pairRequest.status = ENUM_PAIR_REQUEST_STATUS.REJECTED;
    await pairRequest.save();

    return null;
};

const proposeCounterOfferToPairRequest = async (userDetails: IJwtPayload, payload: any) => {
    const {profileId} = userDetails;
    const {pairRequestId, offerPrice,  dealCompletionType} = payload;
    const pairRequest = await PairRequestModel.findById(pairRequestId);

    if (!pairRequest) {
        throw new ApiError(404, "Pair request not found.");
    }

    if (pairRequest.resellerId.toString() !== profileId) {
        throw new ApiError(403, "You are not the owner of this pair request.");
    }

    pairRequest.status = ENUM_PAIR_REQUEST_STATUS.COUNTER;
    pairRequest.offerHistory.push({
        offeredBy: ENUM_USER_Type.RESELLER,
        price: offerPrice,
        // note: payload.note || ""
    });
    pairRequest.dealCompletionType = dealCompletionType;
    await pairRequest.save();

    return null;
};


const PairsServices = { 
    addNewPairsToReseller,
    editPairsDetails,
    getMyListedPairs,
    // makeRequestForPairService,
    getAllPairRequestsForReseller,
    acceptPairRequest,
    rejectPairRequest,
    proposeCounterOfferToPairRequest
};

export default PairsServices;