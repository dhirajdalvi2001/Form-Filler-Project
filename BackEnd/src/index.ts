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
    origin: "http://localhost:3000",
  })
);

const PORT = process.env.PORT || 3000;

import { UserModel } from "./entity/User";
import { connect } from "mongoose";
import UserRouter from "./controller/UserController";
import FormRouter from "./controller/Forms";

(async () => {
  // let con = await connect("mongodb://127.0.0.1:5000/newtest");
  await mongoConnect();
  app.use(express.json());
  app.use(cookieParser());

  app.use("/form", FormRouter);
  app.use("/user", UserRouter);

  app.get("/refresh_token", (req, res) => {
    if (req.cookies.jid) {
      let tok: any = verifyRefreshToken(req.cookies.jid);
      if (!tok) {
        res.send({ token: null });
        return;
      } else {
        let id = tok.userId;

        try {
          let user = UserModel.findById(id);
          if (!user) {
            res.send({ token: null });
          }
        } catch (e) {
          res.send({ token: null });
          return;
        }
        let refreshTok = createRefreshToken(id);
        let accessTok = createAccessToken(id);
        sendRefreshToken(res, refreshTok);
        res.send({ token: accessTok });
        return;
      }
    }
    res.send("Not allowed");
  });

  app.listen(PORT, () => {
    console.log(`app running on http://127.0.0.1:${PORT}`);
  });
})();
