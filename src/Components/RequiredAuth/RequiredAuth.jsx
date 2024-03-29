import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const {
    loginInfo: { isSignIn },
  } = useSelector((state) => state.user);
  const location = useLocation();

  console.log('isSignIn', isSignIn);

  // console.log("profile", location.pathname === "/profile" && !isSignIn);
  if (location.pathname === "/profile" && !isSignIn) {
    return <Navigate to="/signup" />;
  }

  // console.log("login", location.pathname === "/login", isSignIn);
  if (location.pathname === "/login" && isSignIn) {
    return <Navigate to="/" />;
  }

  if (location.pathname === "/signup" && isSignIn) {
    return <Navigate to="/" />;
  }

  if (location.pathname === "/checkout" && !isSignIn) {
    console.log("Yes");
    return <Navigate to="/login" />;
  }

  return children;
};
export default RequiredAuth;
