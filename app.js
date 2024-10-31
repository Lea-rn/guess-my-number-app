"use strict"

// console.log(document.querySelector(".start").textContent)
// console.log(document.querySelector(".check").textContent)

// document.querySelector(".start").textContent = "correct Number !! "
// document.querySelector(".head-icon").textContent = 18

// document.querySelector(".guess").value = 18 ; 

// console.log(document.querySelector(".guess").value)

  const secretNumber = Math.trunc(Math.random()*20+1)

  document.querySelector('.head-icon').textContent = secretNumber

document.querySelector(".check").addEventListener("click",function(){
    const guess = Number(document.querySelector(".guess").value)
    if (!guess){
     document.querySelector(".start").textContent = " ⛔ No Number !!! "
    }

    if (guess === secretNumber){
        document.querySelector(".start").textContent = "🎉 Correct number !!! "
    }

    if (guess>secretNumber){
        document.querySelector(".start").textContent = " 📈 too high !!!"
    }
    if (guess && guess<secretNumber){
        document.querySelector(".start").textContent = " 📉 too low !!!"
    }
})