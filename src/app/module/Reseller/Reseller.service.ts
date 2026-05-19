import ApiError from "../../../error/ApiError";
import notification from "../../../helper/notification";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { ENUM_NOTIFICATION_TYPE, ENUM_PAIR_REQUEST_STATUS, ENUM_USER_Type } from "../../../utilities/enum";
import { IPairRequest } from "../Pairs/Pairs.interface";
import { PairRequestModel, PairsModel } from "../Pairs/Pairs.model";
import { IReseller } from "./Reseller.interface";
import ResellerModel from "./Reseller.model";

const resellerHomePageStatDataService = async (userDetails: IJwtPayload) => {
    const {profileId} = userDetails;

    const activeListingsCount = await PairsModel.countDocuments({resellerId: profileId});
    // const totalListingsCount = await PairsModel.countDocuments({resellerId: profileId});

    const totalStoreRequestsCount = await PairRequestModel.countDocuments({
        resellerId: profileId,
        status: {$in: [ENUM_PAIR_REQUEST_STATUS.PENDING, ENUM_PAIR_REQUEST_STATUS.ACCEPTED]}
    });

    const totalActiveRequestsCount = await PairRequestModel.countDocuments({
        resellerId: profileId,
        status: ENUM_PAIR_REQUEST_STATUS.ACCEPTED
    });

    return { 
        activeListingsCount, 
        // totalListingsCount 
    };
};

//make an offer to reseller's pair request
const proposeAnOfferToResellerForPairRequest = async (userDetails: IJwtPayload, payload: any) => {
    const {profileId} = userDetails;

    const {resellerId,pairId, offerPrice, note, validityHours} = payload;

    const newpair = await PairRequestModel.create({
        resellerId,
        retailerId: profileId,
        pairId,
        note,
        offerHistory: [
            {
                offeredBy: ENUM_USER_Type.RETAILER,
                price: offerPrice || 0,
                // note: payload.note || ""
            }
        ],
        validity: {
            validForHours: validityHours,
            from: new Date(),
            to: new Date(Date.now() + validityHours * 60 * 60 * 1000)
        }
    });

    if(!newpair) {
        throw new ApiError(500, "Failed to create pair request.");
    }

    //send notification to reseller about new offer (implementation pending)
    await notification.createNotification({
        toId: resellerId,
        toModel: "Reseller",
        title: "New Offer Received",
        description: `You have received a new offer for your pair listing. Offered Price: $${offerPrice}`,
        type: ENUM_NOTIFICATION_TYPE.NEW_PAIR_REQUEST,
        referenceId: newpair._id.toString(),
        referenceModel: "PairRequest"
    });

    return newpair;
   
}

const ResellerServices = { 
    resellerHomePageStatDataService
};


export default ResellerServices;