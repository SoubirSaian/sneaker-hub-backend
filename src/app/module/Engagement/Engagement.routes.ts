import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import EngagementValidations from "./Engagement.validation";
import EngagementController from "./Engagement.controller";


const EngagementRouter = express.Router();

EngagementRouter.post(
    "/follow-retailer/:id",
    authorizeUser,
    // validateRequest(EngagementValidations.followRetailerZodSchema),
    EngagementController.followRetailerController   
);

EngagementRouter.post(
    "/unfollow-retailer/:id",
    authorizeUser,
    // validateRequest(EngagementValidations.followRetailerZodSchema),
    EngagementController.unfollowRetailerController   
);

EngagementRouter.post(
    "/add-to-wishlist",
    authorizeUser,
    validateRequest(EngagementValidations.addToWishListValidation),
    EngagementController.addToWishlistController   
);

EngagementRouter.post(
    "/add-to-wantedlist/:id",
    authorizeUser,
    // validateRequest(EngagementValidations.followRetailerZodSchema),
    EngagementController.addToWantedlistController   
);
EngagementRouter.post(
    "/remove-from-wishlist/:id",
    authorizeUser,
    // validateRequest(EngagementValidations.followRetailerZodSchema),
    EngagementController.removeFromWishlistController   
);

EngagementRouter.post(
    "/add-review",
    authorizeUser,
    // validateRequest(EngagementValidations.followRetailerZodSchema),
    EngagementController.addReviewController   
);

export default EngagementRouter;