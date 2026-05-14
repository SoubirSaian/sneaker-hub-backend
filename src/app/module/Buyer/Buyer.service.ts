import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { IBuyer, IBuyerNotification } from "./Buyer.interface";
import BuyerModel from "./Buyer.model";

const setBuyerNotificationAlerts = async (userDetails: IJwtPayload, payload: IBuyerNotification) => {

    const { profileId } = userDetails;

    const buyer = await BuyerModel.findById(profileId);

    if (!buyer) {
        throw new ApiError(404, "Buyer not found");
    }

    buyer.notification = {
        ...payload
    };

    await buyer.save();

    return buyer;
};

const addSelectedShoeSize = async (userDetails: IJwtPayload, payload: { label: string; size: number }[]) => {

    const { profileId } = userDetails;

    const buyer = await BuyerModel.findById(profileId);

    if (!buyer) {
        throw new ApiError(404, "Buyer not found");
    }

    buyer.selectedShoeSize.push(...payload);

    await buyer.save();

    return buyer;
}

const addBrandsOfInterest = async (userDetails: IJwtPayload, payload: string[]) => {

    const { profileId } = userDetails;

    const buyer = await BuyerModel.findById(profileId);

    if (!buyer) {
        throw new ApiError(404, "Buyer not found");
    }

    buyer.brands.push(...payload);

    await buyer.save();

    return buyer;
}


const BuyerServices = { 
    setBuyerNotificationAlerts 
};

export default BuyerServices;