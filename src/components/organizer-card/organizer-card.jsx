import styles from "./organizer-card.module.css";

export default function OrganizerCard({ photoURL, name, title, role }) {
  return (
    <div className={styles["organizer"]}>
      <img
        className={styles["organizer__image"]}
        src={photoURL}
        alt={`Headshot of organzing member, ${name}`}
      />
      <p className={styles["organizer__name"]}>{name}</p>
      {role && <p className={styles["organizer__role"]}>{role}</p>}
      <p className={styles["organizer__title"]}>{title}</p>
    </div>
  );
}
