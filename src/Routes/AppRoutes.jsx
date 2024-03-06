import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import LogIn from "../Components/LogIn/LogIn";
import SignUp from "../Components/SignUp/SignUp";
import RoutesLayout from "./RoutesLayout";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";
import WishList from "../Components/WishList/WishList";

const AppRoutes = () => {
  const routes = createRoutesFromChildren(
    <Route path="/" element={<RoutesLayout />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/wishlist" element={<WishList />} />
    </Route>
  );

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
