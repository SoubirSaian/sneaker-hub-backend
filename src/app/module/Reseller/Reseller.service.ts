import ApiError from "../../../error/ApiError";
import notification from "../../../helper/notification";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { ENUM_NOTIFICATION_TYPE, ENUM_PAIR_REQUEST_STATUS, ENUM_USER_Type } from "../../../utilities/enum";
import { IPairRequest } from "../Pairs/Pairs.interface";
import { PairRequestModel, PairsModel } from "../Pairs/Pairs.model";
import { IReseller } from "./Reseller.interface";
import ResellerModel from "./Reseller.model";

const resellerHomePageStatDataService = async (userDetails: IJwtPayload) => {
    const {profileId} = userDetails;

    const activeListingsCount = await PairsModel.countDocuments({resellerId: profileId});
    // const totalListingsCount = await PairsModel.countDocuments({resellerId: profileId});

    const totalStoreRequestsCount = await PairRequestModel.countDocuments({
        resellerId: profileId,
        status: {$in: [ENUM_PAIR_REQUEST_STATUS.PENDING, ENUM_PAIR_REQUEST_STATUS.ACCEPTED]}
    });

    const totalActiveRequestsCount = await PairRequestModel.countDocuments({
        resellerId: profileId,
        status: ENUM_PAIR_REQUEST_STATUS.ACCEPTED
    });

    return { 
        activeListingsCount, 
        // totalListingsCount 
    };
};

//make an offer to reseller's pair request
const proposeAnOfferToResellerForPairRequest = async (userDetails: IJwtPayload, payload: any) => {
    const {profileId} = userDetails;

    const {resellerId,pairId, offerPrice, note, validityHours} = payload;

    const newpair = await PairRequestModel.create({
        resellerId,
        retailerId: profileId,
        pairId,
        note,
        offerHistory: [
            {
                offeredBy: ENUM_USER_Type.RETAILER,
                price: offerPrice || 0,
                // note: payload.note || ""
            }
        ],
        validity: {
            validForHours: validityHours,
            from: new Date(),
            to: new Date(Date.now() + validityHours * 60 * 60 * 1000)
        }
    });

    if(!newpair) {
        throw new ApiError(500, "Failed to create pair request.");
    }

    //send notification to reseller about new offer (implementation pending)
    await notification.createNotification({
        toId: resellerId,
        toModel: "Reseller",
        title: "New Offer Received",
        description: `You have received a new offer for your pair listing. Offered Price: $${offerPrice}`,
        type: ENUM_NOTIFICATION_TYPE.NEW_PAIR_REQUEST,
        referenceId: newpair._id.toString(),
        referenceModel: "PairRequest"
    });

    return newpair;
   
}

//dashboard

const getAllResellerService = async (query: Record<string,unknown>) => {

    let {page, searchText} = query;

    //if searchText is true
    if(searchText){
        const users = await ResellerModel.find({
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

        ResellerModel.find({})
            .populate({path: "auth", select:"isBlocked"})
                .sort({createdAt: -1})
                    .skip(skip).limit(limit)
                        .lean(),
    
        ResellerModel.countDocuments({})
    ])

    const totalPage = Math.ceil(totalUser / limit);

    return {
        meta:{page,limit: 10,total: totalUser, totalPage},
        reseller: users
    };
}

const approveResellerService = async (id: string) => {

    const approvedReseller = await ResellerModel.findById(id).select("name isApproved");

    if(!approvedReseller){
        throw new ApiError(404,"Reseller not found.");
    }

    approvedReseller.isApproved = true;
    await approvedReseller.save();

    let msg = approvedReseller.isApproved ? "approved" : "disapproved";

    //send notification to reseller about approval (implementation pending)
    // await notification.createNotification({
    //     toId: id,
    //     toModel: "Reseller",
    //     title: "Account Approved",
    //     description: `Congratulations! Your reseller account has been approved. You can now start listing your pairs and receiving offers from retailers.`,
    //     type: ENUM_NOTIFICATION_TYPE.ACCOUNT_APPROVAL,
    //     referenceId: id,
    //     referenceModel: "Reseller"
    // });

    return msg;
    
}

const ResellerServices = { 
    resellerHomePageStatDataService,
    proposeAnOfferToResellerForPairRequest
};


export default ResellerServices;