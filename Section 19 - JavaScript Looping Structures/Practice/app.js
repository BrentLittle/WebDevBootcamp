let maximum = parseInt(prompt("Enter Your Maximum Number"))

while(!maximum){
    maximum = parseInt(prompt("Enter Your Maximum Number"))
}

const targetNum = Math.floor((Math.random() * maximum) + 1)

let guess = parseInt(prompt("Enter Your first guess!"))
while(guess !== targetNum){
    if (guess > targetNum){
        guess = parseInt(prompt("Too High!, enter another guess!"))
    }
    if (guess < targetNum){
        guess = parseInt(prompt("Too Low!, enter another guess!"))
    }
}

console.log("YOU GOT IT!")
