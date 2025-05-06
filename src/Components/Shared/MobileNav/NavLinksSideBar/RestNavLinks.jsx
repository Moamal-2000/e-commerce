import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getRestMobileNavData } from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import IconWithCountAndLabel from "../../NavTools/IconWithCountAndLabel/IconWithCountAndLabel";

const RestNavLinks = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const { loginInfo } = useSelector((state) => state.user);
  const { favoritesProducts, orderProducts, cartProducts, wishList } =
    useSelector((state) => state.products);
  const { t } = useTranslation();

  const restMobileNavData = getRestMobileNavData({
    cartProducts,
    orderProducts,
    favoritesProducts,
    wishList,
  });

  return restMobileNavData.map(
    ({ iconName, routePath, countLength, text, id }) => (
      <li key={"mobile-nav-link-" + id}>
        <IconWithCountAndLabel
          props={{
            iconName: iconName,
            visibility: loginInfo.isSignIn,
            routePath: routePath,
            countLength: countLength,
            text: t(`mobileNav.${camelCase(text)}`),
            ariaHidden: !isMobileMenuActive,
            tabIndex: isMobileMenuActive ? 0 : -1,
          }}
        />
      </li>
    )
  );
};

export default RestNavLinks;
