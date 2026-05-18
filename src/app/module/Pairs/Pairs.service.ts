import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { IPairs } from "./Pairs.interface";
import {PairsModel} from "./Pairs.model";

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

const PairsServices = { 
    addNewPairsToReseller,
    getMyListedPairs
};

export default PairsServices;