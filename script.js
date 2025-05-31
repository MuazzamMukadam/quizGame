let btn = document.getElementById("replay");
const optionsEl = document.querySelectorAll("#options label");
let qn = document.getElementById("qn");
let qnval = 1;
const Chkoptions = document.querySelectorAll('input[name="same"]');
let isSelected = false;
let doneInd = [];
let scoreEl = document.getElementById("score");
let score = 0;
let msg = document.getElementById("txt");
const questions = [
  {
    question: "In 'Death Note', what is the Shinigami's name who dropped the notebook?",
  options: ["Ryuk", "Rem", "Goku", "L"],
  answer: "Ryuk",
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
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Programming Unit",
      "Control Processing Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
  },
  {
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "Which of these is a non-volatile memory?",
    options: ["RAM", "ROM", "Cache", "Register"],
    answer: "ROM",
  },
  {
    question: "Which protocol is used to transfer web pages?",
    options: ["FTP", "SMTP", "HTTP", "SNMP"],
    answer: "HTTP",
  },
  {
    question: "What is the full form of SQL?",
    options: [
      "Structured Question Language",
      "Strong Query Language",
      "Structured Query Language",
      "Standard Query Logic",
    ],
    answer: "Structured Query Language",
  },
  {
    question:
      "Which logic gate gives a true output only when both inputs are false?",
    options: ["AND", "OR", "NOR", "NAND"],
    answer: "NOR",
  },
];
function start() {
  const ranInd = Math.floor(Math.random() * questions.length);
  if (!doneInd.includes(ranInd)) {
    doneInd.push(ranInd);
    let quesArea = document.querySelector("#question h3");
    quesArea.innerText = questions[ranInd].question;
    optionsEl.forEach((node, i) => {
      node.querySelector("span").innerText = questions[ranInd].options[i];
    });
  } else {
    start();
  }
}

function play() {
  document.querySelector(".popup").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.querySelector(".main").style.display = "block";
  start();
}
function showPopup() {
  document.querySelector(".popup").style.display = "block";
  msg.innerHTML = `Correct Answers : ${score+1}<br> Wrong Answers : ${
    9 - score
  }`;
}
function next() {
  if (qnval == 10) {
    showPopup();
    return;
  }
  let selectedAnswer = null;
  for (const option of Chkoptions) {
    if (option.checked) {
      selectedAnswer = option.nextSibling.innerText; // Get the selected answer text
      isSelected = true;
      break;
    }
  }

  if (isSelected) {
    const currentQnIndex = doneInd[doneInd.length - 1]; // Get the last shown question index
    if (selectedAnswer === questions[currentQnIndex].answer) {
      document.body.style.background =
        "linear-gradient(to right, green, white)";
      setTimeout(() => {
        document.body.style.background = "white";
      }, 1000);
      score++; // Increase score if correct
      scoreEl.innerText = score; // Update score display
    } else {
      document.body.style.background =
        "linear-gradient(to right, darkred, red, black)";
      setTimeout(() => {
        document.body.style.background = "white";
      }, 1000);
    }
    qn.innerText = ++qnval; // Move to the next question
    isSelected = false;
    Chkoptions.forEach((option) => (option.checked = false));
    start();
  } else {
    alert("Please select an option");
  }
}
btn.addEventListener("click", () => {
  qn.innerText = 1;
  scoreEl.innerText = 0;
  qnval = 1;
  score = 0;
  doneInd = [];
  document.getElementById("intro").style.display = "block";
  document.querySelector(".main").style.display = "none";
});