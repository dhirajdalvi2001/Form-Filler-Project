import mongoose from "mongoose";

export const mongoConnect = async () => {
  let dbUri = process.env.DB_URI;
  mongoose
    .connect(dbUri)
    .then(() => console.log("Connected to db"))
    .catch((e) => console.log(`Error Occured:\n${e}`));
};
