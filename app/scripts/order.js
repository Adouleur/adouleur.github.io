let form = document.forms[0]

console.log(form.elements)
for (let i = 0; i < 4; i++) {
    const input = form.elements[i];
    input.addEventListener("change", function () {
        if (input.value == "") {
            input.nextElementSibling.classList.remove("hiddenSpan")
            input.nextElementSibling.classList.remove("correct")
            input.nextElementSibling.classList.add("wrong")
        }
        if (input.value !== "" && input.nextElementSibling.className == "wrong") {
            input.nextElementSibling.classList.toggle("wrong")
            input.nextElementSibling.classList.toggle("correct")
        }
    })
}
let formButton = form.elements[4].addEventListener("click", function (e) {

    for (let i = 0; i < 4; i++) {

        const input = form.elements[i];
        e.preventDefault();
        if (input.value == "") {
            input.nextElementSibling.classList.remove("hiddenSpan")
            input.nextElementSibling.classList.remove("correct")
            input.nextElementSibling.classList.add("wrong")
        }
    }
})

