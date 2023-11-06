function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const sliderWrapper = document.querySelector(".sliderWrapper");
const menuWrapper = document.querySelector(".menuWrapper");

for (let i = 0; i < 25; i++) {
    let pizzaNumber = randomIntFromInterval(1, 7)

    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")
    let h3 = document.createElement("h3")
    let button = document.createElement("button")
    let a = document.createElement("a")
    let img = document.createElement("img")

    button.classList.add("redLightButtons")
    div.classList.add("pizza")

    img.src = `../app/img/mainPizza${pizzaNumber}.png`
    h2.innerHTML = "Lorem ipsum"
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
    h3.innerHTML = "120 грн"
    button.innerHTML = "Lorem ipsum"
    a.href = "../app/order.html"

    div.append(img)
    div.append(h2)
    div.append(p)
    div.append(h3)
    a.append(button)
    div.append(a)
    sliderWrapper.append(div)
}
let totalPizzas = document.querySelectorAll(".pizza")
let pizzasOnPage;
let currentPage = 1;
let numberOfSlides;
let canClick = true;
let currentPageDiv = document.querySelector(".currentPage")

if (window.innerWidth > 1200) {

    pizzasOnPage = 9
}
if (window.innerWidth > 767 && window.innerWidth < 1200) {

    pizzasOnPage = 6;
}
if (window.innerWidth < 767) {
    pizzasOnPage = 5
}

let lastPage = document.querySelector(".lastPage")

if (totalPizzas.length % pizzasOnPage === 0) {
    numberOfSlides = totalPizzas.length / pizzasOnPage
    lastPage.innerHTML = numberOfSlides
}
else {
    numberOfSlides = Math.floor(totalPizzas.length / pizzasOnPage) + 1
    lastPage.innerHTML = numberOfSlides
}
sliderWrapper.addEventListener("transitionend", function () {

    canClick = true;
})

let next = document.querySelector(".next").addEventListener("click", function () {
    if (canClick && currentPage !== numberOfSlides) {
        currentPage++;

        currentPageDiv.innerHTML = currentPage
        let slideWith = parseFloat(getComputedStyle(menuWrapper).width)
        let wrapperPos = parseFloat(getComputedStyle(sliderWrapper).left)
        sliderWrapper.style.left = (wrapperPos - slideWith) + "px";
        canClick = false;
    }
})

let prev = document.querySelector(".prev").addEventListener("click", function () {
    if (canClick && currentPage !== 1) {
        currentPage--;

        currentPageDiv.innerHTML = currentPage
        let slideWith = parseFloat(getComputedStyle(menuWrapper).width)
        let wrapperPos = parseFloat(getComputedStyle(sliderWrapper).left)
        sliderWrapper.style.left = (wrapperPos + slideWith) + "px";
        canClick = false;
    }
})