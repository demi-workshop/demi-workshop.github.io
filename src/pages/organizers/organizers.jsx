import OrganizerCard from "../../components/organizer-card/organizer-card";
import organizers from "../../data/organizers.json";

import styles from "./organizers.module.css";

const getOrganizers = () => organizers;

export default function OrganizersPage() {
  return (
    <section id="organizing-committee">
      <h2>Organizing Committee</h2>

      <div className={styles["organizers__list"]}>
        {Object.keys(organizers).map((organizer) => (
          <OrganizerCard
            key={organizer}
            photoURL={organizers[organizer]["image"]}
            name={organizer}
            title={organizers[organizer]["title"] ?? "DEMI @ MICCAI 2025"}
          />
        ))}
      </div>

      <h2 style={{marginTop: "1.5rem", marginBottom: "0.5rem"}}>Web and Publicity Chair</h2>
      <ul>
        <li style={{marginBottom: "0.25rem"}}><a href="https://anjuchhetri.com.np/">Anju Chhetri @ NAAMII, Nepal</a></li>
        <li style={{marginBottom: "0.25rem"}}><a href="https://www.naamii.org.np/teams/sandesh-pokhrel/">Sandesh Pokhrel @ NAAMII, Nepal</a></li>
        <li><a href="https://niyoj.github.io/">Niyoj Oli @ NAAMII, Nepal</a></li>
      </ul>
    </section>
  );
}
