import React, { useState, useEffect } from "react";

const Sidebar = (props) => {
  const { name } = props;
  const [checkClicked, setCheckClicked] = useState(0);
  const handleClicked = () => {
    checkClicked === 1
      ? setCheckClicked(checkClicked - 1)
      : setCheckClicked(checkClicked + 1);
  };

  useEffect(() => {
    setCheckClicked(0);
  }, []);

  useEffect(() => {
    setCheckClicked(checkClicked);
  }, [checkClicked]);

  return (
    <div className="main-item">
      <style>
        {`
            .menu-button {
                width: 100%;
                height: 5rem;
                background-color: #ffffff;
                border: 0;
                outline: 0;
                text-align: left;
                padding-left: 1rem;
            }

            .nav {
                width: 5rem;
                height: 100vh;
                background-color: #B6CBFC;
                transition: width 600ms ease;
                overflow: hidden;
            }

            .width-increase {
                width: 16rem;
            }


            .nav-ul {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;
            }

            .nav-item {
                width:100%;
            }

            .nav-item:last-child {
                margin-top: auto;
            }

            .nav-link {
                display: flex;
                align-items: center;
                height: 5rem;
                color: gray;
                text-decoration: none;
                filter: grayscale(100%) opacity(0.7);
                cursor: url(/icon.svg), auto;
            }

            .nav-link:hover {
                filter: grayscale(0%) opacity(1);
                color: black;
                background: #EEF2FD;
            }

            .nav-link img {
                min-width: 2rem;
                margin: 0 1.5rem;
            }

            .link-text {
                font-family: "Jua", sans-serif;
                font-weight: 600;
                white-space: nowrap;
            }
        `}
      </style>
      <nav className={"nav" + (checkClicked === 1 ? " width-increase" : "")}>
        <ul className="nav-ul">
          <li className="nav-item">
            <button className="menu-button" onClick={handleClicked}>
              <img src="./menu.svg" alt="menu" />
            </button>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img src="./monthly.svg" alt="monthly" />
              <span className="link-text">Monthly</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img src="./weekly.svg" alt="weekly" />
              <span className="link-text">Weekly</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img src="./daily.svg" alt="daily" />
              <span className="link-text">Daily</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img src="./comment.svg" alt="comment" />
              <span className="link-text">Comment</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img src="./achievement.svg" alt="achievement" />
              <span className="link-text">Achievement</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img src="./setting.svg" alt="setting" />
              <span className="link-text">Hello {name}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
