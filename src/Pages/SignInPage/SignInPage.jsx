import { Formik } from "formik";
import signInImage from "../../assets/images/login/loginimg.png";
import { StyledButton } from "../../global/components";
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
  return (
    <SignInPageWrapper>
      <Left bgImage={signInImage} />
      <SignInPageRight>
        <SignInPageContainer>
          <SignInPageHeader>
            <SignInPageTitle variant="h3">Sign in</SignInPageTitle>
            <SignInPageDetails>
              <SignInPageAccount variant="body2">
                Don’t have an accout yet?
              </SignInPageAccount>
              <SignUpLink to={PATH.REGISTER}>Sign up</SignUpLink>
            </SignInPageDetails>
          </SignInPageHeader>
          <Formik
            initialValues={{ username: "", password: "", remember: false }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <FormWrapper onSubmit={handleSubmit}>
                <FormInputWrapper>
                  <input
                    type="email"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.username && touched.username && (
                    <InputErrorMessage>{errors.username}</InputErrorMessage>
                  )}
                </FormInputWrapper>
                <FormInputWrapper>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <InputErrorMessage>{errors.password}</InputErrorMessage>
                  )}
                </FormInputWrapper>
                <SignInRememberedWrapper>
                  <SignInRememberedLeft>
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.remember}
                      checked={values.remember}
                    />
                    <RememberedTitle htmlFor="remember">
                      Remember me
                    </RememberedTitle>
                  </SignInRememberedLeft>
                  <ForgotPasswordLink to={"/#"}>
                    Forgot password?
                  </ForgotPasswordLink>
                </SignInRememberedWrapper>
                <StyledButton
                  type="submit"
                  disabled={isSubmitting}
                  width={"100%"}
                >
                  Sign in
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
