import {
  StldNav,
  NavLink,
  StldLogo,
  NavItems,
  MobileIcon,
  NavMenu,
  NavLogo,
} from "./styles/Navbar";
// import { isLoggedIn } from "./GlobalVar";
import { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { loginContext } from "./App";

function Navbar(props) {
  let logInValue = useContext(loginContext);
  const login = logInValue.login;
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }

  return (
    <StldNav>
      <StldLogo>
        <NavLogo to="/">Form Filler</NavLogo>
      </StldLogo>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu onClick={handleClick} click={click}>
        <NavItems>
          {login  ? (<NavLink to="/dashboard">Dashboard</NavLink>) : (<NavLink to="/">Home</NavLink>)}
          <NavLink to="/About">About</NavLink>
          <NavLink to="/forms">Forms</NavLink>
          {login  ? (<NavLink to="/" onClick={() => { logInValue.setLogin(false) }}>Logout</NavLink>) : (<NavLink to="/Login">Login</NavLink>)}
        </NavItems>
      </NavMenu>
    </StldNav>
  );
}

export default Navbar;
