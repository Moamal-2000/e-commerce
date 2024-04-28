import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import AccountMenuIcon from "./AccountMenuIcon";
import s from "./AccountMenuSection.module.scss";

const AccountMenuSection = () => {
  const { isProfileMenuActive } = useSelector((state) => state.global);
  const { width: windowWidth } = useGetResizeWindow();
  const { t } = useTranslation();
  const isMobileDevice = windowWidth < 768;
  const mobileClass = isMobileDevice ? s.mobile : "";
  const activeClass = isProfileMenuActive ? s.active : "";
  const accountMenu = "accountPage.accountMenuSection";

  return (
    <>
      <AccountMenuIcon />

      <section className={`${s.menuSection} ${mobileClass} ${activeClass}`}>
        <section className={s.section}>
          <h2>{t(`${accountMenu}.manageMyAccount`)}</h2>

          <ul>
            <li>
              <NavLink to="/profile">{t(`${accountMenu}.profile`)}</NavLink>
            </li>

            <li>
              <a href="#">{t(`${accountMenu}.addressBook`)}</a>
            </li>

            <li>
              <a href="#">{t(`${accountMenu}.paymentOptions`)}</a>
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>{t(`${accountMenu}.myOrders`)}</h2>

          <ul>
            <li>
              <a href="#">{t(`${accountMenu}.myOrders`)}</a>
            </li>

            <li>
              <a href="#">{t(`${accountMenu}.returns`)}</a>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};
export default AccountMenuSection;
