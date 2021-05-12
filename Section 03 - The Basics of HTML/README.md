# Web Developer Bootcamp Udemy Course

## Section 03 - HTML: The Essentials

### Topics Covered in this section

#### Crucial:
- Paragraph Elements
- Headings
- Lists
- Anchor Tags
- Images
- Boilerplate

#### Important:
- Mozilla Developer Network Documentation
- Inspect Tool

#### Nice To Have:

## Notes:
- - -
### Intro to HTML
HTML stands for Hypertext Markup Language and is not a programming language to implement logic but rather language to generate a *document*.
HTML is the structure of a webpage that describes what information should be rendered on the screen and what aspects that information should have i.e. in a list, or bolded, or italicized.

To write HTML we use HTML Elements.   
Some of the main elements are:
```
<p> - represent a paragraph of text
<h1> - represent a main header of a page
<img> - embed an image
<form> - represent a form
```
Most elements are defined using opening and closing tags
```
<p> Brent Littlefield </p>
^^ Opening Tag        ^^ Closing Tag
```

### HTML Elements
#### **\<p>\</p> - Paragraph Element**  
Generates a line break and separation of text into definitive paragraphs.  
Paragraph elements are a block level element.

#### **\<h1>\<h2>\<h3>\<h4>\<h5>\<h6> - Heading Elements**  
Provide Headings to a webpage to outline what content is in a particular section of the page. Good to think of it as H2s being a subheading of H1s.  
There should only be one H1 on a page as the main heading will be the main subject of the page.  
Headings should work as a tree, getting more refined as subtopics are introduced of a larger topic.

#### **\<ol>\</ol> \<ul>\</ul> - List Elements**   
***ul*** is an unordered list, also known as a bulleted list.  
***ol*** is a ordered list, also known as a numbered list.  

Both the *ol* and *ul* elements have an \<li> element that falls within which stands for a list item.

You can also create nested lists by having an *li* element contain an *ol* or *ul* or even both if you wish.

#### **\<a>\</a> - Anchor Tags**  
Used to create a hyperlink using the href attribute.
```
<!-- Can link to External Sites -->
<a href="www.brentlittlefield.ca"> Click to visit my Portfolio! </a>

<!-- Can Link to Internal Sites -->
<a href="AboutMe.html"> Click to get to know me! </a>
```
Using the anchor tag you can link to external webpages using HTTP requests and a URL or you can link to other local files you may have that are a different webpage but apart of the whole overlying website you have created.  
The anchor tag is an inline element

#### **\<img> - Image Element** 
Only element that has no closing tag.
```
<!-- Link to an external image online -->
<img src="https://1000logos.net/wp-content/uploads/2020/02/F1-Logo-history.jpg">

<!-- Link to a local image -->
<img src="Littlefield.jpg">
```

### HTML Boilerplate
There is essential structure that needs to be in ***EVERY*** HTML Document.
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Brent Littlefield <title>
    </head>
    <body>
    </body>
</html>
```

The ***!DOCTYPE html*** tells the browser it is HTML5.    
The ***html*** element (root element) represents the top level of the page and all other elements must be a descendent of this element.    
The ***head*** element contains all of the metadata. i.e. all of the information that does not appear on the page to the end user.  
The ***title*** element is what is displayed in the tab of the webpage.  
The ***body*** element is all of the content that is displayed on the webpage.

There can only be ***ONE*** of each of the Head and Body tags in an HTML document.