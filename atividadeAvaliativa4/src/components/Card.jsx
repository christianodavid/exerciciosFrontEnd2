import styles from "./Card.module.css";

const Card = ({ student, grade0, grade1, grade2 }) => {
  const meanCalculation = () => {
    const sum = grade0 + grade1 + grade2;
    return sum / 3;
  };

  const mean = meanCalculation();

  let status;

  if (mean >= 7) {
    status = "Aprovado";
  } else {
    status = "Reprovado";
  }

  let backgroundColor;

  if (status === "Aprovado") {
    backgroundColor = styles.passed;
  } else {
    backgroundColor = styles.failed;
  }

  return (
    <div className={`${styles.container} ${backgroundColor}`}>
      <h1 className={styles.student}>{student}</h1>
      <p className={styles.grade}>{mean.toFixed(2)}</p>
      <p className={styles.status}>{status}</p>
    </div>
  );
};

export default Card;
