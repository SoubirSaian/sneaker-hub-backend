import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import RetailerValidations from "./Retailer.validation";
import RetailerController from "./Retailer.controller";


const RetailerRouter = express.Router();



export default RetailerRouter;