const hamburgerIcon = document.querySelector(".hamburger-icon");
const overlayMenu = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closebtn");

const simpleBookmarking = document.querySelectorAll(".simple-bookmarking");
const speedySearching = document.querySelectorAll(".speedy-searching");
const easySharing = document.querySelectorAll(".easy-sharing");
const featuresTab1 = document.querySelector(".features-tab-1");
const featuresTab2 = document.querySelector(".features-tab-2");
const featuresTab3 = document.querySelector(".features-tab-3");

const selectedFeatureLine = document.querySelectorAll(
  ".feature-selected-line"
);
const faqQuestions = document.querySelectorAll(".FAQ-questions");
const faqAnswers = document.querySelectorAll(".FAQ-answers")
const downArrow = document.querySelectorAll(".arrow");
const upArrow = document.querySelectorAll(".up-arrow");



featuresTab1.classList.add("display-active");
selectedFeatureLine[0].classList.add("display-active");

hamburgerIcon.addEventListener("click", () => { 
  overlayMenu.classList.add("overlay-active");
})

closeBtn.addEventListener("click", () => { 
  overlayMenu.classList.remove("overlay-active");
})

simpleBookmarking[0].addEventListener('click', () => { 
  switchTabs(featuresTab1, featuresTab2, featuresTab3, 0);
})
simpleBookmarking[1].addEventListener('click', () => { 
  switchTabs(featuresTab1, featuresTab2, featuresTab3, 3);
})

speedySearching[0].addEventListener("click", () => {
  switchTabs(featuresTab2, featuresTab1, featuresTab3, 1);
});
speedySearching[1].addEventListener("click", () => {
  switchTabs(featuresTab2, featuresTab1, featuresTab3, 4);
});

easySharing[0].addEventListener("click", () => {
  switchTabs(featuresTab3, featuresTab2, featuresTab1, 2);
});
easySharing[1].addEventListener("click", () => {
  console.log("New Tab: " + featuresTab3 + ", Old Tab1: " + featuresTab2 + ", Old Tab2: " + featuresTab1 + ", Active Line NUmber: " + 5);
  switchTabs(featuresTab3, featuresTab2, featuresTab1, 5);
});

for (let i = 0; i < faqQuestions.length; i ++) { 
  faqQuestions[i].addEventListener("click", () => {
    if (!faqAnswers[i].classList.contains("display-active")) {
      displayAnswer(i);
    } else {
      closeAnswer(i);
    }
  });
}

function switchTabs(newTab, oldTab1, oldTab2, activeLineNumber) { 
  newTab.classList.add("display-active");
  for (let i = 0; i < 6; i++) { 
    if (selectedFeatureLine[i].classList.contains("display-active")) { 
      selectedFeatureLine[i].classList.remove("display-active");
    }
  }
  console.log("Turning on red highlight line for line " + activeLineNumber)
  selectedFeatureLine[activeLineNumber].classList.add("display-active");
  
  if (oldTab1.classList.contains("display-active")){ 
    oldTab1.classList.remove("display-active");
  }
  if (oldTab2.classList.contains("display-active")){ 
    oldTab2.classList.remove("display-active");
  }
}

function displayAnswer(questionClicked) { 
  for (let faqAnswer of faqAnswers) { 
    if (faqAnswer.classList.contains("display-active")) { 
      faqAnswer.classList.remove("display-active");
    }
  }
  faqAnswers[questionClicked].classList.add("display-active");
  upArrow[questionClicked].classList.add("display-active");
  downArrow[questionClicked].classList.add("display-inactive");
}

function closeAnswer(answerClicked) { 
  faqAnswers[answerClicked].classList.remove("display-active");
  upArrow[answerClicked].classList.remove("display-active");
  downArrow[answerClicked].classList.remove("display-inactive");
}
