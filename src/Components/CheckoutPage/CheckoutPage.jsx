import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./CheckoutPage.module.scss";

const CheckoutPage = () => {
  const PAGE_HISTORY = [
    "Account",
    "My Account",
    "Product",
    "View Cart",
    "CheckOut",
  ];

  return (
    <div className="container">
      <main className={s.checkoutPage} id="checkout-page">
        <PagesHistory history={PAGE_HISTORY} />

        <section className={s.checkoutPageContent}>

        </section>
      </main>
    </div>
  );
};
export default CheckoutPage;
