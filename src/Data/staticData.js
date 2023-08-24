import { v4 as uuidv4 } from "uuid";

export const introductionSliderData = [
  {
    productName: "Iphone 14 Series",
    productImg: require("../assets/images/introduction-product1.jpg"),
    logoImg: require("../assets/images/apple-logo.png"),
    discountText: "Up to 10% off Voucher",
    id: uuidv4(),
  },
  {
    productName: "Canon EOS 5D MkII",
    productImg: require("../assets/images/introduction-product2.jpg"),
    logoImg: require("../assets/images/canon-logo.png"),
    discountText: "Up to 30% off Voucher",
    id: uuidv4(),
  },
  {
    productName: "MacBook Pro 16",
    productImg: require("../assets/images/Introduction-product3.jpg"),
    logoImg: require("../assets/images/apple-logo.png"),
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
