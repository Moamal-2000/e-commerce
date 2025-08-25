// Project
export const MY_REPOS_URL = "https://api.github.com/users/Moamal-2000/repos";
export const WEBSITE_NAME = "E-commercew";
export const WEBSITE_REPO_ID = 681199946;
export const CONTACT_EMAILS = {
  support: `support@${WEBSITE_NAME.toLowerCase()}.com`,
  sales: `sales@${WEBSITE_NAME.toLowerCase()}.com`,
  gmail: `${WEBSITE_NAME.toLowerCase()}@gmail.com`,
};

// Product
export const MINIMUM_QUANTITY = 1;
export const MAXIMUM_QUANTITY = 1000;
export const PRODUCT_SIZES = [
  { size: "XS", title: "X Small" },
  { size: "S", title: "Small" },
  { size: "M", title: "Medium" },
  { size: "L", title: "Large" },
  { size: "XL", title: "X Large" },
];

// Breakpoints
export const SCREEN_SIZES = {
  desktop: 1200,
  laptop: 992,
  tablet: 768,
  mobile: 428,
};

// UI
export const DEFAULT_SWIPER_SPEED = 1000;
export const TOAST_ALERT_DURATION_MS = 6000;
export const SLIDER_GAP = 30;

// Delays
export const DELAYS = [500, 1000, 1500, 2000, 2500, 3000, 3500];
export const SIMPLE_DELAYS = [1200, 1400, 1600, 1800];
export const TIME_UNITS = ["days", "hours", "minutes", "seconds"];
export const SCROLL_REQUIRED = 1000;

// App Actions
export const REMOVE_ORDER_PRODUCT = "REMOVE_ORDER_PRODUCT";
export const CLEAR_ORDER_PRODUCTS = "CLEAR_ORDER_PRODUCTS";
export const arraysToEmpty = [
  "favoritesProducts",
  "searchProducts",
  "orderProducts",
  "cartProducts",
  "wishList",
];

// Pages
export const UN_BUILT_PAGES = [
  "cancellations",
  "reviews",
  "faq",
  "terms",
  "privacy",
  "notification",
];
export const pagesRequireSignIn = [
  "/favorites",
  "/checkout",
  "/profile",
  "/wishlist",
  "/cart",
  "/order",
];

// Auth
export const DEFAULT_LOGIN_DATA = {
  username: "Lily Watson",
  emailOrPhone: "lily.wastons@gmail.com",
  password: "random-password1234",
  isSignIn: true,
};

// Navigation
export const NAV_PROPS = {
  signIn: { showHeart: true, showCart: true, showUser: true },
  notSignIn: { showHeart: false, showCart: false, showUser: false },
  signUpPage: { showHeart: false, showCart: false, showUser: false },
};

// Regex
export const REGEX_PATTERNS = {
  email: /^[0-9a-zA-Z._]+@[a-z]+\.[a-z]+$/,
  words: /([-]|\s?&\s|'s[-&]?)/g,
  iraqiPhone: /^\d{11}$/,
};

// Config
export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const DEFAULT_THROTTLE_DELAY = 600;
