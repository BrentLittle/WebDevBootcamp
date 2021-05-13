# Web Developer Bootcamp Udemy Course
## Section 08 - CSS: The Box Model
### Topics Covered in this section

#### Crucial:
- Border
- Padding
- Margin
- Width & Height
- Display Property
- Units - Percentages, EMs, REMs
#### Important:
- Border Radius
#### Nice To Have:

## Notes:
- - -

<img src="https://codinglead.github.io/images/box-model.png">

The box model is just an idea to have that everything in CSS is just a box. and each box has different properties that can be changed to affect the style of that box.

## Box Model: Width and Height
Width and Height affect the internal CONTENT area of the Box Model.
```
div{
    /* Restrict the width of the content box to 200px */
    width:200px;
    /* Restrict the height of the content box to 200px */
    height: 300px;
}
```

## Box Model: Border and Border Radius
The Border has many different attributes that can be modified to customize its appearance.  
Border-Width controls the thickness of the border.  
Border-color controls the color of the border.  
Border-style controls the border line style.
```
#one{
    background-color: #e5989b;
    border-width: 5px;
    border-color: black;
    border-style: solid;
}
```

The border-width attribute adds onto the total width or height of the total "box".  
This can be changed using the box-sizing attribute and set it to border-box. This changed the width of our element to go from border to border so instead of the width of the border adding on it will rather subtract form the content section.
```
box-sizing : border-box;
```

We can use the border shorthand that reduced the number of attributes needing to be changed in order to edit.
```
#three{
    background-color: #6d6875;
    border: 3px solid darkred;
}
```

We can also edit each edge of the border independently with respect to style, color, and width.

Border-Radius can be used to change the rounding of corners of the borner on our Box model.  
We can use a percentage and this will be a percentage of the width and/or height.  
The four values for each radius are given in the order top-left, top-right, bottom-right, bottom-left.

```
border-radius: 10% 20% 50% 70%;
border-radius: 45% 20%;
```

## Box Model: Padding
Padding is the space between the content box and the border  
Padding has the regular 4 padding attributes for each edge or the padding shorthand.

```
h1{
    padding-left: 30px;
    padding-top: 100px;
}
```

Padding gets added in the order of Top, Right, Bottom, Left.

```
Apply to all four sides
padding:10px;

vertical | horizontal
padding: 5px 10px;

top | horizontal | bottom
padding: 1px 2px 2px;

top | right | bottom | left 
padding: 5px 1px 0 2px;
```

# Box Model: Margin
The space outside of an element's border and defines the space between it and another element.

Margin has the regular 4 margin attributes for each edge or the margin shorthand.

```
Apply to all four sides
margin:10px;

vertical | horizontal
margin: 5px 10px;

top | horizontal | bottom
margin: 1px 2px 2px;

top | right | bottom | left 
margin: 5px 1px 0 2px;
```