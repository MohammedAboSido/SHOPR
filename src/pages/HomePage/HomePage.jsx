import { Instagram } from "@mui/icons-material";
import img from "../../assets/images/Dot.svg";
import Layout from "../../components/Layout/Layout";
import {
  Additions,
  Brands,
  Categories,
  Collection,
  Hero,
  Newsletter,
  Offer,
  Trending,
} from "./index";
import { HomePageWrapper } from "./style";
const HomePage = () => {
  return (
    <>
      <Offer />
      <Layout>
        <HomePageWrapper>
          <Hero />
          <Categories />
          <Collection />
          <Additions img={img} />
          <Brands />
          <Trending />
          <Newsletter />
          <Instagram />
        </HomePageWrapper>
      </Layout>
    </>
  );
};
export default HomePage;
