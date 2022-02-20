import { Route, Routes } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Account from "./Account";
import Forms from "./Forms";

function Body() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/sign-up" element={<Signup />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/account" element={<Account />}></Route>
        <Route exact path="/forms" element={<Forms />}></Route>
      </Routes>
    </>
  );
}

export default Body;