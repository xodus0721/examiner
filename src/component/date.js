import React from "react";

const Date = (props) => {
  const { date, icon, id, thisMonth, day } = props.info;

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
    date: 0,
    icon: "",
    id: 0,
  },
};

export default Date;
