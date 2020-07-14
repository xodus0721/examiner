import React from "react";

const Date = (props) => {
  const {
    id,
    icon,
    date,
    thisMonth,
    weekend,
    todays,
    month,
    year,
  } = props.info;

  return (
    <div className={"box num" + id}>
      <div
        className={
          "box-margin " +
          (thisMonth === 1 ? "" : "not-this-month ") +
          (weekend === "Sun" ? " sun " : weekend === "Sat" ? " sat " : "") +
          (todays[2] === year && todays[1] === month
            ? todays[0] === date
              ? "today "
              : ""
            : "")
        }
      >
        {String(date)}
      </div>
      <div className="box-margin">{icon}</div>
    </div>
  );
};

export default Date;
