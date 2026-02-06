const btns = document.querySelectorAll(".btn")
const input = document.querySelector("input")

btns.forEach((btn, index) => {
    btn.addEventListener("click", () =>{
        input.value += index
    })
})

const opration = [".","+","-","/","*"]
const op = document.querySelectorAll(".op")

op.forEach((node, idx) => {
    node.addEventListener("click", () => {
        input.value += opration[idx]
    })
})

function calculate(){
    try{
        input.value = eval(input.value)
    }catch(error){
        input.value = "Error"
    }
}

const cal = document.querySelector(".cal")

cal.addEventListener("click", () => {
    try{
        calculate()
    }catch(bug){
        input.value = "X:: input data"
    }
})

const del = document.querySelector(".del")

del.addEventListener("click", () => {
    input.value = ""
})