import { ObjectId, Types } from "mongoose";

// Buyer Interface
export interface IBuyer {
  auth: Types.ObjectId;
  name: string;
  email: string;
  image: string;
  phone: string;
  membershipStatus: string;
  shoeSize: number;
  selectedShoeSize: {
    label: string;
    size: number;
  }[];
  brands: string[];
  location: {
    type: string;
    coordinates: number[];
  };
   address: string;
  notification: {
    isRestockInMyShoeSize: boolean;
    isNearbyStoreAlert: boolean;
    isFollowStoreDrops: boolean;
    isPriceDrop: boolean;
    isWantedPairAlert: boolean;
    isGoSneakerAnnouncement: boolean;
  };
  profileVisiblity: string[];
  wishList: string[];
  purchaseHistory: string[];
  lockerCollection: string[];
  vipStatus: string[];
  activity: string[];
  myReviews: number;
  subscription: Types.ObjectId;
  subscriptionStartDate: Date;
  subscriptionEndDate: Date;
  createdAT: Date;
}


export interface IBuyerNotification {
  isRestockInMyShoeSize: boolean;
  isNearbyStoreAlert: boolean;
  isFollowStoreDrops: boolean;
  isPriceDrop: boolean;
  isWantedPairAlert: boolean;
  isGoSneakerAnnouncement: boolean;
}
// Reseller Interface
