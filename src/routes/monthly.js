import React, { useState, useEffect } from "react";
import DateList from "../components/dateList";
import ScheduleList from "../components/scheduleList";
import "../stylesheets/monthly.scss";

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
const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

let year = d.getFullYear();

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
      id: i + 1,
      date: monthDay[month - 2] - firstDay + i + 1,
      icon: "",
      thisMonth: 0,
      day: "",
    };
  for (let i = firstDay; i < monthDay[month - 1] + firstDay; i++)
    tempBuf[i] = {
      id: i + 1,
      date: i - (firstDay - 1),
      icon: "",
      thisMonth: 1,
      day:
        weekNames[
          new Date(
            `${year}-${month >= 10 ? month : "0" + month}-${i - (firstDay - 1)}`
          ).getDay()
        ],
    };
  let num = 0;
  for (let i = monthDay[month - 1] + firstDay; i < 42; i++) {
    tempBuf[i] = {
      id: i + 1,
      date: num + 1,
      icon: "",
      thisMonth: 0,
      day: "",
    };
    num++;
  }

  return tempBuf;
};

// 함수형 컴포넌트 내부
const Monthly = ({ schedules, onInsert, onRemove }) => {
  const [month, setMonth] = useState("");
  const [buf, setBuf] = useState([]);
  const [monthName, setMonthName] = useState("");

  // 컴포넌트가 마운트될때 실행
  useEffect(() => {
    setMonth(getNowMonth());
    setBuf(bufMaker(getNowMonth()));
    setMonthName(monthNames[d.getMonth()]);
  }, []);

  useEffect(() => {
    setBuf(bufMaker(month));
    setMonthName(monthNames[month - 1]);
  }, [month]);

  const monthIncrease = () => {
    setMonth(month + 1);
  };

  const monthDecrease = () => {
    setMonth(month - 1);
  };

  return (
    <div className="main-item monthly">
      <div className="calander-board">
        <div className="head center cal-item">
          <button className="button" onClick={monthDecrease}>
            <img src="/left-button.png" alt="left-button" />
          </button>
          <span className="month">{year}</span>
          <span className="month">{month >= 10 ? month : "0" + month}</span>
          <span className="month name">{monthName}</span>
          <button className="button" onClick={monthIncrease}>
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
      <ScheduleList
        schedules={schedules}
        onInsert={onInsert}
        onRemove={onRemove}
      />
    </div>
  );
};

export default Monthly;
