import { Alert } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../../hooks/useApi";
import ProductFeatures from "../ProductFeatures";
import ProductShow from "../ProductShow/ProductShow";
import { ProductDetailsWrapper } from "./style";

const ProductDetails = () => {
  const { id } = useParams();
  const { get, error, isLoading, data } = useApi(
    `https://e-commerce-api-fylh.onrender.com/api/products/${id}`
  );
  useEffect(() => {
    get();
  }, []);
  return (
    <ProductDetailsWrapper
      sx={{
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "16px", md: "0" },
        margin: { xs: "0", md: " 52px 0" },
        gap: { xs: "0", md: "0", lg: "82px" },
      }}
    >
      {error && (
        <Alert sx={{ width: "100%" }} severity="error">
          {error}
        </Alert>
      )}
      <ProductShow data={data} isLoading={isLoading} />
      <ProductFeatures data={data} />
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
