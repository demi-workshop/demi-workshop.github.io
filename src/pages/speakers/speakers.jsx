import styles from "./speakers.module.css";
import speakers from "../../data/speakers.json";
import SpeakerCard from "../../components/speaker-card/speaker-card";

export default function SpeakersPage() {
  return (
    <section id="speakers">
      <h2>Our Speakers</h2>
      <div className={styles["speakers__list"]}>
        {Object.keys(speakers).map((speaker) => (
          <SpeakerCard
            key={speaker}
            imgURL={speakers[speaker]["image"]}
            name={speaker}
            bio={speakers[speaker]["bio"]}
          />
        ))}
      </div>
      <p
        style={{
          color: "rgba(0, 0, 0, 0.2)",
          fontWeight: 700,
          fontSize: "1.5rem",
          textAlign: "center",
          marginTop: "2rem"
        }}
      >
        More speakers will be announced shortly. Check back soon for updates!
      </p>
      <p></p>
    </section>
  );
}
