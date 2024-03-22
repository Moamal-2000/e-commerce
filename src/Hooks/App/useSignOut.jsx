import { useDispatch } from "react-redux";
import { signOut } from "../../Features/userSlice";

const useSignOut = () => {
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(signOut());
  return handleSignOut;
};
export default useSignOut;
