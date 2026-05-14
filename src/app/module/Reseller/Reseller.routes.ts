import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import ResellerValidations from "./Reseller.validation";
import ResellerController from "./Reseller.controller";


const ResellerRouter = express.Router();



export default ResellerRouter;