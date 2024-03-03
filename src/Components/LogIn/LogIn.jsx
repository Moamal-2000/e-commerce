import { signUpImg } from "../../Assets/Images/Images";
import LogInForm from "./LogInForm";
import styles from "./LogIn.module.scss";

const LogIn = () => {
  return (
    <main className={styles.LogInPage}>
      <div className={styles.container}>
        <div className={styles.imgHolder}>
          <img src={signUpImg} alt="Shopping cart and phone" />
        </div>

        <LogInForm />
      </div>
    </main>
  );
};
export default LogIn;
