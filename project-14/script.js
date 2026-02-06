const generate = document.querySelector(".generate")
const num = document.querySelectorAll(".randomNum")

generate.addEventListener("click", () => {
    num.forEach((element) => {
        let newNum = Math.floor(Math.random() * 100)

        element.innerHTML = newNum;
    })
})