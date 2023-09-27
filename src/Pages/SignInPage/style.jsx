import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { Link } from "react-router-dom";
export const SignInPageWrapper = styled(Box)`
  label: SignInPageWrapper;
  background-color: ${({ theme }) => theme.palette.background.paper};
  display: flex;
`;
export const SignInPageRight = styled(Box)`
  label: SignInPageRight;
  width: 50vw;
  padding: 220px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;
export const SignInPageContainer = styled(Box)`
  label: SignInPageContainer;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 456px;
`;
export const SignInPageHeader = styled(Box)`
  label: SignInPageHeader;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const SignInPageTitle = styled(Typography)`
  label: SignInPageTitle;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Space Grotesk;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;
export const SignInPageDetails = styled(Box)`
  label: SignInPageDetails;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SignInRememberedWrapper = styled(Box)`
  label: SignInRememberedWrapper;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SignInRememberedLeft = styled(Box)`
  label: SignInRememberedLeft;
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const FormWrapper = styled("form")`
  label: FormWrapper;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;
export const FormInputWrapper = styled(Box)`
  label: FormInputWrapper;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;
export const InputErrorMessage = styled(FormHelperText)`
  label: InputErrorMessage;
  color: ${({ theme }) => theme.palette.error.main};
  font-family: Space Grotesk;
`;
export const RememberedTitle = styled("label")`
  label: RememberedTitle;
  color: #605f5f;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;
export const ForgotPasswordLink = styled(Link)`
  label: ForgotPasswordLink;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
`;
export const SignInPageAccount = styled(Typography)`
  label: SignInPageAccount;
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
