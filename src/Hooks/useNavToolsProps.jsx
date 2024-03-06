import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useNavToolsProps = () => {
  const { isSignIn } = useSelector((state) => state.user);
  const location = useLocation();
  const path = location.pathname;
  const [navToolsProps, setNavToolsProps] = useState("");
  const signInNavTools = {
    showHeart: true,
    showCart: true,
    showUser: true,
  };
  const homePageNavTools = {
    showHeart: true,
    showCart: true,
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

  useEffect(() => {
    const navPropsDependingOnConditions = isSignIn
      ? signInNavTools
      : path === "/"
      ? homePageNavTools
      : path === "/signup" || "/login"
      ? signUpPageNavTools
      : defaultNavTools;

    setNavToolsProps(navPropsDependingOnConditions);
  }, [isSignIn]);

  return navToolsProps;
};
export default useNavToolsProps;
