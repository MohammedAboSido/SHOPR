import img1 from "../../assets/images/log01.svg";
import img2 from "../../assets/images/log02.svg";
import Navbar from "../../components/Navbar/Navbar";
import { ContainerTwo } from "../../global/components";
import ProductDetails from "./components/ProductDetails";
import {
  ProductsDetailsPageContainer,
  ProductsDetailsPageWrapper,
} from "./style";

const ProductsDetailsPage = () => {
  return (
    <ProductsDetailsPageWrapper>
      <Navbar img1={img1} img2={img2} />
      <ContainerTwo>
        <ProductsDetailsPageContainer>
          <ProductDetails />
        </ProductsDetailsPageContainer>
      </ContainerTwo>
    </ProductsDetailsPageWrapper>
  );
};

export default ProductsDetailsPage;
