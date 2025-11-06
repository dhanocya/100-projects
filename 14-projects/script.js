const btn = document.querySelector("button")
const chng = document.querySelector(".chng")

btn.addEventListener("click",() =>{
    chng.innerHTML = "your freind"
    btn.innerHTML = "unfreind"
})