import { useLocation } from "react-router-dom";
import { PAGE_SECTIONS_ID } from "src/Data/pagesData";

const useCurrentSkipLinkId = () => {
  const { pathname } = useLocation();

  function findSectionLinkIdByPath() {
    return PAGE_SECTIONS_ID.find(
      (sectionData) => sectionData.pagePath === pathname
    )?.sectionId;
  }

  const sectionId = findSectionLinkIdByPath();
  const defaultSectionId =
    PAGE_SECTIONS_ID[PAGE_SECTIONS_ID.length - 1].sectionId;

  return sectionId || defaultSectionId;
};
export default useCurrentSkipLinkId;
