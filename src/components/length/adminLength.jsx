import "./length.css";
const ItemLength = ({ title, count }) => {
  return (
    <div
      className="widgetBox mt-5 rounded p-3"
      style={{
        border: "1px solid var(--text_color)",
        backgroundColor: "var(--secondary_color)",
        position: "relative",
      }}
    >
      <div className="widgetTitle">
        <h3 style={{ color: "var(--text_color)" }}> {title} </h3>
      </div>
      <div className="widgetBody">
        <h1 style={{ color: "var(--text_color)" }}>{count}</h1>
      </div>
      <div
        className="backgroundLines"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "repeating-linear-gradient(45deg, var(--secondary_color), var(--secondary_color) 10px, var(--text_color) 10px, var(--text_color) 20px)",
          opacity: 0.1,
        }}
      ></div>
    </div>
  );
};

import PropTypes from "prop-types";
ItemLength.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ItemLength;
