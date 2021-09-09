// Named function with multiple parameters
function sum(a,b){
    return a+b
}

const sumArrow = (a,b) => {
    return a+b
}

const sumArrowReduced = (a,b) => a + b





// Named Funciton with one parameter
function isPositive(number){
    return number >= 0 
}

const isPositiveArrow = (number) => {
    return number >= 0 
}

const isPositiveArrowReduced = number => number >= 0 





// Named Funciton with no parameters
function randomNumber(){
    return Math.random()
}

const randomNumberArrow = () => {
    return Math.random()
}
const randomNumberArrowReduced = () => Math.random()





// Unnamed Function
document.addEventListener('click',function(){
    console.log('click')
})

// Arrowed
document.addEventListener('click',() => {
    console.log('click')
})

// Arrowed & Reduced
document.addEventListener('click', () => console.log('click'))








/* ARROW FUNCTIONS

// Syntax 
(p1,p2) => {statements}
(p1,p2) => expression
(p1,p2) => {return expression}

(p1) => {statements}
p1 => {statements}

() => {statements}
() => expression
() => {return expression}

(p1,p2,p3) => expression
*/


// Normal Function
const multiply = function(x,y){
    return x*y
}
// Arrow Function
const multiplyArrow1 = (x,y) => {
    return x*y
}
// OR Arrow Function Reduced
const multiplyArrow2 = (x,y) => x*y



// Arrow Functions work well with higher order functions

const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']

// Normal Func
const materialLength = materials.map(function(material){
    return material.length
})
// Arrow Func
const materialLengthArrow = materials.map((material) => {
    return material.length
})
// Arrow Func Reduced
const materialLengthArrowReduced = materials.map((material) => material.length)



// Arrow Functions also do not create their own "This" context

// With using arrow functions 'this' will not refer to the global object 
// But rather the local context wich is the person object
function Person(){
    this.age - 0;
    setInterval(() => {
        this.age++
    },1000)
}

const person = new Person();