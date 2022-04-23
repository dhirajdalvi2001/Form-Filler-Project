import { User } from "./entity/User";
import { verify, sign } from "jsonwebtoken";
import { Response } from "express";

export const PORJECT_ROOT = __dirname;

export const createAccessToken = (id: string): string => {
  return sign({ userId: id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
  });
};

export const createRefreshToken = (id: string): string => {
  return sign({ userId: id }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "7d",
  });
};

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("jid", token, {
    httpOnly: true,
    path: "/refresh_token",
  });
};

export const verifyAccessToken = (tok: string) => {
  try {
    let s = verify(tok, process.env.ACCESS_TOKEN_SECRET);
    return s;
  } catch (e) {
    return false;
  }
};
export const verifyRefreshToken = (tok: string) => {
  try {
    let t = verify(tok, process.env.REFRESH_TOKEN_SECRET);
    return t;
  } catch (e) {
    return false;
  }
};
