let notify = document.querySelector(".notify")
let push = document.querySelector(".push")

let i = 1
push.addEventListener("click", () => {
    notify.style.visibility = "visible"
    notify.textContent = i++
})