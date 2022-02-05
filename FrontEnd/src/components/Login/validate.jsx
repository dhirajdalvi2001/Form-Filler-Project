export default function validate(values, cpass) {
  let errors = {};

  const email = values.email;
  const password = values.password;
  const cpassword = values.cpassword;

  if (!email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email address is invalid!";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (!/[A-Z]/.test(password)) {
    errors.password = "Password must contain one upper case letter";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "Password must contain one number";
  } else if (password.length < 8) {
    errors.password = "Password needs to be more than 8 letters";
  }

  if (cpass === true) {
    if (!cpassword) {
      errors.cpassword = "Confirm Password is required";
    } else if (!(cpassword === password)) {
      errors.cpassword = "Passwords do not match!";
    }
  }

  return errors;
}
