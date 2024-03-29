import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useNavToolsProps = () => {
  const [navToolsProps, setNavToolsProps] = useState({});
  const {
    loginInfo: { isSignIn },
  } = useSelector((state) => state.user);
  const location = useLocation();
  const path = location.pathname;
  const navProps = {
    signIn: {
      showHeart: true,
      showCart: true,
      showUser: true,
    },
    notSignIn: {
      showHeart: false,
      showCart: false,
      showUser: false,
    },
    signUpPage: {
      showHeart: false,
      showCart: false,
      showUser: false,
    },
  };

  const setSelectedNavProps = () => {
    let selectedNavProps = navProps.default;

    if (!isSignIn) {
      selectedNavProps = navProps.notSignIn;
    } else if (path === "/signup" || path === "/login") {
      selectedNavProps = navProps.signUpPage;
    } else if (isSignIn) {
      selectedNavProps = navProps.signIn;
    }

    setNavToolsProps(selectedNavProps);
  };

  useEffect(() => {
    setSelectedNavProps();
  }, [isSignIn, path]);

  return navToolsProps;
};

export default useNavToolsProps;
