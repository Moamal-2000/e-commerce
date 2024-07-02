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
      role="search"
      aria-label="Search product input"
      aria-required="false"
    />
  );
};
export default SearchInput;
