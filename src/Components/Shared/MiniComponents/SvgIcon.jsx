import { iconsData } from "src/Data/iconsData";

const SvgIcon = ({ name }) => {
  const iconData = iconsData.filter((iconData) => iconData.name === name);
  return iconData && iconData[0]?.icon;
};

export default SvgIcon;
