timerdiv = document.querySelector(".timer");
optionsdiv = document.querySelectorAll(".options p");
questionsdiv = document.querySelector(".question");
quiz = document.querySelector(".quiz");

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
let score = 0;
timerdiv.innerText = count;

function printquestionsandoption() {
  questionsdiv.innerText = data[questionIndex].q;
  optionsdiv.forEach((e, index) => {
    e.innerText = data[questionIndex].option[index];
    e.style.backgroundColor = "";
    e.style.pointerEvents = "auto"
  });

}

let interval = setInterval(() => {
  if (count > 0) {
    timerdiv.innerText = count;
  } else {
    count = 6;
    questionIndex++;
    if (questionIndex >= data.length) {
      questionIndex = 0;
      quiz.style.display = "none";
      clearInterval(interval);
    }
  }
  printquestionsandoption();
  count--;
}, 1000);


optionsdiv.forEach((e) => {
  e.addEventListener("click", () => {

     //clearInterval(interval);

    optionsdiv.forEach((e)=>{
        e.style.pointerEvents = "none";
    })

    if (e.innerText === data[questionIndex].a) {
      e.style.backgroundColor = "green";
    } else {
      e.style.backgroundColor = "red";
      optionsdiv.forEach((e) => {

        if (e.innerText === data[questionIndex].a) {
          e.style.backgroundColor = "green";
        }
      });
    }
    // setTimeout(()=>{
    //   count =1;

    // },1000);
  });
});
