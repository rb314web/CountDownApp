import { useState } from "react";
import "./settings.css";

const Settings = (props) => {
  const [inputValue, setInputValue] = useState(false);

  const setCounter = () => {
    props.props(inputValue);
    props.hide(false);
  };

  const setNewYear = () => {
    const year = new Date().getFullYear();
    const nextYear = Number(year + 1);

    props.hide(false);
    props.props(`${nextYear.toString()}-01-01T00:00`);
  };

  const nowDate = new Date().toISOString().slice(0, 16);

  return (
    <>
      <div className="counter_settings_box">
        <div className="counter_settings_box_section">
          <p>Do kiedy odliczmy?</p>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="datetime-local"
            min={nowDate}
          ></input>
          <button onClick={setCounter}>Start!</button>
        </div>
        <button onClick={setNewYear}>Nowy rok</button>
      </div>
    </>
  );
};

export default Settings;
