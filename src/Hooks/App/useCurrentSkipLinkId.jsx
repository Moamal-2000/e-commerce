import { useLocation } from "react-router-dom";
import { PAGE_SECTIONS_ID } from "src/Data/pagesData";

const useCurrentSkipLinkId = () => {
  const { pathname } = useLocation();

  const sectionId = findSectionLinkIdByPath(pathname);
  const notFoundSectionId = PAGE_SECTIONS_ID.at(-1)?.id;

  return sectionId || notFoundSectionId;
};
export default useCurrentSkipLinkId;

export function findSectionLinkIdByPath(pathname) {
  const sectionData = PAGE_SECTIONS_ID.find(({ path }) => path === pathname);
  return sectionData?.id;
}
