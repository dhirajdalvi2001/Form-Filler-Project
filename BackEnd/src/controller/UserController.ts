import { ResType } from "./../types";
import { Schema } from "mongoose";
import { User, UserModel } from "./../entity/User";
import { Request, Response } from "express";
import QueryString from "qs";

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

  let newUser = new UserModel(user);

  try {
    let savedUser = await newUser.save();
    // console.log(savedUser);
    returnedResponse = generateResponse(null, savedUser);
    return res.status(201).json(returnedResponse);
  } catch (e) {
    console.log(e);
    returnedResponse = generateResponse(
      "Internal Server Error failt to save user while creation",
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

    if (dbUser !== null) {
      returnedResponse = generateResponse("User does not exists", null);
      return res.status(404).json(returnedResponse);
    }

    if (dbUser.password !== user.password) {
      returnedResponse = generateResponse(
        "email or password maybe incorrect",
        null
      );
      return res.status(400).json(returnedResponse);
    }
    returnedResponse = generateResponse(null, dbUser);
    return res.status(200).json(returnedResponse);
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
