import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <Link className="nav-link" to="/">
              <img src="./monthly.svg" alt="monthly" />
              <span className="link-text">Monthly</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Weekly">
              <img src="./weekly.svg" alt="weekly" />
              <span className="link-text">Weekly</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Daily">
              <img src="./daily.svg" alt="daily" />
              <span className="link-text">Daily</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Comment">
              <img src="./comment.svg" alt="comment" />
              <span className="link-text">Comment</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Achievement">
              <img src="./achievement.svg" alt="achievement" />
              <span className="link-text">Achievement</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Setting">
              <img src="./setting.svg" alt="setting" />
              <span className="link-text">Hello {name}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
