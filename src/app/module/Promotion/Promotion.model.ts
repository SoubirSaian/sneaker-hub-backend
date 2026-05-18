import { model, Schema, models } from "mongoose";
import { IPromotion } from "./Promotion.interface";
import { ENUM_PROMOTION_RECEIVER_TYPE, ENUM_PROMOTION_SEND_METHOD, ENUM_PROMOTION_TYPE } from "../../../utilities/enum";

const PromotionSchema = new Schema<IPromotion>({
    retaileriD: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    type: { 
        type: String, required: true, 
        enum: Object.values(ENUM_PROMOTION_TYPE), 
        default: ENUM_PROMOTION_TYPE.GENERAL_ANNOUNCEMENT 
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    receiver: { 
        type: String, 
        required: true, 
        enum: Object.values(ENUM_PROMOTION_RECEIVER_TYPE),
        default: ENUM_PROMOTION_RECEIVER_TYPE.ALL_MY_FOLLOWERS 
    },
    sendMethod: { 
        type: String, 
        required: true, 
        enum: Object.values(ENUM_PROMOTION_SEND_METHOD), 
        default: ENUM_PROMOTION_SEND_METHOD.SEND_NOW
    },
}, { timestamps: true });

const PromotionModel = models.Promotion || model<IPromotion>("Promotion", PromotionSchema);

export default PromotionModel;