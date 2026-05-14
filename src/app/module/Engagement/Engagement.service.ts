import mongoose from "mongoose";
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import RetailerModel from "../Retailer/Retailer.model";
import { IReview } from "./Engagement.interface";
import { FollowModel, ReviewModel } from "./Engagement.model";

//follow

const followRetailerService = async (userDetails: IJwtPayload ,retailerId: string) => {

    const { profileId } = userDetails;

    // Check if the follow relationship already exists
    const existingFollow = await FollowModel.findOne({ buyerId: profileId, retailerId });

    if (existingFollow) {
        throw new ApiError(400, "You are already following this retailer.");
    }

    // Create a new follow relationship
    const newFollow = new FollowModel({
        buyerId: profileId,
        retailerId,
    });

    
    await newFollow.save();

    //increment the followers count of the retailer
    await RetailerModel.findByIdAndUpdate(retailerId, { $inc: { followersCount: 1 } });

    return null;

};

const unfollowRetailerService = async (userDetails: IJwtPayload ,retailerId: string) => {

    const { profileId } = userDetails;

    // Check if the follow relationship exists
    const existingFollow = await FollowModel.findOne({ buyerId: profileId, retailerId });

    if (!existingFollow) {
        throw new ApiError(400, "You are not following this retailer.");
    }

    // Remove the follow relationship
    await FollowModel.deleteOne({ buyerId: profileId, retailerId });

    // Decrement the followers count of the retailer
    await RetailerModel.findByIdAndUpdate(retailerId, { $inc: { followersCount: -1 } });

    return null;

}

//reviewservice to add review and rating for a retailer by a buyer

const addReviewService = async (userDetails: IJwtPayload, payload: IReview) => {

    const { profileId } = userDetails;

    const { retailerId, productId, content, customerServiceRating, authenticityRating, pickupSpeedRating, priceRating, storeExperienceRating, staffHelpfulnessRating } = payload;

    const retailerObjectId = new mongoose.Types.ObjectId(retailerId);

    // Check if the review already exists for the same buyer, retailer and product
    const existingReview = await ReviewModel.findOne({ buyerId: profileId, retailerId, productId });

    if (existingReview) {
        throw new ApiError(400, "You have already reviewed this product for this retailer.");
    }

    //determine the overall rating based on the individual ratings
    const overallRating = Math.round((customerServiceRating + authenticityRating + pickupSpeedRating + priceRating + storeExperienceRating + staffHelpfulnessRating) / 6);

    if (overallRating < 1 || overallRating > 5) {
        throw new ApiError(400, "Overall rating must be between 1 and 5.");
    }


    // Create a new review
    const newReview = await ReviewModel.create({
        buyerId: profileId,
        retailerId,
        productId,
        content,
        overallRating,
        customerServiceRating,
        authenticityRating,
        pickupSpeedRating,
        priceRating,
        storeExperienceRating,
        staffHelpfulnessRating
    });

    // Update the retailer's average rating
    // const reviews = await ReviewModel.find({ retailerId });
    // const totalRating = reviews.reduce((sum, review) => sum + review.overallRating, 0);
    // const averageRating = totalRating / reviews.length;

    // await RetailerModel.findByIdAndUpdate(retailerId, { averageRating });

    await ReviewModel.aggregate([
        {
            $match: {
            retailerId: retailerObjectId,
            },
        },
        {
            $group: {
            _id: "$retailerId",
            averageRating: { $avg: "$overallRating" },
            },
        },
        {
            $merge: {
            into: "retailers", // your retailer collection name
            on: "_id",
            whenMatched: [
                {
                $set: {
                    averageRating: "$averageRating",
                },
                },
            ],
            whenNotMatched: "discard",
            },
        },
    ]);

    return null;

}

const EngagementServices = { 
    followRetailerService, 
    unfollowRetailerService ,

    addReviewService

};

export default EngagementServices;