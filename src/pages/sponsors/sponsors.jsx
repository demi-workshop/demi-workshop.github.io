import styles from "./sponsors.module.css";

export default function SponsorsPage() {
  return (
    <section id="sponsors">
      <h2>Sponsors</h2>

      <div className={styles["sponsors__list"]}>
        <img
          src="/sponsors/mva.png"
          alt="Logo of medical volume annotator sponsor of DEMI"
        />
      </div>

      <p>
        We are grateful for our sponsors whose generous support makes this event
        possible. We are seeking additional academic/industrial sponsorships.
        Please contact us for more details:{" "}
        <a href="mailto:demiworkshop23@gmail.com">demiworkshop23@gmail.com</a>
      </p>
    </section>
  );
}
