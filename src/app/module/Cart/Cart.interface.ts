import { Types } from "mongoose";

export interface ICart {
    buyerId: Types.ObjectId;
    productId: Types.ObjectId;
    retailerId: Types.ObjectId;
    // unitPrice: number;
    quantity: number;
    totalPrice: number;
    selectedSize: number;
    status: string;
    createdAt: Date;
}

export type TCartItem = {
    productId: Types.ObjectId;
    retailerId: Types.ObjectId;
    unitPrice: number;
    quantity: number;
    totalPrice: number;
    selectedSize: number;
}