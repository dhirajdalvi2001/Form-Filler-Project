import { Link } from "react-router-dom";
import { StldNav } from "./styles/StldNavbar";

function Navbar() {
  return (
    <StldNav>
      <div>
        <h1>Form Filler</h1>
      </div>
      <div>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Login">Login</Link>
          </ul>
        </nav>
      </div>
    </StldNav>
  );
}

export default Navbar;
