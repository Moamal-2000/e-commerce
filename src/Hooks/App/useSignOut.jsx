import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { arraysToEmpty } from "src/Data/globalVariables";
import { showAlert } from "src/Features/alertsSlice";
import { setEmptyArrays } from "src/Features/productsSlice";
import { signOut } from "src/Features/userSlice";

const useSignOut = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSignOut = () => {
    const emptyArraysAction = setEmptyArrays({ keys: arraysToEmpty });

    dispatch(emptyArraysAction);
    dispatch(signOut());
    showSignOutAlert(dispatch, t);
  };

  return handleSignOut;
};

export default useSignOut;

export function showSignOutAlert(dispatch, t, delay = 500) {
  setTimeout(() => {
    dispatch(
      showAlert({
        alertText: t("toastAlert.signOutSuccess"),
        alertState: "warning",
        alertType: "alert",
      })
    );
  }, delay);
}
