import {
  UserParentData,
  UserParentDataModel,
} from "./../../entity/UserParentData";
import { UserAllData } from "../../entity/User";
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

let ParentDataRouter = express.Router();

// CollegeDataFormRouter.get("/parentdata", (req, res) => {
//   res.sendFile("CollegeRegForm.pdf", { root: PORJECT_ROOT });
// });

ParentDataRouter.use(async (req, res, next) => {
  let cookie = req.body.token;

  if (cookie === undefined) {
    return res.send("Error: Token does not exists");
  }
  if (!verifyAccessToken(cookie)) {
    return res.send("Error: Invalid Token");
  }

  next();
});

ParentDataRouter.get("/parentdata", async (req, res) => {
  try {
    let { userId }: any = verifyAccessToken(req.body.token);
    let user = await findUser(userId);
    if (user.formData == null) {
      return res.send("Error: user does not exists");
    }

    let formData = await UserParentDataModel.findById(user.parentData);
    // console.log(formData);
    return res.json(formData);
  } catch (e) {
    // console.log(e);
    return res.send("Error: Something wrong happened");
  }
});

ParentDataRouter.post("/parentdata", async (req, res) => {
  let parentData: UserParentData = req.body.parentData;
  let { userId }: any = verifyAccessToken(req.body.token);
  // console.log(collegeFormData);
  try {
    // console.log(parentData);
    let user = await findUser(userId);

    // let formData = FormDataModel.findById(user.parentData);

    let updatedData = await UserParentDataModel.findOneAndUpdate(
      { _id: user.parentData.toString() },
      parentData,
      { upsert: true }
    );
    // console.log(updatedData);

    if (!updatedData) {
      return res.send("Error: faild to update");
    } else {
      res.json(updatedData);
    }
  } catch (e) {
    return res.send("Error: Something went wrong");
  }
});

export default ParentDataRouter;
