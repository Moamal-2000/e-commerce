import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Home from "../homePage/Home";
import RoutesLayout from "./RoutesLayout";
import NotFoundPage from "../Shared/NotFoundPage";

const AppRoutes = () => {
  const routes = createRoutesFromChildren(
    <Route path="/" element={<RoutesLayout />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index element={<Home />} />
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} /> */}
    </Route>
  );

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
