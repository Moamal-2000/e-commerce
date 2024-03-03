import { signUpImg } from "../../Assets/Images/Images";
import styles from "./SignUp.module.scss";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <main className={styles.signUpPage}>
      <div className={styles.container}>
        <div className={styles.imgHolder}>
          <img src={signUpImg} alt="Shopping cart and phone" />
        </div>

        <SignUpForm />
      </div>
    </main>
  );
};
export default SignUp;
