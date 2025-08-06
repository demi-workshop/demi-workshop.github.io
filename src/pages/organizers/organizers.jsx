import OrganizerCard from "../../components/organizer-card/organizer-card";
import organizers from "../../data/organizers.json";
import technicalChairs from "../../data/technical-chairs.json";
import acceptedPapers from "../../data/accepted-papers.json";

import styles from "./organizers.module.css";

const getOrganizers = () => organizers;

export default function OrganizersPage() {
	return (
		<>
			<section id="accepted-papers">
				<h2>Accepted Papers</h2>
				<ul>
					{Object.keys(acceptedPapers).map((paper) => (
						<li key={paper}>
							<span>
								<p
									style={{
										fontWeight: 700,
										marginBottom: 0,
										color: "var(--color-secondary)",
									}}
								>
									{paper}
								</p>
								<p style={{ marginTop: 0 }}>{acceptedPapers[paper]}</p>
							</span>
						</li>
					))}
				</ul>
			</section>
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
					<li style={{ marginBottom: "0.25rem" }}>
						<a href="https://anjuchhetri.com.np/">
							Anju Chhetri @ NAAMII, Nepal
						</a>
					</li>
					<li style={{ marginBottom: "0.25rem" }}>
						<a href="https://www.naamii.org.np/teams/sandesh-pokhrel/">
							Sandesh Pokhrel @ NAAMII, Nepal
						</a>
					</li>
					<li>
						<a href="https://niyoj.github.io/">Niyoj Oli @ NAAMII, Nepal</a>
					</li>
				</ul>
			</section>

			<section id="technical-committee">
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
			</section>
		</>
	);
}
