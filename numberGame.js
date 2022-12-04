/*
** numberGame
*/
const numberGameForm = document.querySelector(".numberGameForm");
const inputNumber = document.querySelector(".numberGameForm .inputNumber");
const guessNumber = document.querySelector(".numberGameForm .guessNumber");

const result = document.querySelector(".result");
const choseNumber = document.querySelector(".result .choseNumber");
const machineChose = document.querySelector(".result .machineNumber");
const resultText = document.querySelector(".result .resultText");

function submitNumberGameForm(event) {
  event.preventDefault();

  const getInputNumber = inputNumber.value;
  const getGuessNumber = guessNumber.value;

  if (getInputNumber >= 0 && getGuessNumber >= 0) {
    const machineNumber = Math.round(Math.random() * getInputNumber);
    choseNumber.innerText = getGuessNumber;
    machineChose.innerText = machineNumber;
    
    if (parseInt(getGuessNumber, 10) === machineNumber) {
      resultText.innerText = "You won!";
    } else {
      resultText.innerText = "You lost!";
    }
    result.classList.remove("none");
    
  } else {
    alert("Please enter a positive number.");
  }
}

numberGameForm.addEventListener("submit", submitNumberGameForm);