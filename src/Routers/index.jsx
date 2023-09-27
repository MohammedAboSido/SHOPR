import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import { PATH } from "../constants";
const SignUp = lazy(() => import("../pages/SignUpPage"));
const HomePage = lazy(() => import("../Pages/HomePage"));
const SignInPage = lazy(() => import("../Pages/SignInPage"));
function Routers() {
  const routes = useRoutes([
    { path: PATH.INDEX, element: <HomePage /> },
    { path: PATH.HOME, element: <HomePage /> },
    { path: PATH.REGISTER, element: <SignUp /> },
    { path: PATH.LOGIN, element: <SignInPage /> },
  ]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </>
  );
}

export default Routers;
