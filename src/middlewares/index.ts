import { validationResult } from "express-validator";
import { responseError } from "response-manager";

export const runValidation = async (req, res, next) => {
  try {
    const err: any = await validationResult(req);
    if (!err.isEmpty()) {
      return responseError(res, 400, "failed", err);
    }
    return next();
  } catch (error: any) {
    return next(error);
  }
};
