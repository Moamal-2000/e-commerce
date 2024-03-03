import { useLocation } from "react-router-dom";

const useNavToolsProps = () => {
  const location = useLocation();
  const path = location.pathname;
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
  const navToolsProps =
    path === "/"
      ? homePageNavTools
      : path === "/signup"
      ? signUpPageNavTools
      : defaultNavTools;

  return navToolsProps;
};
export default useNavToolsProps;
