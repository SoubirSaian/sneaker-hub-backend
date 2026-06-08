import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import ResellerValidations from "./Reseller.validation";
import ResellerController from "./Reseller.controller";


const ResellerRouter = express.Router();

ResellerRouter.get(
    "/get-reseller-home-page-stat-data",
    authorizeUser,
    ResellerController.resellerHomePageStatDataController
);

ResellerRouter.post(
    "/make-pair-request",
    authorizeUser,
    validateRequest(ResellerValidations.makeRequestForPairValidationSchema),
    ResellerController.proposeAnOfferToResellerForPairRequestController
);



export default ResellerRouter;