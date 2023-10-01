import { Rating } from "@mui/material";
import { BiHeart, BiHelpCircle, BiShareAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./../../../../global/components";
import {
  ShopProductCardBelow,
  ShopProductCardBelowItem,
  ShopProductCardBelowItemTitle,
  ShopProductCardDescription,
  ShopProductCardHeader,
  ShopProductCardImg,
  ShopProductCardImgContainer,
  ShopProductCardNewPrice,
  ShopProductCardOldPrice,
  ShopProductCardPriceWrapper,
  ShopProductCardRight,
  ShopProductCardTitle,
  ShopProductCardWrapper,
} from "./style";

const ShopProductCard = ({
  img,
  title,
  price,
  rate,
  description,
  discount,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <ShopProductCardWrapper
      sx={{
        gap: { xs: "12px", md: "20px", lg: "40px" },
        flexDirection: { xs: "column", md: "row" },
        flex: { sm: "1 228px" },
      }}
    >
      <ShopProductCardImgContainer sx={{ width: { xs: "100%", lg: "228px" } }}>
        <ShopProductCardImg
          src={img}
          onClick={() => navigate(`/product-details/${id}`)}
        />
      </ShopProductCardImgContainer>
      <ShopProductCardRight sx={{ padding: { xs: "0", md: "23px 0" } }}>
        <ShopProductCardHeader>
          <ShopProductCardTitle>{title}</ShopProductCardTitle>
          <ShopProductCardPriceWrapper>
            <ShopProductCardNewPrice>
              ${(price - price * (discount / 100)).toFixed(2)}
            </ShopProductCardNewPrice>
            <ShopProductCardOldPrice>${price}</ShopProductCardOldPrice>
          </ShopProductCardPriceWrapper>
        </ShopProductCardHeader>
        <Rating
          name="read-only"
          value={rate}
          readOnly
          sx={{
            fontSize: "16px",
            width: "88px",
            display: { xs: "none", md: "flex" },
          }}
        />
        <ShopProductCardDescription
          sx={{
            width: { md: "100%", lg: "612px" },
            display: { xs: "none", md: "flex" },
          }}
        >
          {description}
        </ShopProductCardDescription>
        <StyledButton
          padding={"8px 20px"}
          width={"298px"}
          fontSize={"14px"}
          sx={{
            width: { md: "100%", lg: "298px" },
            display: { xs: "none", md: "flex" },
          }}
        >
          Add to cart
        </StyledButton>
        <ShopProductCardBelow
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          <ShopProductCardBelowItem>
            <BiHeart />
            <ShopProductCardBelowItemTitle>
              Wishlist
            </ShopProductCardBelowItemTitle>
          </ShopProductCardBelowItem>
          <ShopProductCardBelowItem>
            <BiHelpCircle />
            <ShopProductCardBelowItemTitle>
              Ask question
            </ShopProductCardBelowItemTitle>
          </ShopProductCardBelowItem>
          <ShopProductCardBelowItem>
            <BiShareAlt />
            <ShopProductCardBelowItemTitle>Share</ShopProductCardBelowItemTitle>
          </ShopProductCardBelowItem>
        </ShopProductCardBelow>
      </ShopProductCardRight>
    </ShopProductCardWrapper>
  );
};

export default ShopProductCard;
