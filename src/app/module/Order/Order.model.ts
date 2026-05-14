import { model, Schema, models } from "mongoose";
import { IOrder } from "./Order.interface";
import { ENUM_ORDER_STATUS, ENUM_ORDER_TYPE } from "../../../utilities/enum";

const OrderSchema = new Schema<IOrder>({
    buyerId: { type: Schema.Types.ObjectId, ref: "Buyer", required: true },
    retailerId: { type: Schema.Types.ObjectId, ref: "Retailer", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    status: { type: String, enum: Object.values(ENUM_ORDER_STATUS), default: ENUM_ORDER_STATUS.PLACED },
    type: { type: String, enum: Object.values(ENUM_ORDER_TYPE), default: ENUM_ORDER_TYPE.BUY_NOW },
    selectedSize: { type: Number, required: true },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    pickupTime: { type: Date, required: true },
}, { timestamps: true });

const OrderModel = models.Order || model<IOrder>("Order", OrderSchema);

export default OrderModel;