import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import PairsValidations from "./Pairs.validation";
import PairsController from "./Pairs.controller";


const PairsRouter = express.Router();

PairsRouter.post(
    "/add-new-pairs",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.addNewPairsController
);

PairsRouter.get(
    "/get-listed-pairs",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.getAllListedPairsController
);

PairsRouter.post(
    "/get-pair-requests",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.getAllpairRequestController
);

PairsRouter.post(
    "/accept-pair-request/:id",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.acceptPairRequestController
);

PairsRouter.post(
    "/reject-pair-request/:id",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.rejectPairRequestController
);

PairsRouter.post(
    "/propose-counter-offer",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.proposeCounterOfferToPairRequestController
);


export default PairsRouter;