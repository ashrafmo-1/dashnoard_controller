import { useState, useEffect } from "react";
import "./DarkStyle.css";

export const DarkLight = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggletheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    window.localStorage.setItem("themeMood", theme);
    document.body.className = theme;
  }, [theme]);

  const data = window.localStorage.getItem("themeMood");
  useEffect(() => {
    setTheme(data);
  }, []);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="switch d-block">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        onClick={() => {
          toggletheme();
        }}
      />
      <span className="slider pointer-event position-absolute top-0 bg-body rounded-5"></span>
    </label>
  );
};
