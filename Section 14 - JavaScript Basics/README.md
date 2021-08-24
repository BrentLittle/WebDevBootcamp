# Web Developer Bootcamp Udemy Course

## Section 14 - JavaScript: The Basics

### Topics Covered in this section

### Crucial:
 - Understanding the role of JS
 - JavaScript Numbers
 - Variables and Lists
 - Const
 - Booleans
 - Variable Naming

### Important: 


### Nice To Have:


## Notes:
- - -

## Primitives
Main Primitive Types are: 

- Number
- String
- Boolean
- Null
- Undefined
- Symbbol
- BigInt


## JavaScript Numbers
JS has ONE number Type.

This handles positives, negatives, Wholes and decimals.

We can do math operations with JS numbers.

- Exponent **
- Division /
- Multiplication *
- Addition +
- Subtraction -
- Modulo %

Order of operations follows the normal rules of BEDMAS / PEMDAS

NaN is a concept that represents a value that is not a number. Such as 0/0 will be NaN

## Variables & Let
Variables allow is to store a value and associate a name with it. 
This name can be used to reference the value later on. The variable can be used to change the value later on also.

Variables can change type over the course of execution. Just like python.

If a variable is declared with a boolean initially, but can be assigned as a Number or String at any point 
later on in execution.

Basic Syntax:

```
let variableName = value;

let year = 2021;


let numHens = 5;
let numRoosters = 1;

let totalChickens = numHens + numRoosters;


numHens = numHens + 1

```

## Updating Varibles
instead of doing score = score + 5, we can use the += variant shorthand
```
score += 5
score -= 5
score *= 2
score /= 3
```

if we need to increment by 1 we can use an even shorter variant using ++ and -- for addition and subtraction respectively.
```
lives++
lives--
```


## CONST & VAR
**const** works like **let** but DOES NOT allow you to edit the value of the variable after declaration

```
const id = 12345;
id += 1; //ERROR!!


const pi = 3.14159;
const feetInMile = 5280;

```
**var** is the OLD way and ONLY way of creating variables in JS.

var still works in current JS but using let and const is more robust.

```
var marathonLength = 26.2;
```

## Booleans
There are two options for a Boolean Value, either ***true*** or ***false***.
```
let loggedIn = false;
let gameOver = true;

const isWaterWet = true; (some would argue false however)
```






