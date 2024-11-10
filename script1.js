// task1============
// const randomText = document.getElementById("random__text");
// const hideBtn = document.getElementById("hide");

// hideBtn.addEventListener("click", () => {
//   randomText.classList.toggle("hidden");

//   randomText.classList.contains("hidden")
//     ? (hideBtn.textContent = "show me")
//     : (hideBtn.textContent = "hide me");
// });

// task2============

// const container = document.createElement("div");
// container.id = "card";

// const title = document.createElement("h2");
// title.textContent = "Gandalf";

// const link = document.createElement("a");
// link.setAttribute("href", "#");
// link.textContent = "Go to profile";

// container.appendChild(title);
// container.appendChild(link);
// document.body.appendChild(container);

// task 3 =============
let score = 0;

function showQuestion(question, answers, correctAnswerIndex) {
  const questionContainer = document.getElementById("question");
  questionContainer.textContent = question;

  const answerContainer = document.querySelectorAll(".answer");
  answerContainer.forEach((element, index) => {
    element.textContent = answers[index];
    element.classList.remove("correct", "incorrect");
    element.onclick = () => checkAnswer(element);
  });
}

let checkAnswer = (selected) => {
  const answers = document.querySelectorAll(".answer");
  const selectedAnswerIndex = Array.from(answers).indexOf(selected);

  if (selectedAnswerIndex === correctAnswerIndex) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("incorrect");
  }
  updateScore();
};

function updateScore() {
  const scoreContainer = document.getElementById("score");
  scoreContainer.textContent = `${score}`;
}

const question = "what is the capital of Tbilisi";
const answers = ["tbilisi", "zugdidi", "chxorotsku"];
const correctAnswerIndex = 0;

showQuestion(question, answers, correctAnswerIndex);
