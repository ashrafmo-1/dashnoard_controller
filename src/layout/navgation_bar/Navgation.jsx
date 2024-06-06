import { useState } from "react";
import Side from "../side_bar/side";
import bars from "../../../public/assets/bars.svg?react"
export default function Navgation() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navgation bg-secondary">
      <span onClick={handleShow} className="me-2">
        <img width={40} src={bars} alt="Navigation Icon" />
      </span>
      <Side show_side={show} setShowSide={setShow} />
    </div>
  );
}
