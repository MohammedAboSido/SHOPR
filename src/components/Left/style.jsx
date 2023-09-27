import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LeftWrapper = styled(Box)`
  label: LeftWrapper;
  background: url(${({ bgimg }) => bgimg});
  width: 50vw;
  background-size: cover;
  background-repeat: no-repeat;
  height: 1080px;
  padding: 2rem;
`;
export const LeftLogo = styled("img")`
  label: LeftLogo;
  width: 35px;
  color: white;
  filter: invert(${({ filter }) => (filter === "dark" ? 1 : 0)});
`;
