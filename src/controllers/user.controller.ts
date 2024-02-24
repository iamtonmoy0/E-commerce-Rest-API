import { responseError } from "response-manager";
import {
  getUserByIdService,
  getUsersService,
  registerUserService,
} from "../services/user.services";
// get all users
export const getUsersController = async (req, res) => {
  try {
    await getUsersService(res, req.params);
  } catch (error: any) {
    responseError(res, 400, error.message, error);
  }
};
// get User by id
export const getUserByIdController = async (req, res) => {
  try {
    await getUserByIdService(res, req.params.id);
  } catch (error: any) {
    responseError(res, 400, error.message, error);
  }
};
// delete user by id
export const removeUserByIdController = async (req, res) => {
  try {
    await getUserByIdService(res, req.params.id);
  } catch (error: any) {
    responseError(res, 400, error.message, error);
  }
};
// register user
export const registerUserController = async (req, res) => {
  try {
    await registerUserService(res, req.body);
  } catch (error) {
    responseError(res, 400, "failed", error.message);
  }
};
