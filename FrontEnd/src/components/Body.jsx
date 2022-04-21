import { Route, Routes } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
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
        <Route exact path="/forms" element={<Forms />}></Route>
        <Route path='*' element={<My404Component/>} />
      </Routes>
    </>
  );
}

export default Body;

function My404Component() {
  return <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: "1.4rem",
    textTransform: "uppercase",
    color: "rgba(0, 0, 0, 0.3)",
  }}>
    <h1>404: Page Not Found</h1>
  </div>
}
