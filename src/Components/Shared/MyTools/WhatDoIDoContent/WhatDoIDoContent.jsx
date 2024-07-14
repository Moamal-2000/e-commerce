import todoData from "src/Data/todoData";
import s from "./WhatDoIDoContent.module.scss";
import WhatDoIDoList from "./WhatDoIDoList/WhatDoIDoList";

const WhatDoIDoContent = () => {
  const { todo, workingOn, achieved } = todoData;

  return (
    <section className={s.mainContent}>
      <WhatDoIDoList data={todo} title="To-Do List" icon="📒" />
      <WhatDoIDoList data={workingOn} title="Working on" icon="🌟" />
      <WhatDoIDoList
        data={achieved}
        title="Achieved"
        icon="🔥"
        type="checked"
      />
    </section>
  );
};
export default WhatDoIDoContent;
