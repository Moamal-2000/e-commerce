import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { productsData } from "../../../Data/productsData";
import { updateState } from "../../../Features/productsSlice";
import { searchByObjectKey } from "../../../Functions/helper";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./SearchProductsInput.module.scss";

const SearchProductsInput = () => {
  const searchRef = useRef("");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const pathName = location.pathname;
  const [searchParams, setSearchParams] = useSearchParams();
  const { loadingSearchProducts } = useSelector((state) => state.products);

  function focusInput(e) {
    const searchInput = e.currentTarget.querySelector("#search-input");
    searchInput.focus();
  }

  function handleSearchOnChange(e) {
    const inputValue = e.target.value;
    searchRef.current = inputValue?.trim()?.toLowerCase();
    setSearchParams({ query: inputValue });
  }

  function handleSearchProducts(e) {
    e.preventDefault();

    const isEmptyQuery = searchRef.current.length === 0;
    if (isEmptyQuery) return;

    updateSearchProducts();
  }

  function updateSearchProducts() {
    if (loadingSearchProducts) return;
    const queryValue = searchParams.get("query");

    let productsFound = searchByObjectKey({
      data: productsData,
      key: "shortName",
      query: queryValue,
    });

    if (productsFound.length === 0) {
      productsFound = searchByObjectKey({
        data: productsData,
        key: "category",
        query: queryValue,
      });
    }

    dispatch(updateState({ key: "loadingSearchProducts", value: true }));
    dispatch(updateState({ key: "searchProducts", value: productsFound }));
    navigateTo("/search?query=" + queryValue);
  }

  useEffect(() => {
    const isSearchPage = pathName === "/search";
    if (isSearchPage) updateSearchProducts();
  }, []);

  return (
    <form
      className={s.searchContainer}
      onSubmit={(e) => handleSearchProducts(e)}
      onClick={(e) => focusInput(e)}
    >
      <input
        id="search-input"
        type="text"
        placeholder="What are you looking for?"
        onChange={(e) => handleSearchOnChange(e)}
      />
      <button type="button">
        <SvgIcon name="search" />
      </button>
    </form>
  );
};
export default SearchProductsInput;
