# Web Developer Bootcamp Udemy Course

## Section 17 - JavaScript: Arrays

### Topics Covered in this section

### Crucial:
 - Array basics - Creating and Updating
 - Push and Pop
 - Shift and Unshift

### Important: 
- Concat, indexOf
- Slice and Splice
- Multi-Dimensional Arrays


### Nice To Have:


## Notes:
- - -


## Creating Arrays
Arrays are an ordered collection of values. Arrays are ordered based on the index of the elements in the array starting at 0.
```
let Students = [];

let colors = ["red", "green", "yellow"];

let stuff = [true, 68, "Name", null, 3.1415]
```

We are also able to determine the length of an array by using the .length property that is associated with the array.
```
[].length // = 0

[0,1,2].length // = 3

stuff.length // = 5
```

## Updating Arrays
We can use the [] annotation to be able to modify elements in an array
```
let colors = ["rad", "orange", "green", "Yellow"];

colors[0] = 'red';

colors[2] = 'yellow';
colors[3] = 'green';

colors[4] = "blue";
```

## Array Methods
### Push and Pop
Push and Pop allow us to add and remove from the END of an array.

Push appends to the array at the end whereas pop removes an elemennt from the end of the array.

```
let movieLine = [];

movieLine.push("Brent);
movieLine.push("Denny");
 // ["Brent", "Denny"]


let nextInLine = movieLine.pop() // "Denny"
// movieLine = ["Brent"]


nextInLine = movieLine.pop() // "Brent"
//movieLine = []
```



### Shift and Unshift

Shift and Unshift allow us to add and remove from the START of the array

unshift adds to the start of the array whereas shift removes from the start of the array.

```
let movieLine = [];

movieLine.push("Brent);
movieLine.push("Denny");
 // ["Brent", "Denny"]

let nextPersonWaiting = movieLine.shift()   // "Brent"
 // ["Denny"]

movieLine.push("Kelston")
 // ["Denny", "Kelston"]

nextPersonWaiting = movieLine.shift()      // "Denny"
 // ["Kelston"]

movieLine.unshift("VIP")
 // ["VIP", "Kelston"]
```


### OTHER Methods
 - concat    - Merge Arrays
 - includes  - Look for a value
 - indexOf   - returns first index of value
 - join      - Creates String from an array
 - reverse   - reverses the array
 - slice     - copies a portion of an array
 - splice    - removes/replaces elements
 - sort      - sorts an array









