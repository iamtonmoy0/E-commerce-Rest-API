import { responseError, responseSuccess } from "response-manager";
import User from "../models/user.model";
import { createToken } from "../helpers/token";
// get all users
export const getUserService = async (res, params) => {
  const search = params.search || "";
  const limit = params.limit || 5;
  const page = params.page || 1;

  //   search reges
  const searchRegexExp = new RegExp(".*" + search + ".*", "i");
  //  filtering
  const filter = {
    isAdmin: {
      $ne: true,
      $or: [
        { name: { $regex: searchRegexExp } },
        { email: { $regex: searchRegexExp } },
        { phone: { $regex: searchRegexExp } },
      ],
    },
  };
  //   removing password from data
  const options = { password: 0 };
  // finding user
  const user = await User.find(filter, options)
    .limit(limit)
    .skip((page - 1) * limit);
  // counting all the documents
  const count = await User.find().countDocuments();
  //   if user does not exist
  if (!user) return responseError(res, 403, "failed", " User not exist!");
  const data = {
    totalPage: Math.ceil(count / limit),
    currentPage: page,
    previousPage: page - 1 > 0 ? page - 1 : null,
    nextPage: page + 1 < Math.ceil(count / limit) ? page + 1 : null,
    user,
  };

  return responseSuccess(res, 201, "success", data);
};
// *get single user by id
export const getUserByIdService = async (res, id) => {
  const options = { password: 0 };
  const user = await User.findById(id, options);
  if (!user) return responseError(res, 401, "failed", "user not exist");
  return responseSuccess(res, 200, "success", user);
};
// remove user by id
export const removeUserByIdService = async (res, id) => {
  const user = await User.findOneAndDelete({ _id: id });
  if (!user) return responseError(res, 401, "failed", "Error deleting user");
  return responseSuccess(res, 201, "success", "User deleted !");
};
// register user service
export const registerUserService = async (res, data) => {
  const { name, email, password, phone, address } = data;
  // checking if user exist in this email
  const isExist = await User.find({ email });
  if (isExist) {
    return responseError(res, 409, "conflict", "Email has been used!");
  }
  const createUser = await User.create({
    name,
    email,
    password,
    phone,
    address,
  });
  if (!createUser) {
    return responseError(res, 500, "server error", "Can't create new account");
  }
  return responseSuccess(res, 201, "success", "User Registered Successful");
};
