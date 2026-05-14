import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import BuyerValidations from "./Buyer.validation";
import BuyerController from "./Buyer.controller";


const BuyerRouter = express.Router();



export default BuyerRouter;