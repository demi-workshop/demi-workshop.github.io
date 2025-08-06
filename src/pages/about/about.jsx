import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import OrganizersPage from "../organizers/organizers";
import SponsorsPage from "../sponsors/sponsors";

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
							<strong style={{ fontWeight: 700 }}>25, Aug 2025 - </strong>
							Accepted papers and technical committee anounced.
						</span>
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
