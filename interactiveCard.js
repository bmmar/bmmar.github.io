// So what are the challenges ?
//     1. Add fairly simple validation for each of the input elements
//     - cannot be blank
//     - Wrong format - numbers(text) only
//      2. As the name, Card number, expiry dates, and CVC are typed, update the relevant element text on the card.
//     3. Once all validation is passed and submit is pressed - remove input area and replace it with complete
//     state design (mobile - desktop will need more work)

const nameOnCard = document.querySelector(".name");
const inputName = document.querySelector("#input-name");
const numOnCard = document.querySelector(".card-writing");
const inputNum = document.querySelector(".card-number");
const monthOnCard = document.querySelector(".card-date");
const inputMonth = document.querySelector("#expiry-date-month");
const inputYear = document.querySelector("#expiry-date-year");
const cvcOnCard = document.querySelector(".noughts");
const inputCVC = document.querySelector("#cvc");
const nameErrorText = document.querySelector(".name-error-text");
const cardErrorText = document.querySelector(".card-error-text");
const monthErrorText = document.querySelector(".month-error-text");
const yearErrorText = document.querySelector(".year-error-text");
const cvcErrorText = document.querySelector(".cvc-error-text");
const confirmBtn = document.querySelector("button");
const inputArea = document.querySelector(".input-area");
const completedState = document.querySelector(".completed-state");
let isNameOK = false;
let isNumberOK = false;
let isMonthOK = false;
let isYearOK = false;
let isCvcOK = false;
let complete = true;

const completedAreaString =
  '<div class="tick-image"><svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg></div><h1>Thank you!</h1><h2>We\'ve added your card details</h2><button>Continue</button>';

completedState.innerHTML = "";

function getInputName() {
  if (inputName.value == "") {
    nameOnCard.innerHTML = "Jane Appleseed";
    complete = false;
  } else {
    nameOnCard.innerHTML = inputName.value;
    complete = true;
  }
  nameErrorText.style.opacity = "0";
  inputName.style.borderColor = "black";
  isNameOK = true;
}

function getCardNumber() {
  if (inputNum.value == "") {
    numOnCard.innerHTML = "0000 0000 0000 0000";
    cardErrorText.style.opacity = "0";
    inputNum.style.borderColor = "black";
    complete = false;
  } else {
    numOnCard.textContent = insertSpaces(inputNum.value);
    complete = true;
    if (!numeric(inputNum.value)) {
      cardErrorText.style.opacity = "1";
      inputNum.style.borderColor = "red";
      cardErrorText.innerHTML = "Wrong format, numbers only";
      isNumberOK = false;
    } else if (
      inputNum.value.toString().length < 16 &&
      inputNum.value.toString().length > 0
    ) {
      cardErrorText.style.opacity = "1";
      inputNum.style.borderColor = "red";
      cardErrorText.innerHTML = "Card number must be 12 digits";
      isNumberOK = false;
    } else {
      cardErrorText.style.opacity = "0";
      inputNum.style.borderColor = "black";
      isNumberOK = true;
    }
  }
}

function getMonth() {
  if (inputMonth.value == "") {
    monthOnCard.innerHTML = "00/00";
    complete = false;
  } else {
    monthOnCard.innerHTML = inputMonth.value + "/00";
    complete = true;
  }
  if (parseInt(inputMonth.value) < 1 || parseInt(inputMonth.value) > 12) {
    monthErrorText.style.opacity = "1";
    inputMonth.style.borderColor = "red";
    monthErrorText.innerHTML = "Invalid month";
    isMonthOK = false;
  } else {
    monthErrorText.style.opacity = "0";
    inputMonth.style.borderColor = "black";
    isMonthOK = true;
  }
}

function getYear() {
  if (inputYear.value == "" && inputMonth.value == "") {
    monthOnCard.innerHTML = "00/00";
    complete = false;
  } else if (inputYear.value == "" && inputMonth.value !== "") {
    monthOnCard.innerHTML = inputMonth.value + "/00";
    complete = false;
  } else if (inputMonth.value != "" && inputYear.value != "") {
    monthOnCard.innerHTML = inputMonth.value + "/" + inputYear.value;
    complete = true;
  } else { 
    monthOnCard.innerHTML = inputMonth.value + "/" + inputYear.value;
    complete = false;
  }
  if (parseInt(inputYear.value) < 22 || parseInt(inputYear.value) > 35) {
    yearErrorText.style.opacity = "1";
    inputYear.style.borderColor = "red";
    yearErrorText.innerHTML = "Invalid year";
    isYearOK = false;
  } else {
    yearErrorText.style.opacity = "0";
    inputYear.style.borderColor = "black";
    isYearOK = true;
  }
}

function getCVC() {
  if (inputCVC.value == "") {
    cvcOnCard.innerHTML = "000";
    complete = false;
  } else {
    cvcOnCard.innerHTML = inputCVC.value;
    complete = true;
  }
  if (
    inputCVC.value.toString().length < 3 &&
    inputCVC.value.toString().length > 0
  ) {
    cvcErrorText.style.opacity = "1";
    inputCVC.style.borderColor = "red";
    cvcErrorText.innerHTML = "Invalid CVC number";
    isCvcOK = false;
  } else {
    cvcErrorText.style.opacity = "0";
    inputCVC.style.borderColor = "black";
    isCvcOK = true;
  }
}

inputName.addEventListener("focusout", () => {
  getInputName();
});

inputNum.addEventListener("focusout", () => {
  getCardNumber();
});

inputMonth.addEventListener("focusout", () => {
  getMonth();
});

inputYear.addEventListener("focusout", () => {
  getYear();
});

inputCVC.addEventListener("focusout", () => {
  getCVC();
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkOnSubmit();
});

function numeric(inputtxt) {
  var letterNumber = /^[0-9]+$/;
  if (inputtxt.match(letterNumber)) {
    return true;
  } else {
    return false;
  }
}

function insertSpaces(number) {
  alteredNumber = number.toString();
  for (let i = 0; i < number.toString().length; i++) {
    if (i == 4 || i == 9 || i == 14) {
      alteredNumber =
        alteredNumber.slice(0, i) + " " + alteredNumber.toString().slice(i);
    }
  }
  return alteredNumber;
}

function checkOnSubmit(e) {
  if (inputName.value == "") {
    blankCheck(inputName, nameErrorText)
  }
  if (inputNum.value == "") {
    blankCheck(inputNum, cardErrorText)
  }
  if (inputMonth.value == "") {
    blankCheck(inputMonth, monthErrorText)
  }
  if (inputYear.value == "") { 
    blankCheck(inputYear, yearErrorText);
  }
  if (inputCVC.value == "") {
    blankCheck(inputCVC, cvcErrorText);
  }
  if (
    complete === true &&
    isNameOK === true &&
    isNumberOK === true &&
    isMonthOK === true &&
    isYearOK === true &&
    isCvcOK === true
  ) {
    inputArea.innerHTML = "";
    completedState.innerHTML = completedAreaString;
  }
}

function blankCheck(inputArea, errorText) {
  errorText.style.opacity = "1";
  inputArea.style.borderColor = "red";
  errorText.innerHTML = "Cannot be blank";
}
