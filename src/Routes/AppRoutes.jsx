import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import RequiredAuth from "./RequiredAuth";
import RoutesLayout from "./RoutesLayout";
import { ROUTES_CONFIG } from "./roots";

const AppRoutes = () => {
  const routes = createRoutesFromChildren(
    <Route path="/" element={<RoutesLayout />}>
      {ROUTES_CONFIG.map(({ path, element }, index) => (
        <Route
          key={index}
          path={path}
          element={<RequiredAuth>{element}</RequiredAuth>}
        />
      ))}
    </Route>
  );

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
