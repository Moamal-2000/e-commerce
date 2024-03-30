import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const userState = useSelector((state) => state.user);
  const {
    loginInfo: { isSignIn },
  } = userState;
  const location = useLocation();
  const pathName = location.pathname;
  const isLoginOrSignUpPage = pathName === "/login" || pathName === "/signup";
  const pagesRequireSignIn = [
    "/favorites",
    "/checkout",
    "/profile",
    "/wishlist",
    "/cart",
  ];

  const isPageRequiringSignIn = (isPage) =>
    pagesRequireSignIn.includes(isPage) && !isSignIn;

  if (isLoginOrSignUpPage && isSignIn) return <Navigate to="/" />;
  if (isPageRequiringSignIn(pathName)) return <Navigate to="/signup" />;

  return children;
};

export default RequiredAuth;
