import React from "react";
import Calender from "./component/calender";

let name = "태연";
const App = () => {
  return (
    <>
      <style>
        {`
            

            .flex-column {
              display: flex;
              flex-direction: column;
            }

            nav {
              width: 100%;
              height: 80px;
              margin: 0 0 20px 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            button {
              flex-basis: 180px;
              margin: 0 10px 0 10px;
              padding: 0;
              border: 0;
              color: #f4f4e9;
              background-color: rgba(0, 0, 0, 0);
              font-family: "Noto Sans KR", sans-serif;
              font-size: 35px;
              font-weight: 700;
              text-shadow: 6px 5px 4px gray;
              text-align: center;
            }

            button a:link, a:visited, a:hover {
              color: #f4f4e9;
              text-decoration: none;
            }
          `}
      </style>

      <div className="flex-column">
        <nav>
          <button>
            <a href="MonthPlan.js">월간계획</a>
          </button>
          <button>주간계획</button>
          <button>일간계획</button>
          <button>코멘트</button>
          <button>성취도 확인</button>
          <button>{name}님 ㅎㅇ</button>
        </nav>
        <div>
          <Calender />
        </div>
      </div>
    </>
  );
};

export default App;
