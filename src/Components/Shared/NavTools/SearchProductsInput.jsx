import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./SearchProductsInput.module.scss";

const SearchProductsInput = () => {
  function focusInput(e) {
    const searchInput = e.currentTarget.querySelector("#search-input");
    searchInput.focus();
  }

  return (
    <div className={s.searchContainer} onClick={(e) => focusInput(e)}>
      <input
        id="search-input"
        type="text"
        placeholder="What are you looking for?"
      />
      <SvgIcon name="search" />
    </div>
  );
};
export default SearchProductsInput;
