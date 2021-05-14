# Web Developer Bootcamp Udemy Course
## Section 10 - Responsive CSS and Flexbox
### Topics Covered in this section

#### Crucial:
- Media Queries
- flex shorthand
- Flex-basis, grow and shrink
- Align-Items
- Flex-wrap
- Align-content and align-self
- Justify-Content
- Flex-Direction
#### Important:

#### Nice To Have:

## Notes:
- - -

The goal is to focus on the concepts and not memorizing the properties

## What is Flexbox??
it is a one-dimenional layout method for laying out items in rows or columns.  
Flexbox allows us to distribute space dynamically across elements of an unknown size, hence the term "flex".


## Flex-Direction
To enable flexbox we have to set the container of the elements we want to be apart of flex box to have display flex.
```
display: flex;
```

We have two main Axes, Main Axis and cross axis. they are perpendicular to one another.

Flex-direction property allows us to change the orientation of the flexbox. The default is row but can change to column, row-reverse, and column-reverse.

<img src="https://samanthaming.gumlet.io/flexbox30/4-flexbox-axes.jpg.gz">

## Justify-Content
Distributes space along the main axis. 
These attributes are based off the flex-direction of the content and where the main axis begins.

<img src="https://www.w3.org/TR/css3-flexbox/images/flex-pack.svg">

## Flex-Wrap
This property allows us to determine if our elements will wrap along the main axis onto another line if horizontal or column if vertical.

<img src="https://samanthaming.gumlet.io/flexbox30/10-flex-wrap.jpg.gz">

## Align-Items
Distributes space along the cross axis.

<img src="https://samanthaming.gumlet.io/flexbox30/17-align-items-column.jpg.gz">


## Align-Content & Align-Self
### Align-Content
Align-content is used to control space along the cross axis only when there are multiple rows or column depending on if we are using a row or column based layout.  
Works similar to justify-content but rather than the main axis is spreads space along the cross axis.
### Align-self
Very similar to align items but we add to individual items in the flex container



## Flex-Basis, Grow and Shrink
### Flex-Basis
This defines the initial size of an element before additional space is distributed.  
This dimention is based on the main axis direction.
### Flex-grow
Controls the amount of available space an element should take up.
### Flex-shrink
If items are larger than the container, they shrink according to flex-shrink.


## flex Shorthand
The shorthand allows us to set Basis, Grow and Shrink all in one line.


## Responsive Design & MediaQueries Intro
Responsive designs create ONE website that is able to respond to different device sizes and features.

Media Queries allow us to modify our styles depending on particular parameters like screen width or device type.

All Media Queries have an @media() and in the parameters we can check some of the media features.

We are able to combine media queries using the keyword and.
