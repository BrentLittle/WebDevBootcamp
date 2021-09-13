console.log("ALL IMAGES")
const allImages = document.getElementsByTagName("Img")
for(let image of allImages){
    console.log(image.src)
}


console.log("\nSquareImages")
const squareImages = document.getElementsByClassName("square")
for(let img of squareImages){
    console.log(img.src)
}


console.log("\nQuerySelector")
const javaTag = document.querySelector("a[title='Java']")
console.log(javaTag.title)


console.log("\nQuerySelectorAll")
const allATagsinPTags = document.querySelectorAll("p a")
for(let link of allATagsinPTags){
    console.log(link.href)
}


console.log("\nQuerySelectorAll Edit Content")
const allLinks = document.querySelectorAll("a")
for (let link of allLinks){
    link.innerText = "I am a Link"
}


console.log("\nQuerySelector Edit innerText and innerHTML")
const h1 = document.querySelector("h1")
console.log(h1.innerText)
console.log(h1.innerHTML)
h1.innerHTML = `<i>${h1.innerText}</i>`
console.log(h1.innerText)
console.log(h1.innerHTML)


console.log("\nAppending HTML to element")
h1.innerHTML += "<sup>2</sup>"


console.log("\nEditing Inline Styles of elements")
h1.style.fontSize = "3em"
h1.style.color = "green"
h1.style.border = "2px solid pink"


console.log("\nEditing CSS Styles from external sheet")
for (let link of allLinks){
    // link.style.color = "rgb(255,108,134)"
    // link.style.textDecorationColor = "red"
    // link.style.textDecorationStyle = "wavy"

    link.classList.toggle("link")
}

console.log("\nCreating new HTML element and appending it as a child")
const newH2 = document.createElement('h2')
newH2.innerText = "I am an H2"
document.body.appendChild(newH2)


console.log("\nAppend new element after another element")
const h2 = document.createElement("h2")
h2.append("The Glorious Sons")
const header = document.querySelector("h1")
header.insertAdjacentElement("afterend", h2)


console.log("\nremoving Child Element")
const firstLi = document.querySelector("li")
const liParent = firstLi.parentElement
liParent.removeChild(firstLi)
// OR
//firstLi.parentElement.removeChild(firstLi)


console.log("\nRemove Element")
const img = document.querySelectorAll("img")
img[2].remove()