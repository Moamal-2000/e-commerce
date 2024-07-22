import s from "./WhatDoIDoList.module.scss";

const WhatDoIDoList = ({ data, title, icon, type }) => {
  const checkedClass = type === "checked" ? s.checked : "";

  return (
    <div className={s.list}>
      <h2 className={s.title}>
        {title} <span className={s.icon}>{icon}</span>
      </h2>

      <ul className={checkedClass} role="menu">
        {data?.map((text, i) => (
          <li role="menuitem" key={i}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WhatDoIDoList;
