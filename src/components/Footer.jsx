import { FaGithubSquare, FaLinkedin, FaTwitter } from "react-icons/Fa";
import GlobalStyles from "./styles/Global";
import { Container, StldFooter } from "./styles/StldFooter";

function Footer() {
  return (
    <>
      <GlobalStyles />
      <StldFooter>
        <Container>
          <h3>Form Filler</h3>
          <h5>About</h5>
          <h5>Contact</h5>
          <h5>Login</h5>
        </Container>
        <Container>
          <h3>Group Members</h3>
          <h5>Saurabh Patil</h5>
          <h5>Parikshit Thale</h5>
          <h5>Dhiraj Dalvi</h5>
        </Container>
        <Container>
          <h3>Account</h3>
          <h5>Open An Account</h5>
          <h5>Settings</h5>
          <h5>Change Password</h5>
        </Container>
        <Container>
          <h3>Socials</h3>
          <h5>
            <FaGithubSquare />
            &nbsp; /Saurabh
          </h5>
          <h5>
            <FaGithubSquare />
            &nbsp; /Parikshit
          </h5>
          <h5>
            <FaGithubSquare />
            &nbsp; /Dhiraj
          </h5>
        </Container>
      </StldFooter>
    </>
  );
}

export default Footer;
