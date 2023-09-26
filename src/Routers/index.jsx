import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import { PATH } from "../constants";
const HomePage =lazy(()=>import("../Pages/HomePage"))
function Routers() {
  const routes = useRoutes([
    {path:PATH.HOME  ,  element: <HomePage/>},
  ]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </>
  );
}

export default Routers;
