export const checkValidData = (email, password, name) => {
  const errors = {};
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  //   const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(
  //     password
  //   );

  if (!email) {
    errors.email = "Email is required";
  } else if (!isEmailValid) {
    errors.email = "Email ID is invalid";
  }
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  // Name validation only if provided (Sign Up case)
  if (name !== undefined) {
    if (!name) {
      errors.name = "Full name is required";
    } else if (name.trim().length < 3) {
      errors.name = "Full name must be at least 3 characters";
    }
  }

  return errors;
};
