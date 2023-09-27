import { BsArrowRight } from "react-icons/bs";

import img1 from "../../assets/images/brands/01.png";
import img2 from "../../assets/images/brands/02.png";
import img3 from "../../assets/images/brands/04.png";
import img4 from "../../assets/images/brands/05.png";
import img5 from "../../assets/images/brands/06.png";
import img6 from "../../assets/images/brands/07.png";
import { Container, StyledLink } from "../../global/components";
import {
  AllBrands,
  BgBrands,
  BrandIcon,
  BrandsDetails,
  BrandsDetailsDescription,
  BrandsDetailsTitle,
  BrandsIcon,
  BrandsWrapper,
} from "./style";

const Brands = () => {
  return (
    <BgBrands>
      <Container>
        <BrandsWrapper>
          <BrandsDetails>
            <BrandsDetailsTitle>Shop brands</BrandsDetailsTitle>
            <BrandsDetailsDescription>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atqu.
            </BrandsDetailsDescription>
            <AllBrands>
              <StyledLink>See all brands </StyledLink>
              <BsArrowRight />
            </AllBrands>
          </BrandsDetails>
          <BrandsIcon>
            <BrandIcon src={img1} />
            <BrandIcon src={img2} />
            <BrandIcon src={img3} />
            <BrandIcon src={img4} />
            <BrandIcon src={img5} />
            <BrandIcon src={img6} />
          </BrandsIcon>
        </BrandsWrapper>
      </Container>
    </BgBrands>
  );
};

export default Brands;
