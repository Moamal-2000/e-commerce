import { SCREEN_SIZES, regexPatterns } from "../Data/globalVariables";
import { isCurrentPassValid, isNewPasswordValid } from "./conditions";

export function isDecimalNumber(number) {
  let singleNumber = Math.floor(number);
  return singleNumber !== number;
}

export function getTimeObj(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000),
    totalMinutes = Math.floor(totalSeconds / 60),
    totalHours = Math.floor(totalMinutes / 60),
    days = Math.floor(totalHours / 24),
    seconds = Math.floor(totalSeconds % 60),
    minutes = Math.floor(totalMinutes % 60),
    hours = Math.floor(totalHours % 24),
    timeObj = {
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  return { ...timeObj };
}

export function getTimeInMilliseconds(days, hours, minutes, seconds) {
  const millisecondsPerSecond = 1000,
    millisecondsPerMinute = millisecondsPerSecond * 60,
    millisecondsPerHour = millisecondsPerMinute * 60,
    millisecondsPerDay = millisecondsPerHour * 24,
    totalMilliseconds =
      days * millisecondsPerDay +
      hours * millisecondsPerHour +
      minutes * millisecondsPerMinute +
      seconds * millisecondsPerSecond;
  return totalMilliseconds;
}

export function getFormattedTime(time) {
  return {
    days: padStart(time.days),
    hours: padStart(time.hours),
    minutes: padStart(time.minutes),
    seconds: padStart(time.seconds),
  };
}

export const padStart = (num) => `${num}`.padStart(2, "0");

export function compareDataToObjValue(data, obj, key) {
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
  const firstCapitalLetter = str?.slice(0, 1).toUpperCase();
  const restSmallLetters = str?.slice(1, str.length).toLowerCase();
  return firstCapitalLetter + restSmallLetters;
}

export function camelCase(str) {
  const regex = /([-]|\s?&\s|'s[-&]?)/g;
  const words = str.toLowerCase().replace(regex, " ").split(" ");
  const camelCasedWords = words.map((word, index) =>
    index !== 0 ? capitalize(word) : word
  );
  return camelCasedWords.join("");
}

export function updateClassOnCondition(
  input,
  condition,
  className = "invalid"
) {
  const methodName = condition ? "remove" : "add";
  input.classList[methodName](className);
}

export function checkEmptyInputs({ exceptions, formRef }) {
  const formEle = formRef.current;
  const inputs = formEle.querySelectorAll("input");

  inputs.forEach((input) => {
    const isExceptionInput = exceptions.includes(input.name);
    const isGraterThan2 = input.value.length > 2;
    updateClassOnCondition(input, isExceptionInput || isGraterThan2);
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
