import { v4 as uuid } from "uuid";
import {
  appleLogo,
  canonLogo,
  dollarSign,
  moneyBag,
  productImg1,
  productImg2,
  productImg3,
  shopLogo,
  shoppingBan,
} from "../Assets/Images/Images";

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
    iconName: "phone",
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
];

export const aboutCardsInfo = [
  {
    iconName: shopLogo,
    number: "10.5k",
    text: "Sallers active our site",
    id: uuid(),
  },
  {
    iconName: dollarSign,
    number: "33k",
    text: "Mopnthly Produduct Sale",
    id: uuid(),
  },
  {
    iconName: shoppingBan,
    number: "45.5k",
    text: "Customer active in our site",
    id: uuid(),
  },
  {
    iconName: moneyBag,
    number: "25k",
    text: "Anual gross sale in our site",
    id: uuid(),
  },
];
