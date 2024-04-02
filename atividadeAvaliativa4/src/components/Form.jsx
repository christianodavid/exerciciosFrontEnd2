import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ addStudent }) => {
  const [student, setStudent] = useState("");
  const [grade0, setGrade0] = useState("");
  const [grade1, setGrade1] = useState("");
  const [grade2, setGrade2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentInfo = {
      student: student,
      grade0: parseFloat(grade0),
      grade1: parseFloat(grade1),
      grade2: parseFloat(grade2),
    };
    addStudent(studentInfo);
    setStudent("");
    setGrade0("");
    setGrade1("");
    setGrade2("");
  };

  const handleGradeChange = (e, setGrade) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 10) {
      setGrade(value.toString());
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input_group}>
          <label className={styles.input_group__label}>Aluno:</label>
          <input
            type="text"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            placeholder="Digite o nome do aluno"
            required
            className={styles.input_group__input}
          />
        </div>
        <div className={styles.input_group}>
          <label className={styles.input_group__label}>Nota 1:</label>
          <input
            type="number"
            step="any"
            value={grade0}
            onChange={(e) => handleGradeChange(e, setGrade0)}
            placeholder="Digite a nota 1"
            required
            className={styles.input_group__input}
          />
        </div>
        <div className={styles.input_group}>
          <label className={styles.input_group__label}>Nota 2:</label>
          <input
            type="number"
            step="any"
            value={grade1}
            onChange={(e) => handleGradeChange(e, setGrade1)}
            placeholder="Digite a nota 2"
            required
            className={styles.input_group__input}
          />
        </div>
        <div className={styles.input_group}>
          <label className={styles.input_group__label}>Nota 3:</label>
          <input
            type="number"
            step="any"
            value={grade2}
            onChange={(e) => handleGradeChange(e, setGrade2)}
            placeholder="Digite a nota 3"
            required
            className={styles.input_group__input}
          />
        </div>

        <input
          className={styles.submit_button}
          type="submit"
          value="Adicionar"
        />
      </form>
    </>
  );
};

export default Form;
