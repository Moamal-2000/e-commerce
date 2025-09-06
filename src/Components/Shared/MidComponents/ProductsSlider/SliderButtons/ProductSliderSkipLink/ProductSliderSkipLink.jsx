import s from "./ProductSliderSkipLink.module.scss";

const ProductSliderSkipLink = ({ children, href, setIsSkipButtonClicked }) => {
  return (
    <a
      href={href}
      className={s.skipLink}
      onClick={() => setIsSkipButtonClicked(true)}
      onFocus={() => setIsSkipButtonClicked(false)}
    >
      {children}
    </a>
  );
};

export default ProductSliderSkipLink;
