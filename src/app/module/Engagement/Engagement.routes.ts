import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import EngagementValidations from "./Engagement.validation";
import EngagementController from "./Engagement.controller";


const EngagementRouter = express.Router();



export default EngagementRouter;