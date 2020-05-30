import React from "react";
import Date from "./date";

const DateList = (props) => {
  const { data } = props;
  const list = data.map((info) => (
    <>
      <Date key={info.date} info={info} />
    </>
  ));

  return (
    <>
      <style>
        {`
          .dateContainer {
            display: inline-block;
            position: relative;
            left: 45px;
          }

          .box {
            margin: 5px;
            display: inline-block;
            width: 180px;
            height: 120px;
            background-color: #c6ede8;
            border-radius: 15px;
            font-family: "Noto Sans KR", sans-serif;
            font-size: 35px;
            font-weight: 500;
          }

          .box-margin {
              margin-right: 5px;
              float: right;
          }
        `}
      </style>

      <div className="dateContainer">{list}</div>
    </>
  );
};

DateList.defaultProps = {
  data: [],
};

export default DateList;
