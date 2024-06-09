import { useContext } from "react"
import { User_token } from "../components/context/context"
import { Navigate, Outlet } from "react-router-dom";
// import Login from "./login/Login_Admin";

const RequireAuth = () => {
  const user = useContext(User_token);
  console.log(user);
  return user.auth.user ? <Outlet /> : <Navigate to={"/login"} />
}
export default RequireAuth;