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

arrowElement.style.transform = `rotate(${angle}deg)`

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

const getAngleToMouse = (p1x, p1y, p2x, p2y, p3x, p3y) => {
    // point 1 is the location of the arrow, point 2 is the location of the top of the screen directly above the arrow, and point 3 is the location of the mouse

    const vectorA = {x: p1x-p2x, y: p1y-p2y}
    const vectorB = {x: p1x-p3x, y: p1y-p3y}

    let aDOTb = (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y)
    let magA = Math.sqrt(vectorA.x**2 + vectorA.y**2)
    let magB = Math.sqrt(vectorB.x**2 + vectorB.y**2)
    
    if (p3x < p1x){
        return (Math.acos(aDOTb / (magA*magB)) * (180/Math.PI)) * -1
    }
    return Math.acos(aDOTb / (magA*magB)) * (180/Math.PI)
}

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    mousePosElement.innerText = `(x, y) = ${mouseX}, ${mouseY}`
    angle = getAngleToMouse(arrowX, arrowY, arrowX, 0, mouseX, mouseY)
    arrowElement.style.transform = `rotate(${angle}deg)`
  });

window.addEventListener("resize", (e) => {
    updateViewportInfo()
    updateArrowLocationInfo()
})

updateViewportInfo()
updateArrowLocationInfo()
