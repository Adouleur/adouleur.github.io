let languageButton = document.querySelector(".languageButton").addEventListener("click", function () {
    let languagePopUp = document.querySelector(".languagePopUp")
    languagePopUp.classList.toggle("hidden")

})

let burgerIconDiv = document.querySelector(".burgerIconDiv").addEventListener("click", function () {
    let burgerIcon = document.querySelector(".burgerIcon")
    let burgerMenu = document.querySelector(".burgerMenu");

    burgerMenu.classList.toggle("hidden")

    if (burgerMenu.classList.contains('hidden')) {
        burgerIcon.src = "../app/img/burgerOpened.svg"
    }
    else {
        burgerIcon.src = "../app/img/menu-hamburger.svg"
    }
}
)