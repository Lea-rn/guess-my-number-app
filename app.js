"use strict";

// console.log(document.querySelector(".start").textContent)
// console.log(document.querySelector(".check").textContent)

// document.querySelector(".start").textContent = "correct Number !! "
// document.querySelector(".head-icon").textContent = 18

// document.querySelector(".guess").value = 18 ;

// console.log(document.querySelector(".guess").value)

//  console.log(document.querySelector(".between").textContent)

const secretNumber = Math.trunc(Math.random() * 20 + 1);


//   document.querySelector('.head-icon').textContent = secretNumber

let score = 20;
console.log(score);
let highscore = 0;

/// dry :  d'ont repeat your self

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".start").textContent = " ⛔ No Number !!! ";
  }

  if (guess === secretNumber) {
    document.querySelector(".start").textContent = "🎉 Correct number !!! ";
    score++;
    document.querySelector(".score-result").textContent = score;
    document.querySelector("body").style.backgroundColor = "greenyellow";
    document.querySelector(".head-icon").style.padding = "15px 65px";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".hightscore-result").textContent = highscore;
    }
  }

  if (score > 0) {
    if (guess > secretNumber) {
      document.querySelector(".start").textContent = " 📈 too high !!!";
      score-- ;
      document.querySelector(".score-result").textContent = score;
    }
  } else {
    document.querySelector(".start").textContent = " 💥 you loose !!!";
  }

  if (score > 0) {
    if (guess && guess < secretNumber) {
      document.querySelector(".start").textContent = " 📉 too low !!!";
      score--;
      document.querySelector(".score-result").textContent = score;
    }
  } else {
    document.querySelector(".start").textContent = " 💥 you loose !!!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
document.querySelector(".score-result").textContent = "20"
  document.querySelector(".start").textContent = "start guessing .... ";
  document.querySelector(".head-icon").textContent = "?";
  document.querySelector("body").style.backgroundColor = "rgb(43, 41, 41)";
  document.querySelector(".head-icon").style.padding = "5px 45px";
  document.querySelector(".guess").value = "";
});
