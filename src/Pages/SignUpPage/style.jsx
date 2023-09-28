import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Form } from "formik";
import { Link } from "react-router-dom";

export const SignUpWrapper = styled(Box)`
  label: SignUpWrapper;
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.paper};
  min-height: 100vh;
`;
export const Right = styled(Box)`
  label: Right;
  width: 50vw;
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;
export const RightContainer = styled(Box)`
  label: RightContainer;
  width: 456px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`;
export const SignUpTitle = styled(Typography)`
  label: SignUpTitle;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Space Grotesk;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
`;
export const SignUpDetails = styled(Box)`
  label: SignUpDetails;
  display: flex;
  align-items: center;
`;
export const SignInAccount = styled(Typography)`
  label: SignInAccount;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
`;
export const SignUpLink = styled(Link)`
  label: SignUpLink;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
`;
export const CheckboxWrapper = styled(Box)`
  label: CheckboxWrapper;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const CheckboxDetails = styled("label")`
  label: CheckboxDetails;
  color: var(--black-600, #605f5f);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 1px;
  @media screen and (max-width: 300px) {
    font-size: 9px;
    font-weight: 300;
  }
`;
export const CheckboxStrong = styled(Typography)`
  label: CheckboxStrong;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  padding: 0 1px;
`;
export const FormikForm = styled(Form)`
  label: FormikForm;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Danger = styled("small")`
  label: Danger;
  color: red;
`;
