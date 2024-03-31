import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productsData } from "../../../Data/productsData";
import { updateState } from "../../../Features/productsSlice";
import { searchByObjKey } from "../../../Functions/helper";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./SearchProductsInput.module.scss";

const SearchProductsInput = () => {
  const searchRef = useRef("");
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  function focusInput(e) {
    const searchInput = e.currentTarget.querySelector("#search-input");
    searchInput.focus();
  }

  function handleSearchProducts(e) {
    e.preventDefault();

    const isEmptyQuery = searchRef.current.length === 0;
    if (isEmptyQuery) return;

    updateSearchProducts();
  }

  function updateSearchProducts() {
    const searchQuery = searchRef.current;

    let productsFound = searchByObjKey({
      data: productsData,
      key: "name",
      query: searchQuery,
    });

    if (productsFound.length === 0) {
      productsFound = searchByObjKey({
        data: productsData,
        key: "category",
        query: searchQuery,
      });
    }

    if (productsFound.length > 0) {
      dispatch(updateState({ key: "searchProducts", value: productsFound }));
      navigateTo("/search?query=" + searchQuery);
    }
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
