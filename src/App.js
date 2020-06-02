import React, { useState, useEffect } from "react";
import Calender from "./component/calender";
import Dday from "./component/Dday";
import Sidebar from "./component/sidebar";

const App = () => {
  const [name, setName] = useState("누구누구");
  useEffect(() => {
    setName("태연");
  }, []);

  return (
    <>
      <style>
        {`  
            .main {
              height: 100vh;
              display: flex;
            }

            .main-item:nth-child(1) {flex-grow:0.3;}
            .main-item:nth-child(2) {flex-grow:12;}
            .main-item:nth-child(3) {flex-grow:4;}
        `}
      </style>
      <div className="main">
        <Sidebar name={name}/>
        <Calender />
        <Dday />
      </div>
    </>
  );
};

export default App;
