import { Types } from "mongoose";

export interface IProduct {
    retailerId: Types.ObjectId;
    type: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    brand: string;
    color: string;
    styleCode: string;
    variant: {
        size: string,
        stock: number
    }[];
    availability: string;
    totalSearchCount: number;
    createdAt: Date;
}

export interface IRecentSearch extends Document {
  buyerId: string;
  keyword: string;
  searchedAt: Date;
}