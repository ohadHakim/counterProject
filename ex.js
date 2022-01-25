const STARTING_COUNTER_DEFAULTS = 0;

let counter = STARTING_COUNTER_DEFAULTS;

const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const counterResult = document.getElementById("counter-result");
const resetBtn = document.getElementById("reset-btn");

plusBtn.addEventListener("click", addToCounter);
minusBtn.addEventListener("click", minusCounter);
resetBtn.addEventListener("click", resetCounter);

// resetCounter();

function addToCounter() {
  counterResult.innerHTML = ++counter;
  if (counter >= 10) {
    document.getElementById("plus-btn").disabled = true;
    alert("No More Then 10!!!");
  }
}

function minusCounter() {
  counterResult.innerHTML = --counter;
}

function resetCounter() {
  counter = STARTING_COUNTER_DEFAULTS;
  counterResult.innerHTML = counter;
  if ((counter = 10)) {
    window.location.reload();
  }
}
