import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const SideBarMenu = ({ to, className, title }) => {
  return (
    <>
      <Link to={to} className={className}>
        {title}
      </Link>
    </>
  );
};

SideBarMenu.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};
