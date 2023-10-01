import img from "../../assets/images/Dot.svg";
import Layout from "../../components/Layout";
import {
  Additions,
  Brands,
  Categories,
  Collection,
  Hero,
  Instagram,
  Newsletter,
  Trending,
} from "./index";
import { HomePageWrapper } from "./style";
const HomePage = () => {
  return (
    <HomePageWrapper>
      <Layout>
        <Hero />
        <Categories />
        <Collection />
        <Additions img={img} />
        <Brands />
        <Trending />
        <Newsletter />
        <Instagram />
      </Layout>
    </HomePageWrapper>
  );
};
export default HomePage;
