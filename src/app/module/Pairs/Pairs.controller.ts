import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import PairsServices from "./Pairs.service";

const addNewPairsController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await PairsServices.addNewPairsToReseller(user, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "New pairs added successfully.",
        data: result,
    });
});

const getAllListedPairsController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await PairsServices.getMyListedPairs(user, req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Listed pairs retrieved successfully.",
        data: result,
    });
});

const getAllpairRequestController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await PairsServices.getAllPairRequestsForReseller(user, req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Pair requests retrieved successfully.",
        data: result,
    });
});

const acceptPairRequestController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await PairsServices.acceptPairRequest(user, req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Pair request accepted successfully.",
        data: result,
    });
});

const rejectPairRequestController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await PairsServices.rejectPairRequest(user, req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const proposeCounterOfferToPairRequestController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await PairsServices.proposeCounterOfferToPairRequest(user, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Counter offer proposed successfully.",
        data: result,
    });
});

const PairsController = { 
    addNewPairsController,
    getAllListedPairsController,
    getAllpairRequestController,
    acceptPairRequestController,
    rejectPairRequestController,
    proposeCounterOfferToPairRequestController
 };

export default PairsController;