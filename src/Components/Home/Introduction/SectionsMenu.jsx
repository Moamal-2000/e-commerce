import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  menFashionMenuItems,
  otherSectionsMenuItems,
  womenFashionMenuItems,
} from "src/Data/staticData";
import { updateGlobalState } from "src/Features/globalSlice";
import { camelCase } from "src/Functions/helper";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import DropDownMenu from "./DropDownMenu";
import s from "./SectionsMenu.module.scss";

const SectionsMenu = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
        aria-label={t("sectionsMenu.womenFashion")}
      >
        <SvgIcon name="list" />
      </button>

      <nav className={`${s.sectionsMenu} ${activeClass}`}>
        <DropDownMenu nameMenu={t("sectionsMenu.womenFashion")}>
          <ul className={s.dropDownMenu}>
            {womenFashionMenuItems.map((item, index) => (
              <li key={`item-${index}`}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </DropDownMenu>

        <DropDownMenu nameMenu={t("sectionsMenu.menFashion")}>
          <ul className={s.dropDownMenu}>
            {menFashionMenuItems.map((item, index) => (
              <li key={`item-${index}`}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </DropDownMenu>

        {otherSectionsMenuItems.map((item, index) => {
          const itemName = camelCase(item.name);
          const itemTrans = t("sectionsMenu.otherSections." + itemName);

          return (
            <a href={item.url} key={`item-${index}`}>
              {itemTrans}
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default SectionsMenu;
