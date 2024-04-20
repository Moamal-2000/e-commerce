import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import FirstHeader from "../Components/Header/FirstHeader/FirstHeader";
import ConnectionLabelAlert from "../Components/Shared/MiniComponents/ConnectionLabelAlert/ConnectionLabelAlert";
import GlobalOverlay from "../Components/Shared/MiniComponents/GlobalOverlay/GlobalOverlay";
import ScrollToTop from "../Components/Shared/MiniComponents/ScrollToTop/ScrollToTop";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink";
import useCurrentSkipLinkId from "../Hooks/App/useCurrentSkipLinkId";
import useOnlineStatus from "../Hooks/Helper/useOnlineStatus";
import Header from "../Components/Header/Header/Header";
import MobileNav from "../Components/Shared/MobileNav/MobileNav";

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
      <ScrollToTop />
      <Outlet />
      <Footer />
      <ConnectionLabelAlert isOnline={isWebsiteOnline} />
    </div>
  );
};
export default RoutesLayout;
