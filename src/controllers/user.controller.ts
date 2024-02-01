import { responseError } from "response-manager";
import { getUserByIdService, getUserService } from "../services/user.services";
// get all users
export const getUsersController = async (req, res) => {
  try {
    await getUserService(res, req.params);
  } catch (error: any) {
    responseError(res, 400, error.message, "error  getting users");
  }
};
// get User by id
export const getUserByIdController = async (req, res) => {
  try {
    await getUserByIdService(res, req.params.id);
  } catch (error: any) {
    responseError(res, 400, error.message, "error  getting users");
  }
};
