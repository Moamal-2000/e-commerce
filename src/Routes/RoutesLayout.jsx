import { Outlet } from "react-router-dom";
import FirstHeader from "../Components/Header/FirstHeader";
import GlobalOverlay from "../Components/Shared/MiniComponents/GlobalOverlay";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink";

const RoutesLayout = () => {
  return (
    <>
      <SkipContentLink scrollTo="sections-products" />
      <GlobalOverlay />
      <FirstHeader />
      <Outlet />
    </>
  );
};
export default RoutesLayout;
