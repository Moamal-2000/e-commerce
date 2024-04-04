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
import { v4 as uuid } from "uuid";

export const introductionSliderData = [
  {
    productName: "Iphone 14 Series",
    productImg: productImg1,
    logoImg: appleLogo,
    discountText: "Up to 10% off Voucher",
    id: uuid(),
  },
  {
    productName: "Canon EOS 5D MkII",
    productImg: productImg2,
    logoImg: canonLogo,
    discountText: "Up to 30% off Voucher",
    id: uuid(),
  },
  {
    productName: "MacBook Pro 16",
    productImg: productImg3,
    logoImg: appleLogo,
    discountText: "Up to 15% off Voucher",
    id: uuid(),
  },
  // {
  //   productName: "",
  //   productImg: "",
  //   logoImg: "",
  //   discountText: "Up to 10% off Voucher",
  //   id: uuid(),
  // },
];

export const categoriesData = [
  {
    iconName: "mobile",
    title: "Phones",
    id: uuid(),
  },
  {
    iconName: "computer",
    title: "Computers",
    id: uuid(),
  },
  {
    iconName: "smartWatch",
    title: "SmartWatch",
    id: uuid(),
  },
  {
    iconName: "camera",
    title: "Camera",
    id: uuid(),
  },
  {
    iconName: "headphone",
    title: "HeadPhones",
    id: uuid(),
  },
  {
    iconName: "gamepad",
    title: "Gaming",
    id: uuid(),
  },
  {
    iconName: "furniture",
    title: "Furniture",
    id: uuid(),
  },
  {
    iconName: "shirt",
    title: "Clothes",
    id: uuid(),
  },
  {
    iconName: "dogHand",
    title: "Animal",
    id: uuid(),
  },
  {
    iconName: "makeup",
    title: "makeup",
    id: uuid(),
  },
];

export const aboutCardsInfo = [
  {
    iconName: "shop",
    number: "10.5k",
    text: "Sallers active our site",
    id: uuid(),
  },
  {
    iconName: "dollarSign",
    number: "33k",
    text: "Mopnthly Produduct Sale",
    id: uuid(),
  },
  {
    iconName: "shoppingBag",
    number: "45.5k",
    text: "Customer active in our site",
    id: uuid(),
  },
  {
    iconName: "moneyBag",
    number: "25k",
    text: "Anual gross sale in our site",
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
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
    id: uuid(),
  },
];

export const paymentCards = [
  {
    img: bkashCard,
    alt: "Bkash card",
    link: "https://www.bkash.com/en/products-services/visa-card-to-bkash",
    id: uuid(),
  },
  {
    img: visaCard,
    alt: "Visa card",
    link: "https://usa.visa.com/pay-with-visa/find-card/apply-credit-card",
    id: uuid(),
  },
  {
    img: mastercard,
    alt: "Mastercard",
    link: "https://www.mastercard.us/en-us.html",
    id: uuid(),
  },
  {
    img: nagadCard,
    alt: "Nagad card",
    link: "https://www.nagad.com.bd/services/?service=add-money-from-card",
    id: uuid(),
  },
];

export const LANGUAGES = [
  {
    lang: "English",
    flag: usaFlag,
  },
  {
    lang: "Russian",
    flag: russiaFlag,
  },
  {
    lang: "Arabic",
    flag: saudiFlag,
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
  {
    name: "My Cart",
    link: "/cart",
    icon: "bag",
    requiteSignIn: true,
  },
  {
    name: "Favorite",
    link: "/favorites",
    icon: "heart",
    requiteSignIn: true,
  },
  {
    name: "wishlist",
    link: "/wishlist",
    icon: "heart",
    requiteSignIn: true,
  },
  {
    name: "notification",
    link: "/notification",
    icon: "bell",
    requiteSignIn: false,
  },
];
