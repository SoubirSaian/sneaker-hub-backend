import { model, Schema, models } from "mongoose";
import { IBuyer } from "./Buyer.interface";

const BuyerSchema = new Schema<IBuyer>({
    auth: { type: Schema.Types.ObjectId, required: true, ref: "Auth" },
    name: { type: String, required: true },
    phone: { type: String, default: "" },
    image: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    membershipStatus: { type: String, default: "" },
    shoeSize: { type: Number, default: 0 },
    selectedShoeSize: [{
        label: { type: String, default: "" },
        size: { type: Number, default: 0 }
    }],
    brands: { type: [String], default: [] },
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
    address: { type: String,default:"" },
    notification: { 
        isRestockInMyShoeSize: { type: Boolean, default: false },
        isNearbyStoreAlert: { type: Boolean, default: false },
        isFollowStoreDrops: { type: Boolean, default: false },
        isPriceDrop: { type: Boolean, default: false },
        isWantedPairAlert: { type: Boolean, default: false },
        isGoSneakerAnnouncement: { type: Boolean, default: false },
    },
    profileVisiblity: { type: [String], default: [] },
    wishList: { type: [String], default: [] },
    purchaseHistory: { type: [String], default: [] },
    lockerCollection: { type: [String], default: [] },
    vipStatus: { type: [String], default: [] },
    activity: { type: [String], default: [] },
    myReviews:{type:Number,default:0},
    subscription:{type:Schema.Types.ObjectId,ref:"Subscription"},
    subscriptionStartDate:{type:Date},
    subscriptionEndDate:{type:Date},
}, { timestamps: true });

const BuyerModel = models.Buyer || model<IBuyer>("Buyer", BuyerSchema);

export default BuyerModel;