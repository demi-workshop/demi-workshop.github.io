import { useState } from "react";
import styles from "./speaker-card.module.css";

export default function SpeakerCard({
  imgURL,
  name,
  bio,
  preview_length = 600,
}) {
  const [is_expanded, set_is_expanded] = useState(false);

  const toggle_expansion = () => set_is_expanded(!is_expanded);

  const preview_text = bio.slice(0, Math.min(preview_length, bio.length));
  const shouldShowToggle = bio.length > preview_length;

  return (
    <div className={styles["speaker"]}>
      <img src={imgURL} />
      <div className={styles["speaker__info"]}>
        <h3>{name}</h3>
        <p>
          {is_expanded ? bio : preview_text}
          {shouldShowToggle && (
            <span
              onClick={toggle_expansion}
              style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
            >
              {is_expanded ? " See less" : "... See more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
