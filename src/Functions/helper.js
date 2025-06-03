import { SCREEN_SIZES, regexPatterns } from "../Data/globalVariables";
import { isCurrentPassValid, isNewPasswordValid } from "./conditions";

export function hasDecimalPart(num) {
  const integerPart = Math.floor(num);
  return num !== integerPart;
}

export function getTimeObj(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

export function getTimeInMilliseconds(days, hours, minutes, seconds) {
  const msPerSec = 1000;
  const msPerMin = msPerSec * 60;
  const msPerHour = msPerMin * 60;
  const msPerDay = msPerHour * 24;

  return (
    days * msPerDay +
    hours * msPerHour +
    minutes * msPerMin +
    seconds * msPerSec
  );
}

export function getFormattedTime(time) {
  return {
    days: formatTwoDigits(time.days),
    hours: formatTwoDigits(time.hours),
    minutes: formatTwoDigits(time.minutes),
    seconds: formatTwoDigits(time.seconds),
  };
}

export const formatTwoDigits = (num) => String(num).padStart(2, "0");

export function compareDataByObjValue(data, obj, key) {
  const filteredData = data.filter((dataObj) => dataObj[key] === obj[key]);
  return filteredData.length > 0;
}

export function checkDateBeforeMonthToPresent(getDate) {
  const monthByMilliSeconds = 2_629_056_000;
  const currentDate = new Date().getTime();
  const requitedDate = new Date(getDate).getTime() + monthByMilliSeconds;
  return currentDate > requitedDate;
}

export function capitalize(str) {
  str = String(str);

  const firstChar = str[0]?.toUpperCase();
  const rest = str.slice(1)?.toLowerCase();

  return firstChar + rest;
}

export function camelCase(str) {
  const wordSeparatorRegex = regexPatterns.words;
  const words = String(str)
    .toLowerCase()
    .replace(wordSeparatorRegex, " ")
    .trim()
    .split(/\s+/);

  const camelCased = words.map((word, index) =>
    index === 0 ? word : capitalize(word)
  );

  return camelCased.join("");
}

export function updateClassOnCondition(
  input,
  condition,
  className = "invalid"
) {
  if (!input?.classList) return;
  input.classList.toggle(className, !condition);
}

export function checkEmptyInputs({ exceptions, formRef }) {
  const formElement = formRef.current;
  const inputElements = formElement.querySelectorAll("input");

  inputElements.forEach((input) => {
    const isExceptionInput = exceptions.includes(input.name);
    const isValidInput = input.value.length > 2;

    updateClassOnCondition(input, isExceptionInput || isValidInput);
  });
}

export function checkAreInputsValid(inputs) {
  return [...inputs].every((input) => !input.classList.contains("invalid"));
}

export function checkEmailValidation(emailInput) {
  const isEmailValid = regexPatterns.email.test(emailInput.value);
  updateClassOnCondition(emailInput, isEmailValid);
}

export function checkPasswordInputs(passwordInputs, password) {
  const currPassInp = passwordInputs[0];
  const newPassInp = passwordInputs[1];
  const confirmPassInput = passwordInputs[2];

  const isCurrPassCorrect = isCurrentPassValid(currPassInp, password);
  const isNewPassValid = isNewPasswordValid(newPassInp);
  const isCurrPassEqualsNew = confirmPassInput.value === newPassInp.value;

  updateClassOnCondition(currPassInp, isCurrPassCorrect);
  updateClassOnCondition(newPassInp, isNewPassValid);
  updateClassOnCondition(confirmPassInput, isCurrPassEqualsNew);
}

export function getDataById(arr, id) {
  return arr?.find((item) => item?.id === id);
}

export const scrollToTop = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });

export function getDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;
  return discountedPrice.toFixed(2);
}

export const formatePrice = (price) =>
  `${price}`.replace(regexPatterns.price, ",");

export function setAfterDiscountKey(product) {
  const discountedPrice = getDiscountedPrice(product.price, product.discount);
  const formattedDiscountedPrice = formatePrice(discountedPrice);
  product.afterDiscount = formattedDiscountedPrice;
}

export function setFormattedPrice(product) {
  const formattedPrice = formatePrice(product.price);
  product.price = formattedPrice;
}

export function getSubTotal(cartProducts, key = "quantity") {
  const total = cartProducts?.reduce((acc, product) => {
    const priceAfterDiscount = +product?.afterDiscount.replaceAll(",", "");
    const quantity = +product?.[key];
    const quantityPrice = quantity * priceAfterDiscount;
    return (acc += quantityPrice);
  }, 0);

  return total.toFixed(2);
}

export function isQueryContainedInItem(query, item) {
  const formattedQuery = query?.trim().toLowerCase();
  const formattedItem = item?.toLowerCase();

  return (
    formattedItem.includes(formattedQuery) ||
    formattedItem.startsWith(formattedQuery) ||
    formattedItem.endsWith(formattedQuery)
  );
}

export function searchByObjectKey({ data, key, query }) {
  return data.filter((item) => isQueryContainedInItem(query, item?.[key]));
}

export function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function isItemFound(data, getItem, key) {
  return data.find((item) => item[key] === getItem[key]);
}

export function getUniqueArrayByObjectKey({ arr, newArr, key }) {
  const updatedArr = [...arr];

  newArr.forEach((item) => {
    const isItemExist = !!isItemFound(arr, item, key);
    if (!isItemExist) updatedArr.push(item);
  });

  return updatedArr;
}

export function isMobileScreenWidth() {
  const mobileMediaQuery = `(max-width: ${SCREEN_SIZES.mobile}px)`;
  const isMobileDevice = window.matchMedia(mobileMediaQuery).matches;
  return isMobileDevice;
}

export function isEmailValid(emailInput) {
  return regexPatterns.email.test(emailInput.value);
}

export function getTranslationPaths(languages) {
  return languages.map(lang => `/locale/${lang}/translation.json`)
}