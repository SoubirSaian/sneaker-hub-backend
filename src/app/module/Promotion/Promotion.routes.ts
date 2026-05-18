import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import PromotionValidations from "./Promotion.validation";
import PromotionController from "./Promotion.controller";


const PromotionRouter = express.Router();



export default PromotionRouter;