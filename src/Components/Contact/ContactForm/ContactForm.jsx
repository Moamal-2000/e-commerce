import s from "./ContactForm.module.scss";

const ContactForm = () => {
  function handleSubmit(e) {
    const resetButton = e.target.querySelector("button[type=reset]");

    e.preventDefault();
    resetButton?.click();

    // Required a function to show popup message to notify user that the message has been sent
  }

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <div className={s.wrapper}>
          <div className={s.input}>
            <input
              type="text"
              autoComplete="off"
              placeholder="Your Name"
              name="username"
              required
            />
            <div className={s.star} style={{ left: "103px" }} />
          </div>

          <div className={s.input}>
            <input
              type="email"
              autoComplete="off"
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

        <textarea
          name="message"
          autoComplete="off"
          placeholder="Your Message"
        ></textarea>
      </div>

      <button type="submit">Send Message</button>
      <button type="reset" hidden>
        Reset
      </button>
    </form>
  );
};
export default ContactForm;
