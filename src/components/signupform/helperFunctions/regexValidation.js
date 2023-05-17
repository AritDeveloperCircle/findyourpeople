function regexValidation(user) {
  const errors = {};

  // Validate Name
  const namePattern = /^[a-zA-Z]{2,50}(?:\s+[a-zA-Z]{2,50})+$/;
  if (!user.name) {
    errors.name = "Please enter your name";
  } else if (user.name.length < 2 || user.name.length > 50) {
    errors.name = "Name must be between 2 and 50 characters";
  } else if (!user.name.match(namePattern)) {
    errors.name = "Please enter a valid name";
  }

  // Valid Email
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!user.email) {
    errors.email = "Please enter your email address";
  } else if (!user.email.match(emailPattern)) {
    errors.email = "Please enter a valid email address";
  }

  // Valid Password
  const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  if (!user.password) {
    errors.password = "Please enter a password";
  } else if (user.password.length < 8 || user.password.length > 20) {
    errors.password = "Please enter a password between 8 and 20 characters";
  } else if (!user.password.match(passwordPattern)) {
    errors.password =
      "Password must contain one digit, one lowercase letter, one uppercase letter, and one special character";
  }

  // Check if user exists
  // try {
  //   const signInMethods = await fetchSignInMethodsForEmail(
  //     firebaseAuth,
  //     user.email
  //   );
  //   if (signInMethods.length > 0) {
  //     errors.email = "User already exists";
  //   }
  // } catch (error) {
  //   console.error("Error checking user", error);
  // }

  return errors;
}
export default regexValidation;
