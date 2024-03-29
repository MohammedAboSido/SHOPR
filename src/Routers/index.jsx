import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import { PATH } from "../constants";
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ProductsDetailsPage = lazy(() => import("../pages/ProductsDetailsPage"));
const SignUp = lazy(() => import("../pages/SignUpPage"));
const SignInPage = lazy(() => import("../pages/SignInPage"));
const ProductsPage = lazy(() => import("../Pages/ProductsPage"));
function Routers() {
  const routes = useRoutes([
    { path: PATH.INDEX, element: <HomePage /> },
    { path: PATH.HOME, element: <HomePage /> },
    { path: PATH.PRODUCTDETAILS, element: <ProductsDetailsPage /> },
    { path: PATH.REGISTER, element: <SignUp /> },
    { path: PATH.LOGIN, element: <SignInPage /> },
    { path: PATH.PRODUCTS, element: <ProductsPage /> },
    { path: PATH.CATEGORY, element: <CategoryPage /> },
    { path: PATH.PROFILE, element: <ProfilePage /> },
  ]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </>
  );
}

export default Routers;
