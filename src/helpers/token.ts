import jwt from "jsonwebtoken";

export const createToken = async (data) => {
  const secret = process.env.JWT_SECRET;
  const token = await jwt.sign(data, secret, { expiresIn: "6d" });
  return token;
};

export const verifyToken = async () => {};
