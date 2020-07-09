import React, { useState, useEffect } from "react";
import "../stylesheets/sidebar.scss";

const Sidebar = (props) => {
  const { name } = props;
  const [checkClicked, setCheckClicked] = useState(false);

  const handleClicked = () => {
    setCheckClicked(!checkClicked);
  };

  useEffect(() => {
    setCheckClicked(0);
  }, []);

  useEffect(() => {
    setCheckClicked(checkClicked);
  }, [checkClicked]);

  return (
    <div className="main-item">
      <nav className={"nav " + (checkClicked ? "width-increase" : "")}>
        <ul className="nav-ul">
          <li className="nav-item">
            <button className="nav-link menu-button" onClick={handleClicked}>
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
