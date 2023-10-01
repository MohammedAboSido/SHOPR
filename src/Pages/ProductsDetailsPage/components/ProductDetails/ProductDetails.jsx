import { Alert, CircularProgress } from "@mui/material";
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
    <ProductDetailsWrapper>
      {isLoading && <CircularProgress size={"2rem"} />}
      {error && (
        <Alert sx={{ width: "100%" }} severity="error">
          {error}
        </Alert>
      )}
      <ProductShow data={data} />
      <ProductFeatures data={data} />
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;
