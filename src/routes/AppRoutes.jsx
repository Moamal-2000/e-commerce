import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import RoutesLayout from "./RoutesLayout";
import Home from "../components/homePage/Home";
import NotFoundPage from "../components/Shared/NotFoundPage";

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
