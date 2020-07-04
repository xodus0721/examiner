import React from "react";

const schedule = (props) => {
  const { id, leftDay, content } = props.info;

  return (
    <>
      <style>
        {`
          .frame {
            margin-bottom: 20px;
            width: 18vw;
            display: flex;
            justify-content: center;
            border: 3px solid #FA4B4B;
            border-radius: 10px;
            
          }

          .item {
            padding: 10px 10px 10px 10px;
            font-family: "Jua", sans-serif;
            font-size: 25px;
          }
        `}
      </style>
      <div className={"frame " + "num"+id}>
        <div className="item">{leftDay} days left</div>
        <div className="item">{content}</div>
      </div>
    </>
  );
};

export default schedule;
