import React, { useState } from "react";
import DateList from "./dateList";

let d = new Date();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekNames = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
let weekName = weekNames[d.getDay()];

let monthName = monthNames[d.getMonth()];

let year = d.getFullYear(); // 년도
let month =
  d.getMonth() + 1 >= 10 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1); // 월

const Calender = () => {
  let buf = [];
  for (let i = 0; i < 31; i++) {
    buf[i] = { date: i + 1, icon: "" };
  }
  const [state, setState] = useState(buf);

  return (
    <>
      <style>
        {`
          .cal {
            display: flex;
            flex-direction: column;
            width: 75%;
          }

          .center {text-align: center;}

          .month {
            margin: 0 10px 0 10px;
            display: inline-block;
            font-family: "Noto Sans KR", sans-serif;
            font-size: 70px;
            font-weight: 700;
          }

          .name {font-size: 40px;}

          .head {
            position: relative;
            display: block;
            left: 45px;
          }

          .weekName {
            display: inline-block;
            margin: 0 5px 0 5px;
            text-align: center;
            width: 180px;
            font-family: "Noto Sans KR", sans-serif;
            font-size: 35px;
            font-weight: 500;
          }
        `}
      </style>

      <div className="cal">
        <div className="head center">
          <span className="month">{year}</span>
          <span className="month">{month}</span>
          <span className="month name">{monthName}</span>
        </div>
        <div className="head">
          <span className="weekName">{weekNames[0]}</span>
          <span className="weekName">{weekNames[1]}</span>
          <span className="weekName">{weekNames[2]}</span>
          <span className="weekName">{weekNames[3]}</span>
          <span className="weekName">{weekNames[4]}</span>
          <span className="weekName">{weekNames[5]}</span>
          <span className="weekName">{weekNames[6]}</span>
        </div>
        <DateList data={state} />
      </div>
    </>
  );
};

export default Calender;
