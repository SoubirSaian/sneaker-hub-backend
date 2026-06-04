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
    "/propose-an-offer-to-reseller-for-pair-request",
    authorizeUser,
    ResellerController.proposeAnOfferToResellerForPairRequestController
);



export default ResellerRouter;