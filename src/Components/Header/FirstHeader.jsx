import s from "./FirstHeader.module.scss";
import LanguageSelector from "./LanguageSelector";

const FirstHeader = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.space}></div>

        <div className={s.headerContent}>
          <p className={s.discount}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="/#">ShopNow</a>
          </p>

          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
