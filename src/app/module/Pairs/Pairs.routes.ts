import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import PairsValidations from "./Pairs.validation";
import PairsController from "./Pairs.controller";


const PairsRouter = express.Router();



export default PairsRouter;