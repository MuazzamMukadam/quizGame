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
    question: "What is the name of the main protagonist in 'Naruto'?",
    options: ["Sasuke Uchiha", "Naruto Uzumaki", "Kakashi Hatake", "Itachi Uchiha"],
    answer: "Naruto Uzumaki"
  },
  {
    question: "Which anime features the 'Survey Corps'?",
    options: ["Bleach", "Attack on Titan", "Fullmetal Alchemist", "Demon Slayer"],
    answer: "Attack on Titan"
  },
  {
    question: "What is the name of the pirate crew led by Monkey D. Luffy?",
    options: ["Blackbeard Pirates", "Heart Pirates", "Straw Hat Pirates", "Red-Haired Pirates"],
    answer: "Straw Hat Pirates"
  },
  {
    question: "Who is the main character in 'Death Note'?",
    options: ["Light Yagami", "L Lawliet", "Ryuk", "Near"],
    answer: "Light Yagami"
  },
  {
    question: "What kind of creature is Kurama in 'Naruto'?",
    options: ["A snake", "A dragon", "A fox", "A wolf"],
    answer: "A fox"
  },
  {
    question: "Which anime features alchemy as a central theme?",
    options: ["Tokyo Ghoul", "Bleach", "Fullmetal Alchemist", "One Piece"],
    answer: "Fullmetal Alchemist"
  },
  {
    question: "In 'Dragon Ball Z', who is Goku’s rival and prince of the Saiyans?",
    options: ["Piccolo", "Gohan", "Frieza", "Vegeta"],
    answer: "Vegeta"
  },
  {
    question: "What anime has a character named Tanjiro Kamado?",
    options: ["Black Clover", "Demon Slayer", "Fairy Tail", "Inuyasha"],
    answer: "Demon Slayer"
  },
  {
    question: "What is the profession of Saitama in 'One Punch Man'?",
    options: ["Assassin", "Hero", "Martial Artist", "Teacher"],
    answer: "Hero"
  },
  {
    question: "Which anime features a notebook that can kill anyone whose name is written in it?",
    options: ["Death Parade", "Psycho-Pass", "Death Note", "Another"],
    answer: "Death Note"
  },
  {
    question: "What is the real name of the main character who finds the Death Note?",
    options: ["Ryuk", "Light Yagami", "L Lawliet", "Near"],
    answer: "Light Yagami"
  },
  {
    question: "Who is the Shinigami that drops the Death Note into the human world?",
    options: ["Rem", "Ryuk", "Gelus", "Sidoh"],
    answer: "Ryuk"
  },
  {
    question: "What is the default method of death if not specified in the Death Note?",
    options: ["Suicide", "Heart attack", "Accident", "Poisoning"],
    answer: "Heart attack"
  },
  {
    question: "What alias does Light Yagami use when acting as a vigilante?",
    options: ["Killer", "Justice", "Kira", "Zero"],
    answer: "Kira"
  },
  {
    question: "What is L's full name?",
    options: ["L Lawliet", "L Ryuzaki", "L Takada", "L Near"],
    answer: "L Lawliet"
  },
  {
    question: "What is the name of the girl who becomes the second Kira?",
    options: ["Sayu Yagami", "Naomi Misora", "Misa Amane", "Kiyomi Takada"],
    answer: "Misa Amane"
  },
  {
    question: "What must a person know to kill someone using the Death Note?",
    options: ["Their favorite food and birthday", "Their face and real name", "Their phone number", "Their blood type"],
    answer: "Their face and real name"
  },
  {
    question: "Who kills L in the series?",
    options: ["Ryuk", "Light", "Rem", "Misa"],
    answer: "Rem"
  },
  {
    question: "Which organization does L work with to catch Kira?",
    options: ["Interpol", "SPK", "Task Force", "Wammy's House"],
    answer: "Task Force"
  },
  {
    question: "How does Light Yagami die at the end of the series?",
    options: ["He is killed by Ryuk", "He is arrested", "He commits suicide", "He escapes"],
    answer: "He is killed by Ryuk"
  }
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
  if (qnval == 20) {
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