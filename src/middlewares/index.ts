import { validationResult } from "express-validator";
import { responseError } from "response-manager";

export const runValidation = async (req, res, next) => {
  try {
    const err = await validationResult(req);
    if (!err.isEmpty()) {
      console.log(err);
      return responseError(res, 400, "failed", err.array[1]);
    }
    return next();
  } catch (error: any) {
    return next(error);
  }
};
