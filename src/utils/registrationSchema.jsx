import * as Yup from "yup";
export const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name can be maximum 50 characters long"),
  username: Yup.string()
    .trim()
    .required("Surname is required")
    .matches(/^[a-zA-Z\s]*$/, "Surname can only contain letters and spaces")
    .min(2, "Surname must be at least 2 characters long")
    .max(50, "Surname can be maximum 50 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    ),
  check: Yup.boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required(),
});
