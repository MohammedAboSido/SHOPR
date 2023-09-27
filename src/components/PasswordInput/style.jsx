import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PasswordInputWrapper = styled(Box)`
  label: PasswordInputWrapper;
  position: relative;

  & > button {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
