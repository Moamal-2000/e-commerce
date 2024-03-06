import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useNavToolsProps = () => {
  const { isSignIn } = useSelector((state) => state.user);
  const location = useLocation();
  const path = location.pathname;
  const signInNavTools = {
    showHeart: true,
    showCart: true,
    showUser: true,
  };
  const homePageNavTools = {
    showUser: false,
  };
  const signUpPageNavTools = {
    showHeart: false,
    showCart: false,
    showUser: false,
  };
  const defaultNavTools = {
    showUser: true,
  };
  const navToolsProps = isSignIn
    ? signInNavTools
    : path === "/"
    ? homePageNavTools
    : path === "/signup" || "/login"
    ? signUpPageNavTools
    : defaultNavTools;

  return navToolsProps;
};
export default useNavToolsProps;
