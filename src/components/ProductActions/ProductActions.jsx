import { BiHeart, BiHelpCircle, BiShareAlt } from "react-icons/bi";
import {
  ProductActionsItem,
  ProductActionsItemTitle,
  ProductActionsWrapper,
} from "./style";
const ProductActions = () => {
  return (
    <>
      <ProductActionsWrapper
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <ProductActionsItem>
          <BiHeart />
          <ProductActionsItemTitle to={"/#"}>Wishlist</ProductActionsItemTitle>
        </ProductActionsItem>
        <ProductActionsItem>
          <BiHelpCircle />
          <ProductActionsItemTitle to={"/#"}>
            Ask question
          </ProductActionsItemTitle>
        </ProductActionsItem>
        <ProductActionsItem>
          <BiShareAlt />
          <ProductActionsItemTitle to={"/#"}>Share</ProductActionsItemTitle>
        </ProductActionsItem>
      </ProductActionsWrapper>
    </>
  );
};

export default ProductActions;
