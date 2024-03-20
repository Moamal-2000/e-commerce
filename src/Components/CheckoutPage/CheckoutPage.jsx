import { Helmet } from "react-helmet-async";
import useFormData from "../../Hooks/useFormData";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import BillingDetails from "./BillingDetails/BillingDetails";
import s from "./CheckoutPage.module.scss";
import PaymentSection from "./PaymentSection/PaymentSection";

const CheckoutPage = () => {
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

  const PAGE_HISTORY = [
    "Account",
    "My Account",
    "Product",
    "View Cart",
    "CheckOut",
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
          <PagesHistory history={PAGE_HISTORY} />

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
