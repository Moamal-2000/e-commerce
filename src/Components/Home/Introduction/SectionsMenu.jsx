import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "src/Features/globalSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import DropDownMenu from "./DropDownMenu";
import s from "./SectionsMenu.module.scss";

const SectionsMenu = () => {
  const dispatch = useDispatch();
  const { isSectionsMenuActive } = useSelector((state) => state.global);

  return (
    <>
      <button
        type="button"
        className={s.sectionsMenuButton}
        onClick={() => {
          dispatch(toggleState({ key: "isSectionsMenuActive", value: true }));
          dispatch(toggleState({ key: "isOverlayActive", value: true }));
        }}
        aria-label="List of sections"
      >
        <SvgIcon name="list" />
      </button>

      <nav
        className={`${s.sectionsMenu} ${isSectionsMenuActive ? s.active : ""}`}
      >
        <DropDownMenu nameMenu="Woman’s Fashion">
          <ul className={s.dropDownMenu}>
            <li>
              <a href="\#">Elegant Evening Dress</a>
            </li>
            <li>
              <a href="\#">Chic Blouse and Tailored Trousers</a>
            </li>
            <li>
              <a href="\#">Statement Handbag</a>
            </li>
            <li>
              <a href="\#">Versatile Denim Jacket</a>
            </li>
            <li>
              <a href="\#">Comfortable Yet Stylish Sneakers</a>
            </li>
          </ul>
        </DropDownMenu>

        <DropDownMenu nameMenu="Men’s Fashion">
          <ul className={s.dropDownMenu}>
            <li>
              <a href="\#">Tailored Suit</a>
            </li>
            <li>
              <a href="\#">Casual Button-Down Shirts</a>
            </li>
            <li>
              <a href="\#">Slim-Fit Jeans</a>
            </li>
            <li>
              <a href="\#">Leather Accessories</a>
            </li>
            <li>
              <a href="\#">Modern Sneakers</a>
            </li>
          </ul>
        </DropDownMenu>

        <a href="\#">Electronics</a>
        <a href="\#">Home & Lifestyle</a>
        <a href="\#">Medicine</a>
        <a href="\#">Sports & Outdoor</a>
        <a href="\#">Baby's & Toys</a>
        <a href="\#">Groceries & Pets</a>
        <a href="\#">Health & Beauty</a>
      </nav>
    </>
  );
};

export default SectionsMenu;
