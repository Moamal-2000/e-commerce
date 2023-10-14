import { v4 as uuidv4 } from "uuid";
import { appleLogo, canonLogo, productImg1, productImg2, productImg3 } from "../assets/images/Images";

export const introductionSliderData = [
  {
    productName: "Iphone 14 Series",
    productImg: productImg1,
    logoImg: appleLogo,
    discountText: "Up to 10% off Voucher",
    id: uuidv4(),
  },
  {
    productName: "Canon EOS 5D MkII",
    productImg: productImg2,
    logoImg: canonLogo,
    discountText: "Up to 30% off Voucher",
    id: uuidv4(),
  },
  {
    productName: "MacBook Pro 16",
    productImg: productImg3,
    logoImg: appleLogo,
    discountText: "Up to 15% off Voucher",
    id: uuidv4(),
  },
  // {
  //   productName: "",
  //   productImg: "",
  //   logoImg: "",
  //   discountText: "Up to 10% off Voucher",
  //   id: uuidv4(),
  // },
];
