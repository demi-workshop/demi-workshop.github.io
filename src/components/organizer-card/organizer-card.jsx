import styles from "./organizer-card.module.css";

export default function OrganizerCard({ photoURL, name, title }) {
  return (
    <div className={styles["organizer"]}>
      <img
        className={styles["organizer__image"]}
        src={photoURL}
        alt={`Headshot of organzing member, ${name}`}
      />
      <p className={styles["organizer__name"]}>{name}</p>
      <p className={styles["organizer__title"]}>{title}</p>
    </div>
  );
}
