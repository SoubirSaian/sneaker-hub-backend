import { model, Schema, models } from "mongoose";
import { IProduct, IRecentSearch } from "./Product.interface";
import { ENUM_PRODUCT_AVAILABILITY } from "../../../utilities/enum";
import { getAvailability } from "../../middlewares/mongooseMiddleware";

//Product schema
const ProductSchema = new Schema<IProduct>({
    retailerId: { type: Schema.Types.ObjectId, required: true, ref: "Retailer" },
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    images: { type: [String], default: [] },
    variant: [{ type: Object, default: {} }],
    brand: { type: String, default: "" },
    color: { type: String, default: "" },
    styleCode: { type: String, default: "" },
    availability: { type: String, enum: Object.values(ENUM_PRODUCT_AVAILABILITY), default: ENUM_PRODUCT_AVAILABILITY.ACTIVE },
    totalSearchCount: { type: Number, default: 0 },
}, { timestamps: true });

// Pre-save middleware to set availability based on stock
ProductSchema.pre("save", function (next) {
    this.availability = getAvailability(this.variant);
    next();
});


//recent search schema
const RecentSearchSchema = new Schema<IRecentSearch>(
  {
    buyerId: {
      type: String,
      required: true,
      index: true,
    },

    keyword: {
      type: String,
      required: true,
    },

    searchedAt: {
      type: Date,
      default: Date.now,
    },
  },
//   {
//     timestamps: true,
//   }
);


const ProductModel = models.Product || model<IProduct>("Product", ProductSchema);

const RecentSearchModel = models.RecentSearch || model<IRecentSearch>("RecentSearch", RecentSearchSchema);

export { ProductModel, RecentSearchModel };

// export  ProductModel;