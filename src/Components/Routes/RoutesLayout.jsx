import { Outlet } from "react-router-dom";
import FirstHeader from "../Header/FirstHeader";

const RoutesLayout = () => {
  return (
    <>
      <FirstHeader />
      <Outlet />
    </>
  );
};
export default RoutesLayout;
