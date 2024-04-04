import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import useFormData from "src/Hooks/Helper/useFormData";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import BillingDetails from "./BillingDetails/BillingDetails";
import s from "./CheckoutPage.module.scss";
import PaymentSection from "./PaymentSection/PaymentSection";

const CheckoutPage = () => {
  const { saveBillingInfoToLocal } = useSelector((state) => state.products);
  const { values: billingValues, handleChange } = useFormData({
    initialValues: {
      firstName: "",
      companyName: "",
      address: "",
      streetAddress: "",
      city: "",
      phoneNumber: "",
      email: "",
    },
    onSubmit: handleSubmitPayment,
    storeInLocalStorage: saveBillingInfoToLocal,
    localStorageKey: "billingInfo",
  });

  const PAGE_HISTORY = ["Account", "CheckOut"];
  const HISTORY_PATHS = [
    {
      index: 0,
      path: "/profile",
    },
  ];

  function handleSubmitPayment(e) {
    e.preventDefault();

    if (!saveBillingInfoToLocal) localStorage.removeItem("billingInfo");
  }

  useScrollOnMount(160);

  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      <div className="container">
        <main className={s.checkoutPage} id="checkout-page">
          <PagesHistory history={PAGE_HISTORY} historyPaths={HISTORY_PATHS} />

          <form method="POST" onSubmit={handleSubmitPayment}>
            <section className={s.checkoutPageContent}>
              <BillingDetails inputsData={{ billingValues, handleChange }} />
              <PaymentSection />
            </section>
          </form>
        </main>
      </div>
    </>
  );
};
export default CheckoutPage;
