import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import deleteOldFile from "../../../utilities/deleteFile";
import { IProduct } from "./Product.interface";
import {ProductModel, RecentSearchModel} from "./Product.model";


const addProductService = async (
  userDetails: IJwtPayload,
  files: Express.Multer.File[],
   productData: Partial<IProduct>
  ) => {
    const {profileId} = userDetails;

    if (!files || files.length === 0) {
        throw new ApiError(400, "At least one product image is required.");
    }

    const imageUrls = files.map(file => {
        // Assuming you have a function to upload the file and get its URL
        return `uploads/product-image/${file.filename}`; // Replace with actual URL generation logic
    });

    // productData.images = imageUrls;
    
    const newProduct = new ProductModel({
      retailerId: profileId,
      images: imageUrls,
        ...productData,
    }); 

    await newProduct.save();

    if(!newProduct){
        throw new ApiError(500,"Failed to add product.");
    }

    return newProduct;
}

const editProductService = async (
    userDetails: IJwtPayload,
    productId: string,
    files: Express.Multer.File[],
    productData: Partial<IProduct>
) => {
    const {profileId} = userDetails;

    const product = await ProductModel.findOne({ _id: productId, retailerId: profileId });

    if (!product) {
        throw new ApiError(404, "Product not found or you do not have permission to edit this product.");
    }

    const existingImages = product.images || [];

    if (files && files.length > 0) {
        const imageUrls = files.map(file => {
            return `uploads/product-image/${file.filename}`;
        });
        product.images = imageUrls;
    }

    Object.assign(product, productData);

    await product.save();

    if(!product){
        throw new ApiError(500,"Failed to edit product.");
    }

    //delete old images from server if new images are uploaded
    if (files && files.length > 0 && existingImages.length > 0) {
        existingImages.forEach( (imageUrl:any) => {
            // Implement your logic to delete the image file from the server
           deleteOldFile(imageUrl);
        });
    }

    return product;
}

const deleteProductService = async (userDetails: IJwtPayload, productId: string) => {
    const {profileId} = userDetails;

    const deleted = await ProductModel.findOneAndDelete({ _id: productId, retailerId: profileId });

    if (!deleted) {
        throw new ApiError(404, "Product not found or you do not have permission to delete this product.");
    }

    return null;
}

// product-search.service.ts

const searchProductsService = async (userDetails: IJwtPayload, query: Record<string,unknown>) => {
    const {profileId} = userDetails;
    const {searchtext} = query;

    /*
     |--------------------------------------------------------------------------
     | 2. SEARCH PRODUCTS
     |--------------------------------------------------------------------------
     */

    const products = await ProductModel.find({
      $or: [
        {
          name: {
            $regex: searchtext,
            $options: "i",
          },
        },
        {
          brand: {
            $regex: searchtext,
            $options: "i",
          },
        },
      ],
    })
      .select("_id name brand price image totalSearchCount")
      .limit(10)
      .lean();

       /*
     |--------------------------------------------------------------------------
     | 3. INCREASE totalSearchCount
     |--------------------------------------------------------------------------
     | Increment count for searched products
     */

    if (products.length > 0) {
      const productIds = products.map((product) => product._id);

      await ProductModel.updateMany(
        {
          _id: {
            $in: productIds,
          },
        },
        {
          $inc: {
            totalSearchCount: 1,
          },
        }
      );
    }

      const recent = await RecentSearchModel.findOneAndUpdate(
      {
        buyerId: profileId,
        keyword: searchtext,
      },
      {
        searchedAt: new Date(),
      },
      {
        upsert: true,
        new: true,
      }
    );

    

    if(!recent){
        const newRecentSearch = await RecentSearchModel.create(
            {
                buyerId: profileId,
                keyword: searchtext,
                searchedAt: new Date(),
            }
        );

        if(!newRecentSearch){
            throw new ApiError(500,"Failed to save recent search");
        }
    }


    return products;
 
};

const getTrendingNowAndRecentSearchesSevice = async (userDetails: IJwtPayload) => {
    const {profileId} = userDetails;


    const recentSearches = await RecentSearchModel.find({
      buyerId: profileId,
    })
      .sort({ searchedAt: -1 })
      .limit(10)
      .select("keyword")
      .lean();

    /*
     |--------------------------------------------------------------------------
     | 5. GET TRENDING PRODUCTS
     |--------------------------------------------------------------------------
     */

    const trendingProducts = await ProductModel.find({})
      .sort({ totalSearchCount: -1 })
      .limit(10)
      .select("_id name brand price image totalSearchCount")
      .lean();

    /*
     |--------------------------------------------------------------------------
     | 6. RETURN RESPONSE
     |--------------------------------------------------------------------------
     */

    return {
      recentSearches,
      trendingProducts,
    };
 
};



const getProductDetailsByIdService = async (productId: string) => {

    const product = await ProductModel.findById(productId);

    if(!product){
        throw new ApiError(500,"Failed to get details of the product");
    }

    product.totalSearchCount += 1;

    await product.save();

    return product;
}

const deleteRecentSearchService = async (userDetails: IJwtPayload, recentSearchId: string) => {

    const {profileId} = userDetails;

    const deleted = await RecentSearchModel.findOneAndDelete({
        _id: recentSearchId,
        buyerId: profileId,
    });

    if(!deleted){
        throw new ApiError(500,"Failed to delete recent search");
    }

    return null;
}

const ProductServices = { 
    addProductService,
    searchProductsService,
    getTrendingNowAndRecentSearchesSevice,
    getProductDetailsByIdService,
    deleteRecentSearchService
 };

export default ProductServices;