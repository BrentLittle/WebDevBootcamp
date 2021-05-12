# Web Developer Bootcamp Udemy Course
## Section 06 - CSS: The Very Basics
### Topics Covered in this section

#### Crucial:
- Conceptual Overview of CSS
- Basic CSS Syntax
- Including CSS Styles Correctly
- Colour Systems
- font-Family Property
#### Important:
- Common Text Properties
#### Nice To Have:

## Notes:
- - -
## What is CSS?
CSS is equivalent to the adjectives of a sentence.  

CSS allows us to describes the HTML in a way to style and manipulate the mainly visual representation of HTML content of a website.

CSS is a language to describe how documents are presented visually, how they are aranged and styled.

The basic structure of a CSS rule is:
```
selector{
    property : value;
}
```

We can use rules to style HTML elements of a website.  
For Example, the CSS rule below changes the color of ***ALL*** h1 headers on a page to be purple
```
h1{
    color : purple;
}
```

CSS Rules have unlimited number or properties that can be within
```
img{
    width:100px;
    height:200px;
    .
    .
    .
}
```

## CSS is **HUGE**
There is so much to know in terms of CSS properties.
There will be a subset of properties that will end up being engrained in your mind but most of them will need refresher from time to time.

## Including Styles Correctly
3 ways of including styles

1. Written directly inline (***NOT A GOOD IDEA***)
2. Written inside of a \<styles> element (Not recommended either)
3. Written in a .css File (*Recommended!*)

In an HTML file we use a \<link> element to link style sheets to out HTML documents
```
<link rel="stylesheet" href="includingStyles.css">
```
These \<link> elements go in the head of our HTML document.

## Color & Background-Color Properties
The Color property will change the Color of the text of what has been selected by the CSS rule it is contained within.

The background-color property will change the background-color of the text of what has been selected by the CSS rule it is contained within.

## CSS Color Systems
There are three color systems used in CSS

1. Named Colors
2. RGB Colors
3. Hexadecimal Colors

There are ~140 named colours ranging from very basic names to very obscure colours. These are colours that every browser recognizes.

RGB Colours are created by using different proportions of Red Green and Blue channels. Each channel ranging from 0 to 255. 0 being no color and 255 being all the color.
```
rgb(255,0,0)
rgb(0,0,255)
rgb(175,20,219)
rgb(0,0,0)
```

Hexadecimal colors exactly as RBG with having 3 channels but rather than 3 numbers between 0 and 255 they are created by using either a 3 or 6 character hexadecimal strings. The most common will be 6 characters but can be reduced to 3 in specific situations. The hexidecimal string can be reduced to a triplet if each of the 3 channels have the same hex value.

```
#FF5733
#FFFFFF or #FFF
#000000 or #000
#F7EC00
```

## Common Text Properties
### text-align  
Used to set the horizontal alignment of an element.  
```
h1{
    text-align: center;
}

p{
    text-align: left;
}
```

### font-weight
Font weight allows us to control the boldness of text. We cna use keywords such as bold or lighter or we can use a number such as 100 or 200. 400 equates to normal and 700 equates to bold.
```
h1{
    font-weight: normal;
    font-weight: 700;
}
```

### text-decoration 
Controls the appearance of decorative lines that appear on text.  
This is also helpful in removing underlines caused by anchor tags
```
h1{
    text-decoration: underline red dashed 4px;
}

a{
    text-decoration: none;    
}
```

### line-height
Allows us to edit the height of a line of text.
```
p{
    /* Double Spaced */
    line-height: 2; 
}
```
### letter-spacing
control spacing between letters in our text.
```
h1{
    letter-spacing: 13px;
}
```

## Font Size Basics
we can use the font-size property but the values that can be held by this property can range quite a bit.

Named Values, pixels, ems, percentages

Two Types of Values
1. Relative  
    - em
    - rem
    - vh
    - vw
    - %
    - MORE!
2. Absolute (most are not used frequently)
    - px
    - pt
    - cm
    - in
    - mm

PX are by far the most commonly used absolute unit. It is NOT equivalent to 1 px as it varies on many factors.

## Font Family Property
What we use to change the font of an element.  
Heavily dependent on the fonts that are built into browsers.

What is normally used is a Font Stack. These are fonts that are to be used in order. It will attempt to use the fonts in order and if not available will move onto the next one in line. This is a priority based stack with the fonts you idealy want displayed towards the start of the stack.
```
font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
```