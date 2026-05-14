import { model, Schema, models } from "mongoose";
import { IPairs } from "./Pairs.interface";

const PairsSchema = new Schema<IPairs>({
    resellerId: { type: Schema.Types.ObjectId, ref: "Reseller", required: true },
    name: { type: String, required: true },
    images: { type: String, required: true },
    brand: { type: String, required: true },
    quantity: { type: String, required: true },
    details: { type: String, required: true },
    gender: { type: String, required: true },
    askingPrice: { type: Number, required: true },
    size: { type: Number, required: true },
    type: { type: String, required: true },
    isVisibleToStore: { type: Boolean, default: true },
    isShowAskingPrice: { type: Boolean, default: true },
    isAllowDirectRequest: { type: Boolean, default: false },
}, { timestamps: true });

const PairsModel = models.Pairs || model<IPairs>("Pairs", PairsSchema);

export default PairsModel;