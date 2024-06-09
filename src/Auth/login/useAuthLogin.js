import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const useAuthLogin = () => {
  const navigate = useNavigate();
  const handleSubmit = async (valuse) => {
    try {
      const response = await axios.post(
        `http://alrmoz.com/creativity/public/api/authAdmin/login`,
        valuse
      );
      const token = response.data.access_token;
      window.localStorage.setItem("token", token);
      navigate("/dashboard/home");
      console.log(response.data.admin);
    } catch (error) {
      console.log(error);
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
    window.localStorage.removeItem("token");
    navigate("/login");
  };
  return { formik, logOut };
};

export default useAuthLogin;
