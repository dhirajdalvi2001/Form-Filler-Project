import { mongoConnect } from "./db";
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  verifyRefreshToken,
} from "./utils";

import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
// import path
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:3000",
    // origin: "*",
    credentials: true,
    // allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    // exposedHeaders: ["*", "Authorization"],
  })
);

const PORT = process.env.PORT || 3000;

import { UserModel } from "./entity/User";
import { connect } from "mongoose";
import UserRouter from "./controller/UserController";
import FormRouter from "./controller/Forms";

(async () => {
  await mongoConnect();
  app.use(express.json());
  app.use(cookieParser());

  app.use("/form", FormRouter);
  app.use("/user", UserRouter);

  app.get("/refresh_token", (req, res) => {
    if (req.cookies.jid) {
      // console.log(req.cookies.jid);
      let tok: any = verifyRefreshToken(req.cookies.jid);
      if (!tok) {
        return res.json({ token: "" });
      } else {
        let id = tok.userId;

        try {
          let user = UserModel.findById(id);
          if (!user) {
            res.send({ token: "" });
          }
        } catch (e) {
          return res.json({ token: "" });
        }
        let refreshTok = createRefreshToken(id);
        let accessTok = createAccessToken(id);
        sendRefreshToken(res, refreshTok);
        return res.json({ token: accessTok });
      }
    }
    res.json({ token: "" });
  });

  app.listen(PORT, () => {
    console.log(`app running on http://127.0.0.1:${PORT}`);
  });
})();
