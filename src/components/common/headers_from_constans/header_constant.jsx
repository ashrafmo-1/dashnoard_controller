import PropTypes from 'prop-types';
const Header_constant = ({title, message}) => {
  return (
    <div>
      <p className="title">{title}</p>
      <p className="message">{message}</p>
    </div>
  );
};

Header_constant.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Header_constant;
