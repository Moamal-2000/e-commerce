import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SCREEN_SIZES } from "src/Data/globalVariables";
import {
  menFashionMenuItems,
  otherSectionsMenuItems,
  womenFashionMenuItems,
} from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import DropDownMenu from "./DropDownMenu";
import OtherSections from "./OtherSections";
import s from "./SectionsMenu.module.scss";
import SectionsMenuButton from "./SectionsMenuButton";
import SectionsMenuCloseBtn from "./SectionsMenuCloseBtn/SectionsMenuCloseBtn";

const SectionsMenu = () => {
  const { t } = useTranslation();
  const { isSectionsMenuActive } = useSelector((state) => state.global);
  const activeClass = isSectionsMenuActive ? s.active : "";
  const { windowWidth } = useGetResizeWindow();

  return (
    <>
      <SectionsMenuButton />

      <aside className={`${s.sectionsMenu} ${activeClass}`}>
        {windowWidth <= SCREEN_SIZES.desktop && <SectionsMenuCloseBtn />}

        <h2>{t("sectionsMenu.title")}</h2>

        <DropDownMenu nameMenu={t("sectionsMenu.womenFashion.title")}>
          <ul className={s.dropDownMenu} role="menu">
            {womenFashionMenuItems.map((item, index) => {
              const itemName = camelCase(item.name);
              const itemTrans = t(
                "sectionsMenu.womenFashion.menuItems." + itemName
              );

              return (
                <li key={`item-${index}`} role="menuitem">
                  <a href={item.url}>{itemTrans}</a>
                </li>
              );
            })}
          </ul>
        </DropDownMenu>

        <DropDownMenu nameMenu={t("sectionsMenu.menFashion.title")}>
          <ul className={s.dropDownMenu} role="menu">
            {menFashionMenuItems.map((item, index) => {
              const itemName = camelCase(item.name);
              const itemTrans = t(
                "sectionsMenu.menFashion.menuItems." + itemName
              );
              return (
                <li key={`item-${index}`} role="menuitem">
                  <a href={item.url}>{itemTrans}</a>
                </li>
              );
            })}
          </ul>
        </DropDownMenu>

        <OtherSections data={otherSectionsMenuItems} />
      </aside>
    </>
  );
};

export default SectionsMenu;
