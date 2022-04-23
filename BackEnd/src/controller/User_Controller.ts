import { UserData } from "./../entity/UserData";
import { findUser } from "./UserController";
import { FormDataModel } from "../entity/Forms/FormData";
import {
  createAccessToken,
  createRefreshToken,
  verifyAccessToken,
} from "./../utils";
import { ResType } from "./../types";
import { Schema } from "mongoose";
import { User, UserModel, UserAllData } from "../entity/User";
import { Request, Response } from "express";
import QueryString from "qs";
import { sendRefreshToken } from "../utils";
import argon2 from "argon2";
import { UserParentDataModel } from "../entity/UserParentData";
import express from "express";

const UserRouter = express.Router();

const generateResponse = (err: string, data: any): ResType => {
  return {
    error: err,
    data,
  };
};

const checkToken = (req: Request): Boolean => {
  if (!req.body.token) {
    return false;
  }

  if (!verifyAccessToken(req.body.token)) {
    return false;
  }
  return true;
};

UserRouter.post("/login", async (req: Request, res: Response) => {
  let user: User = req.body.user;
  let returnedResponse: ResType;

  try {
    let dbUser = await UserModel.findOne({ email: user.email });
    // console.log(dbUser);
    if (dbUser === null) {
      returnedResponse = generateResponse("User does not exists", null);
      return res.status(400).json(returnedResponse);
    }

    let passChek = await argon2.verify(dbUser.password, user.password);
    if (!passChek) {
      returnedResponse = generateResponse(
        "email or password maybe incorrect",
        null
      );
      return res.status(400).json(returnedResponse);
    }
    dbUser.password = "";
    returnedResponse = generateResponse(null, {
      dbUser,
      token: createAccessToken(dbUser.id),
    });
    sendRefreshToken(res, createRefreshToken(dbUser.id));
    return res.status(200).json(returnedResponse);
    // .send({ token: createAccessToken(dbUser.id) });
  } catch (e) {
    console.log(e);
    returnedResponse = generateResponse("Faild to find user", null);
    return res.status(500).json(returnedResponse);
  }
});

UserRouter.post("/add", async (req: Request, res: Response) => {
  let user: User = req.body.user;
  let returnedResponse: ResType;

  if (user.email === "" || user.password === "") {
    returnedResponse = generateResponse("User or Password maybe wrong", null);
    return res.status(500).json(returnedResponse);
  }

  user.password = await argon2.hash(user.password);

  try {
    let checkUser = await UserModel.findOne({ email: user.email });

    if (checkUser !== null) {
      returnedResponse = generateResponse("User already exists", null);
      return res.status(406).json(returnedResponse);
    }
  } catch (e) {
    console.log(e);
    returnedResponse = generateResponse(
      "Server Error Faild User creation ",
      null
    );
    return res.status(500).json(returnedResponse);
  }
  let cparentData = new UserParentDataModel();
  cparentData = await cparentData.save();
  user.parentData = cparentData._id as any;

  let formData = new FormDataModel();
  formData = await formData.save();
  user.formData = formData._id as any;

  let newUser = new UserModel(user);

  try {
    let savedUser = await newUser.save();
    // console.log(savedUser);
    savedUser.password = "";
    returnedResponse = generateResponse(null, savedUser);
    return res.status(201).json(returnedResponse);
  } catch (e) {
    console.log(e);
    returnedResponse = generateResponse(
      "Internal Server Error failed to save user while creation",
      null
    );
    return res.status(500).json(returnedResponse);
  }
});

UserRouter.delete("/delete", async (req: Request, res: Response) => {
  let returnedResponse: ResType;

  if (!checkToken(req)) {
    returnedResponse = generateResponse(
      "Token wrong or does not exists",
      false
    );
    return res.status(200).json(returnedResponse);
  }

  let { userId }: any = verifyAccessToken(req.body.token);

  try {
    let result = await UserModel.deleteOne({ _id: userId });
    // console.log(result);
    if (result.deletedCount === 1) {
      returnedResponse = generateResponse(null, true);
    } else {
      returnedResponse = generateResponse("User does not exists", false);
    }
    return res.status(200).json(returnedResponse);
  } catch (e) {
    console.log(e);
    returnedResponse = generateResponse("Error While Deletion", null);
    return res.status(500).json(returnedResponse);
  }
});
//--------------------
UserRouter.put("/update", async (req: Request, res: Response) => {
  let returnedResponse: ResType;

  if (!checkToken(req)) {
    return res.status(406).json(generateResponse("invalid token", null));
  }
  let userData: UserData = req.body.userData;

  let { userId }: any = verifyAccessToken(req.body.token);

  let user = await UserModel.findById(userId);

  if (!user) {
    returnedResponse = generateResponse("User not found", null);
    return res.status(404).json(returnedResponse);
  }

  try {
    let updateUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { userData },
      {
        upsert: true,
      }
    );

    if (updateUser) {
      updateUser.password = "";
      returnedResponse = generateResponse(null, updateUser);
      return res.status(200).json(returnedResponse);
      // console.log(s);
    }
  } catch (e) {
    console.log(e);
    returnedResponse = generateResponse("Error while updating", null);
    return res.status(406).json(returnedResponse);
  }
});
//--------------------

UserRouter.put("/changepass", async (req: Request, res: Response) => {
  let returnedResponse: ResType;

  if (!checkToken(req)) {
    return res.status(406).json(generateResponse("invalid token", null));
  }
  let oldPass = req.body.oldpass;
  let newPass = req.body.newpass;

  let { userId }: any = verifyAccessToken(req.body.token);

  let user = await UserModel.findById(userId);

  let passCheck = await argon2.verify(user.password, oldPass);

  if (!passCheck) {
    return res
      .status(400)
      .json(generateResponse("password do not match", null));
  }

  try {
    newPass = await argon2.hash(newPass);
    let updateUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { password: newPass },
      {
        upsert: true,
      }
    );

    if (updateUser) {
      updateUser.password = "";
      returnedResponse = generateResponse(null, updateUser);
      return res.status(200).json(returnedResponse);
      // console.log(s);
    }
    returnedResponse = generateResponse("User not found", null);
    return res.status(404).json(returnedResponse);
  } catch (e) {
    console.log(e);
    returnedResponse = generateResponse("Error while updating", null);
    return res.status(406).json(returnedResponse);
  }
});

UserRouter.get("/get", async (req: Request, res: Response) => {
  if (!checkToken(req)) {
    return res.json(generateResponse("Token invalid", null));
  }
  let token = req.body.token;
  let { userId }: any = verifyAccessToken(token);

  let user = await findUser(userId);

  if (user === null) {
    return res.json(generateResponse("User does not exists", null));
  }

  user.password = "";
  return res.json(generateResponse(null, user));
});

UserRouter.get("/getalldata", async (req: Request, res: Response) => {
  if (!checkToken(req)) {
    return res.json(generateResponse("Token invalid", null));
  }
  let token = req.body.token;
  let { userId }: any = verifyAccessToken(token);
  let user: UserAllData = { id: "", email: "" };

  let dbUser = await findUser(userId);
  if (user === null) {
    return res.json(generateResponse("User does not exists", null));
  }
  // console.log(dbUser);

  let parentData = await UserParentDataModel.findById(dbUser.parentData);
  let formData = await FormDataModel.findById(dbUser.formData);
  user.id = dbUser._id;
  user.email = dbUser.email;
  user.userData = dbUser.userData;
  user.parentData = parentData;
  user.formData = formData;

  return res.json(generateResponse(null, user));
});

export default UserRouter;
