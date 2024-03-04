import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newSignUp } from "../../Features/userSlice";
import styles from "./LogInForm.module.scss";

const LogInForm = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { usersData } = useSelector((state) => state.user);
  const emailOrPhone = useRef("moamalalaapro1@gmail.com");
  const password = useRef("moamalalaapro123");

  function login(e) {
    const inputs = e.target.querySelectorAll("input");
    e.preventDefault();

    const isFormValid = loginValidation(inputs);
    if (!isFormValid) return;

    const validationInputs = filterLoginsData();
    checkFormValidation(inputs, validationInputs);
    const isCorrectLoginData = checkLoginData(validationInputs);

    const formDataObj = new FormData(e.target);
    const formData = {};

    for (let pair of formDataObj.entries()) {
      formData[pair[0]] = pair[1];
    }

    if (isCorrectLoginData) {
      console.log("Yes");
      dispatch(newSignUp(formData));
      // navigateTo("/");
    }
  }

  function loginValidation(inputs) {
    let isFormValid = false;

    inputs.forEach((input) => {
      const addOrRemoveClass = input.value === "" ? "add" : "remove";
      input.classList[addOrRemoveClass]("invalid");
      isFormValid = true;

      if (addOrRemoveClass === "add") isFormValid = false;
    });

    return isFormValid;
  }

  function filterLoginsData() {
    const dataByEmailOrPhone = filterLoginByEmailOrPhone();
    const dataByPassword = filterLoginByPassword(dataByEmailOrPhone);
    return [dataByEmailOrPhone.length !== 0, dataByPassword.length !== 0];
  }

  function checkFormValidation(inputs, validationData) {
    inputs.forEach((input, i) => {
      const addOrRemoveClass = !validationData[i] ? "add" : "remove";
      input.classList[addOrRemoveClass]("invalid");
    });
  }

  function filterLoginByEmailOrPhone() {
    return usersData?.filter(
      (user) => user.emailOrPhone === emailOrPhone.current
    );
  }

  function filterLoginByPassword(data) {
    return data?.filter((user) => user.password === password.current);
  }

  function checkLoginData(validationData) {
    for (let i = 0; i < validationData.length; i++)
      if (!validationData[i]) return false;

    return true;
  }

  return (
    <form className={styles.form} onSubmit={login}>
      <h2>Log in to Exclusive</h2>
      <p>Enter your details below</p>

      <div className={styles.inputs}>
        <input
          type="text"
          name="emailOrPhone"
          placeholder="Email or Phone Number"
          value={emailOrPhone.current}
          onChange={(e) => (emailOrPhone.current = e.target.value)}
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={password.current}
          onChange={(e) => (password.current = e.target.value)}
        />
      </div>

      <div className={styles.buttons}>
        <button type="submit" className={styles.loginBtn}>
          Log In
        </button>

        <a href="#">Forget Password?</a>
      </div>
    </form>
  );
};
export default LogInForm;
