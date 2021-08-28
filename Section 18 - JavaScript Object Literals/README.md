# Web Developer Bootcamp Udemy Course

## Section 18 - JavaScript: Object Literals

### Topics Covered in this section

### Crucial:
- Creating and working with Object Literals
- Nesting Arrays and Objects

### Important: 

### Nice To Have:


## Notes:
- - -

## Object Literals
Objects are collections of properties.
Properties are simply key-value pairs.
So rather than using an index in an Array we use a key to access a particular value.


## Definining Object Literals
Defining an object needs key value pairs. the Value can be of any type or even other objects as well such as an array or custom object.

In an object all valid keys are converted to strings. minus a few key keys
```
const person = {
    firstName : "Brent",
    lastName : "Littlefield",
    age : 21,
    grades : [100,98,100,94],
    isAmazing : true
}
```

## Accessing Data from Objects
In order to access data we can use one of two ways, using square brackets and adding quotes surrounding the property name we want the value for. OR we can use the "." notation where we just simply call the property itself.
```
person["lastName"] // Littlefield
person["age"]      // 21


person.firstName      // Brent
person.isAmazing      // true
```

## Modifying Objects
Changing Object variables is similar to arrays we can use the square notation or "." notation and simply set the value to be the new desired value that you would want

by using this syntax as well we can also add properties to our objects by including a unique key and value

```
const studentGrades = {
    Brent: 98,
    Denny: 72
}

studentGrades.Denny = 45;
studentGrades.Brent = 100;


studentGrades.Matt = 86;
studentGrades["Keslton"] = 89;
```


## Nesting Arrays and Objects
It is very common to have objects with objects or arrays inside, or arrays with other arrays and objects inside of it. COmbbining these two concepts (objects and arrays) allow us to make more detialed objects in general

```
// An Array of Objects
const shoppingCart = {
    {
        product : "Jenga",
        price : 14.99,
        qty : 1
    },
    {
        product : "Nintendo Switch",
        price : 449.99,
        qty : 2
    }
}

shoppingCart[1].qty = 2
shoppingCart[0]["price"] = 9.99
```

```
// An object with a list and another object inside
const student = {
    firstName : "Brent",
    lastName : "Littlefield",
    strengeths : ["Python", "JavaScirpt", "Automation"],
    exams : {
        midterm: 98,
        final: 97
    }
}

student.exams.updatedFinal = 100
student.strengths.push("Cooking");
```
