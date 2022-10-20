const unreadAll = document.querySelectorAll(".unread-container");
const info = document.querySelectorAll(".info");
const h2 = document.querySelector("h2");
const unreadCount = document.querySelector(".unread-count");
let count = parseInt(unreadCount.textContent);

for (let i = 0; i < unreadAll.length; i++) {
  let unreadButton = document.createElement("button");
  info[i].append(unreadButton);
}

const buttons = document.querySelectorAll("button");

const userNames = document.querySelectorAll(".name");

for (let i = 0; i < userNames.length; i++) {
  userNames[i].addEventListener("mouseover", () => {
    userNames[i].style.color = "blue";
  });
  userNames[i].addEventListener("mouseout", () => {
    userNames[i].style.color = "black";
  });
  userNames[i].addEventListener("click", () => {
    unreadAll[i].classList.remove("unread-container");
    unreadAll[i].classList.add("container");
    buttons[i].style.display = "none";
    count--;
    unreadCount.textContent = count;
  });
}

const posts = document.querySelectorAll(".post");

for (let i = 0; i < posts.length; i++) {
  posts[i].addEventListener("mouseover", () => {
    posts[i].style.color = "blue";
  });
  posts[i].addEventListener("mouseout", () => {
    posts[i].style.color = "black";
  });
}

const message = document.querySelector(".message");

message.addEventListener("mouseover", () => {
  message.style.backgroundColor = "aliceblue";
});
message.addEventListener("mouseout", () => {
  message.style.backgroundColor = "white";
});

h2.addEventListener("mouseover", () => {
  h2.style.backgroundColor = "aliceblue";
  h2.style.color = "blue";
});
h2.addEventListener("mouseout", () => {
  h2.style.backgroundColor = "white";
  h2.style.color = "black";
});
h2.addEventListener("click", () => {
  count = 0;
  unreadCount.textContent = count;
  for (let i = 0; i < userNames.length; i++) {
    unreadAll[i].classList.remove("unread-container");
    unreadAll[i].classList.add("container");
    buttons[i].style.display = "none";
  }
});
