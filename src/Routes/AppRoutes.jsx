import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import About from "../Components/About/About";
import AccountPage from "../Components/AccountPage/AccountPage";
import Cart from "../Components/Cart/Cart";
import CheckoutPage from "../Components/CheckoutPage/CheckoutPage";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import LogIn from "../Components/LogIn/LogIn";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";
import ProductDetailsPage from "../Components/ProductDetailsPage/ProductDetailsPage";
import ProductsCategoryPage from "../Components/ProductsCategory/ProductsCategoryPage";
import ProductsPage from "../Components/ProductsPage/ProductsPage";
import RequiredAuth from "../Components/RequiredAuth/RequiredAuth";
import SignUp from "../Components/SignUp/SignUp";
import WishList from "../Components/WishList/WishList";
import RoutesLayout from "./RoutesLayout";
import FavoritePage from "../Components/FavoritePage/FavoritePage";

const AppRoutes = () => {
  const routes = createRoutesFromChildren(
    <Route path="/" element={<RoutesLayout />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/details" element={<ProductDetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/category" element={<ProductsCategoryPage />} />
      <Route path="/products" element={<ProductsPage />} />

      <Route
        path="/signup"
        element={
          <RequiredAuth>
            <SignUp />
          </RequiredAuth>
        }
      />

      <Route
        path="/login"
        element={
          <RequiredAuth>
            <LogIn />
          </RequiredAuth>
        }
      />

      <Route
        path="/profile"
        element={
          <RequiredAuth>
            <AccountPage />
          </RequiredAuth>
        }
      />
    </Route>
  );

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
