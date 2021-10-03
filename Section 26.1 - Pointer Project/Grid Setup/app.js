const rowSelector = document.getElementById("rowSelector")
const rowSelectorLabel = document.getElementById("rowSelectorLabel")

const columnSelector = document.getElementById("columnSelector")
const columnSelectorLabel = document.getElementById("columnSelectorLabel")

const arrowContainer = document.querySelector("[container]")

const clearArrowContainer = () => {
    arrowContainer.innerHTML = '';
}

const generateArrowElement = () => {
    const arrowObj = document.createElement("div");
    const itemAtt = document.createAttribute("item");
    
    const img = document.createElement("img")
    img.src = "Assets/arrow.png"

    arrowObj.setAttributeNode(itemAtt)
    arrowObj.appendChild(img)

    return arrowObj
}

const fillArrowContainer = () => {
    const numOfArrows = columnSelector.value * rowSelector.value
    for(let i=0; i<numOfArrows; i++){
        arrowContainer.appendChild(generateArrowElement())
    }
}


rowSelector.addEventListener("change", () =>{
    rowSelectorLabel.innerText = `${rowSelector.value} Rows`
    arrowContainer.style.gridTemplateRows = `repeat(${rowSelector.value}, 1fr)`
    clearArrowContainer()
    fillArrowContainer()
})

columnSelector.addEventListener("change", () => {
    columnSelectorLabel.innerText = `${columnSelector.value} Cols`
    arrowContainer.style.gridTemplateColumns = `repeat(${columnSelector.value}, 1fr)`
    clearArrowContainer()
    fillArrowContainer()
})

window.addEventListener('load', (event) => {
    columnSelectorLabel.innerText = `${columnSelector.value} Cols`
    rowSelectorLabel.innerText = `${rowSelector.value} Rows`
    fillArrowContainer()
});