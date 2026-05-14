import { model, Schema, models } from "mongoose";
import { IRetailer } from "./Retailer.interface";

const RetailerSchema = new Schema<IRetailer>({
    auth: { type: Schema.Types.ObjectId, required: true, ref: "Auth" },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    coverImage: { type: String, default: "" },
    image: { type: String, default: "" },
    shoeSize: { type: Number, default: 0 },
    type: { type: String, default: "" },
    details: { type: String, default: "" },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            default: [0, 0],
        },
    },
    address: { type: String, default:"" },
    phone: { type: String, default:"" },
    website: { type: String, default:"" },
    operationHour:{type:Object,default:{}},
    socialLink:{type:Object,default:{}},
    subscription:{type:Schema.Types.ObjectId,ref:"Subscription"},
    subscriptionStartDate:{type:Date},
    subscriptionEndDate:{type:Date},
    followersCount:{type:Number,default:0},
    averageRating:{type:Number,default:0},
    isApproved:{type:Boolean,default:false},
}, { timestamps: true });

const RetailerModel = models.Retailer || model<IRetailer>("Retailer", RetailerSchema);

export default RetailerModel;