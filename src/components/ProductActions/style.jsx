import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductActionsWrapper = styled(Box)`
  label: ProductActionsWrapper;
  display: flex;
  align-items: center;
  gap: 32px;
`;
export const ProductActionsItem = styled(Box)`
  label: ProductActionsItem;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
`;
export const ProductActionsItemTitle = styled(Link)`
  label: ProductActionsItemTitle;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Space Grotesk;
  font-size: 14px;
  font-weight: 500;
`;
