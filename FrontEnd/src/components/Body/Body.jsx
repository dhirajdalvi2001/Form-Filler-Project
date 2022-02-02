import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Login from "../Login/Login";
import Home from "../Home/Home";
import "./Body.css";
import Signup from "../Signup/Signup";

function Body() {
  return (
    <div className="body">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/sign-up" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default Body;
