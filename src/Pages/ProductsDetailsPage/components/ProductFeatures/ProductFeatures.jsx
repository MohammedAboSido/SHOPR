import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Box, Breadcrumbs, Rating, Stack, Typography } from "@mui/material";

import InputNumber from "../../../../components/InputNumber/InputNumber";
import { PATH } from "../../../../constants";
import {
  BreadCrumbCurrentPage,
  BreadCrumbLink,
  SecondaryButton,
  StyledButton,
} from "../../../../global/components";
import SelectColor from "../SelectColor";
import SelectSize from "../SelectSize";
import TimerBlock from "../TimerBlock";
import {
  HurryUp,
  ProductDescription,
  ProductFeaturesCart,
  ProductFeaturesDetails,
  ProductFeaturesSwatches,
  ProductFeaturesTimer,
  ProductFeaturesTimerTitle,
  ProductFeaturesWrapper,
  ProductName,
  ProductNewPrice,
  ProductOldPrice,
  ProductPrice,
  ProductRating,
  ProductReviews,
  ProductView,
  ProductViewDescription,
  ProductViewPeople,
  TimerBlocks,
} from "./style";

const ProductFeatures = ({ data }) => {
  const breadcrumbs = [
    <BreadCrumbLink key="1" to={PATH.HOME}>
      Home
    </BreadCrumbLink>,
    <BreadCrumbLink key="2" to={PATH.CATEGORY}>
      {data.category}
    </BreadCrumbLink>,
    <BreadCrumbCurrentPage variant="body2" key="3">
      {data.name}
    </BreadCrumbCurrentPage>,
  ];

  return (
    <ProductFeaturesWrapper>
      <ProductFeaturesDetails>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <ProductName variant="body2">{data.name}</ProductName>
        <ProductDescription variant="body2">
          {data.description}
        </ProductDescription>
        <ProductRating>
          <Rating
            sx={{ width: "88px", fontSize: "16px" }}
            name="read-only"
            value={data.rate}
            readOnly
          />
          <ProductReviews variant="body2">
            {data.reviewCount} Reviews
          </ProductReviews>
        </ProductRating>
        <ProductPrice>
          <ProductNewPrice variant="body2">
            ${(data.price - data.price * (data.discount / 100)).toFixed(2)}
          </ProductNewPrice>
          <ProductOldPrice variant="body2">${data.price}</ProductOldPrice>
        </ProductPrice>
        <ProductView>
          <VisibilityOutlinedIcon />
          <ProductViewDescription variant="body2">
            <ProductViewPeople variant="body2">{data.view}</ProductViewPeople>
            people are looking at this product
          </ProductViewDescription>
        </ProductView>
      </ProductFeaturesDetails>
      <ProductFeaturesTimer>
        <ProductFeaturesTimerTitle variant="body2">
          <HurryUp variant="body2">Hurry up</HurryUp>, offer expired in:
        </ProductFeaturesTimerTitle>
        <TimerBlocks>
          <TimerBlock type="second" num="34" />
          <TimerBlock type="second" num="34" />
          <TimerBlock type="second" num="34" />
          <TimerBlock type="second" num="34" />
        </TimerBlocks>
      </ProductFeaturesTimer>
      <ProductFeaturesSwatches>
        <Stack sx={{ gap: "12px", marginBottom: "24px" }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              fontFamily: "Inter",
              color: "#605F5F",
            }}
          >
            Color:
          </Typography>
          <SelectColor />
        </Stack>
        <Stack sx={{ gap: "12px" }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              fontFamily: "Inter",
              color: "#605F5F",
            }}
          >
            Size
          </Typography>
          <SelectSize />
        </Stack>
      </ProductFeaturesSwatches>
      <ProductFeaturesCart>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            mb: "16px",
          }}
        >
          <InputNumber />
          <SecondaryButton
            padding="10px 26px"
            width="100%"
            fontSize="18px"
            sx={{ height: "52px" }}
          >
            Add To Cart
          </SecondaryButton>
        </Box>
        <StyledButton
          padding="10px 26px"
          width="100%"
          fontSize="18px"
          borderRadius="0"
        >
          Add To Cart
        </StyledButton>
      </ProductFeaturesCart>
    </ProductFeaturesWrapper>
  );
};

export default ProductFeatures;
