import { FormDataModel } from "../entity/Forms/FormData";
import { createAccessToken, createRefreshToken } from "./../utils";
import { ResType } from "./../types";
import { Schema } from "mongoose";
import { User, UserModel } from "./../entity/User";
import { Request, Response } from "express";
import QueryString from "qs";
import { sendRefreshToken } from "../utils";
import argon2 from "argon2";
import { UserParentDataModel } from "../entity/UserParentData";

interface CParams {
  id: string;
}

type CReq = Request<
  {} & CParams,
  any,
  any,
  QueryString.ParsedQs,
  Record<string, any>
>;

type CRes = Response<any, Record<string, any>>;

const generateResponse = (err: string, data: any): ResType => {
  return {
    error: err,
    data,
  };
};

export const addUser = async (req: Request, res: Response) => {
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
      "Server Error Faild to find User while User creation ",
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
};

export const deleteUser = async (req: Request, res: Response) => {
  let userId = req.body.id;
  console.log(req.body);
  let returnedResponse: ResType;
  // console.log(userId);

  if (!userId) {
    returnedResponse = generateResponse("Id Not Provided for deletion", null);
    return res.status(406).json(returnedResponse);
  }

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
};

export const userLogIn = async (req: Request, res: Response) => {
  let user: User = req.body.user;
  let returnedResponse: ResType;

  try {
    let dbUser = await UserModel.findOne({ email: user.email });
    console.log(dbUser);
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
};

export const updateUser = async (req: Request, res: Response) => {
  console.log(req.body);
  let reqUser = req.body.user;
  console.log("here");
  console.log(reqUser);
  console.log("done");
  let newUser = {
    password: reqUser.password,
  };
  let userId = req.body.id;
  let returnedResponse: ResType;

  if (!userId) {
    returnedResponse = generateResponse("Id Not Provided for deletion", null);
    return res.status(406).json(returnedResponse);
  }

  try {
    let updateUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      newUser,
      {
        upsert: true,
      }
    );

    if (updateUser) {
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
};

/////?

export const findUser = async (userInfo: string): Promise<User | null> => {
  let inputType = "";
  if (userInfo.includes("@")) {
    inputType = "email";
  } else {
    inputType = "id";
  }
  let user = null;
  try {
    if (inputType === "email") {
      user = await UserModel.find({ email: userInfo });
    } else {
      user = await UserModel.findById(userInfo);
    }
    if (user && user.length === 0) {
      user = null;
    }
  } catch (e) {
    throw e;
  }
  return user;
};
