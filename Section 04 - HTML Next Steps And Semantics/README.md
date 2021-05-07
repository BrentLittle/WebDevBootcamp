# Web Developer Bootcamp Udemy Course

## Section 04 - HTML: Next Steps & Semantics

### Topics Covered in this section

#### Crucial:
- What *REALLY* is HTML5?
- Block vs Inline Elements
- Span and Div Elements
- Semantic Elements
#### Important:

#### Nice To Have:
- \<Sub> Element
- \<Sup> Element
- \<Hr> Element
- \<Br> Element

## Notes:

### What is HTML5?
HTML is a Standard and HTML 5 is just the newest update to this standard.  
HTML 5 is specific is a new update to the language ***AND*** an update to a broader set of technologies to build web sites and apps.  
Browsers implement a way to interpret this specification to display to the user.  


### Block vs Inline Elements
**Inline level Elements** fit in along side other elements.  
An inline element does not start on a new line.  
An inline element only takes up as much width as necessary.
```
<!-- Inline Level Elements are -->

<a> <abbr> <acronym> <b> <bdo> <big> <br> 
<button> <cite> <code> <dfn> <em> <i> <img> 
<input> <kbd> <label> <map> <object> <output> 
<q> <samp> <script> <select> <small> <span> 
<strong> <sub> <sup> <textarea> <time ><tt> <var>
```

**Block level Elements** take up a whole "block" of space.   
A block-level element always starts on a new line.  
A block-level element always takes up the full width available.  
A block level element has a top and a bottom margin, whereas an inline element does not.
```
<!-- Block Level Elements are -->

<address> <article> <aside> <blockquote> 
<canvas> <dd> <div> <dl> <dt> <fieldset> 
<figcaption> <figure> <footer> <form> 
<h1>-<h6> <header> <hr><li> <main> <nav> 
<noscript> <ol> <p> <pre> <section> <table> 
<tfoot> <ul> <video>
```


### \<div> and \<span> Elements
A \<div> is a "generic" block level container normally used to group similar content together.  
Can enable us to style topical content all together at once.

A \<span> is another "generic" container but is rather an inline element. Normally used to single out some content to be individually styled later.


### Entity Codes
Special Codes to use in HTML that will result in special characters  

- Used to represent reserved characters that normally would be invalid
- Also used in place of difficult to type characters 

They are constructed using an Ampersand and end with a semicolon and in between goes a string of text.

& SomeText ;

```
1 < 6 would be represented using entity codes as  1 &lt; 6
```
Each of the Entity codes could possibly have an Entity Name as well.


### Semantic Markup
"What purpose does this HTML element have?"  
Semantic markup is meaningful markup or markup that relation to the meaning of the content.

Instead of using Div after Div after Div we can use more descriptive elements to better explain the content that the "container" is used to represent. These semantic elements work identical to a div. 

Semantic Elements also help a crawler identify particular content in a specific webpage. They also are effective for accessibility for screenreaders to be able to know where the content lies on the page.

```
<!-- Semantic Elements are -->

<article> <aside> <details> <figcaption>
<figure> <footer> <header> <main> <mark>
<nav> <section> <summary> <time>
```