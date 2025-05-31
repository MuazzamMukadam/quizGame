



const optionsEl = document.querySelectorAll('#options label');
let qn = document.getElementById('qn');
let qnval = 1;
const Chkoptions = document.querySelectorAll('input[name="same"]');
let isSelected = false;
let doneInd = [];
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
function start(){

 const ranInd = Math.floor(Math.random()*questions.length);
     if(!doneInd.includes(ranInd)){
doneInd.push(ranInd);
let quesArea = document.querySelector('#question h3');
quesArea.innerText = questions[ranInd].question;
optionsEl.forEach((node,i)=>{
node.querySelector('span').innerText = questions[ranInd].options[i];
});
}else{
    start();
}
}

function play() {
  document.getElementById("intro").style.display = "none";
  document.querySelector(".main").style.display = "block";
  start();
  
}
function next(){
for (const option of Chkoptions) {
  if (option.checked) {
    isSelected = true;
    break;
  }
}
if(isSelected){
qn.innerText = ++qnval;
isSelected = false;
Chkoptions.forEach(option => option.checked = false);
start();
}else{
    alert('Please select an option');
}
}