import { useContext, useState } from "react";
import Side from "../side_bar/side";
import "./navgation.css";
import bars from "../../../../public/assets/bars.svg?react";
import logo from "../../../../public/assets/romoz_logo.png";
import { Link } from "react-router-dom";
import { User_token } from "../../context/context";


export default function Navgation() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const user = useContext(User_token);

  // const clearStorage = () => {  onClick={clearStorage}
  //   localStorage.removeItem("token");
  //   window.location.pathname = "/";
  // };

  return (
    <>
      {user.auth.user ? (
        <div className="navgation py-2 d-flex fixed-top">
          <div className="dash_container d-flex algin-items-center  justify-content-between">
            <img src={logo} alt="" />
            <div className="d-flex algin-items-center justify-content-between">
              <div onClick={handleShow} className="btn_side_bar me-2 py-1 d-flex justify-content-center align-items-center bg-info-subtle">
                <img width={40} src={bars} alt="Navigation Icon" />
              </div>
              <>
                <Link
                  to={"/login"}
                  className="login-register_btn btn btn-success h-100 d-flex justify-content-center align-items-center fs-2"
                >
                  logout
                </Link>
              </>
              <Side show_side={show} setShowSide={setShow} />
            </div>
          </div>
        </div>
      ) : (
        null
      )}
    </>
  );
}
