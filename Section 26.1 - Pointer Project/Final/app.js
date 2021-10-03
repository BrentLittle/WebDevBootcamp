const headerElement = document.querySelector("header")

const rowSelector = document.getElementById("rowSelector")
const rowSelectorLabel = document.getElementById("rowSelectorLabel")

const columnSelector = document.getElementById("columnSelector")
const columnSelectorLabel = document.getElementById("columnSelectorLabel")

const arrowWrapper = document.querySelector(".arrowWrapper")
const arrowContainers = document.querySelectorAll(".arrowWrapper > div")
let arrows = document.querySelectorAll("img")

let backgroundDegree = -45


const updateArrowContainersWidth = () => {
    // funciton to dynamically change the size of the arrow container based on the height of the header
    for (let container of document.querySelectorAll(".arrowWrapper > div")){
        container.style.width = `${(1/columnSelector.value)*100}%`
    }
}


const getArrowLocation = (element) => {
    // return the (x,y) coordinates of an element on the screen
    let elementBoundingRect = element.getBoundingClientRect();
    return {
        x: (elementBoundingRect.left + elementBoundingRect.right) / 2,
        y: (elementBoundingRect.top + elementBoundingRect.bottom) / 2
    }
}


const getAngleToMouse = (p1x, p1y, p3x, p3y) => {
    /* point 1 is the location of the arrow, 
       point 2 can be determined using the location of point 1 which is the point on the top edge of the screen directly above point 2
       point 3 is the location of the mouse

        p2 (top of screen)
        |   \
        |       \
        |           \
        p1 --------- p3 
        (arrow)      (mouse)
    */

    // generate vector objects from the points
    const vectorAX = 0
    const vectorAY = p1y
    const vectorBX = p1x - p3x
    const vectorBY = p1y - p3y

    // calculate the necessary values to find the angle between vectors A and B
    let aDOTb = (vectorAX * vectorBX) + (vectorAY * vectorBY)
    let magA = Math.sqrt(vectorAX ** 2 + vectorAY ** 2)
    let magB = Math.sqrt(vectorBX ** 2 + vectorBY ** 2)

    // If the mouse is to the left of the arrow (in the x plane) we must return a negative degree value 
    let angle = Math.acos(aDOTb / (magA * magB)) * (180 / Math.PI)
    if (p3x < p1x) {
        return -angle
    }
    return angle
}


const generateNewArrowElement = () => {
    const elem = document.createElement("div")
    const img = document.createElement("img")
    img.src = "Assets/arrow.png"
    elem.appendChild(img)
    return elem
}


const updateArrowWrapper = () => {
    let currentNumChildren = arrowWrapper.childElementCount
    let correctNumChildren = rowSelector.value * columnSelector.value

    let difference = correctNumChildren - currentNumChildren

    if(difference > 0) {
        for (let i = 0; i < difference; i++){
            arrowWrapper.appendChild(generateNewArrowElement())
        }
    }
    else if(difference < 0){
        for (let i = 0; i < -1 * difference; i++) {
            arrowWrapper.removeChild(arrowWrapper.lastChild);
        }
    }
}


window.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    for (let arrow of arrows){
        arrowLocation = getArrowLocation(arrow)
        let rotationAngleToMouse = getAngleToMouse(arrowLocation.x, arrowLocation.y, mouseX, mouseY)
        arrow.style.transform = `rotate(${rotationAngleToMouse}deg)`
    }
});


rowSelector.addEventListener("change", () => {
    rowSelectorLabel.innerText = `${rowSelector.value} Rows`
    updateArrowWrapper()
    updateArrowContainersWidth(columnSelector.value)
    arrows = document.querySelectorAll("img")
})


columnSelector.addEventListener("change", () => {
    columnSelectorLabel.innerText = `${columnSelector.value} Cols`
    updateArrowWrapper()
    updateArrowContainersWidth(columnSelector.value)
    arrows = document.querySelectorAll("img")
})


window.addEventListener('resize', () => {
    arrowWrapper.style.height = `calc(100vh - ${headerElement.clientHeight}px)`
});


window.addEventListener('load', () => {
    columnSelectorLabel.innerText = `${columnSelector.value} Cols`
    rowSelectorLabel.innerText = `${rowSelector.value} Rows`
    
    arrowWrapper.style.height = `calc(100vh - ${headerElement.clientHeight}px)`
    updateArrowWrapper()
    updateArrowContainersWidth(columnSelector.value)
    
    arrows = document.querySelectorAll("img")
});
