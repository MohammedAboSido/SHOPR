import styled from "@emotion/styled";
import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ShopHeaderWrapper = styled(Box)`
  label: ShopHeaderWrapper;
  height: 467px;
  background: url(${({ img }) => img});
  filter: invert(${({ theme }) => (theme.palette.mode === "dark" ? 1 : 0)});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
`;

export const BreadcrumbsWrapper = styled(Breadcrumbs)`
  label: BreadcrumbsWrapper;
`;

export const ShopHeaderLink = styled(Link)`
  label: ShopHeaderLink;
  color: #605f5f;
  display: flex;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  position: relative;
  left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
export const ShopHeaderCurrentPage = styled(Typography)`
  label: ShopHeaderCurrentPage;
  color: #605f5f;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  opacity: 0.8;
`;
export const NavigateNextIcon = styled(NavigateNext)`
  label: NavigateNextIcon;
  color: #605f5f;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
`;
export const ShopHeaderTitle = styled(Typography)`
  label: ShopHeaderTitle;
  color: "#121212";
  text-align: center;
  font-family: Space Grotesk;
  font-size: 54px;
  font-weight: 500;
  letter-spacing: -1px;
`;
export const ShopHeaderDescription = styled(Typography)`
  label: ShopHeaderDescription;
  color: #3e3e59;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  width: 600px;
  margin-top: 4px;
`;
