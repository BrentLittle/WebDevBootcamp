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

## The Class Selector
A class is a similar concept to and ID but a class can be applied to multiple Elements as they are not unique to a html document.  
```
.tag{
    background-color: #e63946;
    color:#f1faee;
    font-size: 16px;
}
```


## Descendent Selector
Depicted using a space between element types. This selects any element B that is a descendent of element A

```
A B{
    Styles Here
}
```
```
This Example selects all achor tags that lie within an li.
li a{
    color: red;
}

This CSS rule will only style anchor tags that lie within a span.
.post a{
    color: #457b9d;
    text-decoration:none;
}

```

## Adjacent and Direct-Descendent Selector
The Adjacent Selector selects only the Elements of type B that are immediately preceeded by an element of type A  
```
A + B{
    Styles Element B that comes immediately after Element A
}

input + button{
    background-color: hotpink;
}
```
The Direct Child selector selects only the elements of type B that are a direct child of an element of type A
```
A > B{
    Applies styles to element of Type B
}

footer > a{
    color:#1d3557;
}
```

## Attribute Selector
Allows us to select an element based on some attribute it may have.
```
input[type="password"]{
    color:olive;
}

a[href*="google"]{
    color:blue;
}
```


## Pseudo Classes
Keywords added onto the end of a selector that specifies a special state of the selected elements.  
- :active
- :checked
- :first
- :first-child
- :hover
- :not()
- :nth-child()
- :noth-of-type()

all Pseudo classes start with a colon (:)


## Pseudo Elements
Keyword added to a selector that lets you style a particular part of selected elements
- ::after
- ::before
- ::first-letter
- ::first-line
- ::selection

all Pseudo elements should start with a double colon (::)

## CSS Cascade

The order of your styles are declared in matters.
The styles that are declared last that may conflict, are set to whatever was declared last.

In this example the H2s will actually be set to yellow.
```
h1,h2{
    color: #1d3557;
}
h1,h2{
    color: #FFFF00;
}
```

This cascade also relates to not only within style sheets but between style sheets. if there are conflicting styles between sheets, the sheet that was linked last in the HTML document will ultimately win and be applied to the element.


## Specificity
Specificity plays a role when we have multiple CSS rules conflicting to style a single element. Specificity allows us to determine what style will get applied to the element.  

It is the measure of how specific a selector is. the more specific the better.

ID > Class > Element

Id Selectors are the most specific and out weigh anything else


<img src="https://i2.wp.com/css-tricks.com/wp-content/uploads/2021/01/specificity-calculationbase_rhrovi.png?resize=570%2C346&ssl=1" alt="Specificity Breakdown">


this has a specificity score of 002 as there are 2 element selectors
```
section p{
    color:teal;
}
```

This has a specificity of 100 as there is one ID selector
```
#submit{
    color:olive;
}
```
This has a specificity of 012 as there is one ID selector
```
nav a.active{
    color:orange;
}
```

## Inline Styles
These are more specific than IDs. These styles are more of less Baked into the HTML document.



## !important
!important is the top level of specificity and outweighs anything and will ALWAYS be applied to the element no matter what situation. This really just ignores specificity and automatically gets applied.
```
button{
    background-color: magenta !mportant;
}
```


## CSS inheritance
Some CSS properties can be inherited from their parent if not set on that element specifically.  
Some elements do not inherit from their parent element by default.  
There is a work around. We can use the keyword inherit.
```
button,input{
    color:inherit;
}
```
This will allow for elements that would normally not inherit color from their parent element to be forced to do so.