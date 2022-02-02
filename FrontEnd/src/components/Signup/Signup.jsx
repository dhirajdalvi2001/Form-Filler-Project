import "../Signup/Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="main">
      <div className="container">
        <div className="heading1">
          <h1>Creat Account</h1>
          <h2>Create A New Account</h2>
        </div>
        <div className="form1">
          <form id="form1" name="form1">
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
            />

            <h6 className="form-error" id="email-msg"></h6>

            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
            />

            <h6 className="form-error" id="password-msg"></h6>

            <input
              type="password"
              placeholder="Confirm Password"
              id="c-password"
              name="c-password"
            />

            <h6 className="form-error" id="c-password-msg"></h6>

            <button type="submit">Login </button>

            <div className="bottom">
              <h6>
                Already have an account?{" "}
                <Link to="/Login" className="switch-page">
                  Login
                </Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
