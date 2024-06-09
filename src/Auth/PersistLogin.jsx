import axios from "axios";
import { Outlet } from "react-router-dom";
import { User_token } from "../components/context/context"
import { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Loader from "../components/common/Loader/Loader";
const PersistLogin = () => {
  const [loading, setLoading] = useState(true);
  const context = useContext(User_token);
  const token = context.auth.token;
  const cookie = new Cookies();
  const getToken_ = cookie.get("Bearer");

  

  useEffect(() => {
      async function refresh() {
      try {
        await axios.post("http://127.0.0.1:8000/api/refresh", null, {
            headers: {
              Authorization: `Bearer` + getToken_,
            },
          }).then((data) => {
            cookie.set("token", data.data.token);
            context.setAuth((prev) => {
              return {
                ...prev,
                token: data.data.token,
              };
            });

          })
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    !token ? refresh() : setLoading(false);
  }, []);

  return loading ? <Loader /> : <Outlet />;
};
export default PersistLogin;