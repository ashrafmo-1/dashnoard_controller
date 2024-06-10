import "./DarkStyle.css";
export const DarkLight = () => {
  return (
    <div>
      <label className="ui-switch">
        <input type="checkbox" />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </div>
  );
};
