const toggle = document.querySelector('[type="checkbox"]');
const annualPrices = document.querySelectorAll('.annual-price');
const monthlyPrices = document.querySelectorAll('.monthly-price');

toggle.addEventListener("click", () => {
    for (let annualPrice of annualPrices) {
        annualPrice.classList.toggle('inactive');        
    }
    for (let monthlyPrice of monthlyPrices) { 
        monthlyPrice.classList.toggle("active");
    }
});

