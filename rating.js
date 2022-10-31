const thankYou = document.querySelector(".thank-you");
const submitBtn = document.querySelector("#submit-button")
const thankText = thankYou.innerHTML;
const ratingSection = document.querySelector(".rating-section");

const ratings = document.getElementsByName('rating');
let rating = document.querySelector("#rating");

thankYou.style.display = "none";

submitBtn.addEventListener('click', () => {
    for (let i = 0; i < ratings.length; i++)
        
    if (ratings[i].checked) {
        ratingSection.style.display = "none"
        thankYou.style.display = "block";
        rating.innerText = (i + 1).toString();
    }
})
