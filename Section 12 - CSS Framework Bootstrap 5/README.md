# Web Developer Bootcamp Udemy Course
## Section 11 - Bootstrap: A CSS Framework
### Topics Covered in this section

#### Crucial:
- What is Bootstrap
- Working with CSS Frameworks
- Including 3rd party CSS and CDNS
#### Important:
- Bootstrap Grid
- Responsive Bootstrap Grid
- Bootstrap Navbars

#### Nice To Have:
- Bootstrap Icons
- Typography and Utilities
- Bootstrap Forms
- Bootstrap Buttons
## Notes:
- - -

## What is Bootstrap??
Bootstrap is the worlds most popular CSS Framework  
A framework is able to help us quickly creat nice looking and responsive modern websites. It provides a solid starting point to build off of.

Bootstrap has 2 main concepts: Components and a grid system.  
The Components give access to a bunch of pre-built aspects that we can incorporate into our own website.  
The Grid System allows us to construct our own responsive layouts.


## Including Bootstrap Into a Website

We can download everything locally and link the Bootstrap css as we normally would by using a file path. Or we can use a CDN (Content Delivery Network) and link the bootstrap as a file online and not a local file.

Bootstrap must have its CSS linked as well as JavaScript brought in as well by using a \<script> tag
```
<!-- CSS link -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

<!-- JS link -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
```

The advantage of running bootstrap locally from its downloaded files is that the link to bootstrap could go down but having the downloaded files wont break anything as they are always there to use.


## BS Containers
Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Containers are used to contain, pad, and (sometimes) center the content within them.

The .container class is a responsive, fixed-width container, meaning its max-width changes at each breakpoint.
```
<div class="container">
  <!-- Content here -->
</div>
```

.container-fluid is used for a full width container, spanning the entire width of the viewport.
```
<div class="container-fluid">
  ...
</div>
```

Finally, Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached.
```
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

## BS Buttons
All Bootstrap buttons contain the class "btn".

There are several types of buttons ranging from Primary to Secondary or even Light and Dark. These sub classes of buttons are used for semantics.
```
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
```

The btn class can be used on anchor tags or buttons with type submit or input with types button submit or reset
```
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
```

We can also change the size of the buttons using the btn-lg or btn-sm class.
```
<button type="button" class="btn btn-primary btn-lg">Large button</button>

<button type="button" class="btn btn-primary btn-sm">Small button</button>
```

## BS Typography
Display Headings can be used When you need a heading to stand out. These 6 display classes are used to create large headers.
```
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
```

Blockquotes can be used for quoting blocks of content from another source within your document. 
```
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

## BS Utilities
There are lots of classes that allow us to change the color of text on the webpage. These classes start with "text-" and then have a value after such as primary or success or warning, etc...
```
<p class="text-primary">.text-primary</p>
<p class="text-secondary">.text-secondary</p>
<p class="text-success">.text-success</p>
```

## BS Badges
Badges in Bootstrap are a small count and labeling component.

we can use the class "badge", typically on a span, to declare the styling required. Badges will scale accordingly to its immediate parent.
```
<button type="button" class="btn btn-primary">
  Profile <span class="badge bg-secondary">9</span>
  <span class="visually-hidden">unread messages</span>
</button>
```

## BS Button Group Component
Group a series of buttons together on a single line or stack them in a vertical column.
Can be used in place of radio buttons or a group of radio buttons or even checkboxes. This component allows us to simply and easily group buttons together 

Wrap a series of buttons with .btn in .btn-group. Also having the role of group allows screenreaders know that this is a group of buttons.
```
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
```

## BS Alert Component
Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
```
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
```

Links in alerts can be set to have a particular colour
```
<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
```

Alerts can also have any content within them such as a header
```
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities.</p>
</div>
```

In order to dismiss alerts we must use the alert JavaScript plugin. When an alert is dismissed, the element is completely removed from the page structure
```
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```


## Bootstrap Grid Intro
The BS grid allows us to construct out own custom, responsive layouts.

The grid system ONLY works inside of a container. This container can be fluid or not. 

Our grid is generated using rows. wich are a div with the class of row.
```
<div class="row">
    ...
</div>
```

Each row has exactly 12 units of space to allot accross the content within the row.  
Within each row we have columns to take up this available space.
```
<div class="col">
    ...
</div>
```

We are also able to nest containers inside of other containers. This allows for the ability to generate nested grid systems

## Responsive BS Grid 
This respnsive grid system work around the built in breakpoints in bootstrap.  
These built in break points are as follows

| xs | s | md | lg | xl | xxl |
| :--: | :--: | :--: | :--: | :--: | :--: |
| <576px | ≥576px | ≥768px | ≥992px	| ≥1200px	 | ≥1400px|


We can use these defined sizes in order to change how our grid system works based on the size of the viewport.

For example if we had col-md-6, this means that up to the medium sized break point the column will take up the full width (12 Units) but at medium and above will then switch to only taking half the width (6 Units).

## Grid Utilities
As the bootstrap grid is built off of flex box we can use flex utilties to change how the grid system works and customize it to how we want to make it act.

BS has some built in flex utilities for us to easily adapt the grid system.



## BS Forms
For BS forms we need to use the form-control class on each of the inputs. This gives us a nicer looking form input.

Form-control can go on any input type to style it appropriately.
```
<label for="email">Email</label>
<input type="email" class="form-control" id="email" placeholder="Email">

<label for="Password">Password</label>
<input type="Password" class="form-control" id="Password" placeholder="Password">
```

For checkboxes and radio buttons we need a class of form-check surrounding them. We also must include a form-check-label class on the label element and a form-check-input on the input element.
```
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>


<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
```

## BS Navbars
Navbars are a signature component of bootstrap. Navbars are found on mainly every website nowadays and bootstrap allows us to create these quick and easily while still looking great.

Navbars require a wrapping .navbar with .navbar-expand{-sm|-md|-lg|-xl|-xxl} for responsive collapsing and color scheme classes.
```
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
  </div>
</nav>
```

The navbar-nav class allows us to add in styled anchor tags to our navbar.
These anchor tags can be held in an unordered list with list elements inside or can just be inside a div with a class or navbar-nav.

With navbars we can place containers within them to organize our content.

We can also make sure our nav bar is always at the top using the ***.fixed-top*** class or when the nav bar hits the top of the screeen we can make sure it stays there and does not scroll away using the ***.sticky-top*** class