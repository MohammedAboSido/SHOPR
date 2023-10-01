import product1 from "../../assets/images/shop/shop-product-1.png";
import Layout from "../../components/Layout/Layout";
import { Container } from "../../global/components";
import ShopHeader from "./components/ShopHeader";
import ShopProductCard from "./components/ShopProductCard";
import {
  ProductCount,
  ProductsPageProductCounts,
  ProductsPageWrapper,
  ShopProductCards,
} from "./style";
const ProductsPage = () => {
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
              134 products
            </ProductCount>
          </ProductsPageProductCounts>
          <ShopProductCards sx={{ flexDirection: { sm: "row", md: "column" } }}>
            <ShopProductCard
              title={"iPhone Charger Fast Charging"}
              description={
                "USB C to Lightning Cable 3 Pack 6 FT [MFi Certified] iPhone Cable Type C to Lightning Cable Fast Charging Cord Compatible with iPhone 14 13 12 11 Pro Max X Plus and More"
              }
              discount={72}
              price={24.99}
              rate={5}
              img={product1}
              id={"1"}
            />
            <ShopProductCard
              title={"iPhone Charger Fast Charging"}
              description={
                "USB C to Lightning Cable 3 Pack 6 FT [MFi Certified] iPhone Cable Type C to Lightning Cable Fast Charging Cord Compatible with iPhone 14 13 12 11 Pro Max X Plus and More"
              }
              discount={72}
              price={24.99}
              rate={5}
              img={product1}
            />
            <ShopProductCard
              title={"iPhone Charger Fast Charging"}
              description={
                "USB C to Lightning Cable 3 Pack 6 FT [MFi Certified] iPhone Cable Type C to Lightning Cable Fast Charging Cord Compatible with iPhone 14 13 12 11 Pro Max X Plus and More"
              }
              discount={72}
              price={24.99}
              rate={5}
              img={product1}
            />
            <ShopProductCard
              title={"iPhone Charger Fast Charging"}
              description={
                "USB C to Lightning Cable 3 Pack 6 FT [MFi Certified] iPhone Cable Type C to Lightning Cable Fast Charging Cord Compatible with iPhone 14 13 12 11 Pro Max X Plus and More"
              }
              discount={72}
              price={24.99}
              rate={5}
              img={product1}
            />
          </ShopProductCards>
        </Container>
      </ProductsPageWrapper>
    </Layout>
  );
};

export default ProductsPage;
