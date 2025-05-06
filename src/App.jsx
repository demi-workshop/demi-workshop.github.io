import styles from "./App.module.css";
import AboutPage from "./pages/about/about";
import ImportantDatesPage from "./pages/important-dates/important-dates";
import OrganizersPage from "./pages/organizers/organizers";
import SpeakersPage from "./pages/speakers/speakers";
import SponsorsPage from "./pages/sponsors/sponsors";
import SubmissionPage from "./pages/submission/submission";
import WorkshopPage from "./pages/workshop/workshop";
import Navbar from "./ui/navbar/navbar";

export default function App() {
  return (
    <>
      <header className={styles["header"]}>
        <div className={styles["header__logo"]}>
          <a href="/">
            <img src="/logo.png" alt="Logo of DEMI workshop" />
          </a>
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
              23<sup>rd</sup> to 27<sup>th</sup> September, 2025
            </span>
          </p>
        </div>
      </header>

      <div className={styles["navbar__wrapper"]}>
        <Navbar />
      </div>

      <AboutPage />

      <WorkshopPage />

      <SpeakersPage />

      <ImportantDatesPage />

      <SubmissionPage />

      <OrganizersPage />

      <SponsorsPage />

      <footer className={styles["footer"]}>
        <div className={styles["footer__miccai"]}>
          <h4 className="u-color-secondary u-bolder">A workshop at</h4>
          <img src="/miccai2025.png" alt="MICCAI 2025 logo" />
        </div>

        <div className={styles["footer__copyright"]}>
          <p>&copy; 2025 DEMI @ MICCAI 2025</p>
        </div>
      </footer>
    </>
  );
}
