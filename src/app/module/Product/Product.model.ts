import { model, Schema, models } from "mongoose";
import { IProduct } from "./Product.interface";

const ProductSchema = new Schema<IProduct>({
    retailerId: { type: Schema.Types.ObjectId, required: true, ref: "Retailer" },
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    image: { type: String, default: '' },
    specifications: { type: Object, default: {} },
    brand: { type: String, default: "" },
    color: { type: String, default: "" },
    styleCode: { type: String, default: "" },
    availability: { type: String, default: "In Stock" },
   
}, { timestamps: true });

const ProductModel = models.Product || model<IProduct>("Product", ProductSchema);

export default ProductModel;