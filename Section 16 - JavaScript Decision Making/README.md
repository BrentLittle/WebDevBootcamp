# Web Developer Bootcamp Udemy Course

## Section 16 - JavaScript: Decision Making

### Topics Covered in this section

### Crucial:
- Comparison Operatiors
- Conditional Statements
- Truthy-y and False-y Values
- Logical AND, OR and NOT

### Important: 


### Nice To Have:


## Notes:
- - -

## Comparison Operators
All comparison operators return a boolean value.

| Operation     | Icon          |
|:------------- |:-------------:|
| Greater Than  | > |
| Less Than     | < |
| Greater Than Equal To| >= |
| Less Than Equal To| <= |
| Equality| == |
| Not Equal| != |
| Strict Equality | === |
| Strict non-Equality| !== |


## == vs ===
== checks if two values are equal but they do not need to be of the same type. JS tries to make the two values into the same type and can lead to unforseen outcomes

=== on the otherhand checks for values to be equal as well as the type of both sides of the expression.


## If Statements
An If statement conputes a conditional statement and if the result is true executes the code that is held within it.
```
if (1+1 === 2){
    console.log("Math Works")
}

let rand = Math.random();
if(rand < 0.5){
    console.log(`Number was less than 0.5 ${rand}`)
}
```


## Else if Statements
and If-else statement will only run if the initial if statement conditional is false and also the else-if statement conditional is true.

If there are multiple else if statements in an if block only one of them will execute and that will be the first one that has its conditional equate to true.

```
const age = 22;
if (age < 5){
    console.log("You get in Free as an infant")
}
else if (age < 10){
    console.log("You must pay $10 as a child")
}
else if (age < 65){
    console.log("You must pay $20 as an adult")
}
else if (age >= 65){
    console.log("You must pay $10 as a senior")
}
```

## Else

the else statement is a catch all and is the last thing to run in an if statement block if no requirements are met.
```
const dayOfWeek = prompt("Enter a day of the week).toUpperCase();
if (dayOfWeek === "MONDAY"){
    console.log("Monday is Horribble, no body likes mondays");
}
else if (dayOfWeek === "SATURDAY"){
    console.log("I Love Saturday");
}
else if (dayOfWeek === "SUNDAY"){
    console.log("Sunday is just alright");
}
else{
    console.log("Meh")
}
```

## Nesting Statements

We are also able to net conditional blocks instide of other conditional blocks.

This means we can have if statements inside of other if statements in order to build deeper logic.

```
const password = prompt("Please Enter Your Password");

// Password must be more than 6 chars
// Password must not include space

if (password.length >= 6){
    if(password.indexOf(" ") !== -1){
        console.log("Good Password")
    }
    else{
        console.log("Password constains space")
    }
}
else{
    console.log("Password not 6 or more characters")
}
```

## Logical AND (&&)
both sides of a logical AND expression, the left and the right side will need to be TRUE in order for the whole statement to be evaluated as TRUE.

```
const password = prompt("Please Enter Your Password");

// Password must be more than 6 chars
// Password must not include space

if (password.length >= 6 && password.indexOf(" ") !== -1){
    console.log("Good Password")
}
else{
    console.log("Password not 6 or more characters and not contain a space")
}
```

## Logical OR (||)
for a logical OR either side of a OR expression must evaluate to TRUE on order for the entire conditinal statement be evaluated as True.

## Logical NOT (!)
The Logical NOT operator returns a value that is the inverse of bboolean expression. if the bboolean expression returns false the not operator will return True and vice versa.


## The Switch Statement
the Switch statement is a control-flow statement that can replace many if statements

```
const day = 2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("WEEKEND!!");
        break;
    default:
        console.log("Invalid Number");
        break;
}   
```
