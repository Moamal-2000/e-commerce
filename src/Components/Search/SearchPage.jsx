import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./SearchPage.module.scss";
import SearchProducts from "./SearchProducts";

const SearchPage = () => {
  return (
    <div className="container">
      <main className={s.searchPage}>
        <PagesHistory history={["/", "Results"]} />

        <section className={s.products}>
          <SearchProducts />
        </section>
      </main>
    </div>
  );
};
export default SearchPage;
