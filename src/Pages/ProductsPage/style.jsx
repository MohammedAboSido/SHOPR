import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ProductsPageWrapper = styled(Box)`
  label: ProductsPageWrapper;
`;

export const ProductsPageProductCounts = styled(Box)`
  label: ProductsPageProductCounts;
  padding: 24px 0 16px 0;
`;
export const ProductCount = styled(Typography)`
  label: ProductCount;
  color: #605f5f;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
`;
export const ShopProductCards = styled(Box)`
  label: ShopProductCards;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;
