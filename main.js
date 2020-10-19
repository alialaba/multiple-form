//buttons variables
const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevSec = document.querySelector(".prev-1");
const nextSec = document.querySelector(".next-1");
const prevThird = document.querySelector(".prev-2");
const nextThird = document.querySelector(".next-2");
const prevFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

//progress bar variable (css)
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
//var to calc the bullet on click
let max = 4;
let current = 1;


//next  button addevent
firstNextBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = "-25%";
    //to show up the check inside the bullet and also add color to the form name
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
})

nextSec.addEventListener("click", function() {
    slidePage.style.marginLeft = "-50%";
    //to show up the check inside the bullet  and also add color to the form name
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;

})
nextThird.addEventListener("click", function() {
    slidePage.style.marginLeft = "-75%";
    //to show up the check inside the bullet  and also add color to the form name
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;

})

submitBtn.addEventListener("click", function() {

    //to show up the check inside the bullet  and also add color to the form name
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current += 1;
    setTimeout(function() {
        alert('form completed');
        location.reload();
    }, 800)

})

//previous button addevent

prevSec.addEventListener("click", function() {
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
})

prevThird.addEventListener("click", function() {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
})
prevFourth.addEventListener("click", function() {
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -= 1;
})