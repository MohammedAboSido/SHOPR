import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import { PATH } from "./../constants/index";
const HomePage = lazy(() => import("../pages/HomePage"));

function Routers() {
  const routes = useRoutes([{ path: PATH.HOME, element: <HomePage /> }]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </>
  );
}

export default Routers;
