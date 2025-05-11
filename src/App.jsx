import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

import AboutPage from "./pages/about/about";
import ImportantDatesPage from "./pages/important-dates/important-dates";
import SpeakersPage from "./pages/speakers/speakers";
import SubmissionPage from "./pages/submission/submission";
import WorkshopPage from "./pages/workshop/workshop";

import Navbar from "./ui/navbar/navbar";

import styles from "./App.module.css";

export default function App() {
  return (
    <HashRouter>
      <header className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <Link to="/">
            <img src="/logo.png" alt="Logo of DEMI workshop" />
          </Link>
        </div>

        <div className={styles["header__info"]}>
          <p>
            3<sup>rd</sup> Workshop in{" "}
            <span className="u-color-primary">
              Data Engineering in Medical Imaging (DEMI)
            </span>
          </p>
          <p>
            <span className="u-color-secondary">MICCAI-2025 Workshop</span>
            <span
              className="u-color-primary"
              style={{ margin: "0 0.25rem 0 0.25rem" }}
            >
              &middot;
            </span>
            <span>
              27<sup>th</sup> September, 2025
            </span>
          </p>
        </div>

        <div className={[styles["header__miccai"]]}>
          <img src="/miccai2025.png" alt="A workshop at MICCAI 2025" />
        </div>
      </header>

      <div className={styles["navbar__wrapper"]}>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="workshop-details" element={<WorkshopPage />} />
        <Route path="speakers" element={<SpeakersPage />} />
        <Route path="important-dates" element={<ImportantDatesPage />} />
        <Route path="submission" element={<SubmissionPage />} />
      </Routes>

      <footer className={styles["footer"]}>
        <div className={styles["footer__miccai"]}>
          <h4 className="u-color-secondary u-bolder">A workshop at</h4>
          <img src="/miccai2025.png" alt="MICCAI 2025 logo" />
        </div>

        <div className={styles["footer__copyright"]}>
          <p>&copy; 2025 DEMI @ MICCAI 2025</p>
        </div>
      </footer>
    </HashRouter>
  );
}
