import todoData from "src/Data/todoData";
import WhatDoIDoList from "../WhatDoIDoList/WhatDoIDoList";
import s from "./WhatDoIDoContent.module.scss";

const WhatDoIDoContent = () => {
  const { todo, workingOn, achieved } = todoData;

  return (
    <section
      className={s.mainContent}
      role="region"
      aria-label="What Do I Do menu content"
    >
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
