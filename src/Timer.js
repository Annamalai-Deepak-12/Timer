import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Timer() {
  const [days, SetDays] = useState();
  const [hours, SetHours] = useState();
  const [minutes, SetMinutes] = useState();
  const [seconds, SetSeconds] = useState();
  //Deadline
  const deadline = "December, 31, 2023";
  //get the present time
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    SetDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    SetHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    SetMinutes(Math.floor((time / (1000 * 60)) % 60));
    SetSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
  },[]);
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "purple",
        color: "white",
      }}
    >
      <div className=" ">
        <h1>HAPPY NEW YEAR 2024 IN </h1>
        <div className=" d-flex flex-row shadow rounded">
          
          <div
            className="border-end border-start border-3  m-3 border-light"
            style={{ width: "200px" }}
          >
            <h1 className="p-2">{days < 10 ? "0" + days : days}</h1>
            <h1 className="p-2">Days</h1>
          </div>

          <div
            className="border-end border-3  m-3 border-light"
            style={{ width: "200px" }}
          >
            <h1 className="p-2">{hours < 10 ? "0" + hours : hours}</h1>
            <h1 className="p-2">Hours</h1>
          </div>
          <div
            className="border-end border-3  m-3 border-light"
            style={{ width: "200px" }}
          >
            <h1 className="p-2">{minutes < 10 ? "0" + minutes : minutes}</h1>
            <h1 className="p-2">Minutes</h1>
          </div>
          <div
            className="border-end border-3  m-3 border-light"
            style={{ width: "200px" }}
          >
            <h1 className="p-2">{seconds < 10 ? "0" + seconds : seconds}</h1>
            <h1 className="p-2">Seconds</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
