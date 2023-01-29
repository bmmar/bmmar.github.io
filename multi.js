const nextBtnP1 = document.querySelector(".next-step-p1");
const nextBtnP2 = document.querySelector(".next-step-p2");
const nextBtnP3 = document.querySelector(".next-step-p3");

const backBtnP2 = document.querySelector(".go-back");
const backBtnP3 = document.querySelector(".go-backP3");
const backBtnP4 = document.querySelector(".go-backP4");

const stepOneNumber = document.querySelector(".number-one");
const stepTwoNumber = document.querySelector(".number-two");
const stepThreeNumber = document.querySelector(".number-three");
const stepFourNumber = document.querySelector(".number-four");

const stepOne = document.querySelector(".step-one");
const stepTwo = document.querySelector(".step-two");
const stepThree = document.querySelector(".step-three");
const stepFour = document.querySelector(".step-four");
const stepFive = document.querySelector(".step-five");

const navigationP1 = document.querySelector(".navigation-buttons-p1");
const navigationP2 = document.querySelector(".navigation-buttons-p2");
const navigationP3 = document.querySelector(".navigation-buttons-p3");
const navigationP4 = document.querySelector(".navigation-buttons-p4");

const fullName = document.querySelector("#full-name");
const nameErrorText = document.querySelector(".name-error-text");
const email = document.querySelector("#email");
const emailErrorText = document.querySelector(".email-error-text");
const phoneNumber = document.querySelector("#phone-number");
const phoneErrorText = document.querySelector(".phone-error-text");

const cardPageOne = document.querySelector(".card-page-one");
const cardPageTwo = document.querySelector(".card-page-two");
const toggle = document.querySelector("#monthly-yearly-choice");
const monthlyPrices = document.querySelectorAll(".monthly-choice");
const annualPrices = document.querySelectorAll(".annual-choice");

const monthlyArcade = document.querySelector(".monthly-arcade");
const monthlyAdvanced = document.querySelector(".monthly-advanced");
const monthlyPro = document.querySelector(".monthly-pro");
const annualArcade = document.querySelector(".annual-arcade");
const annualAdvanced = document.querySelector(".annual-advanced");
const annualPro = document.querySelector(".annual-pro");

const online = document.querySelector("#online");
const largerStorage = document.querySelector("#larger-storage");
const customizable = document.querySelector("#customizable");

const onlineServiceP3 = document.querySelector(".online-service-p3");
const largerStorageP3 = document.querySelector(".larger-storage-p3");
const customizableP3 = document.querySelector(".customizable-p3");

const monthlyPricesP3 = document.querySelectorAll(".monthly-price-p3");
const annualPricesP3 = document.querySelectorAll(".annual-price-p3");
const onlineCheckboxP3 = document.querySelector("#online");
const largerStorageCheckboxP3 = document.querySelector("#larger-storage");
const customizableCheckboxP3 = document.querySelector("#customizable");

const totalsContainer = document.querySelector(".totals-container");
const totalsHolder = document.querySelector(".plan-holder");
const changeLink = document.querySelector("#change-link");
const onlineHolder = document.querySelector(".online-holder");
const onlinePriceP4 = document.querySelector(".online-price-p4");
const largerHolder = document.querySelector(".larger-holder");
const largerPriceP4 = document.querySelector(".larger-price-p4");
const customizableHolder = document.querySelector(".customizable-holder");
const customizablePriceP4 = document.querySelector(".customizable-price-p4");
const totalCost = document.querySelector(".total-cost");
const totalPriceP4 = document.querySelector(".total-price-p4");
const p4Text = document.querySelectorAll(".p4-text");
const priceP4 = document.querySelectorAll(".price-p4");

const planPriceHolder = document.querySelector(".price-p4-plan");

const confirmBtn = document.querySelector(".next-step-p4");

let monthlyTariff = true;
let pageTracker = 1;
let userSelection = "";
let priceP4Text = "";
let priceNum = 0;
let priceAddOns = 0;
let annualFlag = false;
let pricePer = "";

stepOneNumber.classList.add("number-highlight");
navigationP1.classList.add("active-navigation");

/* prettier-ignore */
nextBtnP1.addEventListener("click", () => {  
  if (stepOneValidation(fullName, nameErrorText) && stepOneValidation(email, emailErrorText) && stepOneValidation(phoneNumber, phoneErrorText))
  {
    switchPages(
      stepOne,
      stepTwo,
      stepOneNumber,
      stepTwoNumber,
      2,
      navigationP1,
      navigationP2
    );
  }
});

/**********************  Page 2 *************************/

monthlyArcade.addEventListener("click", () => {
  selectTariff(monthlyArcade, monthlyAdvanced, monthlyPro);
  userSelection = "Arcade (Monthly)";
  priceP4Text = "$9/mo";
  priceNum = 9;
  annualFlag = false;
});

annualArcade.addEventListener("click", () => {
  selectTariff(annualArcade, annualAdvanced, annualPro);
  userSelection = "Arcade (Yearly)";
  priceP4Text = "$90/yr";
  priceNum = 90;
  annualFlag = true;
});

monthlyAdvanced.addEventListener("click", () => {
  selectTariff(monthlyAdvanced, monthlyArcade, monthlyPro);
  userSelection = "Advanced (Monthly)";
  priceP4Text = "$12/mo";
  priceNum = 12;
  annualFlag = false;
});

annualAdvanced.addEventListener("click", () => {
  selectTariff(annualAdvanced, annualArcade, annualPro);
  userSelection = "Advanced (Yearly)";
  priceP4Text = "$120/yr";
  priceNum = 120;
  annualFlag = true;
});

monthlyPro.addEventListener("click", () => {
  selectTariff(monthlyPro, monthlyAdvanced, monthlyArcade);
  userSelection = "Pro (Monthly)";
  priceP4Text = "$15/mo";
  priceNum = 15;
  annualFlag = false;
});

annualPro.addEventListener("click", () => {
  selectTariff(annualPro, annualAdvanced, annualArcade);
  userSelection = "Pro (Yearly)";
  priceP4Text = "$150/yr";
  priceNum = 150;
  annualFlag = true;
});

/* prettier-ignore */
backBtnP2.addEventListener("click", () => {
  goBackwards(stepTwo, stepOne, stepTwoNumber, stepOneNumber, 0, navigationP2, navigationP1);
});

/* prettier-ignore */
nextBtnP2.addEventListener("click", () => {
  switchPages(stepTwo, stepThree, stepTwoNumber, stepThreeNumber, 5, navigationP2, navigationP3);
  if (monthlyTariff) {
    for (let monthlyPrice of monthlyPricesP3) {
      if (monthlyPrice.classList.contains("inactive")) {
        monthlyPrice.classList.remove("inactive");
      }
      for (let annualPrice of annualPricesP3) { 
        if (annualPrice.classList.contains("active")) { 
          annualPrice.classList.remove("active");
        }
      }
    }
  } else {
      for (let annualPrice of annualPricesP3) {
        annualPrice.classList.add("active");
    }
    for (let monthlyPrice of monthlyPricesP3) { 
      monthlyPrice.classList.add("inactive");
    }
    }
  }  
);

toggle.addEventListener("click", () => {
  monthlyTariff = !monthlyTariff;
  for (let annualPrice of annualPrices) {
    annualPrice.classList.toggle("active-prices");
  }
  for (let monthlyPrice of monthlyPrices) {
    monthlyPrice.classList.toggle("inactive");
  }
});

/********************** Page 3 **************************/

onlineServiceP3.addEventListener("click", () => {
  onlineCheckboxP3.click();
});

onlineCheckboxP3.addEventListener("click", () => {
  onlineServiceP3.classList.toggle("p3-choice-selected");
});

largerStorageP3.addEventListener("click", () => {
  largerStorageCheckboxP3.click();
});

largerStorageCheckboxP3.addEventListener("click", () => {
  largerStorageP3.classList.toggle("p3-choice-selected");
});

customizableP3.addEventListener("click", () => {
  customizableCheckboxP3.click();
});

customizableCheckboxP3.addEventListener("click", () => {
  customizableP3.classList.toggle("p3-choice-selected");
});

/* prettier-ignore */
backBtnP3.addEventListener("click", () => {
  goBackwards(stepThree, stepTwo, stepThreeNumber, stepTwoNumber, 0, navigationP3, navigationP2);
});

/* prettier-ignore */
nextBtnP3.addEventListener("click", () => {
  switchPages(stepThree, stepFour, stepThreeNumber, stepFourNumber, 8, navigationP3, navigationP4);
  totalsHolder.innerHTML = "";
  totalsHolder.append(userSelection);
  planPriceHolder.innerHTML = '';
  planPriceHolder.append(priceP4Text);
  priceAddOns = 0;
  for (let text of p4Text) { 
    text.innerHTML = '';
  }
  for (let price of priceP4) { 
    price.innerHTML = '';
  }
  if (online.checked) {
    onlineHolder.innerHTML = "Online service";
    if (annualFlag) {
      onlinePriceP4.innerHTML = "+$10/yr";
      priceAddOns += 10;
    } else {
      onlinePriceP4.innerHTML = "+$1/mo";
      priceAddOns += 1;
    }
  }
  if (largerStorage.checked) {
    largerHolder.innerHTML = "Larger storage";
    if (annualFlag) {
      largerPriceP4.innerHTML = "+$20/yr";
      priceAddOns += 20;
    } else {
      largerPriceP4.innerHTML = "+$2/mo";
      priceAddOns += 2;
    }
  }
  if (customizable.checked) {
    customizableHolder.innerHTML = "Customizable profile";
    if (annualFlag) {
      customizablePriceP4.innerHTML = "+$20/yr";
      priceAddOns += 20;
    } else {
      customizablePriceP4.innerHTML = "+$2/mo";
      priceAddOns += 2;
    }
  }
  if (annualFlag) {
    totalCost.innerHTML = 'Total (per year)';
    pricePer = '/yr'
  } else { 
    totalCost.innerHTML = 'Total (per month)';
    pricePer = '/mo'
  }
    totalPriceP4.innerHTML = '$' + (priceNum + priceAddOns) + pricePer;
    
});

/********************* Page 4 **********************************/

/* prettier-ignore */
backBtnP4.addEventListener("click", () => {
  goBackwards(stepFour, stepThree, stepFourNumber, stepThreeNumber, 0, navigationP4, navigationP3);
});

changeLink.addEventListener("click", () => {
  goBackwards(
    stepFour,
    stepTwo,
    stepFourNumber,
    stepTwoNumber,
    0,
    navigationP4,
    navigationP2
  );
});

confirmBtn.addEventListener("click", () => {
  switchPages(stepFour, stepFive, stepFourNumber, 0, 0, navigationP4, 0);
});

/***********************  Functions **************************/

/* prettier-ignore */
function switchPages(oldPage, newPage, oldNumber, newNumber, highlightNumber, oldNav, newNav) {
  oldPage.classList.add("inactive");
  if (oldPage.classList.contains("active")) {
    oldPage.classList.remove("active");
  }
  if (!newPage.classList.contains("active")) {
    newPage.classList.add("active");
  }
  if (newPage.classList.contains("inactive")) { 
    newPage.classList.remove("inactive");
  }
  if (oldNav.classList.contains("active-navigation")) {
    oldNav.classList.remove("active-navigation");
  }
  if (!newNav.classList.contains("active-navigation")) {
    newNav.classList.add("active-navigation");
  }
  oldNumber.classList.remove("sidebar-number:nth-child(highlightNumber)");
  oldNumber.classList.toggle("number-highlight");
  newNumber.classList.add("number-highlight");
  if (!monthlyTariff) { 

  }
}

/* prettier-ignore */
function goBackwards(oldPage, newPage, oldNumber, newNumber, highlightNumber, oldNav, newNav) {
  oldPage.classList.remove("active");
  oldNumber.classList.remove("number-highlight");
  newPage.classList.remove("inactive");
  newPage.classList.add("active");
  newNumber.classList.toggle("number-highlight");
  if (oldNav.classList.contains("active-navigation")) {
    oldNav.classList.remove("active-navigation");
  }
  if (!newNav.classList.contains("active-navigation")) {
    newNav.classList.add("active-navigation");
  }
}

/* prettier-ignore */
function selectTariff(selected, notSelected1, notSelected2) { 
 selected.classList.toggle("p2-choice-selected");
 if (notSelected1.classList.contains("p2-choice-selected")) {
   notSelected1.classList.remove("p2-choice-selected");
 }
 if (notSelected2.classList.contains("p2-choice-selected")) {
   notSelected2.classList.remove("p2-choice-selected");
 } 
}

function stepOneValidation(section, errorText) {
  if (section.value == "") {
    if (!errorText.classList.contains("active")) {
      errorText.classList.add("active");
      return false;
    }
  } else if (errorText.classList.contains("active")) {
    errorText.classList.remove("active");
  }
  return true;
}
