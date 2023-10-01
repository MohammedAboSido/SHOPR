import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ShopProductCardWrapper = styled(Box)`
  label: ShopProductCardWrapper;
  display: flex;
  padding: 24px 0;
  gap: 40px;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;
export const ShopProductCardImgContainer = styled(Box)`
  label: ShopProductCardImgContainer;
  display: flex;
  width: 228px;
  height: 304px;
  cursor: pointer;
`;
export const ShopProductCardImg = styled("img")`
  label: ShopProductCardImg;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ShopProductCardRight = styled(Box)`
  label: ShopProductCardRight;
  padding: 23px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ShopProductCardHeader = styled(Box)`
  label: ShopProductCardHeader;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const ShopProductCardTitle = styled(Typography)`
  label: ShopProductCardTitle;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Space Grotesk;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.4px;
`;
export const ShopProductCardPriceWrapper = styled(Box)`
  label: ShopProductCardPriceWrapper;
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const ShopProductCardNewPrice = styled(Typography)`
  label: ShopProductCardNewPrice;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
`;
export const ShopProductCardOldPrice = styled(Typography)`
  label: ShopProductCardOldPrice;
  color: #a7a7a7;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  text-decoration: line-through;
`;
export const ShopProductCardDescription = styled(Typography)`
  label: ShopProductCardDescription;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  width: 612px;
`;

export const ShopProductCardBelow = styled(Box)`
  label: ShopProductCardBelow;
  display: flex;
  align-items: center;
  gap: 32px;
`;
export const ShopProductCardBelowItem = styled(Box)`
  label: ShopProductCardBelowItem;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
`;
export const ShopProductCardBelowItemTitle = styled(Link)`
  label: ShopProductCardBelowItemTitle;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-family: Space Grotesk;
  font-size: 14px;
  font-weight: 500;
`;
