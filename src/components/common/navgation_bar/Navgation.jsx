import { useState } from "react";
import Side from "../side_bar/side";
import "./navgation.css"
import bars from "../../../../public/assets/bars.svg?react";
import logo from "../../../../public/assets/romoz_logo.png";
// import bars from "@public/assets/bars.svg?react";
export default function Navgation() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <div className="navgation py-2 d-flex">
      <div className="dash_container d-flex justify-content-between algin-items-center">
        <img src={logo} alt="" />
        <span onClick={handleShow} className="btn_side_bar me-2 py-1 d-flex justify-content-center align-items-center bg-info-subtle">
          <img width={40} src={bars} alt="Navigation Icon" />
        </span>
        <Side show_side={show} setShowSide={setShow} />
      </div>
    </div>
  );
}