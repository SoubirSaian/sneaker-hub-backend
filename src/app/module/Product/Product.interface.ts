import { Types } from "mongoose";

export interface IProduct {
    retailerId: Types.ObjectId;
    name: string;
    description: string;
    price: number;
    image: string;
    brand: string;
    color: string;
    styleCode: string;
    specifications: {};
    availability: string;
    createdAt: Date;
}