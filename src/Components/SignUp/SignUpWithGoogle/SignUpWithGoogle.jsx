import { googleIcon } from "../../../Assets/Images/Images";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./SignUpWithGoogle.module.scss";

const SignUpWithGoogle = () => {
  return (
    <div className={s.container}>
      <div className={s.signUp}>
        <header>
          <img src={googleIcon} alt="Google icon" width="14px" height="14px" />
          <p>Sign up with Google</p>
        </header>

        <main className={s.content}>
          <section className={s.firstContent}>
            <div className={s.icon}>✌️</div>
            <h2>Choose an account</h2>
            <p>
              to continue to <span>Company</span>
            </p>
          </section>

          <section className={s.choiceAccount}>
            <div className={s.account}>
              <div className={s.avatar}>A</div>
              <div className={s.info}>
                <h3>Account Name</h3>
                <p>example.gmail.com</p>
              </div>
            </div>

            <div className={s.account}>
              <div className={s.avatar}>A</div>
              <div className={s.info}>
                <h3>Account Name</h3>
                <p>example.gmail.com</p>
              </div>
            </div>

            <div className={s.account}>
              <div className={s.avatar}>
                <SvgIcon name="account" />
              </div>
              <div className={s.info}>
                <h3>Use another account</h3>
              </div>
            </div>
          </section>

          <p className={s.description}>
            To continue, Google will share your name, email address, language
            preference, and profile picture with Company. Before using this app,
            you can review Company’s <a href="#">privacy policy</a> and{" "}
            <a href="#">terms of service</a>.
          </p>
        </main>

        <footer>
          <select value="english" name="lang">
            <option value="english" selected>English (United States)</option>
            <option value="russia">Russian</option>
            <option value="arabic">Arabic</option>
          </select>

          <nav>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
};
export default SignUpWithGoogle;
