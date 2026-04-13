import OrganizerCard from "../../components/organizer-card/organizer-card";
import organizers from "../../data/organizers.json";
import technicalChairs from "../../data/technical-chairs.json";
import acceptedPapers from "../../data/accepted-papers.json";

import styles from "./organizers.module.css";

const getOrganizers = () => organizers;

export default function OrganizersPage() {
	return (
		<>
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

				<h2 style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}>
					Web and Publicity Chair
				</h2>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/niyoj">Niyoj Oli @ NAAMII, Nepal</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/aminu-lawal/">Aminu Lawal @ University of Aberdeen, UK</a>
					</li>
					<li>
						<a href="https://alinadevkota.github.io/">Alina Devkota @ West Virginia University, USA</a>
					</li>
					<li>
						<a href="https://sites.google.com/view/jacob-thrasher/home">Jacob Thrasher @ West Virginia University, USA</a>
					</li>
				</ul>
			</section>

			{/* <section id="technical-committee">
				<h2>Technical Program Committee</h2>
				<ul>
					<div style={{ visibility: "hidden", height: "1rem" }} />
					{technicalChairs.name.map((chair, index) => (
						<li key={index} style={{ marginBottom: "0" }}>
							<span>
								<span style={{ textTransform: "capitalize" }}>{chair}</span> @{" "}
								{technicalChairs.affiliation[index]}
							</span>
						</li>
					))}
				</ul>
			</section> */}
		</>
	);
}
