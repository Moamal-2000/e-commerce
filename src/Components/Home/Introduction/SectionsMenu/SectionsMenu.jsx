import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  menFashionMenuItems,
  otherSectionsMenuItems,
  womenFashionMenuItems,
} from "src/Data/staticData";
import { multiUpdateGlobalState } from "src/Features/globalSlice";
import { camelCase } from "src/Functions/helper";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";
import DropDownMenu from "../DropDownMenu";
import OtherSections from "./OtherSections";
import s from "./SectionsMenu.module.scss";

const SectionsMenu = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isSectionsMenuActive } = useSelector((state) => state.global);
  const activeClass = isSectionsMenuActive ? s.active : "";

  function openSectionMenu() {
    const payload = {
      isSectionsMenuActive: true,
      isOverlayActive: true,
    };
    dispatch(multiUpdateGlobalState(payload));
  }

  return (
    <>
      <button
        type="button"
        onClick={openSectionMenu}
        className={s.sectionsMenuButton}
        aria-label="Toggle sections menu"
      >
        <SvgIcon name="list" />
      </button>

      <nav className={`${s.sectionsMenu} ${activeClass}`}>
        <DropDownMenu nameMenu={t("sectionsMenu.womenFashion.title")}>
          <ul className={s.dropDownMenu}>
            {womenFashionMenuItems.map((item, index) => {
              const itemName = camelCase(item.name);
              const itemTrans = t(
                "sectionsMenu.womenFashion.menuItems." + itemName
              );

              return (
                <li key={`item-${index}`}>
                  <a href={item.url}>{itemTrans}</a>
                </li>
              );
            })}
          </ul>
        </DropDownMenu>

        <DropDownMenu nameMenu={t("sectionsMenu.menFashion.title")}>
          <ul className={s.dropDownMenu}>
            {menFashionMenuItems.map((item, index) => {
              const itemName = camelCase(item.name);
              const itemTrans = t(
                "sectionsMenu.menFashion.menuItems." + itemName
              );
              return (
                <li key={`item-${index}`}>
                  <a href={item.url}>{itemTrans}</a>
                </li>
              );
            })}
          </ul>
        </DropDownMenu>

        <OtherSections data={otherSectionsMenuItems} />
      </nav>
    </>
  );
};

export default SectionsMenu;
