"use strict";

const form = document.getElementById("form");
const formAnswer = document.getElementById("form__answer");

const meanCalculation = (grades) => {
  if (grades.length !== 3 || grades.includes(undefined)) {
    alert(
      "A função deve lidar com vetores de notas de tamanho três que nunca está vazio."
    );
  }

  let sum = 0;

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 0 || grades[i] > 10) {
      alert("As notas devem estar entre 0 e 10.");
      form.reset();
      return NaN;
    }
    sum += grades[i];
  }

  return sum / grades.length;
};

form.addEventListener("submit", (e) => {
  const student = form.student.value;
  const grade0 = Number(form.grade0.value);
  const grade1 = Number(form.grade1.value);
  const grade2 = Number(form.grade2.value);

  const grades = [grade0, grade1, grade2];
  const mean = meanCalculation(grades);

  if (!isNaN(mean)) {
    if (mean >= 7) {
      formAnswer.innerText = `A média das notas é ${mean.toFixed(2)}.
      ${student} foi APROVADO!`;
    } else {
      formAnswer.innerText = `A média das notas é ${mean.toFixed(2)}.
      ${student} foi REPROVADO!`;
    }
  } else {
    formAnswer.innerText = "";
  }

  e.preventDefault();
});
