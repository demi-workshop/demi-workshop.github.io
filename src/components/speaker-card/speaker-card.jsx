import styles from "./speaker-card.module.css";

export default function SpeakerCard({ imgURL, name, bio }) {
  return (
    <div className={styles["speaker"]}>
      <img src={imgURL} />
      <div className={styles["speaker__info"]}>
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </div>
  );
}
