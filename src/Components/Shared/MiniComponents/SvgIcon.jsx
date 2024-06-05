import { iconsData } from "src/Data/iconsData";

const SvgIcon = ({ name }) => {
  const iconData = iconsData.find((iconData) => iconData.name === name);
  return iconData && iconData?.icon;
};

export default SvgIcon;
