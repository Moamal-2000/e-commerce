import { signUpImg } from "../../Assets/Images/Images";
import s from "./SignUp.module.scss";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <main className={s.signUpPage} id="signup-page">
      <div className={s.container}>
        <div className={s.imgHolder}>
          <img src={signUpImg} alt="Shopping cart and phone" />
        </div>

        <SignUpForm />
      </div>
    </main>
  );
};
export default SignUp;
