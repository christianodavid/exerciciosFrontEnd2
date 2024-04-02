import { useState } from "react";
import Window from "./components/Window";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const initialCard = {
    student: "Christiano David",
    grade0: 8.8,
    grade1: 9.5,
    grade2: 9.7,
  };

  return (
    <div className="App">
      <Window>
        <Form addStudent={addStudent} />
        <Card
          student={initialCard.student}
          grade0={initialCard.grade0}
          grade1={initialCard.grade1}
          grade2={initialCard.grade2}
        />
        {students.map((student, index) => (
          <Card
            key={index}
            student={student.student}
            grade0={student.grade0}
            grade1={student.grade1}
            grade2={student.grade2}
          />
        ))}
      </Window>
    </div>
  );
}

export default App;
