import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { googleIcon } from "../../Assets/Images/Images";
import { newSignUp, setLoginData } from "../../Features/userSlice";
import { checkIsObjExistInArr } from "../../Functions/helper";
import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { usersData } = useSelector((state) => state.user);
  const username = useRef("");
  const emailOrPhone = useRef("");
  const password = useRef("");

  function signUp(e) {
    e.preventDefault();
    const inputs = e.target.querySelectorAll("input");

    const formDataObj = new FormData(e.target);
    const formData = {};

    for (let pair of formDataObj.entries()) {
      formData[pair[0]] = pair[1];
    }

    const isFormValid = signUpValidation(inputs);

    if (isFormValid) {
      const isUserAlreadySignedUp = checkIsObjExistInArr(usersData, formData);
      if (!isUserAlreadySignedUp) {
        dispatch(newSignUp(formData));
        dispatch(setLoginData(formData));
        navigateTo("/");
      }
    }
  }

  function signUpValidation(inputs) {
    let isFormValid = false;

    inputs.forEach((input) => {
      const addOrRemoveClass = input.value === "" ? "add" : "remove";
      input.classList[addOrRemoveClass]("invalid");
      isFormValid = true;

      if (addOrRemoveClass === "add") isFormValid = false;
    });

    return isFormValid;
  }

  return (
    <form action="GET" className={styles.form} onSubmit={signUp}>
      <h2>Create an account</h2>
      <p>Enter your details below</p>

      <div className={styles.inputs}>
        <input
          type="text"
          name="username"
          placeholder="Name"
          onChange={(e) => (username.current = e.target.value)}
        />
        <input
          type="text"
          name="emailOrPhone"
          placeholder="Email or Phone Number"
          onChange={(e) => (emailOrPhone.current = e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => (password.current = e.target.value)}
        />
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
