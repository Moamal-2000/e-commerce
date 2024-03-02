import { Outlet } from "react-router-dom";
import FirstHeader from "../Components/Header/FirstHeader";
import GlobalOverlay from "../Components/Shared/MiniComponents/GlobalOverlay";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink";
import Header from "../Components/Header/Header";
import MobileNav from "../Components/Header/MobileNav";
import Footer from "../Components/Footer/Footer";

const RoutesLayout = () => {
  return (
    <>
      <SkipContentLink scrollTo="sections-products" />
      <FirstHeader />
      <Header />
      <MobileNav />
      <GlobalOverlay />
      <Outlet />
      <Footer />
    </>
  );
};
export default RoutesLayout;
