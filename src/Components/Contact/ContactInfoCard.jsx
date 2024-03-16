import s from "./ContactInfoCard.module.scss";
import ContactSection from "./ContactSection";

const ContactInfoCard = () => {
  return (
    <div className={s.contactInfo}>
      <ContactSection iconName="phone" title="Call To Us">
        <p>We are available 24/7, 7 days a week.</p>
        <p>
          Phone: <a href="tel:+8801611112222">+8801611112222</a>
        </p>
      </ContactSection>

      <div className={s.horizontalLine} />

      <ContactSection iconName="email2" title="Write To Us">
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>
          Emails:
          <a href="mailto:customer@exclusive.com">customer@exclusive.com</a>
        </p>
        <p>
          Emails:
          <a href="mailto:support@exclusive.com">support@exclusive.com</a>
        </p>
      </ContactSection>
    </div>
  );
};
export default ContactInfoCard;
