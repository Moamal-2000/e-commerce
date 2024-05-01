import ReactDOM from "react-dom/client";
import SignUpWithGoogle from "./SignUpWithGoogle";

export function openSignWithGooglePopUp() {
  const popupFeatures = "width=400,height=500,left=300,top=120";
  const popupWindow = window.open("", "_blank", popupFeatures);

  popupWindow.document.documentElement.innerHTML = popupStyles;
  popupWindow.document.body.innerHTML = `<div id="popup-root"></div>`;
  const popupRoot = popupWindow.document.getElementById("popup-root");

  ReactDOM.createRoot(popupRoot).render(<SignUpWithGoogle />);

  setTimeout(() => popupWindow.close(), 2000);
}

const popupStyles = `<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Areal, sans-serif;
}

::selection {
  color: var(--black);
  background-color: rgba(255, 255, 0, .8);
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

#popup-root .signUp {
  min-width: 358px;
  margin: 0 auto;
}

#popup-root .signUp>header {
  border-bottom: solid 2px #dadce0;
  padding: 8px 16px;
  display: flex;
  align-items: center;
}

#popup-root .signUp>header>img {
  width: 14px;
  height: 14px;
  user-select: none;
}

#popup-root .signUp>header>p {
  color: #5F6368;
  font-size: .9rem;
    margin-inline-start: 10px;
}

#popup-root .content {
  margin: 34px 0;
  padding: 0 40px;
}

#popup-root .firstContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

#popup-root .icon {
  padding: 20px;
  background-color: #fff0f0;
  border-radius: 6px;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

#popup-root .firstContent>h2 {
  margin-bottom: 8px;
  color: #202124;
  font-size: 1.5rem;
  font-weight: 500;
}

#popup-root .firstContent>p {
  color: #202124;
  font-weight: 400;
}

#popup-root .firstContent>p>span {
  color: #1A73E8;
  font-weight: 500;
}

#popup-root .choiceAccount {
  margin-bottom: 32px;
}

#popup-root .account {
  display: flex;
  align-items: center;
  padding: 14px 10px;
  border-bottom: solid 2px #dadce0;
  cursor: pointer;
}

#popup-root .account:hover {
  background-color: #E8F0FE;
}

#popup-root .avatar {
  background-color: #7B1FA2;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: .9rem;
  user-select: none;
  width: 28px;
  height: 28px;
}

#popup-root .avatar:has(svg, img) {
  background-color: transparent;
}

#popup-root .account .info {
    margin-inline-start: 10px;
}

#popup-root .account .info>h3 {
  color: #3C4043;
  font-size: .9rem;
  font-weight: 500;
}

#popup-root .account .info>p {
  color: #5F6368;
  font-size: .8rem;
  font-weight: 400;
}

#popup-root .content .description {
  font-size: .8rem;
  padding: 9px 0;
}

#popup-root .content .description>a {
  color: #1A73E8;
  font-weight: 500;
}

#popup-root .signUp>footer {
  display: flex;
  align-items: center;
  padding: 7px;
}

#popup-root .signUp>footer>select {
  border: none;
  outline: none;
  font-size: .7rem;
  cursor: pointer;
}

#popup-root .signUp>footer ul {
  display: flex;
  align-items: center;
}

#popup-root .signUp>footer ul li {
  scale: .9;
}

#popup-root .signUp>footer ul li a {
  color: #757575;
  font-size: .7rem;
  font-weight: 500;
  padding: 10px;
}
</style>
`;
