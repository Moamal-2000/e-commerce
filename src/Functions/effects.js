export function buttonEffect(buttonEvent) {
  const effectEle = document.createElement("div");
  effectEle.style.cssText = `
  border-radius: 50%;
  background-color: #dedede;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  width: 0;
  height: 0;
  transition: .3s width , .3s height, opacity .8s;
  `;

  buttonEvent.currentTarget.appendChild(effectEle);
  setTimeout(() => {
    effectEle.style.width = "100%";
    effectEle.style.height = "100%";
    effectEle.style.opacity = "0";
  }, 0);

  setTimeout(() => effectEle.remove(), 1000);
}
