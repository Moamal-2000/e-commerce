const SkipContentLink = ({ scrollTo }) => {
  return (
    <a href={`#${scrollTo}`} className="skip-content">
      Skip to content
    </a>
  );
};

export default SkipContentLink;
