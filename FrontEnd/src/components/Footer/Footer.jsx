import "./Footer.css";
import { FaGithubSquare, FaLinkedin, FaTwitter } from "react-icons/Fa";

function Footer() {
  return (
    <div id="footer">
      <div className="social-main">
        <div className="social-container">
          <h5>
            <FaGithubSquare /> /Saurabh
          </h5>
          <h5>
            <FaLinkedin /> /Saurabh
          </h5>
          <h5>
            <FaTwitter /> /Saurabh
          </h5>
        </div>
        <div className="social-container">
          <h5>
            <FaGithubSquare /> /Parikshit
          </h5>
          <h5>
            <FaLinkedin /> /Parikshit
          </h5>
          <h5>
            <FaTwitter /> /Parikshit
          </h5>
        </div>
        <div className="social-container">
          <h5>
            <FaGithubSquare /> /Dhiraj
          </h5>
          <h5>
            <FaLinkedin /> /Dhiraj
          </h5>
          <h5>
            <FaTwitter /> /Dhiraj
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
