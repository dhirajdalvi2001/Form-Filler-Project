import { generateResponse } from "./../../utils";
import {
  UserParentData,
  UserParentDataModel,
} from "./../../entity/UserParentData";
import { verifyAccessToken } from "../../utils";
import express from "express";
import { findUser } from "../UserUtils";

let ParentDataRouter = express.Router();

ParentDataRouter.use(async (req, res, next) => {
  let cookie = req.body.token;

  if (cookie === undefined) {
    return res.json(generateResponse("Token does not exists", null));
  }
  if (!verifyAccessToken(cookie)) {
    return res.json(generateResponse("Invalid Token", null));
  }

  next();
});

ParentDataRouter.post("/parentdata", async (req, res) => {
  try {
    let { userId }: any = verifyAccessToken(req.body.token);
    let user = await findUser(userId);
    if (user.formData == null) {
      return res.json(generateResponse("user does not exists", null));
    }

    let formData = await UserParentDataModel.findById(user.parentData);
    // console.log(formData);
    return res.json(generateResponse(null, formData));
  } catch (e) {
    // console.log(e);
    return res.json(generateResponse("Something wrong happened", null));
  }
});

ParentDataRouter.put("/parentdata", async (req, res) => {
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
      return res.json(generateResponse("faild to update", null));
    } else {
      res.json(generateResponse(null, updatedData));
    }
  } catch (e) {
    return res.json(generateResponse("Something went wrong", null));
  }
});

export default ParentDataRouter;
