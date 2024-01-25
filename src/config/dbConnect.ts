import mongoose from "mongoose";

export default async function dbConnect() {
  await mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.error(err);
    });
}

