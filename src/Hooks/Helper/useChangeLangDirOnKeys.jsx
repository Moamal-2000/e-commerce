import i18next from "i18next";
import useFunctionOnKey from "./useFunctionOnKey";

const useChangeLangDirOnKeys = () => {
  const delay = 0;

  function changeLang(lang) {
    i18next.changeLanguage(lang);
  }

  useFunctionOnKey(() => changeLang("en"), ["KeyE"], delay);
  useFunctionOnKey(() => changeLang("ar"), ["KeyA"], delay);
  useFunctionOnKey(() => changeLang("ru"), ["KeyR"], delay);
};
export default useChangeLangDirOnKeys;
