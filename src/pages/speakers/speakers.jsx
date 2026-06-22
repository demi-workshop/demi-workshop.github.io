import styles from "./speakers.module.css";
import speakers from "../../data/speakers.json";
import SpeakerCard from "../../components/speaker-card/speaker-card";

export default function SpeakersPage() {
  return (
    <section id="speakers">
      <h2>Our Speakers</h2>
      <div className={styles["speakers__list"]}>
				<div className={styles["speaker"]}>
					<img src="./speakers/hongfang.png" />
					<p className={styles["speaker__name"]}>Hongfang Liu, PhD</p>
					<p>Chair and Professor. Department of Quantitative and Systems Health Sciences</p>
					<p style={{marginTop: "0.5rem"}}>Dell Medical School</p>
					<p>University of Texas, Austin</p>
				</div>

				<div className={styles["speaker"]}>
					<img src="./speakers/holger.jpg" />
					<p className={styles["speaker__name"]}>Holger Roth</p>
					<p>Principal Federated Learning Scientist</p>
					<p style={{marginTop: "0.8rem"}}>NVIDIA</p>
				</div>
				
				<div className={styles["speaker"]}>
					<img src="./speakers/anh.png" />
					<p className={styles["speaker__name"]}>Anh Nguyen</p>
					<p>Senior Lecturer</p>
					<p style={{marginTop: "0.8rem"}}>University of Liverpool</p>
					<p>UK</p>
				</div>
      </div>
      {/* <p
        style={{
          color: "rgba(0, 0, 0, 0.2)",
          fontWeight: 700,
          fontSize: "1.5rem",
          textAlign: "center",
          marginTop: "2rem"
        }}
      >
        Speakers will be announced shortly. Check back soon for updates!
      </p> */}
    </section>
  );
}
