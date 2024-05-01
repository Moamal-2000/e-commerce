import { useTranslation } from "react-i18next";

const SkipContentLink = ({ scrollTo }) => {
  const { t } = useTranslation();

  return (
    <a href={`#${scrollTo}`} className="skip-content">
      {t("skipToContent")}
    </a>
  );
};

export default SkipContentLink;
