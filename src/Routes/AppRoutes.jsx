import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import NotFoundPage from "../Components/Shared/NotFoundPage/NotFoundPage";
import RoutesLayout from "./RoutesLayout";
import SignUp from "../Components/SignUp/SignUp";

const AppRoutes = () => {
  const routes = createRoutesFromChildren(
    <Route path="/" element={<RoutesLayout />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} /> */}
    </Route>
  );

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
