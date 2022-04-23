import { UserAllData } from "./../../entity/User";
import { verifyAccessToken, PORJECT_ROOT } from "../../utils";
import {
  CollegeFormData,
  CollegeFormDataModel,
} from "../../entity/Forms/CollegeFormData";
import { FormData, FormDataModel } from "../../entity/Forms/FormData";
import { UserData, UserDataModel } from "../../entity/UserData";
import express from "express";
import { verifyRefreshToken } from "../../utils";
import { findUser } from "../UserController";

let CollegeDataFormRouter = express.Router();

CollegeDataFormRouter.get("/collegeform", (req, res) => {
  res.sendFile("CollegeRegForm.pdf", { root: PORJECT_ROOT });
});

CollegeDataFormRouter.use(async (req, res, next) => {
  let cookie = req.body.token;

  if (cookie === undefined) {
    return res.send("Error: Token does not exists");
  }
  if (!verifyAccessToken(cookie)) {
    return res.send("Error: Invalid Token");
  }

  next();
});

CollegeDataFormRouter.get("/collegeformdata", async (req, res) => {
  try {
    let { userId }: any = verifyAccessToken(req.body.token);
    let user = await findUser(userId);
    let userDataToSend: UserAllData;
    if (user.formData == null) {
      return res.send("Error: user does not exists");
    }

    let formData = await FormDataModel.findById(user.formData);

    return res.json(formData);
  } catch (e) {
    // console.log(e);
    return res.send("Error: Something wrong happened");
  }
});

CollegeDataFormRouter.post("/collegeformdata", async (req, res) => {
  let collegeFormData: CollegeFormData = req.body.collegeFormData;
  let { userId }: any = verifyAccessToken(req.body.token);
  // console.log(collegeFormData);
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

export default CollegeDataFormRouter;
