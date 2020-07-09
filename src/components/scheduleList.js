import React, { useState, useCallback } from "react";
import Schedule from "./schedule";
import "../stylesheets/scheduleList.scss";

const ScheduleList = ({ schedules, onInsert, onRemove }) => {
  const [leftDay, setLeftDay] = useState("");
  const [content, setContent] = useState("");
  const [visible, setVisible] = useState(null);
  const [alert, setAlert] = useState(null);

  const inputAppear = () => {
    setVisible(!visible);
  };

  const onChangeLeftDay = useCallback((e) => {
    setLeftDay(e.target.value);
  }, []);

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const addSchedule = useCallback(
    (e) => {
      if (leftDay > 0) {
        if (visible === true) {
          setVisible(!visible);
        }
        onInsert(leftDay, content);
        setLeftDay("");
        setContent("");
        e.preventDefault();
      } else {
        setAlert(!alert);
      }
    },
    [onInsert, leftDay, content, visible, alert]
  );

  const confirmAlert = useCallback(
    (e) => {
      setAlert(!alert);
    },
    [alert]
  );

  return (
    <div className="schedule-board">
      <div
        className={
          "alert-window " +
          (alert === null
            ? "input-null"
            : alert
            ? "input-appear"
            : "input-disappear")
        }
      >
        <span className="input-font">input only positive number!</span>
        <input
          className="button-style input-font confirm-button"
          type="submit"
          value="Confirm"
          onClick={confirmAlert}
        />
      </div>
      <div
        className={
          "input-window " +
          (visible === null
            ? "input-null"
            : visible
            ? "input-appear"
            : "input-disappear")
        }
      >
        <div className="input-column">
          <span className="input-title input-font">input your schedule</span>
          <div className="input-schedule">
            <input
              className="input-content input-font"
              type="number"
              min="1"
              placeholder="input left day"
              value={leftDay}
              onChange={onChangeLeftDay}
            />
            <input
              className="input-content input-font"
              type="text"
              placeholder="input your schedule"
              value={content}
              onChange={onChangeContent}
            />
          </div>
        </div>
        <input
          className="button-style setting-button input-font"
          type="submit"
          value="Set"
          onClick={addSchedule}
        />
      </div>
      <div className="schedule-list">
        <div className="head">
          <span className="compo-name head-item">Schedule</span>
          <button className="head-item button" onClick={inputAppear}>
            <img src="plus.svg" alt="plus" />
          </button>
        </div>
        <div>
          {schedules.map((info) => (
            <Schedule key={info.id} info={info} onRemove={onRemove} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleList;
