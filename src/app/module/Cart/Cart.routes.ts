import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import CartValidations from "./Cart.validation";
import CartController from "./Cart.controller";


const CartRouter = express.Router();



export default CartRouter;