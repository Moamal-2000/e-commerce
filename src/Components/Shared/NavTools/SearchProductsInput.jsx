import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productsData } from "../../../Data/productsData";
import { updateState } from "../../../Features/productsSlice";
import { searchByObjectKey } from "../../../Functions/helper";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./SearchProductsInput.module.scss";

const SearchProductsInput = () => {
  const searchRef = useRef("");
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [searchParams] = useSearchParams();

  function focusInput(e) {
    const searchInput = e.currentTarget.querySelector("#search-input");
    searchInput.focus();
  }

  function handleSearchProducts(e) {
    e.preventDefault();

    const isEmptyQuery = searchRef.current.length === 0;
    if (isEmptyQuery) return;

    updateSearchProducts("event");
  }

  function updateSearchProducts(calledFrom) {
    const queryParam = searchParams.get("query");
    const searchQuery = calledFrom === "event" ? searchRef.current : queryParam;

    let productsFound = searchByObjectKey({
      data: productsData,
      key: "shortName",
      query: searchQuery,
    });

    if (productsFound.length === 0) {
      productsFound = searchByObjectKey({
        data: productsData,
        key: "category",
        query: searchQuery,
      });
    }

    const action = updateState({ key: "searchProducts", value: productsFound });
    dispatch(action);
    navigateTo("/search?query=" + searchQuery);
  }

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
        onChange={(e) =>
          (searchRef.current = e.target.value?.trim().toLowerCase())
        }
      />
      <button type="button">
        <SvgIcon name="search" />
      </button>
    </form>
  );
};
export default SearchProductsInput;
