import { useState } from "react";
import {
  MainProductImg,
  MainProductWrapper,
  ProductContainer,
  ProductImg,
  ProductShowWrapper,
  ProductsList,
} from "./style";

const ProductShow = ({ data }) => {
  const [product, setProduct] = useState(data.thumbnail);
  return (
    <ProductShowWrapper>
      <MainProductWrapper>
        <MainProductImg src={product} />
      </MainProductWrapper>
      <ProductsList>
        {data.images.map((item) => {
          return (
            <ProductContainer key={item} onClick={() => setProduct([item])}>
              <ProductImg src={item} />
            </ProductContainer>
          );
        })}
      </ProductsList>
    </ProductShowWrapper>
  );
};

export default ProductShow;
