import { model, Schema, models } from "mongoose";
import { IPairRequest, IPairs } from "./Pairs.interface";
import { ENUM_PAIR_REQUEST_STATUS } from "../../../utilities/enum";

const PairsSchema = new Schema<IPairs>({
    resellerId: { type: Schema.Types.ObjectId, ref: "Reseller", required: true },
    name: { type: String, required: true },
    images: { type: String, required: true },
    brand: { type: String, required: true },
    quantity: { type: String, required: true },
    details: { type: String, required: true },
    variant: {
        gender: { type: String, required: true },
        size: { type: Number, required: true }
    },
    askingPrice: { type: Number, required: true },
    // size: { type: Number, required: true },
    type: { type: String, required: true },
    isVisibleToStore: { type: Boolean, default: true },
    isShowAskingPrice: { type: Boolean, default: true },
    isAllowDirectRequest: { type: Boolean, default: false },
    isSold: { type: Boolean, default: false },
}, { timestamps: true });


const pairRequestSchema = new Schema<IPairRequest>({
    resellerId: { type: Schema.Types.ObjectId, ref: "Reseller", required: true },
    retailerId: { type: Schema.Types.ObjectId, ref: "Retailer", required: true },
    pairId: { type: Schema.Types.ObjectId, ref: "Pairs", required: true },
    quantity: { type: String, required: true },
    variant: {  },
    askingPrice: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: Object.values(ENUM_PAIR_REQUEST_STATUS), default: ENUM_PAIR_REQUEST_STATUS.PENDING },

}, { timestamps: true });



const PairsModel = models.Pairs || model<IPairs>("Pairs", PairsSchema);

const PairRequestModel = models.PairRequest || model<IPairRequest>("PairRequest", pairRequestSchema);

export { PairsModel, PairRequestModel };