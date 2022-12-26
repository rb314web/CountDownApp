import { useState } from "react";
import { ReactComponent as SettingsSvg } from "./settings.svg";
import "./styles.css";

import Settings from "./settings";
import Interval from "./interval";

export default (App) => {
  const [isSettings, setIsSettings] = useState(false);
  const [inputdate, setInputdate] = useState();

  const setCounterDate = (props) => {
    setInputdate(props);
  };

  const timeCalculate = () => {
    const start = Date.now();
    const end = new Date(inputdate).getTime();

    const distance = end - start;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      end: distance < 0 ? 1 : 0
    };
  };

  return (
    <>
      {inputdate ? (
        <Interval props={timeCalculate} />
      ) : (
        <p
          style={{
            color: "white",
            fontSize: "30px"
          }}
        >
          Wprowadz datę w ustawieniach!
        </p>
      )}

      <div
        style={{
          position: "fixed",
          bottom: !isSettings ? "0" : "500px",
          opacity: !isSettings ? "0" : "1",
          transition: "all .2s",
          visibility: !isSettings ? "hidden" : "visible"
        }}
      >
        <Settings hide={setIsSettings} props={setCounterDate} />
      </div>
      {/* {isSettings ? <Settings props={setCounterDate} /> : null} */}

      <div
        className="counter_settings"
        onClick={() => setIsSettings(!isSettings)}
      >
        <SettingsSvg />
      </div>
    </>
  );
};
