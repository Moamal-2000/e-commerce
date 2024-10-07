import { useTranslation } from "react-i18next";

const SearchInput = ({ searchRef }) => {
  const { t } = useTranslation();

  function handleSearchOnChange(e) {
    const inputValue = e.target.value;
    searchRef.current = inputValue?.trim()?.toLowerCase();
  }

  return (
    <input
      type="text"
      id="search-input"
      autoComplete="off"
      placeholder={t("inputsPlaceholders.whatYouLookingFor")}
      onChange={handleSearchOnChange}
      aria-label="Search product field"
    />
  );
};
export default SearchInput;
