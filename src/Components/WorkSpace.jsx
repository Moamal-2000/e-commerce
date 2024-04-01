import { productsData } from "../Data/productsData";
import ProductCard from "./Shared/ProductsCards/ProductCard";
import SkeletonCard from "./Shared/SkeletonLoaders/SkeletonCard";
import s from "./WorkSpace.module.scss";

const WorkSpace = () => {
  return (
    <div className="container">
      <main className={s.workPage}>
        <section className={s.cardHolder}>
          <ProductCard product={productsData[0]} />
          <ProductCard product={productsData[0]} />
          <ProductCard product={productsData[0]} />
          <ProductCard product={productsData[0]} />
        </section>

        <section className={s.skeletonContainer}>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </section>
      </main>
    </div>
  );
};
export default WorkSpace;
