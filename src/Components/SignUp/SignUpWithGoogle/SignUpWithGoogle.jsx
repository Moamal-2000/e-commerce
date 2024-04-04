import { googleIcon } from "src/Assets/Images/Images";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";

const SignUpWithGoogle = () => {
  return (
    <div className="signUp">
      <header>
        <img src={googleIcon} alt="Google icon" width="14px" height="14px" />
        <p>Sign up with Google</p>
      </header>

      <main className="content">
        <section className="firstContent">
          <div className="icon">✌️</div>
          <h2>Choose an account</h2>
          <p>
            to continue to <span>Company</span>
          </p>
        </section>

        <section className="choiceAccount">
          <div className="account">
            <div className="avatar">A</div>
            <div className="info">
              <h3>Account Name</h3>
              <p>example.gmail.com</p>
            </div>
          </div>

          <div className="account">
            <div className="avatar">A</div>
            <div className="info">
              <h3>Account Name</h3>
              <p>example.gmail.com</p>
            </div>
          </div>

          <div className="account">
            <div className="avatar">
              <SvgIcon name="account" />
            </div>
            <div className="info">
              <h3>Use another account</h3>
            </div>
          </div>
        </section>

        <p className="description">
          To continue, Google will share your name, email address, language
          preference, and profile picture with Company. Before using this app,
          you can review Company’s <a href="#">privacy policy</a> and{" "}
          <a href="#">terms of service</a>.
        </p>
      </main>

      <footer>
        <select defaultValue="english" name="lang">
          <option value="english">English (United States)</option>
          <option value="russia">Russian</option>
          <option value="arabic">Arabic</option>
        </select>

        <nav>
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};
export default SignUpWithGoogle;
