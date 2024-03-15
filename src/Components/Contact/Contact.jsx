import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./Contact.module.scss";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="container">
      <main className={s.contactPage}>
        <PagesHistory history={["/", "Contact"]} />

        <div className={s.contactContent}>
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
    </div>
  );
};
export default Contact;
