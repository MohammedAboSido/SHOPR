import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-router-dom";

import { Container } from "../../global/components";
import { PATH } from "./../../constants/index";
import {
  NavbarBg,
  NavbarIcon,
  NavbarIcons,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarLogoImgTwo,
  NavbarWrapper,
} from "./style";

const Navbar = ({ img1, img2 }) => {
  return (
    <NavbarBg>
      <Container>
        <NavbarWrapper>
          <NavbarLogo>
            <NavbarLogoImgTwo src={img2} />
            <NavbarLogoImgTwo src={img1} />
          </NavbarLogo>
          <NavbarLinks>
            <NavbarLink>
              <Link to={PATH.HOME}>Home</Link>
            </NavbarLink>
            <NavbarLink>
              <Link to={PATH.PRODUCTS}>Product</Link>
            </NavbarLink>
            <NavbarLink>
              <Link>Category</Link>
            </NavbarLink>
          </NavbarLinks>
          <NavbarIcons>
            <NavbarIcon>
              <BiSearch />
            </NavbarIcon>
            <NavbarIcon>
              <RxPerson />
            </NavbarIcon>
            <NavbarIcon>
              <BiShoppingBag />
            </NavbarIcon>
            <NavbarIcon>
              <HiOutlineMenuAlt4 />
            </NavbarIcon>
          </NavbarIcons>
        </NavbarWrapper>
      </Container>
    </NavbarBg>
  );
};

export default Navbar;
