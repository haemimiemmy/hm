const hamburger = document.querySelector(".hamburger-button");
const navList = document.querySelector(".navigation-list");

hamburger.addEventListener("click",() => {
    navList.classList.toggle("active");
    hamburger.classList.toggle("active");
});


// scroll reveal animation


const sr = ScrollReveal({
    origin: 'bottom',
    distance: '15px',
    duration: 1000,
    reset: false
});

sr.reveal(`.main-img, .work, .information, .informations, .work-detail`, {
    interval: 200
})