import { Formik } from "formik";
import img from "../../assets/images/register/register.png";
import Left from "../../components/Left/Left";
import PasswordInput from "../../components/PasswordInput";
import { PATH } from "../../constants";
import {
  CheckBoxInput,
  MainInput,
  StyledButton,
} from "../../global/components";
import { schema } from "../../utils/registrationSchema";
import {
  CheckboxDetails,
  CheckboxStrong,
  CheckboxWrapper,
  Danger,
  FormikForm,
  Right,
  RightContainer,
  SignInAccount,
  SignUpDetails,
  SignUpLink,
  SignUpTitle,
  SignUpWrapper,
} from "./style";
const SignUp = () => {
  return (
    <>
      <SignUpWrapper>
        <Left bgImg={img} />
        <Right>
          <RightContainer>
            <SignUpTitle>Sign up</SignUpTitle>
            <SignUpDetails>
              <SignInAccount>Already have an account?</SignInAccount>
              <SignUpLink to={PATH.LOGIN}>Sign in</SignUpLink>
            </SignUpDetails>
            <Formik
              initialValues={{
                name: "",
                username: "",
                email: "",
                password: "",
                check: false,
              }}
              onSubmit={(values) => {
                console.log(
                  values.email,
                  values.password,
                  values.username,
                  values.name,
                  values.check
                );
              }}
              validationSchema={schema}
            >
              {({ errors, touched }) => (
                <FormikForm>
                  <MainInput type="text" name="name" placeholder="Your name" />
                  {errors.name && touched.name ? (
                    <Danger>{errors.name}</Danger>
                  ) : null}
                  <MainInput
                    type="text"
                    name="username"
                    placeholder="UserName"
                  />
                  {errors.username && touched.username ? (
                    <Danger>{errors.username}</Danger>
                  ) : null}
                  <MainInput
                    type="email"
                    name="email"
                    placeholder="Email address"
                  />
                  {errors.email && touched.email ? (
                    <Danger>{errors.email}</Danger>
                  ) : null}
                  <PasswordInput />
                  {errors.password && touched.password ? (
                    <Danger>{errors.password}</Danger>
                  ) : null}
                  <CheckboxWrapper>
                    <CheckBoxInput type="checkbox" name="check" id="checkbox" />

                    <CheckboxDetails htmlFor="checkbox">
                      I agree with
                      <CheckboxStrong>Privacy Policy</CheckboxStrong> and
                      <CheckboxStrong>Terms of Use</CheckboxStrong>
                    </CheckboxDetails>
                  </CheckboxWrapper>
                  {errors.check && touched.check ? (
                    <Danger>{errors.check}</Danger>
                  ) : null}

                  <StyledButton type="submit" width={"100%"}>
                    Signup
                  </StyledButton>
                </FormikForm>
              )}
            </Formik>
          </RightContainer>
        </Right>
      </SignUpWrapper>
    </>
  );
};

export default SignUp;
