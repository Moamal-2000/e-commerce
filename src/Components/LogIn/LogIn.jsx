import { Helmet } from "react-helmet-async";
import { signUpImg } from "src/Assets/Images/Images";
import s from "./LogIn.module.scss";
import LogInForm from "./LogInForm";

const LogIn = () => {
  return (
    <>
      <Helmet>
        <title>Login in</title>
      </Helmet>

      <main className={s.LogInPage} id="login-page">
        <div className={s.container}>
          <div className={s.imgHolder}>
            <img src={signUpImg} alt="Shopping cart and phone" />
          </div>

          <LogInForm />
        </div>
      </main>
    </>
  );
};
export default LogIn;
