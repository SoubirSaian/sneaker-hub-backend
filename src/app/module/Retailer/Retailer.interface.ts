import { Types } from "mongoose";

// Retailer Interface
export interface IRetailer {
  id: Types.ObjectId;
  auth: Types.ObjectId;
  name: string;
  email: string;
  coverImage: string;
  image: string;
  shoeSize: number;
  type: string;
  details: string;
  location: {
    type: string;
    coordinates: number[];
  };
  address: string;
  phone: string;
  website: string;
  operationHour: {};
  socialLink: {};
  subscription: Types.ObjectId;
  subscriptionStartDate: Date;
  subscriptionEndDate: Date;
  followersCount: number;
  averageRating: number;
  isApproved: boolean;
  createdAT: Date;
}