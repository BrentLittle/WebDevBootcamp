# Web Developer Bootcamp Udemy Course

## Section 20 - JavaScript: Funciton Introduction

### Topics Covered in this section

### Crucial:
- Working with arguments
- Function Return Values
- Defining Functions
- Function Exercises
  
### Important: 

### Nice To Have:

## Notes:
- - -
## Intro to Functions
Functions allow us to write reusable modular code. It is a chunk of code that we can execute at a later point.

We must first define the function in order to rhtne execute the code
```
function funcName(){
    //do something
}
```

```
function sing(){
    console.log("Yodle Le Yee Hoo")
}

for (let i=0; i<10; i++){
    sing()
} 
```

## Arguments
Arguments are simply just an input to a function. 
In order for our funcitons to accept arguments we must supply a variable name (pareameter) within the parenthesis in the function declaration.

```
function greet(firstName){
    console.log(`Hi, ${firstName}!`)
}
```

We can also have functions with multiple arguments. In order to handle this we must provide multiple parameter names separated by a comma.
Arguments are positionally assosciated with parameters so argument 0 will be applied to parameter 0.


## return Keyword
The return keyword allows us to produce an output for a function that can be captured and reused after completion of the funciton.

```
function add(x,y){
    if(typeof x !== "number" || typeof y !== "number"){
        return false
    }
    return x+y;
}
```
