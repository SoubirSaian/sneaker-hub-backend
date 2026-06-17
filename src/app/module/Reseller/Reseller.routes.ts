import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import ResellerValidations from "./Reseller.validation";
import ResellerController from "./Reseller.controller";
import { uploadProfile } from "../../middlewares/multerMiddleware";


const ResellerRouter = express.Router();

ResellerRouter.get(
    "/reseller-homepage-stat-data",
    authorizeUser,
    ResellerController.resellerHomePageStatDataController
);

ResellerRouter.post(
    "/make-pair-request",
    authorizeUser,
    validateRequest(ResellerValidations.makeRequestForPairValidationSchema),
    ResellerController.proposeAnOfferToResellerForPairRequestController
);

ResellerRouter.patch(
    "/update-reseller-profile",
    authorizeUser,
    uploadProfile.single("profile-image"),
    ResellerController.updateResellerProfile
);



export default ResellerRouter;