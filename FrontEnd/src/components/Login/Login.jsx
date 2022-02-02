import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="main">
      <div className="container">
        <div className="heading1">
          <h1>Welcome Back</h1>
          <h2>Login To Continue</h2>
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

            <button type="submit">Login </button>

            <div className="bottom">
              <h6>
                Don't have an account?{" "}
                <Link to="/Sign-up" className="switch-page">
                  Create a new account
                </Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
