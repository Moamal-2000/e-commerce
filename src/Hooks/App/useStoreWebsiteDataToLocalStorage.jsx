import { useEffect } from "react"
import { useSelector } from "react-redux"

const useStoreWebsiteDataToLocalStorage = () => {
  const userData = useSelector(state => state.user)
  const productsData = useSelector(state => state.products)
  const globalData = useSelector(state => state.global)

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData))
  }, [userData])
}
export default useStoreWebsiteDataToLocalStorage