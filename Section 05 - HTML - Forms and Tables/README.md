# Web Developer Bootcamp Udemy Course

## Section 05 - HTML: Forms & Tables

### Topics Covered in this section

#### Crucial:
- Table Basics - \<table> \<tr> \<td> \<th> 
- Form Element Basics
- Button Elements
- Labels
- Common Input Types

#### Important:
- Table Sections - \<thead> \<tfoot> \<tbody>
- Range and Text Areas
- Form Validations 


#### Nice To Have:
- Table Colspan and Rowspan

## Notes:

## Introducing HTML Tables
Tables are structured sets of data made up of rows and columns.  
Can use 5-10 HTML elements to generate a table. LOTS of elements to understand and use correctly.

## TR TD and TH Elements
TR stands for Table Row which is a sinlge row in the table.  
TD stands for Table Data which is a single cell in a table that contains data.    
TH stands for Table Header which is a header name for a column in the table.    
TH and TD tage lie within a TR tag


## Thead Tbody Tfoot Elements
These elements break up our table into logical sections.  
Allows us to break it into sections that contain specific types of data whether that be headings or footers or main information.  
These Elements are used for semantic HTML. Helpful for screenreaders if there are very complex tables on your website.
```
<thead>
<tbody>
<tfoot>
```

## Colspan and Rowspan
These two attributes when applied to the td and th elements can cause that specific cell to span across multiple rows OR multiple columns
```
<tr>
    <th rowspan="2">Race #</th>
    <th rowspan="2">Location</th>
    <th rowspan="2">Date of Race</th>
    <th colspan="3">Top 3</th>
</tr>
<tr>
    <td>1st Place</td>
    <td>2nd Place</td>
    <td>3rd Place</td>
</tr>
```

## Forms
The form element itself is a shell that has no visual impact  
This form is then filled with inputs checkboxes, and buttons, etc...  
A form contains interactive controls for submitting information  
Forms have action attributes that specify where the data of the form should be sent  
The Method attribute specified what HTTP method should be used.
```
<form action="https://www.reddit.com/search">
    <label for="redditSearch">What do you want to search on Reddit?</label>
    <input type="text" name="q" id="redditSearch" placeholder="Reddit Search">            
    <button type="submit">Search reddit</button>
</form>
```

## Form Input Types
\<input> 
This element can be used to make a variety of different form controls.  
The input element has a ***type*** attribute that can be changed which alters the input's behaviour and appearance.  
The Placeholder attribute is what the input defaults to to have some pre-filled value
```
<input name="TeamName" type="text" placeholder="Username" id="TeamName"> 
<input name="driverName" id="driverName" type="password" placeholder="Password">
<input name="colour" id="colour" type="color">
<input name="number" type="number" placeholder="Number">
```


## The Label
REALLY important in terms of accessibility and ease of use in forms.  
A label allows for text to be linked together with an input. Allows for screen readers to know what text goes with an input.  
It also makes the label clickable.

To make a label into an input we use 2 attributes: id and for
the "ID" of the input must match the "for" of the label. This generates the link between the two elements.

```
<label for="TeamName">Enter Your Favourite Team's name: </label>
<input name="TeamName" type="text" placeholder="Username" id="TeamName"> 
```

## Buttons
\<button> is what you use to submit your forms unless specified not to.   
The action of this button will relate back to the "action" of the form. 

The type attribute can be used to change the action of the button. The action of a button defaults to Submit.
```
<!-- This button submits the form -->
<button>Submit Your Opinion</button>
        
<!-- This button does nothing due to type button -->
<button type="button">Submit Your Opinion (Button)</button>
        
<!-- This button can also submit the form -->
<input type="Submit" value="clickMe!">
```

## Name Attribute
A Name attached to a partucular form value that is submitted through a particular input.  
For Example: If an input in a form has the name "inputName" then when the fomr the value of that input will be assigned the name "inputName" upon action needing to be taken with the information contained within the form.

## Radio Buttons, Checkboxes and Selects
Checkboxes are an input with type checkbox.  
With Checkboxes we can decide if we want them to start off checked or not. We need to identify them with an ID

```
<!-- Label before checkbox -->
<label for="firstPlace">Do you agree to be First Place?</label>
<input type="checkbox" name="agree1" id="firstPlace">

<!-- Label after checkbox -->
<input type="checkbox" name="agree2" id="firstPlace2" checked>
<label for="firstPlace2">Do you agree to be First Place?</label>
```

Radio Buttons, in order to be grouped must all have the same name attribute value for their input.  
Each radio button that is grouped together should also have a specified value attached to them so upon submission of form they will pass along correct information.
```
<b>Who is the best Driver?</b> 
<br>
<label for="Perez">Perez</label>
<input type="radio" name="driver" id="Perez" value="perez">
<label for="Verstappen">Verstappen</label>
<input type="radio" name="driver" id="Verstappen" value="verstappen">
<label for="Ricciardo">Ricciardo</label>
<input type="radio" name="driver" id="Ricciardo" value="ricciardo">
```

Finally, the Select Attribute is a drop down menu with multiple options within
```
<select name="driverSelection" id="driverSel">
    <option value="">--Please Choose an Option--</option>
    <option value="VER">Max Verstappen</option>
    <option value="PER">Sergio Perez</option>
    <option value="HAM">Lewis Hamilton</option>
    <option value="RIC">Daniel Ricciardo</option>
    <option value="NOR">Lando Norris</option>
</select>
```

## Form Validation
Form Validation can be used to determine the requirements of inputs within a form.  

Client and Server side validations exist.

The attribute required can be added to any input to make that input mandatory to be filled out in order to submit the form.
```
<label for="firstName">Enter Driver's First Name</label>
<input type="text" name="FirstName" id="firstName" required>
```

We can also declare the min and max lengths of certain input types
```
<label for="driverUsername">Enter Driver's username</label>
<input type="text" name="drivUsrName" id="driverUsername" minlength="5" maxlength="20" required>
```

Some input types have pattern matching built in already
```
<input type="email" required>
<input type="URL" required>
```