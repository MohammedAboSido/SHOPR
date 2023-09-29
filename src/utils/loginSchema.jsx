import * as Yup from "yup";
export const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email addresses")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  check: Yup.boolean(),
});
