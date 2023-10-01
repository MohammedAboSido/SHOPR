import ProductFeatures from "../ProductFeatures";
import ProductShow from "../ProductShow";
import { ProductDetailsWrapper } from "./style";

const ProductDetails = () => {
  return (
    <ProductDetailsWrapper>
      <ProductShow />
      <ProductFeatures />
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
