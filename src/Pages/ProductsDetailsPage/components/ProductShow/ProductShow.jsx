import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import {
  MainProductImg,
  MainProductWrapper,
  ProductContainer,
  ProductImg,
  ProductShowWrapper,
  ProductsList,
} from "./style";

const ProductShow = ({ data, isLoading }) => {
  const [product, setProduct] = useState("");
  useEffect(() => {
    setProduct(data.thumbnail);
  }, [data.thumbnail]);

  return (
    <ProductShowWrapper
      sx={{
        width: { xs: "100%", md: "570px" },
      }}
    >
      <MainProductWrapper sx={{}}>
        {isLoading && (
          <CircularProgress
            size={"2rem"}
            sx={{
              position: "relative",
              left: "50%",
              top: "50%",
              translate: "-50% -50%",
            }}
          />
        )}
        <MainProductImg src={product} alt="" />
      </MainProductWrapper>
      <ProductsList sx={{ display: { xs: "none", md: "flex" } }}>
        {data.images?.map((item) => {
          return (
            <ProductContainer key={item} onClick={() => setProduct(item)}>
              <ProductImg src={item} />
            </ProductContainer>
          );
        })}
      </ProductsList>
    </ProductShowWrapper>
  );
};

export default ProductShow;
