const hamberguer=document.querySelector(".header__hamburger")
const navmenu=document.querySelector(".header__navmenu")
// console.log(navmenu);
hamberguer.addEventListener("click",()=>{
  hamberguer.classList.toggle("active");
  navmenu.classList.toggle("active");
})


document.querySelectorAll(".header__navlink").forEach((n)=>n.addEventListener("click",()=>{
  hamberguer.classList.remove("active");
  navmenu.classList.remove("active");
}))


// /heaeder?



// /slider images //

let currentIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
let slideWidth = document.querySelector(".slider").clientWidth;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function autoSlide() {
    moveSlide(1);
}

let slideInterval = setInterval(autoSlide, 3000);

document.querySelector(".slider").addEventListener("mouseover", () => {
    clearInterval(slideInterval);
});
document.querySelector(".slider").addEventListener("mouseleave", () => {
    slideInterval = setInterval(autoSlide, 3000);
});

window.addEventListener("resize", () => {
    slideWidth = document.querySelector(".slider").clientWidth;
    updateSlidePosition();
});




// filter images
document.addEventListener("DOMContentLoaded", function () {
    let filterMenu = document.querySelectorAll(".listitemBox");
    let items = document.querySelectorAll(".itemBox");

    filterMenu.forEach(menu => {
        menu.addEventListener("click", function () {
            // Remove active class from all menu items
            filterMenu.forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            let filterValue = this.getAttribute("data-filter");

            items.forEach(item => {
                if (filterValue === "all" || item.getAttribute("data-item") === filterValue) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

