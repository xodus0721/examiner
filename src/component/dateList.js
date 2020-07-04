import React from "react";
import Date from "./date";

const DateList = (props) => {
  const { data } = props;
  const list = data.map((info) => (
      <Date key={info.id} info={info} />
  ));

  return (
    <>
      <style>
        {`
          .dateContainer {
            width: 100%;
            height: 95%;
            display: grid;
            grid-template-rows: repeat(6, 1fr);
            grid-template-columns: repeat(7, 1fr);
          }

          .not-this-month {color: #6C6C6C;}

          .sun {color: #f35252;}
          .sat {color: #5c8ef4;}

          .box {
            margin: 5px;
            border: 3px solid #5D94FF;
            border-radius: 15px;
            font-family: "Jua", sans-serif;
            font-size: 25px;
            min-width: 10px;
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
