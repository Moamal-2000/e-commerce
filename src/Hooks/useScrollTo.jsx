import { createElement, useEffect } from "react";

const useScrollTo = (scrollToEle, ButtonRef) => {

  function scrollToElement() {
    if (!scrollToEle.current) return 

    const scrollEleRect = scrollToEle.current.getBoundingClientRect()
    const scrollEleHeight = scrollEleRect.height

    const documentHeight = document.documentElement.offsetHeight // 1700+
    const clientScreenHeight = document.documentElement.clientHeight // 695
    const scrollY = window.scrollY // 16400
    const calc = documentHeight - scrollEleHeight

    console.log(calc);

    window.scrollTo({
      top: calc,
      behavior: "smooth"
    })
  }

  // scrollToElement()

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      // if (!scrollToEle.current) return 

      // const scrollEleRect = scrollToEle.current.getBoundingClientRect()
      // const scrollEleHeight = scrollEleRect.height

      // const documentHeight = document.documentElement.offsetHeight // 1700+
      // const clientScreenHeight = document.documentElement.clientHeight // 695
      const scrollY = window.scrollY // 16400
      // const calc = documentHeight - scrollY - 40

      // console.log(scrollY);
      // console.log(calc);

      // window.scrollTo({
      //   top: calc,
      //   behavior: "smooth"
      // })
    })
  }, [])

  return [scrollToElement]
}
export default useScrollTo