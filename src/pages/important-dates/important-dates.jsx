import styles from "./style.module.css";

const dates = [
  { title: "Paper Submission Begins", date: "12 May, 2025" },
  { title: "Submission Deadline", date: "20 June, 2025" },
  { title: "Paper Decision Notification", date: "15 July, 2025" },
  { title: "Camera Ready Submission", date: "21 July, 2025" },
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
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
