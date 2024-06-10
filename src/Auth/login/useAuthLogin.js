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
      window.localStorage.setItem("access_token", token);
      navigate("/dashboard/home");
      console.log(response.data.admin);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //  Formik to handle the input field
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  // Logout Functions
  const logOut = () => {
    window.localStorage.removeItem("access_token");
    navigate("/login");
  };
  return { formik, logOut, loading };
};

export default useAuthLogin;
