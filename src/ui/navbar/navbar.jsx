import { useState } from "react";

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
          <a href="#about-demi">About DEMI</a>
        </li>
        <li>
          <a href="#workshop-details">Workshop Details</a>
        </li>
        <li>
          <a href="#speakers">Speakers</a>
        </li>
        <li>
          <a href="#important-dates">Important Dates</a>
        </li>
        <li>
          <a href="#submission">Submission</a>
        </li>
        <li>
          <a href="#organizing-committee">Organizing Committee</a>
        </li>
        <li>
          <a href="#sponsors">Sponsors</a>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
