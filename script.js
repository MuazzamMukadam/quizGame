




let qn = document.getElementById('qn');
const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: "Cascading Style Sheets",
  },
];
const ranInd = Math.floor(Math.random()*questions.length);
let quesArea = document.querySelector('#question h3');
quesArea.innerText = questions[ranInd].question;

function play() {
  document.getElementById("intro").style.display = "none";
  document.querySelector(".main").style.display = "block";
}
console.log(ranInd);