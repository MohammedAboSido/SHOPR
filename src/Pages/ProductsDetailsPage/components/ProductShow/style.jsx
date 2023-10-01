import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ProductShowWrapper = styled(Box)`
  label: ProductShowWrapper;
  width: 570px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 570px;
`;
export const MainProductWrapper = styled(Box)`
  label: MainProductWrapper;
  flex: 1 570px;
  height: 760px;
`;
export const MainProductImg = styled("img")`
  label: MainProductImg;
  min-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ProductsList = styled(Box)`
  label: ProductsList;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProductContainer = styled(Box)`
  label: ProductContainer;
  cursor: pointer;
  width: 128px;
  height: 170px;
`;
export const ProductImg = styled("img")`
  label: ProductImg;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
