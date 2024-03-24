import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      maxlength: [30, "name should be 30 character "],
      minlength: [3, "name should be minimum 3 characters"],
    },
    email: {
      type: String,
      required: [true, "Email id is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "password should be minimum 6 characters"],
      set: function (v: string) {
        if (this.isNew || this.isModified("password")) {
          return bcrypt.hashSync(v, bcrypt.genSaltSync(10));
        }
        return v;
      },
    },
    image: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      // required: true,
    },
    phone: {
      type: String,
      // required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
