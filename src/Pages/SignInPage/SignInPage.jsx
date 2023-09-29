import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signInImage from "../../assets/images/login/login.png";
import {
  CheckBoxInput,
  MainInput,
  StyledButton,
} from "../../global/components";
import useApi from "../../hooks/useApi";
import Left from "./../../components/Left/Left";
import { PATH } from "./../../constants/index";
import { schema } from "./../../utils/loginSchema";
import {
  ForgotPasswordLink,
  FormInputWrapper,
  FormWrapper,
  InputErrorMessage,
  RememberedTitle,
  SignInPageAccount,
  SignInPageContainer,
  SignInPageDetails,
  SignInPageHeader,
  SignInPageRight,
  SignInPageTitle,
  SignInPageWrapper,
  SignInRememberedLeft,
  SignInRememberedWrapper,
  SignUpLink,
} from "./style";
const SignInPage = () => {
  const { isLoading, error, postedData, post } = useApi(
    "https://e-commerce-api-fylh.onrender.com/api/login"
  );
  const navigate = useNavigate();
  useEffect(() => {
    postedData?.length > 0 &&
      localStorage.setItem("user", JSON.stringify(postedData));
    postedData?.length > 0 && navigate(PATH.HOME);
  }, [navigate, postedData, postedData.length]);

  return (
    <SignInPageWrapper sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Left bgImg={signInImage} />
      <SignInPageRight
        sx={{
          width: { xs: "100%", md: "50vw" },
          padding: { xs: "16px", md: "100px 50px", lg: "220px 0" },
        }}
      >
        <SignInPageContainer
          sx={{
            width: { xs: "100%", lg: "456px" },
          }}
        >
          <SignInPageHeader>
            <SignInPageTitle
              variant="h3"
              sx={{
                fontSize: { xs: "26px", md: "40px" },
              }}
            >
              Sign in
            </SignInPageTitle>
            {error.length > 0 && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error} — <strong>check it out!</strong>
              </Alert>
            )}
            <SignInPageDetails>
              <SignInPageAccount
                variant="body2"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                Don’t have an accout yet?
              </SignInPageAccount>
              <SignUpLink to={PATH.REGISTER}>Sign up</SignUpLink>
            </SignInPageDetails>
          </SignInPageHeader>
          <Formik
            initialValues={{ email: "", password: "", remember: false }}
            validationSchema={schema}
            onSubmit={(values) => {
              post(values);
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <FormWrapper onSubmit={handleSubmit}>
                <FormInputWrapper>
                  <MainInput
                    type="text"
                    name="email"
                    placeholder="Your email"
                  />
                  {errors.email && touched.email && (
                    <InputErrorMessage>{errors.email}</InputErrorMessage>
                  )}
                </FormInputWrapper>
                <FormInputWrapper>
                  <MainInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  {errors.password && touched.password && (
                    <InputErrorMessage>{errors.password}</InputErrorMessage>
                  )}
                </FormInputWrapper>
                <SignInRememberedWrapper>
                  <SignInRememberedLeft>
                    <CheckBoxInput
                      type="checkbox"
                      name="remember"
                      id="remember"
                    />
                    <RememberedTitle htmlFor="remember">
                      Remember me
                    </RememberedTitle>
                  </SignInRememberedLeft>
                  <ForgotPasswordLink to={"/#"}>
                    Forgot password?
                  </ForgotPasswordLink>
                </SignInRememberedWrapper>
                <StyledButton type="submit" width={"100%"} disabled={isLoading}>
                  {isLoading ? <CircularProgress size={"2rem"} /> : "Sign in"}
                </StyledButton>
              </FormWrapper>
            )}
          </Formik>
        </SignInPageContainer>
      </SignInPageRight>
    </SignInPageWrapper>
  );
};

export default SignInPage;
