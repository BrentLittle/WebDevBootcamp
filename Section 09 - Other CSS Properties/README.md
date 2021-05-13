# Web Developer Bootcamp Udemy Course
## Section 09 - CSS: Other Useful CSS Properties
### Topics Covered in this section

#### Crucial:
- Transitions
- Position Property
#### Important:
- Opacity & Alpha Channel
- Google Fonts
- Background Property
#### Nice To Have:
- Transforms
## Notes:
- - -

## Opacity and Alpha Channel
Alpha channel is a level of transparency of a colour.   
rgba(0,209,234,128) where 128 is the alpha value ranging between 0 and 255.   
We can also use the hex values by appending 2 more hex digits on the end to represent the level between 0 and 255.
```
background-color: rgba(255,255,255,.75); 

background-color: #00cca09F;
```

Opacity on the other hand is a value we set that governs the entire element itself inlcuding its contents and any descendents.
```
opacity: 0.3;
```


## Position Property
The position propery sets how an element is positioned in a document.  
This determines the final location of elements based off the top, right, bottom and left properties.

The position Static is Default. Any change in position when it is static has no effect
```
position:static;
```

The Position Relative allows us to keep the element in the normal flow of the HTML document but allows us the ability to offset it relative to itself given the top, right, bottom, and left properties.
```
#relative #middle{
    position:relative;
    top: 50px;
    left: 50px;
}
```

The Positon Absolute removes the element from the normal document flow and no space is created for the element in the page layout. If specified otherwise with top, right, bottom or left it is positioned relative to the initial containing block (i.e. \<body>) if not nested inside of a positioned element.
```
#absolute #middle{
    position:absolute;
    top: 50px;
    left: 50px;
}
```

The Positon Fixed property is similar to absolute but does not take any effect from its parent and if it is positioned or not but rather if one of its ancestors has a transform, perspective or filer property set.
```
#fixed #middle{
    position:fixed;
    top: 50px;
    left: 50px;
}
```

## Transitions
Transitions allow us to change properties of elements over a duration of time.  
We can explicity select different properties to change, a duration of time, a timing function and/or a delay.
```
transition: border-radius 250ms, background-color 1s;
transition: margin-left 3s;
transition-timing-function: ease-in;
transition-timing-function: ease-in-out;
transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```


## Transformations
Transform allows us to do alot to elements on a web page.

### rotate()  
allows us to take an angle and rotate the element by that amount. It can be in degrees, radians, gradians, or turns.
```
transform:rotate(45deg)
```
We can also change the origon to where the rotation is occuring. By default it is the center of the element.
```
transform-origin: center;
transform-origin: top left;
```
Rotations can also occur on each of the Axis that being the X Y or Z axis

### scale()
sale allows us to change the size of an element.
we can scale width and height independently or both the same amount.
```
transform: scale(0.75);
transform: scale(0.75,2);
```

### Translate()
Allows us to move elements around.  
translateX() allows us to translate horizontally.
translateY() allows us to translate vertically.  

Values passed to this funciton cna be a length (em, rem, px, etc...) or a percentage.  

```
transform: translateY(50px);
transform: translateX(200px);
transform: translate(200px,20px);
```

### Skew()
skew allows us to do as it says, to skew some element. It accepts just like rotation some value being an angle in degrees, radians, or gradians. 

