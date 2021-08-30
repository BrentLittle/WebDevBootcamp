// EXERCISE 1
// Write a function multiply which accepts two numerical arguments and returns their product

function multiply(num1, num2){
    if( typeof num1 !== "number" || typeof num2 !== "number" ){
        return false;
    }
    return num1 * num2;
}





// EXERCISE 2
// Write a function isShortsWeather that accepts a single number argument (the temperature) and if it is greater than or equal to 75, return true, else return false.

function isShortsWeather (temperature){
    if (temperature >= 75){
        return true
    }
    return false
}





// EXERCISE 3
// Write a funciton calles lastElement which accepts an array as an argument. the function should return the last element of the array. if the array is empty return null
function lastElement(array){
    if (array.length === 0){
        return null
    }
    return array[array.length-1]
}





// EXERCISE 4
// Write a function capitalize that take a string argument and returns a new string with the first letter capitalized
function capitalize(word){
    let firstLetter = word[0].toUpperCase()
    return `${firstLetter}${word.slice(1)}`
}





// EXERCISE 5
// Write a funciton sumArray which accepts an array of numbers, and should return the sum of all the numbbers in the array
function sumArray(array){
    let total=0
    for (let i=0; i<array.length; i++){
        total+=array[i]
    }
    return total
} 





// EXERCISE 6
// write a function returnDay that takes any number and returns the string version of what day in the week it is.
function returnDay(intDay){
    switch(intDay){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        default:
            return null
    }
}