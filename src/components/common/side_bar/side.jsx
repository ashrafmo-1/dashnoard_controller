import PropTypes from "prop-types";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../../../public/assets/romoz_logo.png";
import "./side.css";
import { SideBarMenu } from "../SideBarMenu/SideBarMenu";

const Side = ({ show_side, setShowSide }) => {
  const handleClose = () => {
    setShowSide(false);
  };
  return (
    <Offcanvas
      show={show_side}
      onHide={handleClose}
      placement="end"
      className="side_bar_controller"
      backdrop={true}
      scroll={false}
    >
      <Offcanvas.Header closeButton className="d-flex align-items-center">
        <img src={logo} alt="رموز الرقيمه" className=" bg-black rounded p-1" />
      </Offcanvas.Header>
      <Offcanvas.Body className="side_bar_links">
        <div className="link_item d-flex flex-column gap-3">
          <SideBarMenu
            to={"/"}
            className={`link text-decoration-none py-2 px-2 rounded fs-4 fw-bold`}
            title={`الرئيسيه`}
          />
          <SideBarMenu
            to={""}
            className={`link text-decoration-none py-2 px-2 rounded fs-4 fw-bold`}
            title={`المستخدمين`}
          />
          <SideBarMenu
            to={"/dashboard/admins"}
            className={`link text-decoration-none py-2 px-2 rounded fs-4 fw-bold`}
            title={`المدراء`}
          />
          <SideBarMenu
            to={""}
            className={`link text-decoration-none py-2 px-2 rounded fs-4 fw-bold`}
            title={`الخدمات`}
          />
          <SideBarMenu
            to={""}
            className={`link text-decoration-none py-2 px-2 rounded fs-4 fw-bold`}
            title={`المشاريع`}
          />
          <SideBarMenu
            to={""}
            className={`link text-decoration-none py-2 px-2 rounded fs-4 fw-bold`}
            title={`تحكم المستخدمين`}
          />
          <SideBarMenu
            to={""}
            className={`link text-decoration-none py-2 px-2 rounded fs-4 fw-bold`}
            title={`تحكم المديرين`}
          />
          <SideBarMenu
            to={""}
            className={`link text-decoration-none py-2 px-2 rounded fs-4 fw-bold`}
            title={` الحسابات`}
          />
          <SideBarMenu
            to={""}
            className={`link text-decoration-none py-2 px-2 rounded fs-4 fw-bold`}
            title={`المسجلين `}
          />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
Side.propTypes = {
  show_side: PropTypes.bool.isRequired,
  setShowSide: PropTypes.func.isRequired,
};
export default Side;
