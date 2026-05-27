function genrate(num) {
    return Math.floor(Math.random() * 10)
}


let tiles = document.querySelector(".tiles")
tiles.innerHTML = genrate()

// matcher div code start here.

let btns = document.querySelectorAll("button")
