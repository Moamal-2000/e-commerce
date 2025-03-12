import {
  appleLogo,
  bkashCard,
  canonLogo,
  mastercard,
  member1Img,
  member2Img,
  member3Img,
  nagadCard,
  productImg1,
  productImg2,
  productImg3,
  russiaFlag,
  saudiFlag,
  usaFlag,
  visaCard,
} from "src/Assets/Images/Images";
import {
  car,
  correctSign,
  franceFlag,
  headphone,
  hungaryFlag,
  indiaFlag,
  japanFlag,
} from "../Assets/Images/Images";
import { regexPatterns } from "./globalVariables";

export const introductionSliderData = [
  {
    productName: "Iphone 14 Series",
    productImg: productImg1,
    logoImg: appleLogo,
    discountText: "Up to 10% off Voucher",
    id: 1,
  },
  {
    productName: "Canon EOS 5D MkII",
    productImg: productImg2,
    logoImg: canonLogo,
    discountText: "Up to 30% off Voucher",
    id: 2,
  },
  {
    productName: "MacBook Pro 16",
    productImg: productImg3,
    logoImg: appleLogo,
    discountText: "Up to 15% off Voucher",
    id: 3,
  },
];

export const categoriesData = [
  {
    iconName: "mobile",
    title: "Phones",
    id: 1,
  },
  {
    iconName: "computer",
    title: "Computers",
    id: 2,
  },
  {
    iconName: "smartWatch",
    title: "SmartWatch",
    id: 3,
  },
  {
    iconName: "camera",
    title: "Camera",
    id: 4,
  },
  {
    iconName: "headphone",
    title: "HeadPhones",
    id: 5,
  },
  {
    iconName: "gamepad",
    title: "Gaming",
    id: 6,
  },
  {
    iconName: "furniture",
    title: "Furniture",
    id: 7,
  },
  {
    iconName: "shirt",
    title: "Clothes",
    id: 8,
  },
  {
    iconName: "dogHand",
    title: "Animal",
    id: 9,
  },
  {
    iconName: "makeup",
    title: "makeup",
    id: 10,
  },
];

export const aboutCardsInfo = [
  {
    iconName: "shop",
    number: "10.5k",
    text: "Sallers active our site",
    translationKey: "aboutCardsInfo1",
    id: 1,
  },
  {
    iconName: "dollarSign",
    number: "33k",
    text: "Mopnthly Produduct Sale",
    translationKey: "aboutCardsInfo2",
    id: 2,
  },
  {
    iconName: "shoppingBag",
    number: "45.5k",
    text: "Customer active in our site",
    translationKey: "aboutCardsInfo3",
    id: 3,
  },
  {
    iconName: "moneyBag",
    number: "25k",
    text: "Anual gross sale in our site",
    translationKey: "aboutCardsInfo4",
    id: 4,
  },
];

export const ourMembersData = [
  {
    name: "Tom Cruise",
    jobTitle: "Founder & Chairman",
    img: member1Img,
    socialMedia: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    id: 1,
  },

  {
    name: "Emma Watson",
    jobTitle: "Managing Director",
    img: member2Img,
    socialMedia: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    id: 2,
  },

  {
    name: "Will Smith",
    jobTitle: "Product Designer",
    img: member3Img,
    socialMedia: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    id: 3,
  },
];

export const paymentCards = [
  {
    img: bkashCard,
    alt: "Bkash card",
    link: "https://www.bkash.com/en/products-services/visa-card-to-bkash",
    id: 1,
  },
  {
    img: visaCard,
    alt: "Visa card",
    link: "https://usa.visa.com/pay-with-visa/find-card/apply-credit-card",
    id: 2,
  },
  {
    img: mastercard,
    alt: "Mastercard",
    link: "https://www.mastercard.us/en-us.html",
    id: 3,
  },
  {
    img: nagadCard,
    alt: "Nagad card",
    link: "https://www.nagad.com.bd/services/?service=add-money-from-card",
    id: 4,
  },
];

export const LANGUAGES = [
  {
    lang: "English",
    flag: usaFlag,
    flagName: "USA",
    code: "en",
    id: 1,
  },
  {
    lang: "Russian",
    flag: russiaFlag,
    flagName: "Russia",
    code: "ru",
    id: 2,
  },
  {
    lang: "Arabic",
    flag: saudiFlag,
    flagName: "Saudi Arabia",
    code: "ar",
    id: 3,
  },
  {
    lang: "French",
    flag: franceFlag,
    flagName: "France",
    code: "fr",
    id: 4,
  },
  {
    lang: "hungarian",
    flag: hungaryFlag,
    flagName: "Hungary",
    code: "hu",
    id: 5,
  },
  {
    lang: "Japanese",
    flag: japanFlag,
    flagName: "Japan",
    code: "ja",
    id: 6,
  },
  {
    lang: "Hindi",
    flag: indiaFlag,
    flagName: "India",
    code: "hi",
    id: 7,
  },
];

export const productCardCustomizations = {
  categoryProducts: {
    showDiscount: true,
    showFavIcon: true,
    showDetailsIcon: true,
    showNewText: true,
    showWishList: true,
  },
  allProducts: {
    showDiscount: true,
    showFavIcon: true,
    showDetailsIcon: true,
    showNewText: true,
    showWishList: true,
  },
  wishListProducts: {
    showDiscount: true,
    showFavIcon: false,
    stopHover: true,
    showDetailsIcon: false,
    showRemoveIcon: true,
  },
  ourProducts: {
    showDiscount: true,
    showFavIcon: true,
    stopHover: false,
    showDetailsIcon: true,
    showRemoveIcon: false,
    showNewText: true,
    showWishList: true,
    showColors: true,
  },
};

export const mobileNavData = [
  {
    name: "Home",
    link: "/",
    icon: "home",
    requiteSignIn: false,
  },
  {
    name: "About",
    link: "/about",
    icon: "filePaper",
    requiteSignIn: false,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: "user",
    requiteSignIn: true,
  },
];

export const getRestMobileNavData = ({
  cartProducts,
  orderProducts,
  favoritesProducts,
  wishList,
}) => {
  return [
    {
      iconName: "cart3",
      routePath: "/cart",
      text: "my cart",
      countLength: cartProducts.length,
      id: mobileNavData.length + 1,
    },
    {
      iconName: "cart",
      routePath: "/order",
      text: "my order",
      countLength: orderProducts.length,
      id: mobileNavData.length + 2,
    },
    {
      iconName: "heart",
      routePath: "/favorites",
      text: "favorite",
      countLength: favoritesProducts.length,
      id: mobileNavData.length + 3,
    },
    {
      iconName: "save",
      routePath: "/wishlist",
      text: "wishlist",
      countLength: wishList.length,
      id: mobileNavData.length + 4,
    },
  ];
};

export const womenFashionMenuItems = [
  { name: "Elegant Dress", url: "/#" },
  { name: "Chic Blouse", url: "/#" },
  { name: "Statement Handbag", url: "/#" },
  { name: "Versatile Jacket", url: "/#" },
  { name: "Comfortable", url: "/#" },
];

export const menFashionMenuItems = [
  { name: "Tailored Suit", url: "/#" },
  { name: "Casual Shirts", url: "/#" },
  { name: "Slim-Fit Jeans", url: "/#" },
  { name: "Leather Accessories", url: "/#" },
  { name: "Modern Sneakers", url: "/#" },
];

export const otherSectionsMenuItems = [
  { name: "Electronics", url: "/#" },
  { name: "Home & Lifestyle", url: "/#" },
  { name: "Medicine", url: "/#" },
  { name: "Sports & Outdoor", url: "/#" },
  { name: "Baby's & Toys", url: "/#" },
  { name: "Groceries & Pets", url: "/#" },
  { name: "Health & Beauty", url: "/#" },
];

export const mySocialMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/MoamalAlaa109",
    icon: "facebook",
    id: 1,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/MoamalAlaa7",
    icon: "twitter",
    id: 2,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/kubislav23/",
    icon: "instagram",
    id: 3,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/moamal-alaa-a4bb15237/",
    icon: "linkedin",
    id: 4,
  },
];

export const featuresSectionData = [
  {
    iconImg: car,
    iconAlt: "Car",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    id: 1,
  },
  {
    iconImg: headphone,
    iconAlt: "Headphone",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    id: 2,
  },
  {
    iconImg: correctSign,
    iconAlt: "Correct sign",
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    id: 3,
  },
];

export const billingInputsData = [
  {
    translationKey: "firstName",
    label: "First Name",
    name: "firstName",
    required: true,
    id: 1,
  },
  {
    translationKey: "companyName",
    label: "Company Name",
    name: "companyName",
    id: 2,
  },
  {
    translationKey: "streetAddress",
    label: "Street Address",
    name: "streetAddress",
    required: true,
    autoComplete: true,
    id: 3,
  },
  {
    translationKey: "apartment",
    label: "Apartment, floor, etc. (optional)",
    name: "address",
    autoComplete: true,
    id: 4,
  },
  {
    translationKey: "cityOrTown",
    label: "Town/City",
    name: "cityOrTown",
    required: true,
    autoComplete: true,
    id: 5,
  },
  {
    translationKey: "phoneNumber",
    label: "Phone Number",
    name: "phoneNumber",
    required: true,
    type: "tel",
    autoComplete: true,
    id: 6,
    regex: regexPatterns.iraqiPhone,
  },
  {
    translationKey: "email",
    label: "Email Address",
    name: "email",
    required: true,
    type: "email",
    autoComplete: true,
    id: 7,
    regex: regexPatterns.email,
  },
];
