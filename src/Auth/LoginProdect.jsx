import { Navigate, Outlet } from "react-router-dom";

const LoginProdect = () => {
  const token = window.localStorage.getItem("access_token");
  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default LoginProdect;
