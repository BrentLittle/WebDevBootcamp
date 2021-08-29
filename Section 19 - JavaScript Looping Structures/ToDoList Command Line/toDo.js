let userChoice = prompt("What Would You Like To Do?")
let todoList = ["Collect Money", "Buy Car"]

while(userChoice !== "quit" && userChoice !== "q"){
    userChoice = prompt("What Would You Like To Do?")
    
    if(userChoice === "list"){
        console.log("**********")
        for(let i = 0; i < todoList.length; i++){
            console.log(`${i}: ${todoList[i]}`)
        }
        if(todoList.length === 0){
            console.log("LIST EMPTY")
        }
        console.log("**********")
    }
    else if (userChoice === "new"){
        const newTODO = prompt("What would you like to add to your Todo List?")
        todoList.push(newTODO)
    }
    else if (userChoice === "delete"){
        const TODOtoRemove = parseInt(prompt("What task would you like to delete?"))
        if (TODOtoRemove > -1) {
            todoList.splice(TODOtoRemove, 1);
        }
    }
        
}

console.log("OK, YOU QUIT THE APP!")