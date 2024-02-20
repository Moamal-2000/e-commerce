const SkipContentLink = ({ scrollTo }) => {
  return (
    <a href={`#${scrollTo}`} className="skip-content">
      Skip to main content
    </a>
  );
};

export default SkipContentLink;
