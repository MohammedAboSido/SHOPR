import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

function Routers() {
  const routes = useRoutes([{}]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </>
  );
}

export default Routers;
