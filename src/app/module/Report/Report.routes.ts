import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import ReportValidations from "./Report.validation";
import ReportController from "./Report.controller";


const ReportRouter = express.Router();



export default ReportRouter;