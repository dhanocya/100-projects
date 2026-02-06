const gery = document.querySelector(".greyHeart")
const red = document.querySelector(".redHeart")

gery.addEventListener("click", () => {
    red.classList.add("animation")
    gery.classList.add("fill-color")
})
gery.addEventListener("click", () => {
    red.classList.remove("animation")
    gery.classList.remove("fill-color")
})