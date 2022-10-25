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
const cardErrorText = document.querySelector(".card-error-text");

function getInputName() {
  if (inputName.value == "") {
    nameOnCard.innerHTML = "Jane Appleseed";
  } else {
    nameOnCard.innerHTML = inputName.value;
  }
}

function getCardNumber() {
  if (inputNum.value == "") {
    numOnCard.innerHTML = "0000 0000 0000 0000";
  } else {
    numOnCard.textContent = inputNum.value;
    if (!numeric(inputNum.value)) {
      cardErrorText.style.display = "inline";
      inputNum.style.borderColor = "red";
      cardErrorText.innerHTML = "Here is some different text";
    } else {
      cardErrorText.style.display = "none";
      inputNum.style.borderColor = "black";
    }
  }
}

function getMonth() {
  if (inputMonth.value == "") {
    monthOnCard.innerHTML = "00/00";
  } else {
    monthOnCard.innerHTML = inputMonth.value + "/00";
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
}

function getCVC() {
  if (inputCVC.value == "") {
    cvcOnCard.innerHTML = "000";
  } else {
    cvcOnCard.innerHTML = inputCVC.value;
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

function numeric(inputtxt) {
  var letterNumber = /^[0-9]+$/;
  if (inputtxt.match(letterNumber)) {
    return true;
  } else {
    return false;
  }
}
