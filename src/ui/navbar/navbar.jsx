import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./navbar.module.css";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();

  const handleNavIconClicked = () => setNavActive((prev) => !prev);
  const path = location.pathname;

  return (
    <nav
      className={`${styles["navbar"]} ${
        navActive ? styles["navbar--active"] : styles["navbar--inactive"]
      }`}
    >
      <ul>
        <li>
          <button
            className={`${styles["navbar__ham"]} ${
              navActive ? styles["navbar__ham--active"] : ""
            }`}
            onClick={handleNavIconClicked}
          >
            <div />
            <div />
            <div />
          </button>
        </li>
        <li className={path === "/" ? styles["link--active"] : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={path === "/past-iterations" ? styles["link--active"] : ""}>
          <Link to="/past-iterations">Our Past Iterations</Link>
        </li>
        <li className={path === "/workshop-details" ? styles["link--active"] : ""}>
          <Link to="/workshop-details">Workshop Details</Link>
        </li>
        <li className={path === "/call-for-papers" ? styles["link--active"] : ""}>
          <Link to="/call-for-papers">Call for Papers</Link>
        </li>
        <li className={path === "/speakers" ? styles["link--active"] : ""}>
          <Link to="/speakers">Speakers</Link>
        </li>
        <li className={path === "/important-dates" ? styles["link--active"] : ""}>
          <Link to="/important-dates">Important Dates</Link>
        </li>
        <li>
          <a href="/#/#organizing-committee">Organizing Committee</a>
        </li>
        <li>
          <a href="/#/#sponsors">Sponsors</a>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
