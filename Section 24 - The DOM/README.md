# Web Developer Bootcamp Udemy Course

## Section 24- JavaScript: THE DOM

### Topics Covered in this section

### Crucial:
- Intro to the DOM
- getElementByID
- querySelector
- innerHTML and Text
- Changing Styles
- Creating/Removing Elements
### Important: 
- Manipulating Attributes
- Traversing the DOM

### Nice To Have:

## Notes:
- - -

## The DOM
DOM = Document Object Model.

It is a representation of a webpage and is a "window" into the contents of a webpage

The DOM is just a bunch of objects that you can interact with via JS.

## The Document
HTML and CSS create a tree structure of JS objects that are descendents of the document.

The document object is the head of the Tree structure

The Document object is the entry point to the DOM. It contains representations of all the conetent on a page as well as other methods and properties.

## Selecting DOM Objects

In order to work with an element we must first select the particular element we want to manipulate. We can do this in multiple ways either by getElemebtById, getElementsByTagName, or getElementsByClassName

## getElementById
This returns a DOM object that JavaScript created.

If no element can be found with the specified ID then we are returned null by the function.
```
const bannerElement = document.getElemebtById('banner'). 
```

## getElementsByTagName
This returns an HTML Collection which are like an array but do NOT have access to some of the array methods such as map. The HTML Collection that is returned contains ALL DOM objects that have a specified TagName on a wedpage. It is an iterable collection that can be used in a for..Of Loop.

If there are no elements with that TagName an Empty HTML Collection is returned.
```
const allParagraphs = document.getElementsByTagName("p")
const allDiv = document.getElementsByTagName("div")
const allAnchorTags = document.getElementsByTagName("a")
```

## getElementsByClassName
This returns an HTML Collection just as like in getElementsByTagName. he HTML Collection that is returned contains ALL DOM objects that have a specified ClassName on a wedpage.It is an iterable collection that can be used in a for..Of Loop.

If there are no elements with that ClassName an Empty HTML Collection is returned.

```
const allSquareImages = document.getElementsByClassName("square")
```

## querySelector
querySelector is an all-in-one method to select a single element.

querySelector returns ONLY the first occurance of any matching result.

querySelector uses CSS selectors in the exact same logic to select DOM objects, but will only select the first object

```
// Finds first h1 element
document.querySelector("h1")

// Finds first element with the ID "red"
document.querySelector("#red")

// Finds first element with class of "big"
document.querySelector(".big") 
```

## querySelectorAll
The same idea as querySelector but returns a collection of matching elements rather than just the first matching element.

querySelectorAll uses CSS selectors in the exact same logic to select DOM objects

```
const allATagsinPTags = document.querySelectorAll("p a")
const allLinks = document.querySelectorAll("a")
const allImgs = document.querySelectorAll("img")
```

## How to Manipulate Objects

when we select some objects we are then able to manipulate these objects by changing different HTML elements for each object such as innerText, innerHTML, and textContent

innerText allows us to access the text that is displayed to the user of any given element. 

textContent is similar to innerText but does not care about display properties. 

The difference between innerText and textContent is that innerText is sensitive to what is visible to the user where as textContent returns everything no matter how the display property is set.

innerHTML on the other hand returns everything inside of an HTML element including the tags.

## Manipulating HTML Attributes
We are also able to modify attributes of HTML elements using two different ways. we can use the "." property or the getAttribute() syntax
```
const firstLink = document.querySelector("a")

firstLink.href // "file:///wiki/List_of_chicken_breeds"

firstLink.getAttribute("href") // "/wiki/List_of_chicken_breeds"
```

the difference between the property syntax and the method syntax is that the getAttribute() method grabs the content straight from the HTML element and what ever is directly contained int eh href attribute but the property syntax grabs the href from the JavaScript Object.

After we have got an Attribute we can simply set the property to a new edited value or we can use the setAttribute() method.
```
const firstLink = document.querySelector("a")

firstLink.href = "https://www.google.com"

firstLink.setAttribute("href", "https://www.google.com")
```

## Manipulating Syles
in JavaScript the style object contains the same CSS attributes but there are no "-" like in CSS so all the attributes are now camelCase.

The JS "style" only contains information of inline styles, so any styles applied by an external style sheet will not appear in the "style" object. This method applies style inline and is ver specific in terms of specificity whihc may result in issues.

```
const h1 = document.querySelector("h1")

h1.style.fontSize = "3em"
h1.style.color = "green"
h1.style.border = "2px solid pink"
```
 
A better way to manipulate styles is to write a class in the CSS style sheet and then apply or take away that class from an element if need be.

There is a way to get the computed styles of elements and that is with the following:
```
const h1 = document.querySelector("h1")

window.getComputedStyle(h1).color
window.getComputedStyle(h1).fontSize
window.getComputedStyle(h1).fontFamily
window.getComputedStyle(h1).margin
```

## classList

In order to add classes to an HTML element we can use the setAttribute() Method or append to the classList.

```
const h2 = document.querySelector("h2")

h2.classList.add("purple")
h2.classList.add("border")

h2.classList.remove("border")

h2.classList.contains("purple")

h2.classList.toggle("purple)
```

## Traversing Parent/Child/Sibling

These properties allow us to traverse from one element to another relative to itself.
Every element can only have 1 direct element but can have multiple children and also multiple siblings

.children returns an HTML Collection of the children of the object.

.nextSibling and .nextElementSibling are different in that nextSibling will returnt he next node whereas the nextElementSibling property will return the next HTML element that is a sibling of the current element.

And same logic for previousSibling and previousElementSibling

```
const firstBold = document.querySelector('b')

const firstBoldParent = firstBold.parentElement
const firstBoldChildren = firstBold.children

const firstBoldNextSibling = firstBold.nextElementSibling
const firstBoldPreviousSibling = firstBold.previousElementSibling
```

## Append & AppendChild

We can generate new elements in the DOM by using the document.createElement() method. This method generates a new Object but is not placed in the webpage just yet. That is where Append and AppendChild come in.

AppendChild appends an element to a particular DOM object. This generates a new last child of a parent element.
```
const newH2 = document.createElement('h2')
newH2.innerText = "I am H3"
document.body.appendChild(newH3)
```

the Append method is more flexible in the sense that we can append multiple elements at one time, or just append on some text as a string to an element.

The Prepend method allows us to append an element to the start or just append on some text as a string to an element.

.insertAdjacentElement is a method that allows us to append elements to the webpage in a particular location relative to a supplied element.
```
const h2 = document.createElement("h2")
h2.append("The Glorious Sons")

const header = document.querySelector("h1")
header.insertAdjacentElement("afterend", h2)
```

## Remove and RemoveChild
removeChild() needs a parent element as well as the specific element you want to remove.

```
const firstLi = document.querySelector("li")
const liParent = firstLi.parentElement

liParent.removeChild(firstLi)
// OR
firstLi.parentElement.removeChild(firstLi)
```

Remove() on the other hand does not require a parent element to remove the element

```
const img = document.querySelectorAll("img")
img[3].remove()
```