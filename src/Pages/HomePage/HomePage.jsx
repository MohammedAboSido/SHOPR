
import img from "../../assets/images/Dot.svg";
import img1 from "../../assets/images/log01.svg";
import img2 from "../../assets/images/log02.svg";
import Additions from "../../components/Additions";
import Brands from "../../components/Brands/Brands";
import Categories from "../../components/Categories";
import Collection from "../../components/Collection";
import Navbar from "../../components/Navbar/Navbar";
import Trending from "../../components/Trending/Trending";
import Hero from "../../components/hero section/hero";
import Instagram from "../../components/instagram section/instagram";
import Offer from "../../components/offer section/Offer";
import { HomePageWrapper } from "./style";
const HomePage = () => {
    return (
        <HomePageWrapper>
            <Offer/>
            <Navbar img1={img1} img2={img2} />
            <Hero/>
            <Categories />
            <Collection />
            <Additions img={img} />
            <Brands />
            <Trending />
            <Instagram />
        </HomePageWrapper>
    );
}

export default HomePage;