# Web Developer Bootcamp Udemy Course

## Section 15 - JavaScript: Strings and More

### Topics Covered in this section

### Crucial:
- String Basics
- String Indicies and Length
- Undefined and Null Primitives
- String Methods
- String Template Literals

### Important: 
- Random Numbers and Math Object


### Nice To Have:


## Notes:
- - -

## Instroducing Strings
Strings are outlined with having characters surrounded by single or double quotes.
Strings represent text and are a "string" of characters.
```
let favAnimal = "Corgi";
let username = "BrentLittle";
```

## String indicies and length
Characters in a string are indexed starting at 0 being the first letter in the string

If you try to access an index outside of a string you do not get an error but rather an undefined value

```
let animal = "Dumbo Octopus";
let firstLetter = animal[0];

let phoneNum = "(123)456-7890";
```

We can get the length of any string by using the .length string property
```
animal.length
```

strings can also be concatenated together using the "+" operand
```
"lol" + "lol" = "lollol"
```


## String Methods

There are quite a few String methods that can be used to change or utilize a string.

A method is different from a property in that a property is not called using parenthesis () whereas a method is.
```
// SYNTAX
thing.method()


let msg = "I am Groot";
let upperMsg = msg.toUpperCase();
let lowerMsg = msg.toLowerCase();
```

The Trim method allows us to trim any leading or trailing whitespace in our string.
```
let whiteSpace = "         Lots of White Space          ";
let userInput = whiteSpace.trim()
```

## String Mmethods with arguments
the .indexOf() methods requires an argument supplied to it in order to search for that string within another string, and will return -1 if not in the string itself. It also ONLY returns the index of the first instance of the substring.

```
let msg = "Hello World"
let index = msg.indexOf("Hello");   //0
```

The slice() method returns a portion of a string based on the arguments provided to the method,
It takes either one or two arguments. if only one index is provided it will take the slice from that index to the end of the string. If two indicies are provided it will slice from the first index up to but not including the second index.
```
const str = 'The quick brown fox jumps over the lazy dog.';

str.slice(31);
// expected output: "the lazy dog."

str.slice(4, 19);
// expected output: "quick brown fox"

str.slice(-4);
// expected output: "dog."

str.slice(-9, -5);
// expected output: "lazy"
```

The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
If multiple instances occur it will only replace the first instance of the pattern match.
```
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

p.replace('dog', 'monkey');
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
```


## Template Literals

Template literals allow us to easily print out a string that also contains variable values in it easier than concatenating each variable with strings over and over.

Template Literals are like an f-string in Python by allowing for embeded expressions that are evaluated and used in the string without concatenation.

`I counted ${3+4} dogs` is a template Literal. It equates to be "I counted 7 dogs".

Template Literals use the back tick ` instead of quotes.


## Null and Undefined Primitive Types

### Null
Null is an intentional absesnse of any value and must be assigned.

```
let loggedInUser = null;

loggedInUser = "Alan Turing";
```

### Undefined
Variables that do not have a vlaue assigned to them are Undefined.


## Random Numbers and the Math Object
The Math object contains properties and methods for mathematical constants and functions


```
Math.floor(Math.random() * 5) + 1;
// Returns an integer value between 1 and 5 but not including 5

Math.floor(Math.random() * 3) + 20;
// Returns an integer value of 20, 21 or 22.

```
