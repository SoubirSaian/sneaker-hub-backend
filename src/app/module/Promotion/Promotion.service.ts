import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { IPromotion } from "./Promotion.interface";
import PromotionModel from "./Promotion.model";

const createNewPromotionService = async (userDetails: IJwtPayload, payload: Partial<IPromotion>) => {

    const { profileId } = userDetails;

    const newPromotion = await PromotionModel.create({ ...payload, retaileriD: profileId });

    if (!newPromotion) {
        throw new ApiError(500, "Failed to create promotion");
    }

    return newPromotion;
};

const PromotionServices = { 
    createNewPromotionService
 };

export default PromotionServices;