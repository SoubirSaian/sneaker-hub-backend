import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { IReport } from "./Report.interface";
import ReportModel from "./Report.model";



const createNewReport = async (userDetails: IJwtPayload, payload: Partial<IReport>) => {

    const {profileId} = userDetails;

    const report = await ReportModel.create({
        buyerId:profileId,
        ...payload
    });

    if(!report){
        throw new ApiError(500,"Failed to add new report.");
    }

    return report;
};

const getAllReport = async () => {

    
};


const ReportServices = { 
    createNewReport,
 };

export default ReportServices;