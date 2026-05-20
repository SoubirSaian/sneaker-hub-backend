import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { OrderItemModel, OrderModel } from "../Order/Order.model";
import { ProductModel } from "../Product/Product.model";
import { IOperationHour, IRetailer } from "./Retailer.interface";
import RetailerModel from "./Retailer.model";

const filterNearbyRetailers = async (query: Record<string, unknown>) => {
    const { latitude, longitude} = query;

    if (typeof latitude !== "number" || typeof longitude !== "number" ) {
        throw new ApiError(400, "Invalid query parameters. Latitude, longitude");
    }

    const maxDistance = 5000; // Set a default max distance (in meters) for nearby retailers

    const nearbyRetailers = await RetailerModel.find({
        isApproved: true, // Only include approved retailers    
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [longitude, latitude],
                },
                $maxDistance: maxDistance,
            },
        },
    });

    return nearbyRetailers;
};

//get inventory of a retailer
const getRetailerInventory = async (userDetails: IJwtPayload,query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const {inventoryType} = query


    const inventory = await ProductModel.find({ retailerId: profileId, availability: inventoryType }).sort({ createdAt: -1 }).lean();

    if(!inventory){
        throw new ApiError(404, "Retailer not found.");
    }

    return inventory;

}

const getALlOrdersOfRetailer = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const {orderStatus} = query;

    const orders = await OrderItemModel.find({ retailerId: profileId, status: orderStatus }).sort({ createdAt: -1 }).lean();

    if(!orders){
        throw new ApiError(404, "No orders found for this retailer.");
    }

    return orders;
}

const retailerChangeOrderStatusService = async (userDetails: IJwtPayload, payload: Record<string, unknown>) => {
    const {profileId} = userDetails;
}

//update retailer operation hours
const toggleOperationHour = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const { day } = query;


    // const retailer = await RetailerModel.findById(profileId);

    // if (!retailer) {
    //     throw new ApiError(404, "Retailer not found to toggle operation hour.");
    // }

    // const operationDay = retailer.operationHour.find( item => item?.day === day);

    // if (!operationDay) {
    //     throw new ApiError(404, "Day not found.");
    // }

    // // TOGGLE
    // operationDay.isOpen = !operationDay.isOpen;

    // await retailer.save();

    const retailer = await RetailerModel.findOne({
        _id: profileId,
        "operationHour.day": day
    });

    const operationHour = retailer.operationHour.find( (item:IOperationHour) => item?.day === day);

    operationHour.isOpen = !operationHour.isOpen;

    await retailer.save();

    return null;
};

//dashboard

const getAllRetailerStoreService = async (query: Record<string,unknown>) => {

    let {page, searchText, approvalStatus} = query;

    let filter: any= {};

    //if approvalStatus is true
    if(approvalStatus){
        filter.isApproved = approvalStatus === "true" ? true : false;
    }

    //if searchText is true
    if(searchText){
        const users = await RetailerModel.find({
            ...filter,
             $or: [
                    { name: { $regex: searchText, $options: "i" } },
                    { email: { $regex: searchText, $options: "i" } },
                ]
        }) .populate({path: "auth", select:"isBlocked"}).lean();

        return users;

    }


    //pagination
    page = parseInt(page as any) || 1;
    let limit = 10;
    let skip = (page as number - 1) * limit;


    const [users, totalUser] = await Promise.all([

        RetailerModel.find(filter)
            .populate({path: "auth", select:"isBlocked"})
                .sort({createdAt: -1})
                    .skip(skip).limit(limit)
                        .lean(),
    
        RetailerModel.countDocuments({})
    ])

    const totalPage = Math.ceil(totalUser / limit);

    return {
        meta:{page,limit: 10,total: totalUser, totalPage},
        stores: users
    };
}

const approveRetailerService = async (id: string) => {

    const approvedRetailer = await RetailerModel.findById(id).select("name isApproved");

    if(!approvedRetailer){
        throw new ApiError(404, "Retailer not found to approve.");
    }

    approvedRetailer.isApproved = !approvedRetailer.isApproved;

    await approvedRetailer.save();

    let msg = approvedRetailer.isApproved ? "approved" : "disapproved";

    //send notification to retailer about approval status
    // await NotificationModel.create({
    //     user: approvedRetailer._id,
    //     title: `Your store has been ${msg}`,
    //     description: `Your store "${approvedRetailer.name}" has been ${msg} by admin. You can now ${approvedRetailer.isApproved ? "start listing your products and receive orders." : "not receive orders until it's approved again."}`,
    //     type: ENUM_NOTIFICATION_TYPE.RETAILER_APPROVAL_STATUS,
    //     referenceId: approvedRetailer._id.toString(),
    //     referenceModel: "Retailer"
    // });

    return msg;
}

const RetailerServices = { 
    filterNearbyRetailers,
    getRetailerInventory,
    getALlOrdersOfRetailer,
    toggleOperationHour
};


export default RetailerServices;