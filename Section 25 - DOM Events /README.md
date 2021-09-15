# Web Developer Bootcamp Udemy Course

## Section 25 - JavaScript: DOM Events

### Topics Covered in this section

### Crucial:
 - What are Events?
 - addEventListener
 - Forms Events

### Important: 
 - Keyboard Events
 - Input and Change Events
 - Event Bubbling
 - Event Delegation

### Nice To Have:

## Notes:
- - -
## DOM Events
Events are responses to user inputs and actions.
These events could be clicking, hovering, dragging, typing, scrolling, form submission, etc...

## Inline Events
There are Only 3 ways that we can use to respond to user events/interactions.

The first way of handling events is writing the code inline inside the HTML document. 

The downside to this methodology is that it is clunky and that it makes the markup much longer and cluttered. 

This method is also not expandable as if the same functionality is needed in multiple spots then the code needs to be copied and duplicated.

```
<button onclick="alert('Button Clicked')">Click Me Once!</button>
<button ondblclick="alert('Button Double Clicked')">Click Me Twice!</button>
```

## Object properties
In the DOM each element has different properties that can be used to pass a funciton to in order to run when a certain event occurs on an element.

```
const btn = document.querySelector("#v2")

btn.onclick = () => {
    console.log("You Clicked Me")
    console.log("It Worked")
}

function scream (){
    console.log("Get out of Me!")
    console.log("Do Not Touch Me!")
}

btn.onmouseenter = scream
```
## addEventListener
the BEST way of handling events is by using the .addEventListener() method on a DOM Object.

This method allows to specify the event type and a callback to run when the specified event is provoked.

by using addEventListener we can add multiple callback functions to a single element under the same type of event.
```
const shout = () => {
    console.log("Shout")
}
const twist = () => {
    console.log("Twist")
}

btn.addEventListener('click', twist)
btn.addEventListener('click', shout)
```
The order of these funcitons matter as they will be called upon in the order that they were created using the .addEventListener() method.

## The Event Object
the Event object is an object that is availabe to every event listener and is passed in to the callback function every time and can be handled with a parameter.

The Event Object comes in handy when working with keybpard events to determine exactly what key was pressed.

## Keyboard Events
There are two methods for determining keypresses and they are keyup and keydown. They only determine when a key was pressed or released respectively.

In order to determine what key was pressed we can use the Event Object.

The two properties of the event object for a keyboardEvent is the "code" and the "key"

The key represents the letter or value the key represents regardless of language settings, whereas the code represents the physical key that would have been pressed on a keyboard.

## Event Bubbling
Event Bubbling occurs when an element's event is hit and if any of the parents up the tree of DOM objects also have the same event listener type.

We can stop the upwards bubbling by using the .stopPropagation() method on the event object. This stops any upward bubbling to occur for an event bubbling up its parents.