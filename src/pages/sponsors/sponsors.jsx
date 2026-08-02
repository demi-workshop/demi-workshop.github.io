import styles from "./sponsors.module.css";

export default function SponsorsPage() {
	return (
		<section id="sponsors">
			<h2>Sponsors</h2>

			<div className={styles["sponsors__list"]}>
				<a href="https://nvidia.com" target="_blank">
					<img
						src="/sponsors/nvidia.png"
						alt="Logo of NVIDIA sponsor of DEMI"
					/>
				</a>
			</div>

			<p>
				We are currently inviting academic and industrial partners to sponsor
				this edition of the event. This is a great opportunity to collaborate
				and support our initiative. For sponsorship details, please reach out to
				us at{" "}
				<a href="mailto:demiworkshop23@gmail.com">demiworkshop23@gmail.com</a>
			</p>
		</section>
	);
}
