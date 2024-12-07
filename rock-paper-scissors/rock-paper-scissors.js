var currentSelect;

const choices = ["rock", "paper", "scissors"];

function handleFight() {
  const ans = randomInteger(0, 2);
  const choice = document.querySelector(`.${choices[ans]}`).textContent;

  const body = document.querySelector("body");
  const resultElement = document.querySelector(".ans");

  body.classList.add("animation");
  resultElement.textContent = "";

  setTimeout(() => {
    body.classList.remove("animation");
    resultElement.textContent = choice;

    const option = choices.indexOf(currentSelect);

    if (option === ans) {
      showResult("Draw!!!", "#e6e8b3");
    } else if (ans - option !== 2 && option < ans) {
      showResult("You lose!!!", "#f0beaa");
    } else {
      showResult("You win!!!", "#abd194");
    }
  }, 1000);
}

function showResult(message, color) {
  document.querySelector(".result").textContent = message;
  document.querySelector("body").style.background = color;
}

function handleSelect(event) {
  const select = event.target.classList;
  currentSelect = select[1];

  selected(event);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selected(event) {
  document
    .querySelectorAll(".item")
    .forEach((item) => item.classList.remove("selected"));

  event.target.classList.add("selected");
}
