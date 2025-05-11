import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./navbar.module.css";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const handleNavIconClicked = () => setNavActive((prev) => !prev);

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
        <li>
          <Link to="/past-iterations">Our Past Iterations</Link>
        </li>
        <li>
          <Link to="/workshop-details">Workshop Details</Link>
        </li>
        <li>
          <Link to="/call-for-papers">Call for Papers</Link>
        </li>
        <li>
          <Link to="/speakers">Speakers</Link>
        </li>
        <li>
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
