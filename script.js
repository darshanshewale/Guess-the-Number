import "core-js/stable";

("use strict");

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number !";

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

//Generate random number between 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//this will display the message o
const displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//can be consider as user user has the chances to guess the number
let score = 20;
let highscore = 0;

//click event through check
document.querySelector(".check").addEventListener("click", function () {
  //will get the value in string which is converted to number
  const guess = Number(document.querySelector(".guess").value);

  //guard clause as click without entering , value will display no number to player
  if (!guess) {
    // document.querySelector(".message").textContent = " ⛔ No Number !";
    displaymessage("⛔ No Number !");
  } else if (guess === secretNumber) {
    //this will check the guess and secret number matches then number will be reveal
    document.querySelector(".number").textContent = secretNumber;

    // document.querySelector(".message").textContent = "🎉🎊 Correct Number !";
    //display the message as correct number as well
    displaymessage("🎉🎊 Correct Number !");

    //this will chances the background color to green on correct guessing as
    document.querySelector("body").style.backgroundColor = "#60b347";

    //this will update the highscore if the able to guess in minimum chances as well as previous highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    //check if not  lose the game
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? " 📈 High Number !" : " 📉 Low Number !";

      displaymessage(
        guess > secretNumber ? " 📈 High Number !" : " 📉 Low Number !"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent =
      //   " ❌ You Lost the game !";
      displaymessage("❌ You Lost the game !");
      document.querySelector(".score").textContent = 0;
    }
  }

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = " 📈 High Number !";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       " ❌ You Lost the game !";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = " 📉 Low Number !";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent =
  //       " ❌ You Lost the game !";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// this will set the game to initial UI except highscore
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector(".message").textContent = "Start Guessing ...";
  displaymessage("👆 Start Guessing");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "❓";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
});
