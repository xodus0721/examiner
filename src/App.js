import React, { useState, useEffect, useRef, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Monthly from "./routes/monthly";
import Weekly from "./routes/weekly";
import Daily from "./routes/daily";
import Comment from "./routes/comment";
import Achievement from "./routes/achievement";
import Setting from "./routes/setting";
import Error from "./routes/404";

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
    <BrowserRouter>
      <div className="main">
        <Sidebar name={name} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Monthly
                schedules={schedules}
                onInsert={onInsert}
                onRemove={onRemove}
              />
            )}
          />
          <Route exact path="/Weekly" render={() => <Weekly />} />
          <Route path="/Daily" render={() => <Daily />} />
          <Route path="/Comment" render={() => <Comment />} />
          <Route path="/Achievement" render={() => <Achievement />} />
          <Route path="/Setting" render={() => <Setting />} />
          <Route path="*" render={() => <Error />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
