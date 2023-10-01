import { useState } from "react";
import img1 from "../../../../assets/images/selectProduct/Paste image.png";
import { selectProductData } from "../../../../mock";
import {
  MainProductImg,
  MainProductWrapper,
  ProductContainer,
  ProductImg,
  ProductShowWrapper,
  ProductsList,
} from "./style";
const images = {
  1: img1,
  2: img1,
  3: img1,
  4: img1,
};
const ProductShow = () => {
  const [product, setProduct] = useState("");
  return (
    <ProductShowWrapper>
      <MainProductWrapper>
        <MainProductImg src={product} />
      </MainProductWrapper>
      <ProductsList>
        {selectProductData.map((item) => {
          return (
            <ProductContainer
              key={item.id}
              onClick={() => setProduct(images[item.id])}
            >
              <ProductImg src={item.img} />
            </ProductContainer>
          );
        })}
      </ProductsList>
    </ProductShowWrapper>
  );
};

export default ProductShow;
