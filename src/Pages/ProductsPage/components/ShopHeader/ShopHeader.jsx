import img from "../../../../assets/images/shop/shop-1.png";
import {
  BreadcrumbsWrapper,
  NavigateNextIcon,
  ShopHeaderCurrentPage,
  ShopHeaderDescription,
  ShopHeaderLink,
  ShopHeaderTitle,
  ShopHeaderWrapper,
} from "./style";

const ShopHeader = () => {
  const breadcrumbs = [
    <ShopHeaderLink key="1" to="/">
      Home
    </ShopHeaderLink>,
    <ShopHeaderCurrentPage key="2">Shop</ShopHeaderCurrentPage>,
  ];
  return (
    <ShopHeaderWrapper sx={{ height: { xs: "232px", md: "467px" } }} img={img}>
      <BreadcrumbsWrapper separator={<NavigateNextIcon fontSize="small" />}>
        {breadcrumbs}
      </BreadcrumbsWrapper>
      <ShopHeaderTitle
        variant="h3"
        sx={{ fontSize: { xs: "34px", md: "54px" } }}
      >
        Shop
      </ShopHeaderTitle>
      <ShopHeaderDescription
        sx={{
          fontSize: { xs: "12px", md: "18px" },
          width: { xs: "100%", md: "450px", lg: "600px" },
        }}
        variant="body2"
      >
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis voluptatum deleniti.
      </ShopHeaderDescription>
    </ShopHeaderWrapper>
  );
};

export default ShopHeader;
