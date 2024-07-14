import todoData from "src/Data/todoData";
import s from "./WhatDoIDoContent.module.scss";

const WhatDoIDoContent = () => {
  const { todo, workingOn, achieved } = todoData;
  return (
    <section className={s.mainContent}>
      <div className={s.list}>
        <h2 className={s.title}>
          To-Do List <span className={s.todoIcon}>📒</span>
        </h2>
        <ul className={s.todoList}>
          {todo?.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>

      <div className={s.list}>
        <h2 className={s.title}>
          Working on <span className={s.starIcon}>🌟</span>
        </h2>
        <ul className={s.workingOnList}>
          {workingOn?.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>

      <div className={s.list}>
        <h2 className={s.title}>
          Achieved <span className={s.fireIcon}>🔥</span>
        </h2>
        <ul className={s.achievedList}>
          {achieved?.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default WhatDoIDoContent;
