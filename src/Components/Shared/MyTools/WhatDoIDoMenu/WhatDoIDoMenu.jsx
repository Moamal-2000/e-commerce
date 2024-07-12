import { useDispatch, useSelector } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./WhatDoIDoMenu.module.scss";

const WhatDoIDoMenu = () => {
  const { isWhatDoIDoMenuActive } = useSelector((state) => state.global);
  const activeClass = isWhatDoIDoMenuActive ? s.active : "";
  const dispatch = useDispatch();

  function closeMenu() {
    dispatch(updateGlobalState({ key: "isWhatDoIDoMenuActive", value: false }));
    dispatch(updateGlobalState({ key: "isOverlayActive", value: false }));
  }

  return (
    <div className={`${s.menu} ${activeClass}`} role="menu">
      <header>
        <button
          type="button"
          className={s.closeBtn}
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <SvgIcon name="xMark" />
        </button>
      </header>

      <section className={s.mainContent}>
        <div className={s.list}>
          <h2 className={s.title}>
            To-Do List <span className={s.todoIcon}>📒</span>
          </h2>
          <ul className={s.todoList}>
            <li>Confirm receive order product button</li>
          </ul>
        </div>

        <div className={s.list}>
          <h2 className={s.title}>
            Working on <span className={s.starIcon}>🌟</span>
          </h2>
          <ul className={s.workingOnList}>
            <li>Build order page content</li>
            <li>Build working on menu</li>
          </ul>
        </div>

        <div className={s.list}>
          <h2 className={s.title}>
            Achieved <span className={s.fireIcon}>🔥</span>
          </h2>
          <ul className={s.achievedList}>
            <li>Build order page</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default WhatDoIDoMenu;
