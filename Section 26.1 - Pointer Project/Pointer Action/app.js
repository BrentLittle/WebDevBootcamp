const mousePosElement = document.querySelector("#MousePos")
const arrowLocationElement = document.querySelector("#ArrowLocation")
const arrowElement = document.querySelector("img")

let mouseX = 0
let mouseY = 0

let arrowX = 0
let arrowY = 0

let angle = 0

const getArrowLocation = () => {
    let element = arrowElement.getBoundingClientRect();
    arrowX = Math.floor((element.left + element.right ) / 2)
    arrowY = Math.floor(( element.top + element.bottom) / 2)
}

const updateArrowLocationInfo = () => {
    getArrowLocation()
    arrowLocationElement.innerText = `Arrow Location (x,y) = ${arrowX}, ${arrowY}`
}

const getAngleToMouse = (p1x, p1y, p2x, p2y, p3x, p3y) => {
    /* point 1 is the location of the arrow, 
       point 2 is the location of the top of the screen directly above the arrow, 
       point 3 is the location of the mouse

        p2 (top of screen)
        |   \
        |       \
        |           \
        p1 --------- p3 
        (arrow)      (mouse)
    */  

    // generate vector objects from the points
    const vectorA = {x: p1x-p2x, y: p1y-p2y}
    const vectorB = {x: p1x-p3x, y: p1y-p3y}

    // calculate the necessary values to find the angle between vectors A and B
    let aDOTb = (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y)
    let magA = Math.sqrt(vectorA.x ** 2 + vectorA.y ** 2)
    let magB = Math.sqrt(vectorB.x ** 2 + vectorB.y ** 2)
    
    // If the mouse is to the left of the arrow (in the x plane) we must return a negative degree value 
    if (p3x < p1x) {
        return (Math.acos(aDOTb / (magA * magB)) * (180 / Math.PI)) * -1
    }
    return Math.acos(aDOTb / (magA * magB)) * (180 / Math.PI)
}

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    mousePosElement.innerText = `(x, y) = ${mouseX}, ${mouseY}`
    
    angle = getAngleToMouse(arrowX, arrowY, arrowX, 0, mouseX, mouseY)
    
    arrowElement.style.transform = `rotate(${angle}deg)`
  });

window.addEventListener("resize", (e) => {
    updateArrowLocationInfo()
})

updateArrowLocationInfo()
