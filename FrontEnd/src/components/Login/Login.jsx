import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  function setError(id, error) {
    var element = document.getElementById(id);
    element.innerHTML = error;
  }
  function clearErrors() {
    var errors = document.getElementsByClassName("form-error");
    for (var item of errors) {
      item.innerHTML = "";
    }
  }
  function validatePass() {
    var form = document.getElementById("password");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    form.onkeyup = function () {
      var myInput = document.getElementById("password");
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }

      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }

      // Validate numbers
      var numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }

      // Validate length
      if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    };
    if (password.value.length == 0) {
      setError("password-msg", "Password cannot be empty");
      password.classList.add("red");
    } else {
      password.classList.remove("red");
    }
  }
  function validateForm() {
    var emailVal = true;
    var passVal = true;
    var returnVal = true;
    clearErrors();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    //                                                                    Email Validation
    if (email.value.length == 0) {
      setError("email-msg", "Looks like this is not an email");
      email.classList.add("red");
      document.getElementsByName("email")[0].placeholder = "email@example/com";
      emailVal = false;
    } else {
      email.classList.remove("red");
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form1.email.value)
      ) {
        email.classList.remove("red");
        emailVal = true;
      } else {
        setError("email-msg", "You have entered an invalid email address!");
        email.classList.add("red");
        emailVal = false;
      }
    }
    //                                                                    Password Validation

    if (password.value.length == 0) {
      setError("password-msg", "Password cannot be empty");
      password.classList.add("red");
      document.getElementsByName("password")[0].placeholder = "Pass@123";
      passVal = false;
    } else {
      password.classList.remove("red");
      var upperCaseLetters = /[A-Z]/g;
      var numbers = /[0-9]/g;
      if (password.value.match(upperCaseLetters)) {
        password.classList.remove("red");
        passVal = true;
      } else {
        password.classList.add("red");
        passVal = false;
      }

      if (password.value.match(numbers)) {
        password.classList.remove("red");
        passVal = true;
      } else {
        password.classList.add("red");
        passVal = false;
      }

      if (password.value.length >= 8) {
        password.classList.remove("red");
        passVal = true;
      } else {
        password.classList.add("red");
        passVal = false;
      }
    }
    returnVal = emailVal && passVal;
    console.log(emailVal);
    console.log(passVal);
    console.log(returnVal);
    return returnVal;
  }
  //                                                                      HTML
  return (
    <div className="main">
      <div className="container">
        <div className="heading1">
          <h1>Welcome Back</h1>
          <h2>Login To Continue</h2>
        </div>
        <div className="form1">
          <form id="form1" name="form1" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              autoComplete="off"
              placeholder="Email Address"
              id="email"
              name="email"
              required
            />
            <h6 className="form-error" id="email-msg"></h6>
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              id="password"
              name="password"
              onChange={validatePass}
              required
            />
            <h6 className="form-error" id="password-msg"></h6>
            <button type="submit" onClick={validateForm}>
              Login
            </button>
            <div className="bottom">
              <h6>
                Don't have an account?{" "}
                <Link to="/Sign-up" className="switch-page">
                  {" "}
                  Create a new account
                </Link>
              </h6>
            </div>
          </form>
        </div>
      </div>
      <div id="message">
        <h3>Password must contain the following:</h3>
        <ul>
          <li id="letter" className="invalid">
            <p>
              A <b>lowercase</b> letter
            </p>
          </li>
          <li id="capital" className="invalid">
            <p>
              A <b>capital (uppercase)</b> letter
            </p>
          </li>
          <li id="number" className="invalid">
            <p>
              A <b>number</b>
            </p>
          </li>
          <li id="length" className="invalid">
            <p>
              Minimum <b>8 characters</b>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Login;
