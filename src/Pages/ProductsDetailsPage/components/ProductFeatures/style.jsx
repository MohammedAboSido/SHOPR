import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const ProductFeaturesWrapper = styled(Box)`
  label: ProductFeaturesWrapper;
  width: 456px;
`;
export const ProductFeaturesDetails = styled(Box)`
  label: ProductFeaturesDetails;
  width: 456px;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  border-bottom: 1px solid #eaeaea;
`;

export const ProductName = styled(Typography)`
  label: ProductName;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
  font-size: 34px;
  font-weight: 500;
  margin-top: 8px;
`;
export const ProductDescription = styled(Typography)`
  label: ProductDescription;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  margin: 18px 0;
`;
export const ProductRating = styled(Box)`
  label: ProductRating;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const ProductReviews = styled(Typography)`
  label: ProductReviews;
  color: #605f5f;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
`;
export const ProductPrice = styled(Box)`
  label: ProductPrice;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
`;
export const ProductNewPrice = styled(Typography)`
  label: ProductNewPrice;
  font-family: Inter;
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
`;
export const ProductOldPrice = styled(Typography)`
  label: ProductOldPrice;
  color: #a7a7a7;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  text-decoration: line-through;
`;
export const ProductView = styled(Box)`
  label: ProductView;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
  color: ${({ theme }) => theme.palette.bgPrimary.main};
`;

export const ProductViewDescription = styled(Box)`
  label: ProductViewDescription;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 2px;
`;
export const ProductViewPeople = styled(Typography)`
  label: ProductViewPeople;

  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
`;
export const ProductFeaturesTimer = styled(Box)`
  label: ProductFeaturesTimer;
  display: flex;
  padding: 24px 0;
  flex-direction: column;
  gap: 12px;
  border-bottom: 1px solid #eaeaea;
`;
export const ProductFeaturesTimerTitle = styled(Box)`
  label: ProductFeaturesTimerTitle;
  display: flex;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
`;
export const HurryUp = styled(Typography)`
  label: HurryUp;
  color: #dc3545;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
`;
export const TimerBlocks = styled(Box)`
  label: TimerBlocks;
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const ProductFeaturesSwatches = styled(Box)`
  label: ProductFeaturesSwatches;
  margin: 24px 0;
`;
