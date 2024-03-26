import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { googleIcon } from "../../Assets/Images/Images";
import { newSignUp, setLoginData } from "../../Features/userSlice";
import { simpleValidationCheck } from "../../Functions/componentsFunctions";
import { compareDataToObjValue, uniqueArr } from "../../Functions/helper";
import s from "./SignUpForm.module.scss";

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

    const isFormValid = simpleValidationCheck(inputs);

    if (isFormValid) {
      const isUserAlreadySignedUp = compareDataToObjValue(
        usersData,
        formData,
        "emailOrPhone"
      );
      if (isUserAlreadySignedUp) return;

      const uniqueUsersData = uniqueArr([...usersData, formData]);
      dispatch(newSignUp(uniqueUsersData));
      dispatch(setLoginData(formData));
      navigateTo("/", { replace: true });
    }
  }

  return (
    <form action="GET" className={s.form} onSubmit={signUp}>
      <h2>Create an account</h2>
      <p>Enter your details below</p>

      <div className={s.inputs}>
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

      <div className={s.buttons}>
        <button type="submit" className={s.createAccBtn}>
          Create Account
        </button>

        <button type="button" className={s.signUpBtn}>
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
