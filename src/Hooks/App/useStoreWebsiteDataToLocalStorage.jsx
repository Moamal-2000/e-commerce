import { useEffect } from "react"
import { useSelector } from "react-redux"

const useStoreWebsiteDataToLocalStorage = () => {
  const userData = useSelector(state => state.user)
  const productsData = useSelector(state => state.products)
  const globalData = useSelector(state => state.global)

  useEffect(() => {
    localStorage.setItem("userSliceData", JSON.stringify(userData))
    localStorage.setItem("productsSliceData", JSON.stringify(productsData))
  }, [userData, productsData])
}
export default useStoreWebsiteDataToLocalStorage