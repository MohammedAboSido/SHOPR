import * as Yup from "yup";
export const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  check: Yup.boolean(),
});
