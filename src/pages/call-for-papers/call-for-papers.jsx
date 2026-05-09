import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function CallForPapersPage() {
	const location = useLocation();

	useEffect(() => {
		const hashIndex = location.hash.indexOf("#");
		if (hashIndex !== -1) {
			const elementId = location.hash.substring(hashIndex + 1);
			const el = document.getElementById(elementId);
			if (el) {
				el.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);

	return (
		<section id="call-for-papers">
			<h2>Call for Papers</h2>
			<p>
				We invite researchers, practitioners, and enthusiasts to submit original
				contributions aligned with the themes outlined on our&nbsp;
				<Link to="/workshop-details">workshop details page</Link>. Please review
				the submission guidelines and ensure your work adheres to the specified
				format and deadlines listed on the&nbsp;
				<Link to="/important-dates">important dates page</Link>. Join us in
				advancing discussions and innovation in this exciting area!
			</p>
			<p>
				<strong className="u-color-secondary" style={{ fontWeight: 600 }}>
					Open Review submission website:
				</strong>
				&nbsp;
				<a href="https://openreview.net/group?id=MICCAI.org/2026/Workshop/DEMI">Open Review DEMI</a>
			</p>
			<p>
				Accepted papers will be published in a joint proceeding with the MICCAI
				2026 conference.
			</p>
			<p>
				All papers should be formatted according to the &nbsp;
				<a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">
					Lecture Notes in Computer Science templates
				</a>
				&nbsp;. We recommend submission up to 8-pages and 2-pages of references
				(same as MICCAI main conference) for a double-blind peer review process
				In addition, since the joint workshop has adhered to the double-blinded
				peer review process, we ask that you please follow the &nbsp;
				<a href="https://conferences.miccai.org/2026/en/PAPER-SUBMISSION-GUIDELINES.html">
					MICCAI2026 anonymity guidelines
				</a>
				&nbsp; when preparing your initial submission.
			</p>
		</section>
	);
}
