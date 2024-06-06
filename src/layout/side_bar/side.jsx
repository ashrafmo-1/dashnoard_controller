import PropTypes from 'prop-types';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Side = ({ show_side, setShowSide }) => {
  const handleClose = () => {
    setShowSide(false);
    console.log('Offcanvas closed');
  };

  return (
    <Offcanvas show={show_side} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>romoz technology</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

Side.propTypes = {
  show_side: PropTypes.bool.isRequired,
  setShowSide: PropTypes.func.isRequired,
};

export default Side;
