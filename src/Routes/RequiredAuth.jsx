import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { pagesRequireSignIn } from "../Data/globalVariables";

const RequiredAuth = ({ children }) => {
  const { loginInfo } = useSelector((state) => state.user);
  const { isSignIn } = loginInfo;
  const location = useLocation();
  const pathName = location.pathname;
  const isLoginOrSignUpPage = pathName === "/login" || pathName === "/signup";

  const isPageRequiringSignIn = (page) =>
    pagesRequireSignIn.includes(page) && !isSignIn;

  if (isLoginOrSignUpPage && isSignIn) return <Navigate to="/" />;
  if (isPageRequiringSignIn(pathName)) return <Navigate to="/signup" />;

  return children;
};

export default RequiredAuth;
