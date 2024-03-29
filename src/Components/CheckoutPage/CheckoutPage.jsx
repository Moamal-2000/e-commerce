import { Helmet } from "react-helmet-async";
import useScrollOnMount from "../../Hooks/App/useScrollOnMount";
import useFormData from "../../Hooks/Helper/useFormData";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import BillingDetails from "./BillingDetails/BillingDetails";
import s from "./CheckoutPage.module.scss";
import PaymentSection from "./PaymentSection/PaymentSection";

const CheckoutPage = () => {
  useScrollOnMount(160);
  const { values, handleChange } = useFormData({
    initialValues: {
      firstName: "",
      companyName: "",
      address: "",
      streetAddress: "",
      city: "",
      phoneNumber: "",
      email: "",
    },
    onSubmit: handleSubmit,
  });

  const PAGE_HISTORY = ["Account", "CheckOut"];
  const HISTORY_PATHS = [
    {
      index: 0,
      path: "/profile",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      <div className="container">
        <main className={s.checkoutPage} id="checkout-page">
          <PagesHistory history={PAGE_HISTORY} historyPaths={HISTORY_PATHS} />

          <form method="POST">
            <section className={s.checkoutPageContent}>
              <BillingDetails inputsData={{ values, handleChange }} />
              <PaymentSection />
            </section>
          </form>
        </main>
      </div>
    </>
  );
};
export default CheckoutPage;
