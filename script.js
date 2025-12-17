const questionPara = document.querySelector(".question");
const timerPara = document.querySelector(".timer");
const options = document.querySelectorAll(".options p");
const quiz = document.querySelector(".quiz");
const button = document.querySelector(".next");
const box = document.querySelector("#box");
const data = [
  {
    q: "What is the capital of india",
    a: "New delhi",
    option: ["Mumbai", "churu", "New delhi ", "kolkata"],
    hasImage: false,
  },
  {
    q: "Which planet is the closet to the sun",
    a: "Mercury",
    option: ["Earth", "Mars", "Mercury ", "Venus"],
    hasImage: false,
  },
  {
    q: "Which is the largest ocean in the world",
    a: "Pacific Ocean",
    option: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Churu"],
    hasImage: false,
  },
  {
    q: "👉 K + F + C = ?",
    Image:
      "https://the99puzzle.com/wp-content/uploads/2023/12/Puzz300-300x300.webp",
    a: "9",
    option: ["6", "8", "9", "12"],
    hasImage: true,
  },
  {
    q: "“Which monument is visible in this image?”",
    Image:
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxHvF5EKWmxuqmKlbsXYCy8cIyunsKw-iYr-T72z_RHOYL5NP00Q3h9cl9Gj_MRiL32D7D_PynBvmUDiYTF9vJoWAVCnNVotbOh3cW7KUtQXOzCAmQzWfycqSw0yRI1QdT-aCaHqA=s1360-w1360-h1020-rw",
    a: "Taj Mahal",
    option: ["Taj Mahal", "Qutub Minar", "Red Fort", "Statue of Unity "],
    hasImage: true,
  },
];

const randomOrder = [];

let questionNumber = 0;
let time = 5;
let interval;
let score = 0;
for (let i = 0; i < 5; i++) {
  generateRandomOrder();
}

timerPara.innerText = time;
printQuestionAndOptions();

start();
function start() {
  interval = setInterval(() => {
    if (time <= 1) {
      time = 5;
      timerPara.innerText = time;
      questionNumber++;
      printQuestionAndOptions();
      options.forEach((e) => {
        e.style.backgroundColor = "";
        e.style.pointerEvents = "auto";
      });
      //reset()
    } else {
      timerPara.innerText = --time;
    }
    reset();
  }, 1000);
}

function reset() {
  if (questionNumber >= data.length) {
    quiz.style.display = "none";
    clearInterval(interval);

    let para = document.createElement("p");
    para.innerText = `your score is ${score} out of ${data.length}`;
    box.append(para);
  }
}

function printQuestionAndOptions() {
  if (!data[randomOrder[questionNumber]].hasImage) {
    questionPara.innerHTML = data[randomOrder[questionNumber]].q;
  } else {
    questionPara.innerHTML = "";
    const span = document.createElement("span");
    span.innerText = data[randomOrder[questionNumber]].q;
    const img = document.createElement("img");
    img.src = data[randomOrder[questionNumber]].Image;
    questionPara.append(span, img);
  }
  //questionPara.innerText = data[randomOrder[questionNumber]].q;
  options.forEach((e, i) => {
    e.innerText = data[randomOrder[questionNumber]].option[i];
  });
}

function generateRandomOrder() {
  let randomm = Math.floor(Math.random() * data.length);
  if (randomOrder.includes(randomm)) {
    return generateRandomOrder();
  }
  randomOrder.push(randomm);
}

function printscore() {
  const para = document.createElement("p");
  para.innerText = `your score is ${score} out of ${data.length}`;
  quiz.append(para);
}

options.forEach((opt) => {
  opt.addEventListener("click", () => {
    options.forEach((o) => {
      o.style.pointerEvents = "none";
    });

    if (opt.innerText === data[randomOrder[questionNumber]].a) {
      opt.style.backgroundColor = "green";
      score++;
      console.log(score);
    } else {
      opt.style.backgroundColor = "red";
      options.forEach((opt) => {
        if (opt.innerText === data[randomOrder[questionNumber]].a) {
          opt.style.backgroundColor = "green";
        }
      });
    }
  });
});

button.addEventListener("click", () => {
  time = 5;
  // start()
  timerPara.innerText = time;

  options.forEach((e) => {
    e.style.backgroundColor = "";
    e.style.pointerEvents = "auto";
  });
  questionNumber++;
  printQuestionAndOptions();
});
