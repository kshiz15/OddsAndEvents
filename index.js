// TODO: this file! :)

const numberBank = [];
const oddNumber = [];
const evenNumber = [];

// Add num to bank

function addToBank(number) {
  numberBank.push(number);
}

// Sort individual numbers

function sortOne() {
  const number = numberBank.shift();
  if (number % 2 === 0) {
    evenNumber.push(number);
  } else {
    oddNumber.push(number);
  }
}

// Sort all numbers

function sortAll() {
  numberBank.forEach((number) => {
    if (number % 2 === 0) {
      evenNumber.push(number);
    } else {
      oddNumber.push(number);
    }
  });
}

//  === Render ===

// Render nums to numBank

function renderNumberBank(numbers, $element) {
  const $numbers = numbers.map((number) => {
    const $number = document.createElement("span");
    $number.textContent = number;
    return $number;
  });
  $element.replaceChildren(...$numbers);
}

// === Script ===

function render() {
  const $numberBank = document.querySelector("#numberBank output");
  renderNumberBank(numberBank, $numberBank);
  const $oddNumber = document.querySelector("#odds output");
  renderNumberBank(oddNumber, $oddNumber);
  const $evenNumber = document.querySelector("#evens output");
  renderNumberBank(evenNumber, $evenNumber);
}

// When the user clicks the "Add Number" button,
// the number they entered into the input field should be added to the number bank.

const $form = document.querySelector("form");
$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const $number = document.querySelector("#number");
  const number = $number.value;
  if (number.length === 0 || isNaN(number)) {
    console.error("Input must be a number");
  }

  $number.value = "";
  addToBank(number);
  render();
});

// Sort one

const $sortOne = document.querySelector("#sortOne");
$sortOne.addEventListener("click", () => {
  sortOne();
  render();
});

//  Sort all

const $SortAll = document.querySelector("#sortAll");
$SortAll.addEventListener("click", () => {
  sortAll();
  render();
});

render();
