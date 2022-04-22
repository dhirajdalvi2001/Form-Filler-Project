import { FaGithubSquare } from "react-icons/fa";
import GlobalStyles from "./styles/Global";
import { Container, StldFooter, NavLink, Anchor } from "./styles/Footer";

function Footer() {
  return (
    <>
      <StldFooter>
        <Container>
          <h3>Form Filler</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/forms">Forms</NavLink>
          <NavLink to="/login">Login</NavLink>
        </Container>
        <Container>
          <h3>Members</h3>
          <h5>Saurabh Patil</h5>
          <h5>Parikshit Thale</h5>
          <h5>Amaan Khan</h5>
          <h5>Dhiraj Dalvi</h5>
        </Container>
        <Container>
          <h3>Socials</h3>
          <a href="https://github.com/feAr81001" target="_blank">
            <FaGithubSquare />
            &nbsp; /Saurabh
          </a>
          <a href="https://github.com/pariks90900" target="_blank">
            <FaGithubSquare />
            &nbsp; /Parikshit
          </a>
          <a href="https://github.com/dhirajdalvi2001" target="_blank">
            <FaGithubSquare />
            &nbsp; /Dhiraj
          </a>
          <a href="">
            <FaGithubSquare />
            &nbsp; /Amaan
          </a>
        </Container>
        <Container>
          <h3>Account</h3>
          <NavLink to="/sign-up">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </Container>
      </StldFooter>
    </>
  );
}

export default Footer;
