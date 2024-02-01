import { responseError } from "response-manager";
import { getUserServices } from "../services/user.services";

export const getUsersController = async (req, res) => {
  try {
    await getUserServices(res, req.params);
  } catch (error: any) {
    responseError(res, 400, error.message, "error  getting users");
  }
};
