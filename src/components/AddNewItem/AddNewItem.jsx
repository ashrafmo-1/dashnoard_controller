import { Link, useNavigate } from "react-router-dom";
import Form_constant from "../common/form_constant/Form_constant"; // not used right now
import "./form_const.css";
import Header_constant from "../common/headers_from_constans/header_constant";
import { useState } from "react";

const AddNewItem = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setemailError] = useState("");
  const navgate = useNavigate()
  async function Submit(ele) {
    let flag = true;
    ele.preventDefault();
    setAccept(true);
    name === "" || password.length < 4 || confirmpass !== password
      ? (flag = false)
      : (flag = true);

  const api = "http://127.0.0.1:8000/api/register";
    try {
      if (flag) {
        let response = await fetch(api, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmpass,
          }),
        });
        if (response.status === 200) {
          navgate('/dashboard/admins/showAdmins');
        }
      }
    } catch (error) {
      setemailError(error.response.status);
    }
  }

  return (
    <div className="addNewItem_form justify-content-center align-items-center w-100 text-center">
      <div className="mb-5 d-flex justify-content-between align-content-center">
        <h1 className="form_inputData" style={{ color: "var(--text_color)" }}>
          اضافه مدير جديد
        </h1>
        <Link
          to={"/dashboard/admins/showAdmins"}
          className="btn btn-primary fs-4"
        >
          الرجوع للمديرين
        </Link>
      </div>
      <form
        onSubmit={Submit}
        className="form d-flex justify-content-center align-items-center w-100 h-100 mb-5"
      >
        <Header_constant
          title={"تسجيل مدير جديد"}
          message={"سجل الآن واحصل على حق الوصول الي كل الاقسام."}
        />
        <div className="inputs d-flex justify-content-center w-100 gap-3">
          {/* inputs add new user */}
          <Form_constant
            label={"الاسم"}
            type={"text"}
            placeholder={"ادخل اسمك"}
            change={setName}
          />
          <Form_constant
            label={"الاميل"}
            type={"email"}
            placeholder={"ادخل اميلك"}
            change={setEmail}
          />
          <Form_constant
            label={"كلمه المرور"}
            type={"password"}
            placeholder={"ادخل كلمه المرور"}
            change={setPassword}
          />
          <Form_constant
            label={"تاكيد كلمه المرور"}
            type={"password"}
            placeholder={"ادخل كلمه المرور"}
            change={setConfirmpass}
          />
        </div>
        {name === "" || accept && (
          <p className="error text-danger">user name is required.!</p>
        )}
        {accept && emailError === 422 && (
          <p className="error text-danger"> email is Already been taken.!</p>
        )}
        {email === "" ? <p className="error text-danger">must type your email</p> : null}
        {password.length < 4 || accept ? (
          <p className="error text-danger">Password must be more than 12 char</p>
        ) : null}
        {confirmpass !== password && accept && (
          <p className="error text-danger">Password does not match</p>
        )}
        <button className="submit w-100 btn btn-success">اضافه مدير</button>
      </form>
    </div>
  );
};
export default AddNewItem;