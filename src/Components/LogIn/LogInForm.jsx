import styles from "./LogInForm.module.scss";

const LogInForm = () => {
  return (
    <form className={styles.form}>
      <h2>Log in to Exclusive</h2>
      <p>Enter your details below</p>

      <div className={styles.inputs}>
        <input type="email" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />
      </div>

      <div className={styles.buttons}>
        <button type="submit" className={styles.loginBtn}>
          Log In
        </button>

        <a href="#">Forget Password?</a>
      </div>
    </form>
  );
};
export default LogInForm;
