import { useState } from "react";
import { Route } from "react-router-dom";
import validate from "./validate";
import useForm from "./useForm";
import GlobalStyles, { StldBody } from "./styles/Global";
import {
  MainContainer,
  PrimaryContainer,
  Heading,
  Form1,
  SecondaryContainer,
  StldLink,
} from "./styles/StldLogin";

function Login() {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("Submitted Successfully");
  }
  //                                                                      HTML
  return (
    <>
      <StldBody>
        <MainContainer>
          <GlobalStyles />
          <PrimaryContainer>
            <SecondaryContainer>
              <Heading>
                <h1>Welcome Back</h1>
                <h2>Login To Get Started</h2>
              </Heading>
              <Form1>
                <form onSubmit={(e) => handleSubmit(e, false)} noValidate>
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
                  <button type="submit">LOGIN</button>
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
