# Web Developer Bootcamp Udemy Course

## Section 22 - JavaScript: Callbacks and Array Methods

### Topics Covered in this section

### Crucial:
- For Each
- Map
- Arrow Functions

### Important: 
- Filter

### Nice To Have:
- Sum & Every
- Reduce

## Notes:
- - -


## For Each
the for each method allows us to fun a funciton that is passed in once for each element of an array.
```
const nums = [1,2,3,4,5,6,7,8,9]

function printElement(element){
    console.log(element)
}

nums.forEach(printElement)

nums.forEach( function (el) {
    if(el % 2 === 0){
        console.log(el)
    }
})
```

## Map
Map is similar to foreach and runs the function once per element. BUT generates a new array as an output bbased on the function passed in. it MAPS the current array to something with the applied funciton to each element in the array.

```
const nums = [1,2,3,4,5,6,7,8,9]

const doubled = numbers.map(function(num){
    return num * 2
})
```

## Arrow Functions
Arrow functions are an alternative to a regular funciton expression.
Allows us to write a function without having to write the keyword "function"

```
const square = (x) => {
    return x**2
}

const sum = (x,y) => {
    return x+y
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}
```

## Filter Method
Creates a new array with all elements that pass the test implemented bby the provided funciton

```
const nums = [1,2,3,4,5,6,7,8,9]
numbers.filter(n => {
    return n < 5
})
```


## Some & Every Methods
These two funcitons ALWAYS return true or false
they are ways to test of elements in an arrya passed a test.

The every method checks if EVERY element in the array passes a particular test implemented by the provided function

```
const exams = [80,98,92,78,77,90,89,84,81,77]

exams.every((score) => score >= 50) // true
exams.every((score) => score <= 50) // false
exams.every((score) => score >= 80) // false
```

The some method checks if ANY element in the array passes a particular test implemented by the provided function.
```
const exams = [80,98,92,78,77,90,89,84,81,77]

exams.some((score) => score >= 90) // true
exams.some((score) => score <= 50) // false 
exams.some((score) => score === 100) // false 
```
