const colorBtn = document.querySelector("button")
const header = document.querySelector("#title")

function randomVal255 (){
    return Math.floor(Math.random() * 256)
}

function makeColor (){
    const r = randomVal255()
    const g = randomVal255()
    const b = randomVal255()
    return `rgb(${r}, ${g}, ${b})`
}

colorBtn.addEventListener('click', () => {
    const newColor = makeColor()
    header.innerText = newColor
    document.body.style.backgroundColor = newColor
})