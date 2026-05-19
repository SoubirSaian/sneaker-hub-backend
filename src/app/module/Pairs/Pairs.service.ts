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

const getMyListedPairs = async (userDetails: IJwtPayload,query: Record<string,unknown>) => {
    const {profileId} = userDetails;

    const {visiblityStatus} = query;

    const pairs = await PairsModel.find({resellerId: profileId,isVisibleToStore: visiblityStatus}).lean();

    return pairs;
}

//get all pair requests for the reseller
const getAllPairRequestsForReseller = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const {status} = query;

    const pairRequests = await PairRequestModel.find({resellerId: profileId, status}).lean();

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
    getMyListedPairs,
    getAllPairRequestsForReseller,
    acceptPairRequest,
    rejectPairRequest,
    proposeCounterOfferToPairRequest
};

export default PairsServices;