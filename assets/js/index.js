const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanBye.remove()
div.append(spanBye)

spanHi.style.color = "red"
spanBye.style.backgroundColor = "blue"