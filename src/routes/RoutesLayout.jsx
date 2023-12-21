import { Outlet } from "react-router-dom";
import FirstHeader from "../components/Header/FirstHeader";

const RoutesLayout = () => {
  return (
    <>
      <FirstHeader />
      <Outlet />
    </>
  );
};
export default RoutesLayout;
