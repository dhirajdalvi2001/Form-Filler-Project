import { verifyAccessToken } from "./../utils";
import {
  CollegeFormData,
  CollegeFormDataModel,
} from "./../entity/Forms/CollegeFormData";
import { FormData, FormDataModel } from "./../entity/Forms/FormData";
import { UserData, UserDataModel } from "./../entity/UserData";
import express from "express";
import { verifyRefreshToken } from "../utils";
import { findUser } from "./UserController";

let FormRouter = express.Router();

FormRouter.use(async (req, res, next) => {
  let cookie = req.body.token;

  if (cookie === undefined) {
    return res.send("Error: Token does not exists");
  }
  if (!verifyAccessToken(cookie)) {
    return res.send("Error: Invalid Token");
  }

  next();
});

FormRouter.get("/collegeformdata", async (req, res) => {
  try {
    let { userId }: any = verifyAccessToken(req.body.token);
    let user = await findUser(userId);

    if (user.formData == null) {
      return res.send();
    }
  } catch (e) {
    // console.log(e);
    return res.send("Error: Something wrong happened");
  }
});

FormRouter.post("/collegeformdata", async (req, res) => {
  let collegeFormData: CollegeFormData = req.body.collegeFormData;
  let { userId }: any = verifyAccessToken(req.body.token);
  console.log(collegeFormData);
  try {
    let user = await findUser(userId);

    let formData = FormDataModel.findById(user.formData);

    let updatedData = await FormDataModel.findOneAndUpdate(
      { _id: user.formData.toString() },
      { collegeFormData },
      { upsert: true }
    );

    if (!updatedData) {
      return res.send("Error: faild to update");
    } else {
      res.json(updatedData);
    }
  } catch (e) {
    return res.send("Error: Something went wrong");
  }
});

export default FormRouter;
