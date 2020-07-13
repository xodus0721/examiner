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
          <Planner weekName={weekNames[0]} content="" />
          <Planner weekName={weekNames[1]} content="" />
          <Planner weekName={weekNames[2]} content="" />
          <Planner weekName={weekNames[3]} content="" />
          <Planner weekName={weekNames[4]} content="" />
          <Planner weekName={weekNames[5]} content="" />
          <Planner weekName={weekNames[6]} content="" />
        </div>
        <div className="weekly-header">이것만큼은 꼭하자</div>
        <div className="promise-board">
        </div>
      </div>
    </div>
  );
};

export default Weekly;
