import { useNavigate } from "react-router-dom";
import validate from "./validate";
import UseForm from "./UseForm";
import { StldBody } from "./styles/Global";
import {
  MainContainer,
  PrimaryContainer,
  Heading,
  Form1,
  SecondaryContainer,
  StldLink,
} from "./styles/Login";
import { useContext } from "react";
import { loginContext } from "./App";

function Login() {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submit,
    validate
  );
  let logInValue = useContext(loginContext);
  let navigateTo = useNavigate();

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  function submit() {
    navigateTo("/dashboard");
  }
  //                                                                      HTML
  return (
    <>
      <StldBody>
        <MainContainer>
          <PrimaryContainer>
            <SecondaryContainer>
              <Heading>
                <h1>Welcome Back</h1>
                <h2>Login To Get Started</h2>
              </Heading>
              <Form1>
                <form
                  onKeyPress={handleKeyPress}
                  onSubmit={(e) => handleSubmit(e, false)}
                  noValidate
                >
                  <input
                    className={`${errors.email && "inputError"}`}
                    type="email"
                    name="email"
                    id="email"
                    values={values.email}
                    onChange={handleChange}
                    placeholder="Email Address"
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
                  <button type="submit" onClick={() => logInValue.changeLogin(true)}>LOGIN</button>
                  <div className="bottom">
                    <h5>
                      Don't have an account? &nbsp;
                      <StldLink to="/Sign-up">Create a new account</StldLink>
                    </h5>
                  </div>
                </form>
              </Form1>
            </SecondaryContainer>
          </PrimaryContainer>
        </MainContainer>
      </StldBody>
    </>
  );
}
export default Login;
