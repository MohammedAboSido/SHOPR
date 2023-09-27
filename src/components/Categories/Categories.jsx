import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../assets/images/category/01.png";
import img2 from "../../assets/images/category/02.png";
import img3 from "../../assets/images/category/03.png";
import img4 from "../../assets/images/category/04.png";
import img5 from "../../assets/images/category/05.png";
import { Container, StyledLink } from "../../global/components";
import CategoryCard from "../CategoryCard";
import {
  BgCategories,
  CategoriesHeading,
  CategoriesHeadingTitle,
  CategoriesWrapper,
  CategoryCardsWrapper,
} from "./style";
const Categories = () => {
  return (
    <BgCategories>
      <Container>
        <CategoriesWrapper>
          <CategoriesHeading>
            <CategoriesHeadingTitle>Categories</CategoriesHeadingTitle>
            <StyledLink>See all categories</StyledLink>
          </CategoriesHeading>
          <CategoryCardsWrapper>
            <Swiper
              slidesPerView={5.5}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <CategoryCard img={img1} title="Pink Panther" />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img2} title="Gold Crest" />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img3} title="Hot Lips" />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img4} title="Brown Sugar" />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img5} title="Red Velvet" />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img3} title="Red Velvet" />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img4} title="Red Velvet" />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img1} title="Red Velvet" />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img2} title="Red Velvet" />
              </SwiperSlide>
              <SwiperSlide>
                <CategoryCard img={img5} title="Red Velvet" />
              </SwiperSlide>
            </Swiper>
          </CategoryCardsWrapper>
        </CategoriesWrapper>
      </Container>
    </BgCategories>
  );
};

export default Categories;
