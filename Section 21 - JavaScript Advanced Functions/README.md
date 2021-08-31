# Web Developer Bootcamp Udemy Course

## Section 21 - JavaScript: More Advanced Funcitons

### Topics Covered in this section

### Crucial:
 - Scope
 - Function Expressions
 - Higer Order functions

### Important: 
 - Returning Functions
 - "this" keyword
 - Adding Methods to Objects
### Nice To Have:

## Notes:
- - -

## Variable Scope
Scope is the visibility of a variable. where we define a variable in javascript affects where we can use it later on.

For Example, a varible declared within a function is only able to be directly used within the function itself and not outside.


## Block Scope
Variables are also defined to the "block" of code they fall in such as conditionals, loops, switch statements, etc... so a variable can only be used within the block of code the exist and any sub blocks within.


## Lexical Scope
An inner funciton nested within a function has access to the variables available to that of its parent function.
This concept only works going deeper into nested functions. a variable declared in a deeper function is not accessible to a higher function. so a variable defined in a child function is not accessible to the parent function.


## Function Expressions
function expressions are essentially storing a function in a variable

```
const square = function (num){
    return num * num
}
```

## Higher Order Functions
Functions that operate on/with other functions.

higher order functions can:

1) accept other functions as arguments

```
function callTwice(func){
    func()
    func()
}

function rollDie(){
    const roll = Math.floor(Math.random()*6)+1
    console.log(roll)
}

callTwice(rollDie)
```

and 2) return a function

```
function makeMysteryFunc(){
    const rand = Math.random();
    if(rand>0.5){
        return function(){
            console.log("CONGRATS, Good Function")
        }
    }
    else{
        return function(){
            alert("Not a good function")
        }
    }
}

const mysteryFunc = makeMysteryFunc()

mysteryFunc()
```

```
function makeBetweenFunc(min,max){
    return function(num){
        return num >= min && num <= max
    }
}

const isChild = makebetweenFunc(0,17)
const isAdult = makeBetweenFunc(18,64)
const isSenior = makeBetweenFunc(65,120)
```


## Defining Methods
Methods in JS are properties of an object that are a function.
Every Method is a function but not every funciton is a method.

```
const mathObj = {
    PI: 3.14159,
    square (num){
        return num**2
    },
    cubed (num){
        return num**3
    }
}
```


## "This" keyword
The this keyword refers to accessing other properties on the same object




  