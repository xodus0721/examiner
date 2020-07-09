import React from "react";

const schedule = (props) => {
  const { id, leftDay, content } = props.info;
  const deleteSchedule = props.onRemove;
  return (
    <div className="frame">
      <span className="item">D-{leftDay}</span>
      <span className="item">{content}</span>
      <button className="head-item button">
        <img src="delete.svg" alt="delete" onClick={() => deleteSchedule(id)} />
      </button>
    </div>
  );
};

export default schedule;
