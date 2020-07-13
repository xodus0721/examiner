import React from "react";

const Date = (props) => {
  const {
    id,
    icon,
    date,
    thisMonth,
    weekend,
    today,
    month,
    todaysMonth,
  } = props.info;

  return (
    <div className={"box num" + id}>
      <div
        className={
          "box-margin " +
          (thisMonth === 1 ? "" : "not-this-month ") +
          (weekend === "Sun" ? " sun " : weekend === "Sat" ? " sat " : "") +
          (todaysMonth === month ? (today === date ? "today " : "") : "")
        }
      >
        {date}
      </div>
      <div className="box-margin">{icon}</div>
    </div>
  );
};

export default Date;
