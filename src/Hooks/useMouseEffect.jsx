import { useEffect } from "react";

const useMouseEffect = (
  mouseEffectRef,
  activeClass = "active",
  hoverElements = [],
  activeTime = 500
) => {
  function handleMouseMove(e) {
    const mouseEffectEle = mouseEffectRef.current;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const halfWidthRef = mouseEffectEle.clientWidth / 2;
    const halfHeightRef = mouseEffectEle.clientHeight / 2;
    const isContainsActiveClass =
      !mouseEffectEle.classList.contains(activeClass);

    if (isContainsActiveClass)
      setTimeout(() => mouseEffectEle.classList.add(activeClass), activeTime);

    mouseEffectEle.style.left = clientX - halfWidthRef + "px";
    mouseEffectEle.style.top = clientY - halfHeightRef + "px";

    if (hoverElements.length === 0) return;
    handleHoverOnElements(e);
  }

  function handleHoverOnElements(e) {
    const hoveredElementName = e.target.tagName.toLowerCase();
    const hoveredElements = hoverElements.filter(
      (tagName) => tagName === hoveredElementName
    );
    const isHoveredOnSpecificTags = hoveredElements.length !== 0;

    mouseEffectRef.current.classList[
      isHoveredOnSpecificTags ? "add" : "remove"
    ]("mouseHover");
  }

  useEffect(() => {
    window.addEventListener("mousemove", (e) => handleMouseMove(e));

    return () =>
      window.removeEventListener("mousemove", (e) => handleMouseMove(e));
  }, []);
};

export default useMouseEffect;
