import { Types } from "mongoose";

export interface IOrder {
    buyerId: Types.ObjectId;
    retailerId: Types.ObjectId;
    productId: Types.ObjectId;
    status: string;
    type: string;
    selectedSize: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    pickupTime: Date;
    createdAt: Date;
}

export type TOrderPayload = {
    retailerId: Types.ObjectId;
    productId: Types.ObjectId;
    orderType: string;
    selectedSize: number;
    quantity: number;
    unitPrice: number;
    pickupTime: Date;
}