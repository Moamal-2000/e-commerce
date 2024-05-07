import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { pagesRequireSignIn } from "../Data/globalVariables";
import { showAlert } from "../Features/globalSlice";

const RequiredAuth = ({ children }) => {
  const { loginInfo } = useSelector((state) => state.user);
  const { isSignIn } = loginInfo;
  const location = useLocation();
  const dispatch = useDispatch();
  const pathName = location.pathname;
  const isLoginOrSignUpPage = pathName === "/login" || pathName === "/signup";

  const isPageRequiringSignIn = (page) =>
    pagesRequireSignIn.includes(page) && !isSignIn;

  if (isLoginOrSignUpPage && isSignIn) return <Navigate to="/" />;
  if (isPageRequiringSignIn(pathName)) {
    loginFirstAlert();
    return <Navigate to="/signup" />;
  }

  function loginFirstAlert() {
    const alertText = "Please sign in to visit this page";
    const alertState = "warning";
    dispatch(showAlert({ alertText, alertState }));
  }

  return children;
};

export default RequiredAuth;
