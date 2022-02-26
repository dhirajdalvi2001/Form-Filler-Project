import mongoose from "mongoose";

const mongoConnect = async () => {
  let dbUri = process.env.DB_URI;
  mongoose
    .connect(dbUri)
    .then(() => console.log("Connected"))
    .catch((e) => console.log(`Error Occured:\n${e}`));
};
