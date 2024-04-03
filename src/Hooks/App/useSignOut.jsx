import { useDispatch } from "react-redux";
import { setEmptyArrays } from "../../Features/productsSlice";
import { signOut } from "../../Features/userSlice";

const useSignOut = () => {
  const dispatch = useDispatch();
  const arraysToEmpty = [
    "favoritesProducts",
    "searchProducts",
    "cartProducts",
    "wishList",
  ];
  const emptyArraysAction = setEmptyArrays({ keys: arraysToEmpty });

  const handleSignOut = () => {
    dispatch(emptyArraysAction);
    dispatch(signOut());
  };

  return handleSignOut;
};

export default useSignOut;
