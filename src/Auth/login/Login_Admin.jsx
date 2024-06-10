// import { useContext, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./login.css";
import useAuthLogin from "./useAuthLogin";
// import { User_token } from "../../components/context/context";
// import { useNavigate } from "react-router-dom";
// import Cookies from "universal-cookie";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const cureentUser = useContext(User_token);
  // const nav = useNavigate();
  // const cookie = new Cookies();
  // const login = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/login", {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //     });
  //     if (response.status === 200) {
  //       const data = await response.json();
  //       const token = data.data.token;
  //       const user = data.data.user;
  //       cureentUser.setAuth({ token, user });
  //       cookie.set("Bearer", token);
  //       nav("/");
  //       setEmail("");
  //       setPassword("");
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //   }
  // };
  const { formik, loading } = useAuthLogin();

  // jsx code
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="form-container p-5 rounded-3 text-white">
        <p className="title text-center fs-2 fw-bold">
          تسجيل الدخول لوحه تحكم مؤسسه رموز
        </p>
        <form className="form mt-4" onSubmit={formik.handleSubmit}>
          <div className="input-group mt-1">
            <label className="fs-5 mb-1" htmlFor="email mb-1">
              الاميل
            </label>
            <input
              className="w-100 rounded"
              value={formik.values.email}
              type="email"
              name="email"
              id="email"
              placeholder="ادخل الاميل"
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="input-group mt-4">
            <label className="fs-5 mb-1" htmlFor="password">
              كلمه المرور
            </label>
            <input
              className="w-100 rounded"
              value={formik.values.password}
              type="password"
              name="password"
              id="password"
              placeholder="ادخل كلمه المرور"
              // onChange={(e) => {
              //   setPassword(e.target.value);
              // }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <button className="sign mt-3 rounded p-3 d-block w-100 text-center fs-3 fw-bold">
            {loading ? (
              <>
               <Spinner animation="border" size="sm"></Spinner>
              </>
            ) : (
              "تسجيل الدخول"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
