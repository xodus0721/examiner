import React, { useState, useRef } from "react";
import Schedule from "./schedule";

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      leftDay: 5,
      content: "공수 수행",
    },
    {
      id: 2,
      leftDay: 9,
      content: "영어 수행",
    },
  ]);

  const [visible, setVisible] = useState(null);

  const nextId = useRef(3);

  const list = schedules.map((info) => <Schedule key={info.id} info={info} />);

  const addSchedule = () => {
    if(visible === false || visible === null) {
      setVisible(!visible);
    }
  };

  const deleteSchedule = () => {};

  const inputDisappear = () => {
    if(visible === true) {
      setVisible(!visible);
    }
  }

  return (
    <div className="main-item">
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              visibility: hidden;
            }
          }
          
          .schedule-board {
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
          
          .head {
            width: 100%;
            justify-content: center;
            margin-bottom: 10px;
          }
          
          .head-item {
            margin: 3%;
            flex-shrink: 0;
          }
          
          .input-schedule {
            display: flex;
          }
          
          .input-title {
            margin: 0 0 0.2em 0;
          }
          
          .input-content {
            margin: 1rem 1rem 1rem 1rem;
            width: 20vw;
            height: 5vh;
            text-align: center;
            border: 3px solid black;
            border-radius: 10px;
          }
          
          .input-schedule input:nth-child(1) {
            width: 15vw;
            height: 5vh;
          }
          
          .input-schedule input:nth-child(2) {
            width: 25vw;
            height: 5vh;
          }
          
          .input-font {
            font-family: "Jua", sans-serif;
            font-size: calc(1.2vh + 1.2vw);
          }
          
          .input-window {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
            border: 3px solid black;
            border-radius: 3rem;
            z-index: 1;
            width: 50%;
            max-width: 1000px;
            height: 30%;
            max-height: 300px;
            position: absolute;
            top: 36vh;
            right: 24vw;
          }
          
          .input-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          
          .setting-button {
            margin-left: 42vw;
            width: 5vw;
            height: 5vh;
            background-color: #ffffff;
            border: 3px solid black;
            border-radius: 0.5em;
          }
          
          .input-appear {
            visibility: visible;
            animation: fadeIn 2s;
          }
          
          .input-disappear {
            animation: fadeOut 2s both;
          }

          .input-null {
            visibility: hidden;
          }
        `}
      </style>
      <div
        className={
          "input-window " + (visible === null ? "input-null" :  (visible ? "input-appear" : "input-disappear"))
        }
      >
        <div className="input-column">
          <span className="input-title input-font">input your schedule</span>
          <div className="input-schedule">
            <input
              className="input-content input-font"
              type="text"
              placeholder="input left day"
            />
            <input
              className="input-content input-font"
              type="text"
              placeholder="input your schedule"
            />
          </div>
        </div>
        <input
          className="setting-button input-font"
          type="button"
          value="set"
          onClick={inputDisappear}
        />
      </div>
      <div className="schedule-board">
        <div className="head">
          <span className="compo-name head-item">Schedule</span>
          <button className="head-item button" onClick={addSchedule}>
            <img src="plus.svg" alt="plus" />
          </button>
          <button className="head-item button">
            <img src="delete.svg" alt="delete" onClick={deleteSchedule} />
          </button>
        </div>
        <div>{list}</div>
      </div>
    </div>
  );
};

export default ScheduleList;
