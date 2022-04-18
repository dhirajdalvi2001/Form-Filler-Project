import validate from "./validate";
import { useNavigate } from "react-router-dom";
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

function Signup() {
  let navigateTo = useNavigate();
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submit,
    validate
  );

  function submit() {
    navigateTo("/dashboard");
    console.log("Submitted Successfully");
  }
  //                                                                      HTML
  return (
    <>
      <StldBody>
        <MainContainer>
          <PrimaryContainer>
            <SecondaryContainer>
              <Heading>
                <h1>Hello There!</h1>
                <h2>Login To Get Started</h2>
              </Heading>
              <Form1>
                <form onSubmit={(e) => handleSubmit(e, true)} noValidate>
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
                  <input
                    className={`${errors.cpassword && "inputError"}`}
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    values={values.cpassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    autoComplete="off"
                  />
                  {errors.cpassword && <h6>{errors.cpassword}</h6>}
                  <button type="submit">SIGN UP</button>
                  <div className="bottom">
                    <h5>
                      Already have an account? &nbsp;
                      <StldLink to="/Login">Login Here</StldLink>
                    </h5>
                  </div>
                </form>
              </Form1>
            </SecondaryContainer>
          </PrimaryContainer>
        </MainContainer>
      </StldBody>
    </>

    // <div className="main">
    //   <div className="container">
    //     <div className="heading1">
    //       <h1>Welcome Back</h1>
    //       <h2>Login To Get Started</h2>
    //     </div>
    //     <div className="form1">
    //       <form onSubmit={(e) => handleSubmit(e, true)} noValidate>
    //         <input
    //           className={`${errors.email && "inputError"}`}
    //           type="email"
    //           name="email"
    //           id="email"
    //           values={values.email}
    //           onChange={handleChange}
    //           placeholder="Email"
    //           autoComplete="off"
    //         />
    //         {errors.email && <h6>{errors.email}</h6>}
    //         <input
    //           className={`${errors.password && "inputError"}`}
    //           type="password"
    //           name="password"
    //           id="password"
    //           values={values.password}
    //           onChange={handleChange}
    //           placeholder="Password"
    //           autoComplete="off"
    //         />
    //         {errors.password && <h6>{errors.password}</h6>}
    //         <input
    //           className={`${errors.cpassword && "inputError"}`}
    //           type="password"
    //           name="cpassword"
    //           id="cpassword"
    //           values={values.cpassword}
    //           onChange={handleChange}
    //           placeholder="Confirm Password"
    //           autoComplete="off"
    //         />
    //         {errors.cpassword && <h6>{errors.cpassword}</h6>}
    //         <button type="submit">SIGN UP</button>
    //         <div className="bottom">
    //           <h5>
    //             Already have an account?{" "}
    //             <Link to="/Login" className="switch-page">
    //               Login
    //             </Link>
    //           </h5>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Signup;
