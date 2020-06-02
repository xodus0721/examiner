import React from "react";

const Date = (props) => {
  const { id, icon, date, thisMonth, day } = props.info;

  return (
    <>
      <div className={"box num" + id}>
        <div
          className={
            "box-margin" +
            (thisMonth === 1 ? "" : " not-this-month") +
            (day === "Sun" ? " sun" : day === "Sat" ? " sat" : "")
          }
        >
          {date}
        </div>
        <div className="box-margin">{icon}</div>
      </div>
    </>
  );
};

Date.defaultProps = {
  info: {
    id: 0,
    date: 0,
    icon: "",
    thisMonth: 0,
    day: "",
  },
};

export default Date;
