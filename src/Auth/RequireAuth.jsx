import { Navigate, Outlet } from "react-router-dom";
// import Login from "./login/Login_Admin";

const RequireAuth = () => {
  const token = window.localStorage.getItem("token");
  return !token ? <Outlet /> : <Navigate to={"/dashboard/home"} />;
};
export default RequireAuth;
