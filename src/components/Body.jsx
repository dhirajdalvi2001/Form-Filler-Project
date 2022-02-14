import { Route, Routes } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";

function Body() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/sign-up" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default Body;
