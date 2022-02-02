import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Login from "../Login/Login";
import Home from "../Home/Home";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default Body;
