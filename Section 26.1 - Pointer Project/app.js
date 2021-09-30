const mousePosElement = document.querySelector("#MousePos")
const screenWidthElement = document.querySelector("#ScreenWidth")
const screenHeightElement = document.querySelector("#ScreenHeight")
const centerOfVPElement = document.querySelector("#CenterOfVP")
const rotationAngleElement = document.querySelector("#RotationAngle")
const arrowLocationElement = document.querySelector("#ArrowLocation")
const arrowElement = document.querySelector("img")

let mouseX = 0
let mouseY = 0

let viewportWidth = 0
let viewportHeight = 0

let viewportCenterX = 0
let viewportCenterY = 0

let arrowX = 0
let arrowY = 0

let angle = 0

const updateViewportInfo = () => {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    screenWidthElement.innerText = `Screen Width: ${viewportWidth}`
    screenHeightElement.innerText = `Screen Height: ${viewportHeight}`

    viewportCenterX = Math.floor(viewportWidth / 2)
    viewportCenterY = Math.floor(viewportHeight / 2)
    centerOfVPElement.innerText = `Center of Screen (x, y) = ${viewportCenterX}, ${viewportCenterY}`
}
const getArrowLocation = () => {
    let rect = arrowElement.getBoundingClientRect();
    arrowX = Math.floor((rect.left + rect.right) / 2)
    arrowY = Math.floor((rect.top + rect.bottom) / 2)
}

const updateArrowLocationInfo = () => {
    getArrowLocation()
    arrowLocationElement.innerText = `Arrow Location (x,y) = ${arrowX}, ${arrowY}`
}



window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    mousePosElement.innerText = `(x, y) = ${mouseX}, ${mouseY}` // Prints data
  });

window.addEventListener("resize", (e) => {
    updateViewportInfo()
    updateArrowLocationInfo()
})

updateViewportInfo()
updateArrowLocationInfo()
