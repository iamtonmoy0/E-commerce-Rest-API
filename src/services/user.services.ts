import { responseError, responseSuccess } from "response-manager";
import User from "../models/user.model";

export const getUserServices = async (res, params) => {
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
