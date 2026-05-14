import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import ProductValidations from "./Product.validation";
import ProductController from "./Product.controller";


const ProductRouter = express.Router();



export default ProductRouter;