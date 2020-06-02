import React, { useState, useEffect } from "react";
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
const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let year = d.getFullYear();

let monthName = monthNames[d.getMonth()];

let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

switch (!(year % (year % 25 ? 4 : 16))) {
  case true:
    monthDay[1] = 29;
    break;
  default:
    monthDay[1] = 28;
}

const getNowMonth = () => {
  let tempMonth = d.getMonth() + 1;
  return tempMonth;
};

const bufMaker = (month) => {
  let tempBuf = [];

  let firstDay = new Date(
    `${year}-${month >= 10 ? month : "0" + month}-01`
  ).getDay();

  for (let i = 0; i < firstDay; i++)
    tempBuf[i] = {
      date: monthDay[month - 2] - firstDay + i + 1,
      icon: "",
      id: i + 1,
      thisMonth: 0,
      day: "",
    };
  for (let i = firstDay; i < monthDay[month - 1] + firstDay; i++)
    tempBuf[i] = {
      date: i - (firstDay - 1),
      icon: "",
      id: i + 1,
      thisMonth: 1,
      day:
        weekNames[
          new Date(
            `${year}-${month >= 10 ? month : "0" + month}-${i - (firstDay - 1)}`
          ).getDay()
        ],
    };
  for (let i = monthDay[month - 1] + firstDay; i < 42; i++) {
    tempBuf[i] = {
      date: i - monthDay[month - 1] - firstDay + 1,
      icon: "",
      id: i + 1,
      thisMonth: 0,
      day: "",
    };
  }

  return tempBuf;
};

// 함수형 컴포넌트 내부
const Calender = () => {
  const [month, setMonth] = useState("");
  const [buf, setBuf] = useState([]);

  // 컴포넌트가 마운트될때 실행
  useEffect(() => {
    setMonth(getNowMonth());
    setBuf(bufMaker(d.getMonth() + 1));
  }, []);

  useEffect(() => {
    setBuf(bufMaker(month));
  }, [month]);

  const monthIncrease = () => {
    setMonth(month + 1);
  };

  const monthDecrease = () => {
    setMonth(month - 1);
  };

  return (
    <div className="main-item">
      <style>
        {`
          .D-day {
            background-color: blue;
          }

          .calander-board {
            margin: 0 20px 0 20px;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .center {justify-content: center;}

          .month {
            text-align: center;
            margin: 0 10px 0 10px;
            font-family: "Jua", sans-serif;
            font-size: 70px;
          }

          .name {
            font-size: 40px;
            padding-top: 25px;
          }

          .head {
            display: flex;
          }

          .weekName {
            text-align: center;
            margin: 0 5px 0 5px;
            flex: 1 1 180px;
            font-family: "Jua", sans-serif;
            font-size: 35px;
          }

          .cal-item:nth-child(1), .cal-item:nth-child(2) {flex-grow: 1;}
          .cal-item:nth-child(3) {flex-grow: 30;}

          .move-button {
            margin: 0 10px 0 10px;
            border: 0;
            color: #fffff3;
            background-color: rgba(0, 0, 0, 0);
            text-align: center;
          }
        `}
      </style>
      <div className="calander-board">
        <div className="head center cal-item">
          <button className="move-button" onClick={monthDecrease}>
            <img src="/left-button.png" alt="left-button" />
          </button>
          <span className="month">{year}</span>
          <span className="month">{month >= 10 ? month : "0" + month}</span>
          <span className="month name">{monthName}</span>
          <button className="move-button" onClick={monthIncrease}>
            <img src="/right-button.png" alt="right-button" />
          </button>
        </div>
        <div className="head cal-item">
          <span className="weekName">{weekNames[0]}</span>
          <span className="weekName">{weekNames[1]}</span>
          <span className="weekName">{weekNames[2]}</span>
          <span className="weekName">{weekNames[3]}</span>
          <span className="weekName">{weekNames[4]}</span>
          <span className="weekName">{weekNames[5]}</span>
          <span className="weekName">{weekNames[6]}</span>
        </div>
        <div className="cal-item">
          <DateList data={buf} />
        </div>
      </div>
    </div>
  );
};

export default Calender;
