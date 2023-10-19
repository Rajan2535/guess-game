// document.querySelector('.message').textContent= '🥳🎉Correct Number';
// document.querySelector('.number').textContent= '24';
// document.querySelector('.guess').value= '22';

let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = number;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //  Reset the game
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });

  if (!guess) {
    document.querySelector(".message").textContent = " ⛔ Nooo number is enter";

    //  when player wins the game
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🥳🎉Correct Number";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = " #60b347";
    document.querySelector(".number").style.width = "30rem";
  } else if (guess > number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "☝️☝️🙏too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 🔥🧨You lost the game";
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector(".message").textContent = "👇👇👇🔅Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 🔥🧨You lost the game";
    }
  }
});
