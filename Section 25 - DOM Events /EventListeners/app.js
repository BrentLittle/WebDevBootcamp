const btn2 = document.querySelector("#v2")

// Event Handling Method #2: JS DOM Object Property
btn2.onclick = () => {
    console.log("You Clicked Me")
    console.log("It Worked")
}

function scream (){
    console.log("Get out of Me!")
    console.log("Do Not Touch Me!")
}

btn2.onmouseenter = scream

document.querySelector("h1").onmouseenter = () => {
    document.querySelector("h1").style.color = "red"
}
document.querySelector("h1").onmouseout= () => {
    document.querySelector("h1").style.color = "black"
}


// Event Handling Method #3: addEventListener
const btn3 = document.querySelector("#v3")

btn3.addEventListener('mouseup', () => {
    alert("Method 3 Button Clicked! mouseUp")
})

btn3.addEventListener('mousedown', scream)

const btn = document.querySelector("#multi")

const shout = () => {
    console.log("Shout")
}
const twist = () => {
    console.log("Twist")
}

btn.addEventListener('click', shout)
btn.addEventListener('click', twist)
