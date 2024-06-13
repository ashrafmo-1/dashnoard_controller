// component handleing 
import PropTypes from "prop-types";
const Form_constant = ({ label, placeholder, type, change }) => {
  return (
    <label className="w-100">
      <input placeholder={placeholder} type={type} className="input w-100" onChange={(e) => {change(e.target.value)}} />
      <span>{label}</span>
    </label>
  );
};
// all inputs is Required.
Form_constant.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
};
export default Form_constant;