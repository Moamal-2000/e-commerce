import { signUpImg } from "../../Assets/Images/Images";
import s from "./LogIn.module.scss";
import LogInForm from "./LogInForm";

const LogIn = () => {
  return (
    <main className={s.LogInPage}>
      <div className={s.container}>
        <div className={s.imgHolder}>
          <img src={signUpImg} alt="Shopping cart and phone" />
        </div>

        <LogInForm />
      </div>
    </main>
  );
};
export default LogIn;
