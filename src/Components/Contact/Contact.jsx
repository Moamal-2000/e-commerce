import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./Contact.module.scss";
import ContactCardInfo from "./ContactCardSection/ContactCardInfo";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <div className="container">
        <main className={s.contactPage}>
          <PagesHistory history={["/", t("nav.contact")]} />

          <div className={s.contactContent} id="contact-page">
            <ContactCardInfo />
            <ContactForm />
          </div>
        </main>
      </div>
    </>
  );
};
export default Contact;
