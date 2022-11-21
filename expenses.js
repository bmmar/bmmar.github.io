const graph = document.getElementById("spending-graph");
const spendBoxes = document.querySelectorAll("#spend-box");
const monBox = document.querySelector(".mon-box");
const tueBox = document.querySelector(".tue-box");
const wedBox = document.querySelector(".wed-box");
const thuBox = document.querySelector(".thu-box");
const friBox = document.querySelector(".fri-box");
const satBox = document.querySelector(".sat-box");
const sunBox = document.querySelector(".sun-box");
const mon = document.querySelector(".monday");
const tue = document.querySelector(".tuesday");
const wed = document.querySelector(".wednesday");
const thu = document.querySelector(".thursday");
const fri = document.querySelector(".friday");
const sat = document.querySelector(".saturday");
const sun = document.querySelector(".sunday");

const data1 = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const data2 = [
  {
    day: "mon",
    amount: 12.45,
  },
  {
    day: "tue",
    amount: 55.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 1.07,
  },
  {
    day: "fri",
    amount: 22.39,
  },
  {
    day: "sat",
    amount: 22.28,
  },
  {
    day: "sun",
    amount: 13.48,
  },
];

let data = data1;

let startRow = 0;
let span = 0;
let boxLocation = 0;

let highestDay = findHighest();

for (i = 0; i < 7; i++) {
  span = Math.round(data[i].amount);
  startRow = 70 - span;
  boxLocation = startRow - 45;
  let day = eval(data[i].day);
  day.style.gridRow = `${startRow}/ span ${span}`;
  if (data[i].amount == highestDay) {
    day.style.backgroundColor = "hsl(186, 34%, 60%)";
  }
}


for (let i = 0; i < spendBoxes.length; i++) {
  console.log(spendBoxes[i]);
  spendBoxes[i].textContent = "$" + data[i].amount;
  startRow = 70 - Math.round(data[i].amount);
  boxLocation = startRow - 17;
  console.log(boxLocation);
  spendBoxes[i].style.gridRow = boxLocation;
  spendBoxes[i].style.gridColumn = i + 1;
  spendBoxes[i].classList.add("invisible");
}

mon.addEventListener("click", () => {
  monBox.classList.toggle("visible");
  monBox.classList.toggle("invisible");
});
tue.addEventListener("click", () => {
   tueBox.classList.toggle("visible");
   tueBox.classList.toggle("invisible");
});
wed.addEventListener("click", () => {
   wedBox.classList.toggle("visible");
   wedBox.classList.toggle("invisible");
});
thu.addEventListener("click", () => {
   thuBox.classList.toggle("visible");
   thuBox.classList.toggle("invisible");
});
fri.addEventListener("click", () => {
   friBox.classList.toggle("visible");
   friBox.classList.toggle("invisible");
});
sat.addEventListener("click", () => {
   satBox.classList.toggle("visible");
   satBox.classList.toggle("invisible");
});
sun.addEventListener("click", () => {
   sunBox.classList.toggle("visible");
   sunBox.classList.toggle("invisible");
});


function findHighest() {
  highestAmount = 0;
  for (let i = 0; i < 7; i++) {
    if (data[i].amount > highestAmount) {
      highestAmount = data[i].amount;
    }
  }
  return highestAmount;
}
