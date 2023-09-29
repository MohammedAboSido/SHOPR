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

import { Alert, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
const SignUp = () => {
  const { isLoading, error, postedData, post } = useApi(
    "https://e-commerce-api-fylh.onrender.com/api/register"
  );
  const navigate = useNavigate();
  useEffect(() => {
    postedData.length > 0 && navigate(PATH.LOGIN);
  }, [navigate, postedData.length]);
  return (
    <>
      <SignUpWrapper
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Left bgImg={img} />

        <Right
          sx={{
            width: { xs: "100%", md: "50vw", lg: "50vw" },
            height: { xs: "auto", sm: "110vh", md: "auto", lg: "1080px" },
            padding: { xs: "16px", md: "20px", lg: "0" },
          }}
        >
          <RightContainer
            sx={{
              width: { xs: "100%", md: "50vw", lg: "456px" },
            }}
          >
            <SignUpTitle
              sx={{
                fontSize: { xs: "26px", md: "40px" },
              }}
            >
              Sign up
            </SignUpTitle>
            {error && (
              <Alert sx={{ width: "100%" }} severity="error">
                {error}
              </Alert>
            )}
            <SignUpDetails>
              <SignInAccount sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
                Already have an account?
              </SignInAccount>
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
                const body = {
                  name: values.name,
                  email: values.email,
                  password: values.password,
                };
                post(body);
                console.log(postedData);
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
                      <CheckboxStrong
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "15px",
                          },
                        }}
                      >
                        Privacy Policy
                      </CheckboxStrong>
                      and
                      <CheckboxStrong
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "15px",
                          },
                        }}
                      >
                        Terms of Use
                      </CheckboxStrong>
                    </CheckboxDetails>
                  </CheckboxWrapper>
                  {errors.check && touched.check ? (
                    <Danger>{errors.check}</Danger>
                  ) : null}
                  <StyledButton
                    disabled={isLoading}
                    type="submit"
                    width={"100%"}
                  >
                    {isLoading ? <CircularProgress size={"2rem"} /> : "Signup"}
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
