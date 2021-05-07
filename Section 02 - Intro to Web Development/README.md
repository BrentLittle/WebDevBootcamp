# Web Developer Bootcamp Udemy Course

## Section 02 - Intro to Web Development

### Topics Covered in this section

#### Crucial:
- Understanding of the Roles of HTML, CSS, and JS
#### Important:
- How the Internet Works
- HTTP Request/Response Cycle 
- Intro to the Web
#### Nice To Have:
- VSCode install and setup

## Notes:
### The Internet from a High Level
The Internet is a bunch of conected devices. More or less a global network of networks.  

A simplistic model is to affix a physical cable between two computers but this model becomes unrealistic when more devices are in the network. This problem can be fixed with routing where all devices in a network can trnasfer data between devices through IP addressing.  

Multiple larger networks can be routed together to make an even larger network.  

Data on the internet can be sent in many different ways: Most common being over Cable (Fiber or Copper) or over radio (Satellite).

***In Summary, the Internet is the overlying infrastructure that provides the abilites for data to transfer between devices across the globe.***

### The Web
As the Internet is the global network the Web is an information system. This information system allows documents and other resources to be available over the Internet. 

Documents are identified using URL (*Uniform Resource Locator*)

Data on the Web is transported using HTTP (*Hypertext Transfer Protocol*)  

HTTP is how we request and share infromation. A set of rules to be followed to share information across the web.  
When visiting a URL we make an HTTP request asking for that particular resource.  
We get a response back from a Web Server and it is then the browser's job to display the reply we got back.

A Web Server is a computer that satisfies reqests on the Web. The web server responds with the correct information given the content of the request.

A Client is a device that is requesting information from a Web Server.


### HTTP Response / Request Cycle
Web Servers respond with the instructions to generate and display the webpage to the user of the client device. These *"instructions"* can be seen as the page source code on the browser.

The Page source code all consists of HTML, CSS and JavaScript.

Outline of the Process:  
1. Search on Google 
2. HTTP Request Sent from browser 
3. Google Web Server receives Request from client
4. Google Web Server then processes the request and figures out exactly what it must return as a response given the request.
5. Google builds a Web Page to return.
6. Then Resounds back with HTML, CSS and JavaScript as *instructions* for our broswer
7. Broswer takes these HTML, CSS and JS instructions and builds the webpage to display to the user.

### Front-End and Back-End
Front-End is the front of house and what really interacts with the end user.  
Back-End is the logic behind the scenes on Web Servers that determines what needs to be sent back as a response

Font-End overall generates HTTP requests and takes responses and builds the webpage required to be illustrated. Back-End on the other hand listens for HTTP requests and then generates responses with the correct *instructions* for the browser to generate a webpage.

### What is HTML, CSS, and JS? and What Do They Do?
**HTML** is equivalent to the nouns of a sentence. HTML describes the ***things*** on a webpage.  

**CSS** is equivalent to the the adjectives of a sentence. CSS helps describe the look of HTML elements on a webpage.  

**JavaScript** is equivalent to the the verbs of a sentence. JS helps determine the actions the web page is going to take.

**In summary, *HTML* is the structure of the webpage, *CSS* is what the page looks like, and *JavaScript* is the actions the webpage can make.**
