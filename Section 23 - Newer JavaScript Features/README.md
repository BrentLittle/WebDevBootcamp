# Web Developer Bootcamp Udemy Course

## Section 23 - JavaScript: Newer Features

### Topics Covered in this section

### Crucial:
 - Spread with Arrays
 - Spread with Objects
 - Destructuring
### Important: 
- Default Params
- Spread in Function Calls
- Rest Params

### Nice To Have:

## Notes:
- - -

## Default Params
Default parameters will supply a value to a parameter that is undefined if declated.
```
function rollDie(numSides = 6){
    return math.floor(Math.ramdom() * numSides) + 1
}

function multiply(a, b=1){
    return a*b
}
```

## Spread

the spread syntax allows an iterable such as an array to be expanded in places where zero or more agruments or elements are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.


## Spread for funciton calls
This will spread an iterable into a funciton call by splitting the iterable up into N arguments that are passed to the function
```
const nums = [1,2,3,4,5,6,7,8,9,0]

Math.max(...nums)
Math.min(...nums)

console.log(...nums)
console.log(..."hello")
```

## Spread with Array Literals
This allows us to spread an iterable across indicies of a new array that is generated.
```
const cats = ["Blue", "Scout", "Rocket"]
const dogs = ["Rusty", "Wyatt"]

const allPets = [...cats, ...dogs]
const allPets = [...dogs, ...cats, "Speedy the Turtle"]

const letters = [..."Hello"]
```

## Spread with Objects
Using the spread on objects we can spread properties from one object into a new object.

```
const feline = { legs: 4, family: "felidae" }
const canine = {isFurry: true, family: "Caninae"}

{...feline} // brand new opject with new properties
{...feline, colour: "black}

const catdog = {...feline, ...canine} // any matching properties will overwrite.

```

## Rest
in every function we have access to the "arguments" object that holds all the arguments passed to a function.

```
function sum (...nums){
    return nums.reduce((total, el) => total + el)
}
```


## Destructuring 
Unpacking values from arrays or properties objects and place them into distinct variables

### Arrays
```
const scores = [10,9,8,7,6,5,4,3,2,1,0]
const highScore = scores[0]
const secondHighestScore = scores[1]

const [high, secondHigh, thirdHigh] = scores

const [highest, ...allOthers] = scores
```


## Objects
```
const user = {
    email: "TestUser@test.ca",
    fName: "Brent",
    lName: "Littlefield",
    age: 22,
    born: 1999,
    died: 2021
}

const {email, fName, age} = user

const {email, fName, age, born: birthYear, died: deathYear = "N/A"}
```


## Destructuring Params
```
const user = {
    email: "TestUser@test.ca",
    fName: "Brent",
    lName: "Littlefield",
    age: 22,
    born: 1999,
    died: 2021
}

funciton fullName (user){
    const {fName, lName} = user
    console.log(`${fName} ${lName}`)
}

funciton fullName ({fName, lName}){
    console.log(`${fName} ${lName}`)
}
```