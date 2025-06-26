import { regexPatterns } from "../Data/globalVariables";

export function getDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountedPrice = originalPrice - discountAmount;
  return discountedPrice.toFixed(2);
}

export function formatePrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
}

export function getNumericPrice(num) {
  return +num.replace(/,|\$/g, "");
}

export const formatTwoDigits = (num) => String(num).padStart(2, "0");

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
    const priceAfterDiscount = getNumericPrice(product?.afterDiscount);
    const quantity = +product?.[key];
    const quantityPrice = quantity * priceAfterDiscount;
    return (acc += quantityPrice);
  }, 0);

  return total.toFixed(2);
}
