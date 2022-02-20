import {
  StldNav,
  NavLink,
  StldLogo,
  NavItems,
  MobileIcon,
  NavMenu,
  NavLogo,
} from "./styles/StldNavbar";
import { isLoggedIn } from "./GlobalVar";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/Fa";

function Navbar() {
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
          {isLoggedIn ? (
            <NavLink to="/dashboard">Dashboard</NavLink>
          ) : (
            <NavLink to="/">Home</NavLink>
          )}
          <NavLink to="/About">About</NavLink>
          {isLoggedIn && <NavLink to="/forms">Forms</NavLink>}
          {isLoggedIn ? (
            <NavLink to="/Account">Account</NavLink>
          ) : (
            <NavLink to="/Login">Login</NavLink>
          )}
        </NavItems>
      </NavMenu>
    </StldNav>
  );
}

export default Navbar;
