import { UserData, UserDataModel } from "./entity/UserData";
import "reflect-metadata";
// import { createConnection } from "typeorm";
// import { User } from "./entity/User";
import express from "express";
import { type } from "os";

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

let port = 3000;

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

(async () => {
  let con = await connect("mongodb://127.0.0.1:5000/newtest");
  const newUser = new UserModel({
    email: "3hello",
    password: "2newpass",
  });

  const newuserdata = new UserDataModel({});
  const newud = await newuserdata.save();

  newUser.userData = newud.id;

  // console.log(con);

  const t = await newUser.save();

  // console.log(t);

  let users = UserModel.find({});
  console.log(users);

  app.use(express.json());

  app.get("/", (req, res) => {
    console.log(req.ip);
    let rees = "nothing here";
    let styling = `<css>body{ background-color:black; color:white }</css> `;
    res.send(
      `<body style=\" background-color:black;color:white \"> ${rees}</body> `
    );
  });

  app.listen(3000, () => {
    console.log("app running on http://127.0.0.1:3000");
  });
})();
