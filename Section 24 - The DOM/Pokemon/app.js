// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const maxVal = 898;

for (let i = 1; i <= maxVal; i++) {
    const newDiv = document.createElement("div")
    newDiv.classList.toggle("pokemon")
    
    const newImg = document.createElement("img")
    newImg.src = `${baseURL}${i}.png`
    newDiv.appendChild(newImg)

    const newSpan = document.createElement("span")
    newSpan.innerText = `#${i}`
    newDiv.appendChild(newSpan)

    container.appendChild(newDiv)
}

