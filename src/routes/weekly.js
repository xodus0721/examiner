import React from "react";
import Planner from "../components/planner";
import "../stylesheets/weekly.scss";

const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const Weekly = () => {
  return (
    <div className="main-item weekly">
      <div className="planner-container">
        <div className="weekly-header">주말 계획표</div>
        <div className="planner-board">
          <Planner weekName={weekNames[0]} />
          <Planner weekName={weekNames[1]} />
          <Planner weekName={weekNames[2]} />
          <Planner weekName={weekNames[3]} />
          <Planner weekName={weekNames[4]} />
          <Planner weekName={weekNames[5]} />
          <Planner weekName={weekNames[6]} />
        </div>
        <div className="weekly-header">이것만큼은 꼭하자</div>
        <textarea className="promise-board"></textarea>
      </div>
    </div>
  );
};

export default Weekly;
