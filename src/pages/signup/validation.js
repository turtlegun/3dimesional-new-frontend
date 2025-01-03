import CustomValidationError from "../../../custom-error/custom-error";

const patterns = {
  email: /^([a-zA-Z\d.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/,
  name: /^[a-zA-Z\d]{3,16}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@._-]{8,}$/,
  phone: /^[0-9]{10}$/,
};

function signup_validation(data) {
  const { name, password, email, phone } = data;

  if (!name || !password || !email || !phone) {
    throw new CustomValidationError(
      "validation",
      "all",
      "All fields are required"
    );
  }

  if (!patterns.name.test(name)) {
    throw new CustomValidationError(
      "validation",
      "name",
      " NAME MUST BE AT LEAST 3 CHARACTERS LONG"
    );
  }
  if (!patterns.phone.test(phone)) {
    throw new CustomValidationError(
      "validation",
      "phone",
      "PHONE NUMBER SHOULD BE VALID"
    );
  }
  if (!patterns.email.test(email)) {
    throw new CustomValidationError(
      "validation",
      "email",
      "EMAIL SHOULD BE VALID"
    );
  }

  if (!patterns.password.test(password)) {
    throw new CustomValidationError(
      "validation",
      "password",
      "PASSWORD MUST BE AT LEAST 8 CHARACTERS LONG,CONTAIN AT LEAST 1 DIGIT1 ALPHABET, AND 1 SPECIAL SYMBOL."
    );
  }



  return true;
}

export default signup_validation;
