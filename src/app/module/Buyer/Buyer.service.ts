import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import deleteOldFile from "../../../utilities/deleteFile";
import { FollowModel, WishListModel } from "../Engagement/Engagement.model";
import { IBuyer, IBuyerNotification } from "./Buyer.interface";
import BuyerModel from "./Buyer.model";

const setBuyerNotificationAlerts = async (userDetails: IJwtPayload, payload: IBuyerNotification) => {

    const { profileId } = userDetails;

    const buyer = await BuyerModel.findById(profileId);

    if (!buyer) {
        throw new ApiError(404, "Buyer not found");
    }

    buyer.notification = {
        ...payload
    };

    await buyer.save();

    return buyer;
};

const addSelectedShoeSize = async (userDetails: IJwtPayload, payload: { label: string; size: number }[]) => {

    const { profileId } = userDetails;

    const buyer = await BuyerModel.findById(profileId);

    if (!buyer) {
        throw new ApiError(404, "Buyer not found");
    }

    buyer.selectedShoeSize.push(...payload);

    await buyer.save();

    return buyer;
}

const addBrandsOfInterest = async (userDetails: IJwtPayload, payload: string[]) => {

    const { profileId } = userDetails;

    const buyer = await BuyerModel.findById(profileId);

    if (!buyer) {
        throw new ApiError(404, "Buyer not found");
    }

    buyer.brands.push(...payload);

    await buyer.save();

    return buyer;
}

const getBuyersInterestsData = async (userDetails: IJwtPayload) => {
    const { profileId } = userDetails;

    let [brands, stores, favourites] = await Promise.all([
        BuyerModel.findById(profileId).select("name shoeSize brands"),
        FollowModel.find({ buyerId: profileId }).populate("retailerId", "name").lean(),
        WishListModel.find({ buyerId: profileId }).populate("productId", "name").lean()
    ]);

    // BuyerModel.findById(profileId).select("name shoeSize brands").lean();

    // const stores = await FollowModel.find({ buyerId: profileId }).populate("retailerId", "name").lean();

    // const favourites = await WishListModel.find({ buyerId: profileId }).populate("productId", "name").lean();

    return {
        brands: brands?.brands || [],
        stores: stores || [],
        favourites: favourites || []
    };
}

const updateBuyerProfileService = async (
    userDetails: IJwtPayload,
    file: Express.Multer.File | undefined,
    payload: Partial<IBuyer>
    ) => {

    const { profileId } = userDetails;
    
    const {name,bio,selectedShoeSize,brands,privacy} = payload;
    
    const profile:any = await BuyerModel.findById(profileId).lean();
    if (!profile) {
        throw new ApiError(404, "Buyer not found");
    }

    let buyerProfileImage = "";

    if(file){
        buyerProfileImage = `uploads/profile-image/${file.filename}`;

        deleteOldFile(profile?.image);
    }

    const updatedProfile = await BuyerModel.findByIdAndUpdate(profileId, {
        $set: {
            name:name,
            bio:bio,
            image: buyerProfileImage,
            selectedShoeSize: selectedShoeSize,
            brands: brands,
            privacy: privacy,
        }
    }, { new: true });

    

    return updatedProfile;
};

const BuyerServices = { 
    setBuyerNotificationAlerts,
    addSelectedShoeSize,
    addBrandsOfInterest,
    getBuyersInterestsData,
    updateBuyerProfileService
};

export default BuyerServices;