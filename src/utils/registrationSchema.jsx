import * as Yup from "yup";
export const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name can be maximum 50 characters long"),
  surname: Yup.string()
    .trim()
    .required("Surname is required")
    .matches(/^[a-zA-Z\s]*$/, "Surname can only contain letters and spaces")
    .min(2, "Surname must be at least 2 characters long")
    .max(50, "Surname can be maximum 50 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  prefix: Yup.string().required("Prefix is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must be numeric")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can be maximum 15 digits"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  check: Yup.boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required(),
});
