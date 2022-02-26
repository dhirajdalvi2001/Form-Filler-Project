import {
  addUser,
  deleteUser,
  updateUser,
  userLogIn,
} from "./controller/UserController";
import { UserData, UserDataModel } from "./entity/UserData";
import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
// let routes = express.Router();

// routes.get("/", (req, res) => {
//   res.send("form page");
// });
// routes.get("/schoolform", (req, res) => {
//   res.send("school form page");
// });
// routes.get("/clgform", (req, res) => {
//   res.send("clg form page");
// });

const PORT = process.env.PORT || 3000;

// let users: User[];
// createConnection()
//   .then(async (connection) => {
//     // const user = new User();
//     // user.email = "Timber";
//     // user.password = "Saw";
//     // await connection.manager.save(user);

//     users = await connection.manager.find(User);
//   })
//   .catch((error) => console.log(error));

// app.use("/form", routes);

import { UserModel } from "./entity/User";
import { connect } from "mongoose";

// const userController = new UserController();

(async () => {
  let con = await connect("mongodb://127.0.0.1:5000/newtest");
  // const newUser = new UserModel({
  //   email: "3hello",
  //   password: "2newpass",
  // });

  // const newuserdata = new UserDataModel({});
  // const newud = await newuserdata.save();

  // newUser.userData = newud.id;

  // console.log(con);

  // const t = await newUser.save();

  // console.log(t);

  let users = await UserModel.find({});
  // let { _id, email, password, userData } = users[2];
  // console.log(`${_id}  ${email}  ${password}  ${userData}`);

  app.use(express.json());

  app.get("/", async (req, res) => {
    console.log(req.ip);
    let users = await UserModel.find({});

    let rees = users; //JSON.stringify(users);
    let styling = `<css>body{ background-color:black; color:white }</css> `;
    res.send(
      `<body style=\" background-color:black;color:white \"> ${rees}</body> `
    );
  });

  // app.get("/findOne/:id", userController.findById);
  app.post("/adduser", addUser);
  app.post("/deleteuser", deleteUser);
  app.post("/updateuser", updateUser);
  app.post("/login", userLogIn);

  app.listen(3000, () => {
    console.log("app running on http://127.0.0.1:3000");
  });
})();
