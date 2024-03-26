import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isSignIn } = useSelector((state) => state.user);
  const location = useLocation();

  if (location.pathname === "/profile" && !isSignIn) {
    return <Navigate to="/signup" />;
  }

  if (location.pathname === "/login" && isSignIn) {
    return <Navigate to="/" />;
  }

  if (location.pathname === "/signup" && isSignIn) {
    return <Navigate to="/" />;
  }

  return children;
};
export default RequiredAuth;
