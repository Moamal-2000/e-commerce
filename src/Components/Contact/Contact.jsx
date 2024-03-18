import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./Contact.module.scss";
import ContactForm from "./ContactForm/ContactForm";
import ContactCardInfo from "./ContactCardSection/ContactCardInfo";

const Contact = () => {
  return (
    <div className="container">
      <main className={s.contactPage} id="contact-page">
        <PagesHistory history={["/", "Contact"]} />

        <div className={s.contactContent}>
          <ContactCardInfo />
          <ContactForm />
        </div>
      </main>
    </div>
  );
};
export default Contact;
