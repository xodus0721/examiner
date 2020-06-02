import React from "react";
import Calender from "./component/calender";
import Dday from "./component/Dday";
import Sidebar from "./component/sidebar";

let name = "태연";
const App = () => {
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
          <Sidebar />
          <Calender />
          <Dday name={name}/>
        </div>
    </>
  );
};

export default App;
