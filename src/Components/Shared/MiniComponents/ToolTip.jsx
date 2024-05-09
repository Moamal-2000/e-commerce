const ToolTip = ({ content, top, right, bottom, left }) => {
  return (
    <span
      role="tooltip"
      aria-hidden="true"
      data-is-tooltip="true"
      className="toolTip"
      style={{ top: top, right: right, bottom: bottom, left: left }}
    >
      {content}
    </span>
  );
};
export default ToolTip;
