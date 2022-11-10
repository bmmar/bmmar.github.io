const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const exitMenu = document.querySelector("#exit");

menuIcon.addEventListener('click', () => { 
    menu.classList.toggle("visible");
    menuIcon.classList.toggle("invisible");
})

exitMenu.addEventListener('click', () => { 
    menu.classList.toggle("visible");
    menuIcon.classList.toggle("invisible");
})
