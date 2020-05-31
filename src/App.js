import React from "react";
import Calender from "./component/calender";
import Dday from "./component/Dday";

let name = "태연";
const App = () => {
  return (
    <>
      <style>
        {`
            .flex-column {
              display: flex;
              flex-direction: column;
              height: 100%;
            }

            nav {
              display: flex;
              justify-content: space-around;
              align-items: center;
            }

            .nav-button {
              margin: 0 10px 0 10px;
              padding: 0;
              border: 0;
              color: #fffff3;
              background-color: rgba(0, 0, 0, 0);
              font-family: "Jua", sans-serif;
              font-size: 35px;
              text-align: center;
            }

            .flex-item:nth-child(1) {flex-grow: 1;}
            .flex-item:nth-child(2) {flex-grow: 6;}
            
            .main {display: flex;}

            .main-item:nth-child(1) {flex-grow:7;}
            .main-item:nth-child(2) {flex-grow:3;}
        `}
      </style>
      <div className="flex-column">
        <nav className="flex-item">
          <button className="nav-button">월간계획</button>
          <button className="nav-button">주간계획</button>
          <button className="nav-button">일간계획</button>
          <button className="nav-button">코멘트</button>
          <button className="nav-button">성취도 확인</button>
          <button className="nav-button">{name}님 ㅎㅇ</button>
        </nav>
        <div className="flex-item main">
          <Calender />
          <Dday />
        </div>
      </div>
      >
    </>
  );
};

export default App;
