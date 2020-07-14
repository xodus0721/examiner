import React from "react";

const Planner = (prop) => {
  const { weekName } = prop;
  return (
    <div className="plan-template">
      <div className="plan-header">{weekName}</div>
      <textarea className="content-box"></textarea>
    </div>
  );
};

export default Planner;
