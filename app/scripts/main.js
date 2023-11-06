let pizzas = [
    {
        discount: "-10%",
        image: "../app/img/mainPizza1.png",
        name: "Челінтаніо (570 г.)",
        price: "139 грн."
    },
    {
        discount: "-7%",
        image: "../app/img/mainPizza2.png",
        name: "Пепероні (520 г.)",
        price: "145 грн."
    },
    {
        discount: "-15%",
        image: "../app/img/mainPizza3.png",
        name: "М’ясна (590 г.)",
        price: "155 грн."
    }
]

let pizzaCounter = 0;
const discount = document.querySelector(".discount");
const price = document.querySelector(".price");
const pizzaName = document.querySelector(".pizzaName");
const pizzaImg = document.querySelector(".pizzaImg");

function swipePizza(x) {
    discount.innerHTML = pizzas[x].discount;
    price.innerHTML = pizzas[x].price;
    pizzaName.innerHTML = pizzas[x].name;
    pizzaImg.src = pizzas[x].image;
}
window.addEventListener("load", function () {

    swipePizza(0)
})


let next = document.querySelector(".next").addEventListener("click", function () {
    pizzaCounter++;

    if (pizzaCounter >= pizzas.length) {
        pizzaCounter = 0
    }
    swipePizza(pizzaCounter)
})

let prev = document.querySelector(".prev").addEventListener("click", function () {
    pizzaCounter--;

    if (pizzaCounter < 0) {
        pizzaCounter = (pizzas.length - 1)
    }
    swipePizza(pizzaCounter)
})

