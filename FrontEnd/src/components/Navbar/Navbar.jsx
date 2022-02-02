import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h1 className="nav-logo">Form Filler</h1>
      </div>
      <div>
        <nav>
          <div className="menu-icon"></div>
          <ul>
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/About" className="nav-links">
              About
            </Link>
            <Link to="/Login" className="nav-links">
              Login
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
