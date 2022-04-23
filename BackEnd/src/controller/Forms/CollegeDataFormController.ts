import { verifyAccessToken, PORJECT_ROOT, generateResponse } from "../../utils";
import { CollegeFormData } from "../../entity/Forms/CollegeFormData";
import { FormDataModel } from "../../entity/Forms/FormData";
import express from "express";
import { findUser } from "../UserUtils";

let CollegeDataFormRouter = express.Router();

CollegeDataFormRouter.get("/collegeform", (req, res) => {
  res.sendFile("CollegeRegForm.pdf", { root: PORJECT_ROOT });
});

CollegeDataFormRouter.use(async (req, res, next) => {
  let cookie = req.body.token;

  if (cookie === undefined) {
    return res.json(generateResponse("Token does not exists", null));
  }
  if (!verifyAccessToken(cookie)) {
    return res.json(generateResponse("Invalid Token", null));
  }

  next();
});

CollegeDataFormRouter.get("/collegeformdata", async (req, res) => {
  try {
    let { userId }: any = verifyAccessToken(req.body.token);
    let user = await findUser(userId);
    if (user.formData == null) {
      return res.json(generateResponse("user does not exists", null));
    }

    let formData = await FormDataModel.findById(user.formData);

    return res.json(generateResponse(null, formData));
  } catch (e) {
    // console.log(e);
    return res.json(generateResponse("Something wrong happened", null));
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
      return res.json(generateResponse("faild to update", null));
    } else {
      res.json(generateResponse(null, updatedData));
    }
  } catch (e) {
    return res.json(generateResponse("Something went wrong", null));
  }
});

export default CollegeDataFormRouter;
