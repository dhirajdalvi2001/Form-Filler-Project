import "./Form.css";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validate";

function Login() {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );
  function submit() {
    console.log("Submitted Successfully");
    <Route exact path="/">
      {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
    </Route>;
  }
  //                                                                      HTML
  return (
    <div className="login-main">
      <div className="login-container">
        <div className="heading1">
          <h1>Welcome Back</h1>
          <h2>Login To Get Started</h2>
        </div>
        <div className="form1">
          <form onSubmit={(e) => handleSubmit(e, false)} noValidate>
            <input
              className={`${errors.email && "inputError"}`}
              type="email"
              name="email"
              id="email"
              values={values.email}
              onChange={handleChange}
              placeholder="Email"
              autoComplete="off"
            />
            {errors.email && <h6>{errors.email}</h6>}
            <input
              className={`${errors.password && "inputError"}`}
              type="password"
              name="password"
              id="password"
              values={values.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="off"
            />
            {errors.password && <h6>{errors.password}</h6>}
            <button type="submit">LOGIN</button>
            <div className="bottom">
              <h5>
                Don't have an account?{" "}
                <Link to="/Sign-up" className="switch-page">
                  Sign Up
                </Link>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
