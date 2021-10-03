const headerElement = document.querySelector("header")

const rowSelector = document.getElementById("rowSelector")
const rowSelectorLabel = document.getElementById("rowSelectorLabel")

const columnSelector = document.getElementById("columnSelector")
const columnSelectorLabel = document.getElementById("columnSelectorLabel")

const arrowWrapper = document.querySelector(".arrowWrapper")
const arrowContainers = document.querySelectorAll(".arrowWrapper > div")


const updateArrowContainersWidth = () => {
    for (let container of document.querySelectorAll(".arrowWrapper > div")){
        container.style.width = `${(1/columnSelector.value)*100}%`
    }
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


rowSelector.addEventListener("change", () => {
    rowSelectorLabel.innerText = `${rowSelector.value} Rows`
    updateArrowWrapper()
    updateArrowContainersWidth(columnSelector.value)
})


columnSelector.addEventListener("change", () => {
    columnSelectorLabel.innerText = `${columnSelector.value} Cols`
    updateArrowWrapper()
    updateArrowContainersWidth(columnSelector.value)
})


window.addEventListener('resize', (event) => {
    arrowWrapper.style.height = `calc(100vh - ${headerElement.clientHeight}px)`
});


window.addEventListener('load', (event) => {
    columnSelectorLabel.innerText = `${columnSelector.value} Cols`
    rowSelectorLabel.innerText = `${rowSelector.value} Rows`
    arrowWrapper.style.height = `calc(100vh - ${headerElement.clientHeight}px)`
    updateArrowWrapper()
    updateArrowContainersWidth(columnSelector.value)
});