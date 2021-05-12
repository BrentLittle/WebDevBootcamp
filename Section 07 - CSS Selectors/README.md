# Web Developer Bootcamp Udemy Course
## Section 07 - CSS: The World of Selectors
### Topics Covered in this section

#### Crucial:
- Element Selector
- Class Selector
- ID Selector
- Descendent Selector
- CSS Specificity
#### Important:
- Adjacent Selector
- Direct Descendent Selector
- Attribute Selector
- Pseudo Elements
- Pseudo Classes
#### Nice To Have:

## Notes:
- - -

## Universal and Element Selectors
Universal Selector selects EVERY HTML element in an html document. not generally a good idea as there are more efficient ways to do so.   
The universal selector even selects elements that some properties may not be present when attempting to change the value.
```
*{
    background-color: cyan;
}
```

The Element Selector selects everything of a given type.  
We can also combine multiple selectors in a list using a comma.
```
button{
    font-size: 30px;
}

h1,h2{
    color: darkslateblue;
}
```

## The ID Selector
IDs can go on any HTML element and the ID selector can specifically identify these elements to style them accordingly.   
Since IDs are unique on a page this really allows us to select one element to style differently from the others on a page.
```
#signUp{
    background-color: #1d3557;
    color:#f1faee;
}
```

