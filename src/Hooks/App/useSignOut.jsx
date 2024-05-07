import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { showAlert } from "../../Features/globalSlice";
import { setEmptyArrays } from "../../Features/productsSlice";
import { signOut } from "../../Features/userSlice";

const useSignOut = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const arraysToEmpty = [
    "favoritesProducts",
    "searchProducts",
    "cartProducts",
    "wishList",
  ];

  const handleSignOut = () => {
    const emptyArraysAction = setEmptyArrays({ keys: arraysToEmpty });

    dispatch(emptyArraysAction);
    dispatch(signOut());

    setTimeout(() => {
      dispatch(
        showAlert({
          alertText: t("toastAlert.signOutSuccess"),
          alertState: "warning",
        })
      );
    }, 500);
  };

  return handleSignOut;
};

export default useSignOut;
