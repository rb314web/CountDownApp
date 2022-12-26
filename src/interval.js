import { useState, useEffect } from "react";

const Interval = (props) => {
  const [dis, setDis] = useState();

  const inputData = props.props;

  const end = props.props().end;

  useEffect(() => {
    setDis(props.props());
    const interval = setInterval(() => {
      setDis(props.props());
    }, 1000);
    return () => clearInterval(interval);
  }, [inputData]);

  return (
    <div
      className="counterText"
      style={{
        textAlign: "center"
      }}
    >
      {end ? (
        <p>Koniec</p>
      ) : (
        <p>
          {dis ? (
            <span
              style={{
                fontSize: "60px"
              }}
            >{` ${dis.days > 0 ? dis.days + " dni" : ""} ${dis.hours}:${
              dis.minutes
            }:${dis.seconds}`}</span>
          ) : null}
        </p>
      )}
    </div>
  );
};

export default Interval;
