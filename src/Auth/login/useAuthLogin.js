import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuthLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (valuse) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://alrmoz.com/creativity/public/api/authAdmin/login`,
        // `http://localhost:5003/login`,
        valuse
      );
      const token = response.data.access_token;
      const name = response.data.admin.name;
      const email = response.data.admin.email;
      window.localStorage.setItem("access_token", token);
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
      navigate("/dashboard/home");
      console.log(response.data.admin);
      window.location.reload()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //  Formik to handle the input field
  const formik = useFormik({
    initialValues: {
      email: "Admin1@gmail.com",
      password: "Admin_12",
    },
    onSubmit: handleSubmit,
  });

  // Logout Functions
  const logOut = () => {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("email");
    navigate("/login");
  };
  return { formik, logOut, loading };
};

export default useAuthLogin;
