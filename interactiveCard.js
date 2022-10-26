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
let complete = true;

function getInputName() {
  if (inputName.value == "") {
    nameOnCard.innerHTML = "Jane Appleseed";
  } else {
    nameOnCard.innerHTML = inputName.value;
  }
  nameErrorText.style.opacity = "0";
  inputName.style.borderColor = "black";

}

function getCardNumber() {
  if (inputNum.value == "") {
    numOnCard.innerHTML = "0000 0000 0000 0000";
    cardErrorText.style.opacity = "0";
    inputNum.style.borderColor = "black";
  } else {
    numOnCard.textContent = insertSpaces(inputNum.value);
    if (!numeric(inputNum.value)) {
      cardErrorText.style.opacity = "1";
      inputNum.style.borderColor = "red";
      cardErrorText.innerHTML = "Wrong format, numbers only";
    } else if (
      inputNum.value.toString().length < 16 &&
      inputNum.value.toString().length > 0
    ) {
      cardErrorText.style.opacity = "1";
      inputNum.style.borderColor = "red";
      cardErrorText.innerHTML = "Card number must be 12 digits";
      complete = false;
    } else {
      cardErrorText.style.opacity = "0";
      inputNum.style.borderColor = "black";
      complete = true;
    }
  }
}

function getMonth() {
  if (inputMonth.value == "") {
    monthOnCard.innerHTML = "00/00";
  } else {
    monthOnCard.innerHTML = inputMonth.value + "/00";
  }
  if (parseInt(inputMonth.value) < 1 || parseInt(inputMonth.value) > 12) {
    monthErrorText.style.opacity = "1";
    inputMonth.style.borderColor = "red";
    monthErrorText.innerHTML = "Invalid month";
    complete = false;
  } else {
    monthErrorText.style.opacity = "0";
    inputMonth.style.borderColor = "black";
    complete = true;
  }
}

function getYear() {
  if (inputYear.value == "" && inputMonth.value == "") {
    monthOnCard.innerHTML = "00/00";
  } else if (inputYear.value == "" && inputMonth.value !== "") {
    monthOnCard.innerHTML = inputMonth.value + "/00";
  } else {
    monthOnCard.innerHTML = inputMonth.value + "/" + inputYear.value;
  }
  if (parseInt(inputYear.value) < 22 || parseInt(inputYear.value) > 35) {
    yearErrorText.style.opacity = "1";
    inputYear.style.borderColor = "red";
    yearErrorText.innerHTML = "Invalid year";
    complete = false;
  } else {
    yearErrorText.style.opacity = "0";
    inputYear.style.borderColor = "black";
    complete = true;
  }
}

function getCVC() {
  if (inputCVC.value == "") {
    cvcOnCard.innerHTML = "000";
  } else {
    cvcOnCard.innerHTML = inputCVC.value;
  }
  if (
    inputCVC.value.toString().length < 3 &&
    inputCVC.value.toString().length > 0
  ) {
    cvcErrorText.style.opacity = "1";
    inputCVC.style.borderColor = "red";
    cvcErrorText.innerHTML = "Invalid CVC number";
    complete = false;
  } else {
    cvcErrorText.style.opacity = "0";
    inputCVC.style.borderColor = "black";
    complete = true;
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
})

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
    nameErrorText.style.opacity = "1";
    inputName.style.borderColor = "red";
    nameErrorText.innerHTML = "Cannot be blank";
    complete = false;
  }
  if (inputNum.value == "") {
    cardErrorText.style.opacity = "1";
    inputNum.style.borderColor = "red";
    cardErrorText.innerHTML = "Cannot be blank";
    complete = false;
  }
  if (inputMonth.value == "") {
    monthErrorText.style.opacity = "1";
    inputMonth.style.borderColor = "red";
    monthErrorText.innerHTML = "Cannot be blank";
    complete = false;
  }
  if (inputCVC.value == "") {
    cvcErrorText.style.opacity = "1";
    inputCVC.style.borderColor = "red";
    cvcErrorText.innerHTML = "Cannot be blank";
    complete = false;
  }
  if (complete === true) { 
    console.log("Now run fucntion for complete screen!")
  }
}