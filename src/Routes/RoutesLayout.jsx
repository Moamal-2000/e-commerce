import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import FirstHeader from "../Components/Header/FirstHeader";
import Header from "../Components/Header/Header";
import MobileNav from "../Components/Header/MobileNav";
import ConnectionLabelAlert from "../Components/Shared/MiniComponents/ConnectionLabelAlert";
import GlobalOverlay from "../Components/Shared/MiniComponents/GlobalOverlay";
import ScrollToTop from "../Components/Shared/MiniComponents/ScrollToTop";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink";
import useCurrentSkipLinkId from "../Hooks/App/useCurrentSkipLinkId";
import useOnlineStatus from "../Hooks/Helper/useOnlineStatus";

const RoutesLayout = () => {
  const skipLinkSectionId = useCurrentSkipLinkId();
  const isWebsiteOnline = useOnlineStatus();

  return (
    <div className="App" tabIndex="-1">
      <SkipContentLink scrollTo={skipLinkSectionId} />
      <FirstHeader />
      <Header />
      <MobileNav />
      <GlobalOverlay />
      <Outlet />
      <ScrollToTop />
      <Footer />
      <ConnectionLabelAlert
        isOnline={isWebsiteOnline}
        isOffline={!isWebsiteOnline}
      />
    </div>
  );
};
export default RoutesLayout;
