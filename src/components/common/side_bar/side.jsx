import PropTypes from 'prop-types';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import logo from "../../../../public/assets/romoz_logo.png"
import "./side.css"

const Side = ({ show_side, setShowSide }) => {
  const handleClose = () => {
    setShowSide(false);
    console.log('Offcanvas closed');
  };
  return (
    <Offcanvas show={show_side} onHide={handleClose} placement="end" className="side_bar_controller" backdrop={true} scroll={false}>
      <Offcanvas.Header closeButton className='d-flex align-items-center'>
        <img src={logo} alt="رموز الرقيمه" className=' bg-black rounded p-1' />
      </Offcanvas.Header>
      <Offcanvas.Body className='side_bar_links'>
        <div className="link_item d-flex flex-column gap-3">
          <Link to="" className='link text-decoration-none py-2 px-2 rounded fs-4 fw-bold'>الرئيسيه</Link>
          <Link to="" className='link text-decoration-none py-2 px-2 rounded fs-4 fw-bold'>المستخدمين</Link>
          <Link to="" className='link text-decoration-none py-2 px-2 rounded fs-4 fw-bold'>المدراء</Link>
          <Link to="" className='link text-decoration-none py-2 px-2 rounded fs-4 fw-bold'>الخدمات</Link>
          <Link to="" className='link text-decoration-none py-2 px-2 rounded fs-4 fw-bold'>المشاريع</Link>
          <Link to="" className='link text-decoration-none py-2 px-2 rounded fs-4 fw-bold'>تحكم المستخدمين</Link>
          <Link to="" className='link text-decoration-none py-2 px-2 rounded fs-4 fw-bold'>تحكم المدراء</Link>
          <Link to="" className='link text-decoration-none py-2 px-2 rounded fs-4 fw-bold'>الحسابات</Link>
          <Link to="" className='link text-decoration-none py-2 px-2 rounded fs-4 fw-bold'>المسجلين</Link>
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