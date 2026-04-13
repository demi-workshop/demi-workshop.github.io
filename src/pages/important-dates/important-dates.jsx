import styles from "./style.module.css";

const dates = [
	{ title: "Paper Submission Begins", date: "12 May, 2025" },
	{
		title: "Submission Deadline",
		date: "20 June, 2025",
	},
	{ title: "Reviews Due", date: "12 July, 2025" },
	{
		title: "Notification of Acceptance",
		date: "15 July, 2025",
	},
	{
		title: "Camera Ready Submission",
		date: "21 July, 2025",
	},
	{ title: "Workshop Day", date: "27 September, 2025" },
];

export default function ImportantDatesPage() {
	return (
		<section id="important-dates">
			<h2>Important Dates</h2>
      <p
        style={{
          color: "rgba(0, 0, 0, 0.2)",
          fontWeight: 700,
          fontSize: "1.5rem",
          textAlign: "center",
          marginTop: "2rem"
        }}
      >
        Important Dates will be announced shortly. Check back soon for updates!
      </p>
		</section>
	);
}
