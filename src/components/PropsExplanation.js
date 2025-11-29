export default function PropsExplanation() {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>📝 Props Drilling Explanation</h3>
      <p style={styles.text}>
        Props drilling is refers to where the data is passed from a parent
        component down through multiple levels of components—even when some of
        those intermediate components do not actually need the data. This leads to
        unnecessary prop passing, makes the code harder to maintain, and increases
        complexity as the app grows. The React Context API helps solve this by
        allowing global data sharing without manual prop chaining.
      </p>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "700px",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
       fontSize: "20px"
  },
  text: {
    color: "#555",
    lineHeight: "1.6",
    fontSize: "17px",
  },
};

