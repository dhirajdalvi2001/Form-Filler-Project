import {
  JsonWebTokenError,
  sign,
  TokenExpiredError,
  verify,
} from "jsonwebtoken";
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "./utils";
import {
  addUser,
  deleteUser,
  updateUser,
  userLogIn,
  findUser,
} from "./controller/UserController";
import { UserData, UserDataModel } from "./entity/UserData";
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
import { resolve } from "url";
import CollegeDataFormRouter from "./controller/Forms/CollegeDataFormController";
import UserRouter from "./controller/User_Controller";
import FormRouter from "./controller/Forms";

(async () => {
  let con = await connect("mongodb://127.0.0.1:5000/newtest");

  let users = await UserModel.find({});
  // let { _id, email, password, userData } = users[2];
  // console.log(`${_id}  ${email}  ${password}  ${userData}`);

  app.use(express.json());
  app.use(cookieParser());

  /* temp scafold */
  app.get("/", async (req, res) => {
    let users = await UserModel.find({});
    let rees = users; //JSON.stringify(users);
    let styling = `<css>body{ background-color:black; color:white }</css> `;
    res.send(
      `<body style=\" background-color:black;color:white \"> ${rees}</body> `
    );
  });

  /** */

  // app.get("/findOne/:id", userController.findById);
  app.post("/adduser", addUser);
  app.post("/deleteuser", deleteUser);
  app.post("/updateuser", updateUser);
  app.post("/login", userLogIn);

  app.use("/form", FormRouter);
  app.use("/user", UserRouter);

  app.post("/form/data", (req, res) => {
    // console.log(req.body);

    res.send(`${JSON.stringify(req.body)} Done`);
  });

  // app.get("/get_token", (req, res) => {
  //   if (req.cookies.jid) {
  //     if (verifyRefreshToken(req.cookies.jid)) {
  //       res.cookie("jid", req.cookies.jid, {
  //         httpOnly: true,
  //         path: "/refresh_token",
  //       });
  //       res.send(`${req.cookies.jid}`);
  //       return;
  //     }
  //   }
  //   let tok = createRefreshToken("batata");
  //   sendRefreshToken(res, tok);
  //   res.send(`${tok}`);
  //   return;
  // });
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
        console.log(tok);
        res.send({ token: accessTok });
        return;
      }
    }
    res.send("Not allowed");
  });

  app.get("/finduser/:userInfo", async (req, res) => {
    let result;
    try {
      result = await findUser(req.params.userInfo);
      if (result == null) {
        result = "User not found ";
      }
    } catch (e) {
      result = e.toString();
    }

    res.send(result);
  });

  // app.get("/form/regform", (req, res) => {
  //   console.log(__dirname);
  //   res.sendFile("RegForm.pdf", { root: __dirname });
  // });
  app.listen(PORT, () => {
    console.log(`app running on http://127.0.0.1:${PORT}`);
  });
})();
