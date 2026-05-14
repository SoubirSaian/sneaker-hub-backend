import ApiError from "../../../error/ApiError";
import { IRetailer } from "./Retailer.interface";
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

const RetailerServices = { 
    filterNearbyRetailers
};

export default RetailerServices;