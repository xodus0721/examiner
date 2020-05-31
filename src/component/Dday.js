import React from "react";

const Dday = () => {
  return (
    <div className="main-item">
      <style>
        {`
            .D-day-board {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
            }

            .compo-name {
                margin: 0 10px 0 10px;
                font-family: "Jua", sans-serif;
                font-size: 60px;
                text-align: center;
            }
        `}
      </style>
      <div className="D-day-board">
      <span className="compo-name">D-Day</span>
      </div>
    </div>
  );
};

export default Dday;
