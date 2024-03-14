import s from "./SectionTitle.module.scss";

const SectionTitle = ({ eventName, sectionName, type = 1 }) => {
  const type2Class = type === 2 ? s.type2 : "";

  return (
    <div className={`${s.sectionTitle} ${type2Class}`}>
      <div className={s.event} data-event-name={eventName}>
        {eventName}
      </div>
      <b>{sectionName}</b>
    </div>
  );
};
export default SectionTitle;
