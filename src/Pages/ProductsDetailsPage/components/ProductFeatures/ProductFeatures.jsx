import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Breadcrumbs, Rating, Stack, Typography } from "@mui/material";
import { PATH } from "../../../../constants";
import {
  BreadCrumbCurrentPage,
  BreadCrumbLink,
} from "../../../../global/components";
import SelectColor from "../SelectColor";
import SelectSize from "../SelectSize";
import TimerBlock from "../TimerBlock";
import {
  HurryUp,
  ProductDescription,
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

const ProductFeatures = () => {
  const breadcrumbs = [
    <BreadCrumbLink key="1" to={PATH.HOME}>
      Home
    </BreadCrumbLink>,
    <BreadCrumbLink key="2" to={PATH.HOME}>
      Clothing
    </BreadCrumbLink>,
    <BreadCrumbCurrentPage variant="body2" key="3">
      Huishō Pijama
    </BreadCrumbCurrentPage>,
  ];

  return (
    <ProductFeaturesWrapper>
      <ProductFeaturesDetails>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <ProductName variant="body2">Huishō Pijama</ProductName>
        <ProductDescription variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt et dolore
        </ProductDescription>
        <ProductRating>
          <Rating
            sx={{ width: "88px", fontSize: "16px" }}
            name="read-only"
            value={5}
            readOnly
          />
          <ProductReviews variant="body2">23 Reviews</ProductReviews>
        </ProductRating>
        <ProductPrice>
          <ProductNewPrice variant="body2">$86.00</ProductNewPrice>
          <ProductOldPrice variant="body2">$104.00</ProductOldPrice>
        </ProductPrice>
        <ProductView>
          <VisibilityOutlinedIcon />
          <ProductViewDescription variant="body2">
            <ProductViewPeople variant="body2">32</ProductViewPeople>
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
    </ProductFeaturesWrapper>
  );
};

export default ProductFeatures;

{
  {
    /*
<ProductFeaturesCart></ProductFeaturesCart>  */
  }
}
