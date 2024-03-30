import s from "./ContactForm.module.scss";

const ContactForm = () => {
  function handleSubmit(e) {
    const resetButton = e.target.querySelector("button[type=reset]");

    e.preventDefault();
    resetButton?.click();
  }

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <div className={s.wrapper}>
          <div className={s.input}>
            <input
              type="text"
              placeholder="Your Name"
              name="username"
              required
            />
            <div className={s.star} style={{ left: "103px" }} />
          </div>

          <div className={s.input}>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
            <div className={s.star} style={{ left: "97px" }} />
          </div>

          <div className={s.input}>
            <input type="text" placeholder="Your Phone" name="phone" required />
            <div className={s.star} style={{ left: "103px" }} />
          </div>
        </div>

        <textarea name="message" placeholder="Your Message"></textarea>
      </div>

      <button type="submit">Send Message</button>
      <button type="reset" hidden>
        Reset
      </button>
    </form>
  );
};
export default ContactForm;
