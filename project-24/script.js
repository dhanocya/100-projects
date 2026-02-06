const cursor = document.querySelector(".cursor")

cursor.addEventListener("mousemove", (event) => {
    calcu(event.pageX,event.pageY)
})

function calcu(pageX,pageY){
    cursor.style.left = pageX + "px"
    cursor.style.top = pageY + "px"
}