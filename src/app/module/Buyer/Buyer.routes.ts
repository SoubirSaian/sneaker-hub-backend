import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import BuyerValidations from "./Buyer.validation";
import BuyerController from "./Buyer.controller";


const BuyerRouter = express.Router();

BuyerRouter.post(
    "/set-buyer-notification-alerts",
    authorizeUser,
    BuyerController.setBuyerNotificationAlertsController
);

BuyerRouter.post(
    "/set-buyer-shoe-size",
    authorizeUser,
    BuyerController.addSelectedShoeSizeController
);

BuyerRouter.post(
    "/add-buyer-interested-brands",
    authorizeUser,
    BuyerController.addBrandsOfInterestController
);

BuyerRouter.get(
    "/get-buyer-interests",
    authorizeUser,
    BuyerController.getBuyersInterestsDataController
);

BuyerRouter.patch(
    "/update-buyer-profile",
    authorizeUser,
    BuyerController.updateBuyerProfileController
);


//buyer home page

BuyerRouter.get(
    "/buyer-nearby-product",
    authorizeUser,
    validateRequest(BuyerValidations.getBuyerNearbyProductValidation),
    BuyerController.getBuyersInterestsDataController
);

BuyerRouter.get(
    "/buyer-followed-brand-product",
    authorizeUser,
    // validateRequest(BuyerValidations.getBuyerNearbyProductValidation),
    BuyerController.getBuyerFollowedBrandsProductsController
);

BuyerRouter.get(
    "/buyer-followed-retailer-product",
    authorizeUser,
    // validateRequest(BuyerValidations.getBuyerNearbyProductValidation),
    BuyerController.getBuyerFollowedRetailersProductsController
);

BuyerRouter.get(
    "/buyer-brand-retailer-wishlist",
    authorizeUser,
    // validateRequest(BuyerValidations.getBuyerNearbyProductValidation),
    BuyerController.getBuyerFollowedBrandStoreWishlistData
);



export default BuyerRouter;