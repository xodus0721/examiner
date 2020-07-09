import React from "react";
import Date from "./date";
import "../stylesheets/dateList.scss";

const DateList = (props) => {
  const { data } = props;
  const list = data.map((info) => <Date key={info.id} info={info} />);

  return <div className="dateContainer">{list}</div>;
};

DateList.defaultProps = {
  data: [],
};

export default DateList;
