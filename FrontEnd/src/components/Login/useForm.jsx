import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e, cpass) => {
    e.preventDefault();
    setErrors(validate(values, cpass));
    setIsSubmitting(true);
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
