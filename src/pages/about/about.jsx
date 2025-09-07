import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import OrganizersPage from "../organizers/organizers";
import SponsorsPage from "../sponsors/sponsors";
import "./about.css";
import accepted_paper from "../../data/accepted-papers.json";

export default function AboutPage() {
	const location = useLocation();

	useEffect(() => {
		const hash = location.hash;
		if (hash) {
			const el = document.querySelector(hash);
			if (el) {
				// Delay to ensure the DOM is ready
				setTimeout(() => {
					el.scrollIntoView({ behavior: "smooth" });
				}, 100);
			}
		}
	}, [location]);

	return (
		<>
			<section id="recent-updates">
				<h2>Recent Updates</h2>
				<ul>
					<li>
						<span>
							<strong style={{ fontWeight: 700 }}>06, Aug 2025 - </strong>
							<a href="#/#accepted-papers">Accepted papers</a> and{" "}
							<a href="#/#technical-committee">technical committee</a>{" "}
							announced.
						</span>
					</li>
					<li style={{ marginTop: -15 }}>
						<span>
							<a href="#/#program-outline">Workshop's program outline</a>{" "}
							announced.
						</span>
					</li>
				</ul>
			</section>

			<section id="program-outline">
				<h2>Program Outline</h2>

				<ul className="program-schedule">
					<li>
						<strong>8:00 to 8:15</strong> - Poster setup + welcome program
					</li>
					<li>
						<strong>8:15 to 8:30</strong> - Welcome from the workshop chair
					</li>
					<li>
						<strong>8:30 to 9:30</strong> - Keynote Speaker Session 1: Dr.
						Mohammad Yaqub
					</li>
					<li>
						<strong>9:30 to 10:00</strong> - Session 1: Segmentation (2 Long
						Presentation)
						<div className="inner-list">
							<li>Long Papers:</li>
							<ul>
								{[7, 33].map((item) => (
									<li key={item}>
										{accepted_paper.find((data) => data["id"] == item)["name"]}
									</li>
								))}
							</ul>
						</div>
					</li>
					<li>
						<strong>10:00 to 10:30</strong> - Coffee Break and Poster Session
					</li>
					<li>
						<strong>10:30 to 12:30</strong> - Session 2: Federated,
						benchmarking, datasets, VLMs (2 Long Presentation and 14 Spotlights)
						<div className="inner-list">
							<li>Long Papers:</li>
							<ul>
								{[19, 25].map((item) => (
									<li key={item}>
										{accepted_paper.find((data) => data["id"] == item)["name"]}
									</li>
								))}
							</ul>
						</div>
						<div className="inner-list">
							<li>Spotlights:</li>
							<ul>
								{[5, 6, 10, 14, 15, 16, 18, 20, 21, 23, 27, 29, 30, 32].map(
									(item) => (
										<li key={item}>
											{
												accepted_paper.find((data) => data["id"] == item)[
													"name"
												]
											}
										</li>
									)
								)}
							</ul>
						</div>
					</li>
					<li>
						<strong>12:30 to 1:30</strong> - Lunch and Poster Session
					</li>
					<li>
						<strong>1:30 to 2:30</strong> - Session 3: Data Augmentation (1 Long
						Presentation and 5 Spotlights)
						<div className="inner-list">
							<li>Long Paper:</li>
							<ul>
								{[26].map((item) => (
									<li key={item}>
										{accepted_paper.find((data) => data["id"] == item)["name"]}
									</li>
								))}
							</ul>
						</div>
						<div className="inner-list">
							<li>Spotlights:</li>
							<ul>
								{[9, 12, 13, 31, 11].map((item) => (
									<li key={item}>
										{accepted_paper.find((data) => data["id"] == item)["name"]}
									</li>
								))}
							</ul>
						</div>
					</li>
					<li>
						<strong>2:30 to 3:30</strong> - Keynote 2: Prof. KC Santosh
					</li>
					<li>
						<strong>3:30 to 4:00</strong> - Coffee and Poster Session
					</li>
					<li>
						<strong>4:00 to 5:00</strong> - Keynote 3: Prof. Stefanie Speidel
					</li>
					<li>
						<strong>5:00 to 5:30</strong> - Thanks to sponsors, award and
						closing ceremony
					</li>
				</ul>
			</section>

			<section id="about-demi">
				<h2>About DEMI</h2>
				<p>
					The overall goal of this workshop is to bring researchers,
					academicians, professionals and policymakers under a single umbrella
					to innovate data engineering methods that make the best of the limited
					data in the medical domain. In our past two editions, we focused on
					addressing several key issues in data engineering, including:
				</p>
				<ul>
					<li>
						<span>
							Generating task-specific biomedical synthetic data and augmenting
							it with real data.
						</span>
					</li>
					<li>
						<span>
							Developing principled methods to identify diverse and
							discriminative subsets of training examples to label for
							downstream tasks, minimizing annotation budget and time without
							compromising performance.
						</span>
					</li>
					<li>
						<span>
							Designing image-specific augmentation policies instead of relying
							on random policies. For instance, vertically flipping lungs in
							medical images could mislabel the right lung as the left, a common
							issue in X-rays.
						</span>
					</li>
					<li>
						<span>
							Designing suitable pretext tasks for specific downstream medical
							tasks, learning from noisy data, and learning from distributed
							data without sharing raw content.
						</span>
					</li>
				</ul>
			</section>

			<OrganizersPage />
			<SponsorsPage />
		</>
	);
}
