import styles from "./Card.module.css";

const Card = (props) => {
  let status;

  if (props.mean >= 7) {
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
      <h1 className={styles.student}>{props.student}</h1>
      <p className={styles.grade}>{props.mean}</p>
      <p className={styles.status}>{status}</p>
    </div>
  );
};

export default Card;
