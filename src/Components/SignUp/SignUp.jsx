import { signUpImg } from "../../Assets/Images/Images";
import styles from "./SignUp.module.scss";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <main className={styles.signUpPage}>
      <div className="imgHolder">
        <img src={signUpImg} alt="Shopping cart and phone" />
      </div>

      <SignUpForm />
    </main>
  );
};
export default SignUp;
