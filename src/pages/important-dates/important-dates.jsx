import React from "react";
import styles from "./style.module.css";

const dates = [
  { title: "Paper Submission Begins", date: "12 May, 2025" },
  { title: "Submission Deadline", date: "28 June, 2025" },
  { title: "Reviews Due", date: "12 July, 2025" },
  { title: "Notification of Acceptance", date: "19 July, 2025" },
  { title: "Camera Ready Submission", date: "6 August, 2025" },
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
          fontSize: "2rem",
          textAlign: "center",
        }}
      ></p>
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
                <td className={styles.cell}>{row["date"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
