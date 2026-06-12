import { Router } from "express";
import authRouter from "../module/auth/auth.routes";
import userRouter from "../module/User/User.routes";
import BuyerRouter from "../module/Buyer/Buyer.routes";
import RetailerRouter from "../module/Retailer/Retailer.routes";
import EngagementRouter from "../module/Engagement/Engagement.routes";
import ResellerRouter from "../module/Reseller/Reseller.routes";
import ProductRouter from "../module/Product/Product.routes";
import CartRouter from "../module/Cart/Cart.routes";
import OrderRouter from "../module/Order/Order.routes";


const allRouter = Router();


const moduleRoutes = [
    {
        path: '/auth',
        router: authRouter,
    },
    {
        path: '/user',
        router: userRouter,
    },
    {
        path: '/buyer',
        router: BuyerRouter,
    },
    {
        path: '/retailer',
        router: RetailerRouter,
    },
    {
        path: '/engagement',
        router: EngagementRouter,
    },
    {
        path: '/reseller',
        router: ResellerRouter,
    },
    {
        path: '/product',
        router: ProductRouter,
    },
    {
        path: '/cart',
        router: CartRouter,
    },
    {
        path: '/order',
        router: OrderRouter,
    },
  
];

moduleRoutes.forEach((route) => allRouter.use(route.path, route.router));

export default allRouter;