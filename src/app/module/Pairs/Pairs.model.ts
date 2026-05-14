import { model, Schema, models } from "mongoose";
import { IPairs } from "./Pairs.interface";

const PairsSchema = new Schema<IPairs>({
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    profile_image: { type: String, default: "" },
    totalAmount: { type: Number, default: 0 },
    totalPoint: { type: Number, default: 0 }
}, { timestamps: true });

const PairsModel = models.Pairs || model<IPairs>("Pairs", PairsSchema);

export default PairsModel;