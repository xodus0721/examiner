import React, { useState, useEffect, useRef, useCallback } from "react";
import Monthly from "./routes/monthly";
import Sidebar from "./components/sidebar";
import "./App.scss";

const App = () => {
  const [schedules, setSchedules] = useState([]);

  const nextId = useRef(0);

  const onInsert = useCallback(
    (leftDay, content) => {
      const schedule = {
        id: nextId.current,
        leftDay: leftDay,
        content: content,
      };
      setSchedules(schedules.concat(schedule));
      nextId.current += 1;
    },
    [schedules]
  );

  const onRemove = useCallback(
    (id) => {
      setSchedules(schedules.filter((schedule) => schedule.id !== id));
    },
    [schedules]
  );

  const [name, setName] = useState("누구누구");

  useEffect(() => {
    setName("태연");
  }, []);

  return (
    <div className="main">
      <Sidebar name={name} />
      <Monthly schedules={schedules} onInsert={onInsert} onRemove={onRemove} />
    </div>
  );
};

export default App;
