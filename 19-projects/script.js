const game = {timer: 0, start: null}
const main = document.querySelector(".main")

const message = document.createElement("div")

message.classList.add("message")
message.textContent = "press to play game";
document.body.prepend(message)

// create a box

const box = document.createElement("div")
box.classList.add("box")

main.append(box);

// random number function

function randomNumber(max) {
    return Math.floor(Math.random() * max)
}

function addbox() {
    game.start = new Date().getTime();
    const container = main.getBoundingClientRect();
    const dim = [randomNumber(50) + 20 , randomNumber(50) + 20 ];
    box.style.display = "block";
    
}