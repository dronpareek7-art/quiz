timerdiv = document.querySelector(".timer");
optionsdiv = document.querySelectorAll(".options p");
questionsdiv = document.querySelector(".question");
quiz = document.querySelector(".quiz");
box = document.querySelector("#box");
button = document.querySelector(".next");
const data = [
  {
    q: "What is the capital of india",
    a: "New delhi",
    option: ["Mumbai", "churu", "New delhi ", "kolkata"],
  },
  {
    q: "Which planet is the closet to the sun",
    a: "Mercury",
    option: ["Earth", "Mars", "Mercury ", "Venus"],
  },
  {
    q: "Which is the largest ocean in the world",
    a: "Pacific Ocean",
    option: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Churu"],
  },
  {
    q: "Where is Murtikala ",
    a: "near FSL",
    option: ["near FSL", "Gopalpura", "Churu", "bundi"],
  },
  {
    q: "where is FSL",
    a: "Murtikala",
    option: ["gopalpura", "churu", "Murtikala ", "jaipur"],
  },
];

let questionIndex = 0;
let count = 5;
score = 0;
timerdiv.innerText = count;

let interval = setInterval(() => {
  if (count >= 1) {
    timerdiv.innerText = count;
  } else {
    count = 6;
    questionIndex++;
    optionsdiv.forEach((op) => {
      op.style.backgroundColor = "";
      op.style.pointerEvents = "auto";
    });
    if (questionIndex >= data.length - 1) {
      clearInterval(interval);
      quiz.style.display = "none";
      let para = document.createElement("p");
      para.innerText = `your score is ${score} out of ${data.length}`;
      box.append(para);
      return;
    }
  }
  printquestionandoption();
  count--;
}, 1000);

function printquestionandoption() {
  questionsdiv.innerText = data[questionIndex].q;
  optionsdiv.forEach((e, index) => {
    e.innerText = data[questionIndex].option[index];
  });
}

optionsdiv.forEach((e) => {
  e.addEventListener("click", () => {
    optionsdiv.forEach((e) => {
      e.style.pointerEvents = "none";
    });

    if (e.innerText === data[questionIndex].a) {
      e.style.backgroundColor = "green";
      score++;
      console.log(score);
    } else {
      e.style.backgroundColor = "red";

      optionsdiv.forEach((e) => {
        if (e.innerText === data[questionIndex].a) {
          e.style.backgroundColor = "green";
        }
      });
    }
  });
});

button.addEventListener("click", () => {
  questionIndex++;
  optionsdiv.forEach((op) => {
    op.style.backgroundColor = "";
    op.style.pointerEvents = "auto";
  });
  count = 5;
  printquestionandoption();
});
