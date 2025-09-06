import s from "./ProductSliderSkipLink.module.scss";

const ProductSliderSkipLink = ({
  children,
  href,
  setIsSkipButtonClicked,
  right,
}) => {
  return (
    <a
      href={href}
      style={{ right }}
      className={s.skipLink}
      onClick={() => setIsSkipButtonClicked(true)}
      onFocus={() => setIsSkipButtonClicked(false)}
    >
      {children}
    </a>
  );
};

export default ProductSliderSkipLink;
