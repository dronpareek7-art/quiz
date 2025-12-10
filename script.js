let questionsdiv = document.querySelector(".question");
let quiz = document.querySelector(".quiz");
let optionsdiv = document.querySelectorAll(".options p");
let timerdiv = document.querySelector(".timer");

let box = document.querySelector("#box");
let button = document.querySelector(".next");

const data = [
  {
    q: "What is the capital of india",
    a: "New delhi",
    option: ["Mumbai", "churu", "New delhi ", "kolkata"],
    hasImage: false
  },
  {
    q: "Which planet is the closet to the sun",
    a: "Mercury",
    option: ["Earth", "Mars", "Mercury ", "Venus"],
     hasImage: false
  },
  {
    q: "Which is the largest ocean in the world",
    a: "Pacific Ocean",
    option: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Churu"],
     hasImage: false
  },
  {
    q: "Where is Murtikala ",
    a: "near FSL",
    option: ["near FSL", "Gopalpura", "Churu", "bundi"],
    hasImage: false
  },
  {
    q: "who is this stupid guy",
     Image: "images/fsl.jpg",
    a: "Akshat ajuba",
    option: ["Akshat ajuba", "Deepesh sir", "Rohit sir", "Dheeraj dada "],
    hasImage: true
  },
];

 function random(){
  let randomq = Math.floor(Math.random()*data.length);

  if(question.includes(randomq)){
    return random();
  }

  question.push(randomq);
  return randomq;
}



let count = 5;
let questionIndex = 0;
 let score = 0;

 let question = []

printquestionandoption();
let interval = setInterval(() => {
  if (count > 0) {
    timerdiv.innerText = count;
  } else {
    questionIndex++;
    count = 5;
    timerdiv.innerText = count;
    optionsdiv.forEach((op) => {
      op.style.backgroundColor = "";
      op.style.pointerEvents = "auto";
    });
    if (questionIndex >= data.length) {
      clearInterval(interval);
      quiz.style.display = "none";
      button.style.display = "none";
      //optionsdiv.style.opacity = "1"
      let para = document.createElement("p");
      if(score>=3){
        para.innerText = `congrats🥳 your score is ${score} out of ${data.length}`
      }
      else{
         para.innerText = ` bad ☠️ your score is ${score} out of ${data.length}`;
      }
     
      box.append(para);
      return;
    }
   questionIndex = random();
    printquestionandoption();
  }

  count--;
}, 2000);

function printquestionandoption() {
  if(!data[questionIndex].hasImage) {
  questionsdiv.innerHTML = data[questionIndex].q;
  

  } 
  else{
    questionsdiv.innerHTML = "";
    const span = document.createElement("span")
    span.innerText = data[questionIndex].q;
    const img = document.createElement("img");
    img.src = data[questionIndex].Image;
   // img.alt = data[questionIndex].question;
    questionsdiv.append(span,img);
  }

  optionsdiv.forEach((e, index) => {
    e.innerHTML = data[questionIndex].option[index];
  });
}

optionsdiv.forEach((e) => {
  e.addEventListener("click", () => {
    optionsdiv.forEach((e) => {
      e.style.pointerEvents = "none";
     // e.style.opacity = "0.6"
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
  count = 5;
  timerdiv.innerText = count;
  optionsdiv.forEach((op) => {
    op.style.backgroundColor = "";
    op.style.pointerEvents = "auto";
  });
  questionIndex++;

 questionIndex = random();
  printquestionandoption();
  
});


