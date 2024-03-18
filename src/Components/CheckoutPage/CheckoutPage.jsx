import useFormData from "../../Hooks/useFormData";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import BillingDetails from "./BillingDetails";
import s from "./CheckoutPage.module.scss";

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
    <div className="container">
      <main className={s.checkoutPage} id="checkout-page">
        <form method="POST">
          <PagesHistory history={PAGE_HISTORY} />

          <section className={s.checkoutPageContent}>
            <BillingDetails inputsData={{ values, handleChange }} />
          </section>
        </form>
      </main>
    </div>
  );
};
export default CheckoutPage;
