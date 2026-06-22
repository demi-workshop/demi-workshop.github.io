import styles from "./style.module.css";

const dates = [
	{ title: "Paper Submission Begins", date: "8 May, 2026" },
	{
		title: "Submission Deadline",
		old_date: "18 June, 2026",
		date: "2 July, 2026",
	},
	{ 
		title: "Reviews Due", 
		old_date: "16 July, 2026",
		date: "23 July, 2023",
	},
	{
		title: "Notification of Acceptance",
		old_date: "23 July, 2026",
		date: "31 July, 2026"
	},
	{
		title: "Camera Ready Submission",
		old_date: "6 August, 2026",
		date: "13 August, 2026",
	},
	{ title: "Workshop Day", date: "1 October, 2026" },
];

export default function ImportantDatesPage() {
	return (
		<section id="important-dates">
			<h2>Important Dates</h2>
      {/* <p
        style={{
          color: "rgba(0, 0, 0, 0.2)",
          fontWeight: 700,
          fontSize: "1.5rem",
          textAlign: "center",
          marginTop: "2rem"
        }}
      >
        Important Dates will be announced shortly. Check back soon for updates!
      </p> */}
			
			<table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.headerRow}>
            <th className={styles.cell}>Event</th>
            <th className={styles.cell}>Date</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {dates.map((row, idx) => {
            return (
              <tr key={idx} className={styles.dataRow}>
                <td className={styles.cell}>{row["title"]}</td>
                <td className={styles.cell}>
                  {row["old_date"] && (
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "grey",
                        marginRight: "0.5rem",
                      }}
                    >
                      {row["old_date"]}
                    </span>
                  )}
                  {row["date"]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
		</section>
	);
}
