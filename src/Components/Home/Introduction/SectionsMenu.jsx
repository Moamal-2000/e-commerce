import { useDispatch, useSelector } from "react-redux";
import {
  menFashionMenuItems,
  otherSectionsMenuItems,
  womenFashionMenuItems,
} from "src/Data/staticData";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import DropDownMenu from "./DropDownMenu";
import s from "./SectionsMenu.module.scss";

const SectionsMenu = () => {
  const dispatch = useDispatch();
  const { isSectionsMenuActive } = useSelector((state) => state.global);
  const activeClass = isSectionsMenuActive ? s.active : "";

  function openSectionMenu() {
    dispatch(updateGlobalState({ key: "isSectionsMenuActive", value: true }));
    dispatch(updateGlobalState({ key: "isOverlayActive", value: true }));
  }

  return (
    <>
      <button
        type="button"
        className={s.sectionsMenuButton}
        onClick={openSectionMenu}
        aria-label="List of sections"
      >
        <SvgIcon name="list" />
      </button>

      <nav className={`${s.sectionsMenu} ${activeClass}`}>
        <DropDownMenu nameMenu="Woman’s Fashion">
          <ul className={s.dropDownMenu}>
            {womenFashionMenuItems.map((item, index) => (
              <li key={`item-${index}`}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </DropDownMenu>

        <DropDownMenu nameMenu="Men’s Fashion">
          <ul className={s.dropDownMenu}>
            {menFashionMenuItems.map((item, index) => (
              <li key={`item-${index}`}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </DropDownMenu>

        {otherSectionsMenuItems.map((item, index) => (
          <a href={item.url} key={`item-${index}`}>
            {item.name}
          </a>
        ))}
      </nav>
    </>
  );
};

export default SectionsMenu;
