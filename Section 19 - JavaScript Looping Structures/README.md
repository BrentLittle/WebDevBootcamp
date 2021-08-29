# Web Developer Bootcamp Udemy Course

## Section 19 - JavaScript: Looping Structures

### Topics Covered in this section

### Crucial:
 - For Loops
 - While Loops
 - Break Keyword
 - For of Loop
 - For in Loop
 - Iterating Arrays

### Important: 
 - Nested Loops

### Nice To Have:
 - Iterating Objects

## Notes:
- - -

## JavaScript Loops
Loops allow us to repeat code multiple times without writing out the code N times.

```
// The For Loop
for (initialExpression; condition; incrementExpression){
}
```

```
for (let i=1; i<=10; i++){
    console.log(i)
}
```

## Looping over Arrays
Iterating over arrays is very useful so using forloops are waht we use.

```
const animals = ["lions", "tigers", "bears"]

for(let i=0; i<animals.length; i++){
    console.log(i, animals[i])
}

for(let i = animals.length - 1; i >= 0; i--){
    console.log(i, animals[i])
}
```

## Nested For Loops
Nested for loops are useful if you have to repreat a process that requires a loop a number of times as well.

Nested loops are also very helpful in iterating through multi-dimentional arrays where you have one loop for each dimension of the array.
You have 2 loops for a 2D array and 3 loops for a  3D array and etc..

```
for (let i = 0; i<=10; i++){
    console.log(`i is: ${i}`)
    for (let j = 0; j<=3; j++){
        console.log(`     j is: ${j}`)
    }
}
```

## While Loops
While loops continue execution as long as the test condition is true.

```
let num = 0;
while(num <= 10){
    console.log(num)
    num++
}
```

## The Break Keyword
The break keyword (if executed) will break out of (stopping execution) of the closest loop that it is run within.

If the break statement is ran in a nested for loop then the nested forloop will hault execution and the parent loop will continue on with its execution as per normal. 


## For Of Loop
This is a nice and easier way of iterating over arrays and other iterables (such as a strings, maps, or sets)

```
for(variable of interable){
    statement
}
```

```
let subreddits = ["cringe", "books", "chickens"]
for (let sub of subreddits){
    console.log(`Visit reddit.com/r/${sub}`)
}
```


## Iterating over Objects
The for in loop iterates over all of the properties in an object.
```
const object = { 
    a: 1, 
    b: 2, 
    c: 3 
};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```