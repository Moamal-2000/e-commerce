import { NavLink } from "react-router-dom";
import { googleIcon } from "../../Assets/Images/Images";
import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
  return (
    <form className={styles.form}>
      <h2>Create an account</h2>
      <p>Enter your details below</p>

      <div className={styles.inputs}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />
      </div>

      <div className={styles.buttons}>
        <button type="submit" className={styles.createAccBtn}>
          Create Account
        </button>

        <button type="button" className={styles.signUpBtn}>
          <img src={googleIcon} alt="Colored Google icon" />
          <span>Sign up with Google</span>
        </button>

        <p>
          <span>Already have account?</span>
          <NavLink to="/login">Log in</NavLink>
        </p>
      </div>
    </form>
  );
};
export default SignUpForm;
