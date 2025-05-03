import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { WEBSITE_NAME } from "src/Data/constants";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./Contact.module.scss";
import ContactCardInfo from "./ContactCardSection/ContactCardInfo";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  const { t } = useTranslation();

  useScrollOnMount();

  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content={`Get in touch with ${WEBSITE_NAME}'s customer support team for assistance with your orders, inquiries, or feedback. We're here to help you with any questions you may have.`}
        />
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
