import i18n from "i18next";
import useFunctionOnKey from "./useFunctionOnKey";

const DELAY = 0;

const useChangeLangDirOnKeys = () => {
  function changeLang(lang) {
    i18n.changeLanguage(lang);
  }

  useFunctionOnKey(() => changeLang("en"), ["KeyE"], DELAY);
  useFunctionOnKey(() => changeLang("ar"), ["KeyA"], DELAY);
  useFunctionOnKey(() => changeLang("ru"), ["KeyR"], DELAY);
  useFunctionOnKey(() => changeLang("fr"), ["KeyF"], DELAY);
  useFunctionOnKey(() => changeLang("ja"), ["KeyJ"], DELAY);
  useFunctionOnKey(() => changeLang("hu"), ["KeyH"], DELAY);
  useFunctionOnKey(() => changeLang("hi"), ["KeyI"], DELAY);
};
export default useChangeLangDirOnKeys;
