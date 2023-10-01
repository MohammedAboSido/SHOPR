import { Alert, AlertTitle, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { Container } from "../../global/components";
import useApi from "./../../hooks/useApi";
import ShopHeader from "./components/ShopHeader";
import ShopProductCard from "./components/ShopProductCard";
import {
  ProductCount,
  ProductsPageProductCounts,
  ProductsPageWrapper,
  ShopProductCards,
} from "./style";
const ProductsPage = () => {
  const { isLoading, error, data, get } = useApi(
    "https://e-commerce-api-fylh.onrender.com/api/products"
  );

  useEffect(() => {
    get();
  }, []);

  return (
    <Layout>
      <ProductsPageWrapper>
        <ShopHeader />
        <Container>
          <ProductsPageProductCounts>
            <ProductCount
              variant="body2"
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
            >
              {data.length} products
            </ProductCount>
          </ProductsPageProductCounts>
          <ShopProductCards sx={{ flexDirection: { sm: "row", md: "column" } }}>
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
            {error.length > 0 && (
              <Alert severity="error" sx={{ width: "100%" }}>
                <AlertTitle>Error</AlertTitle>
                {error} — <strong>check it out!</strong>
              </Alert>
            )}
            {data.length > 0 &&
              data.map((item) => (
                <ShopProductCard
                  title={item.title}
                  description={item.description}
                  discount={item.discount}
                  price={item.price}
                  rate={item.rate}
                  img={item.thumbnail}
                  id={item.id}
                  key={item.id}
                />
              ))}
          </ShopProductCards>
        </Container>
      </ProductsPageWrapper>
    </Layout>
  );
};

export default ProductsPage;
