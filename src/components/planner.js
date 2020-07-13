import React from "react";

const Planner = (prop) => {
  const { weekName, content } = prop;
  return (
    <div className="plan-template">
      <div>{weekName}</div>
      <div>{content}</div>
    </div>
  );
};

export default Planner;
