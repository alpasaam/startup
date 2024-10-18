# CS260 Notes

I learned that using git is very helpful when trying to work on different machines and working with different people. it is also amazing how fast a push and pull happens. 


shh into my website

ssh -i '.\Documents\BYU 2024-2025\BYU Fall 2024\CS260\Y1ChangT!ng.pem' ubuntu@54.156.160.185

http://54.156.160.185/


Midterm Questions
In the following code, what does the link element do?
The most common use of <link> is to include external CSS files in your HTML. This allows you to style the document with external stylesheets.
The <link> element in HTML is typically used to link external resources to the HTML document, most commonly stylesheets.
In the following code,  what does a div tag do?
The <div> tag in HTML is a block-level container used to group elements together for the purposes of applying styles (CSS), layout, or scripting (JavaScript).
In the following code, what is the difference between the #title and .grid selector?
#title targets an element with a specific ID of "title"
.grid targets one or more elements with a specific class of "grid"
In the following code, what is the difference between padding and margin?
Padding is the space inside an element, between the element's content and its border.
Margin is the space outside an element, between the element’s border and surrounding elements.
Given this HTML and this CSS how will the images be displayed using flex?
display: flex makes the .image-container a flex container, and all the <img> elements become flex items.
By default, flex items are laid out in a row (horizontally), unless you specify otherwise with flex-direction.
What does the following padding CSS do?


What does the following code using arrow syntax function declaration do?
The arrow function syntax in JavaScript provides a concise way to write functions. Arrow functions differ from traditional function expressions in syntax, behavior, and how they handle this.
What does the following code using map with an array output?
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
It does not mutate the original array.
The function you pass to map() is called once for each element in the array, and the returned value from that function is stored in the new array.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
[2, 4, 6, 8]
What does the following code output using getElementByID and addEventListener?
Purpose: The getElementById method retrieves an element from the DOM (Document Object Model) based on its ID attribute.
Usage: It returns a reference to the first element that matches the specified ID. If no element with the given ID exists, it returns null.
What does the following line of Javascript do using a # selector?
A line of JavaScript using a # selector typically indicates that it is selecting an element by its ID.
The selected element can then be manipulated, such as changing its content, styling, or adding event listeners.
Which of the following are true? (mark all that are true about the DOM)
The DOM Represents a Tree Structure:
The DOM represents the structure of a document as a tree of nodes, where each node is an object representing part of the document (elements, text, attributes, etc.).
It Allows Dynamic Changes:
You can dynamically modify the content, structure, and style of a web page using JavaScript through the DOM API. This includes adding, removing, and updating elements.
It Is Language-Independent:
The DOM is a language-agnostic interface, meaning it can be manipulated using various programming languages, though it is most commonly used with JavaScript in web browsers.
Events Can Be Handled via the DOM:
The DOM allows you to attach event listeners to elements, enabling interactivity on web pages (e.g., responding to clicks, key presses, etc.).
It Represents All Elements in the Document:
The DOM includes all elements in the HTML document, including <head>, <body>, and all nested elements within them.
It Provides an API for Interacting with HTML and XML Documents:
The DOM API provides methods and properties to access and manipulate the content and structure of HTML and XML documents.
The DOM Is Created When a Web Page Is Loaded:
When a web page is loaded in a browser, the browser creates a DOM representation of the page based on the HTML content.
By default, the HTML span element has a default CSS display property value of: 
Inline
How would you use CSS to change all the div elements to have a background color of red?
The CSS rule div { background-color: red; } effectively changes the background color of all <div> elements to red, and it can be included in either an external stylesheet or within a <style> tag in the HTML document.
How would you display an image with a hyperlink in HTML?
<a href="URL">
    <img src="image-source.jpg" alt="Description of the image">
</a>
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Content, Padding, Border, Margin
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
To set the text "trouble" to green while leaving the "double" text unaffected in the given HTML, you can use a <span> element to wrap the word "trouble" and then apply a CSS style to that span.
What will the following code output when executed using a for loop and console.log?
Console.log outputs stuff in the terminal.
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
Using document.getElementById() to select the element and modifying its style.color property is a straightforward way to change the text color in JavaScript!
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
Paragraph: <p>
Ordered List: <ol>
Unordered List: <ul>
First Level Heading: <h1>
Second Level Heading: <h2>
Third Level Heading: <h3>
How do you declare the document type to be html?
<!DOCTYPE html>
What is valid javascript syntax for if, else, for, while, switch statements?
if (x > 10) {
if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is 10 or less");
}
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
}
while (i < 5) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
    i++;
}
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Not a valid day");
}

What is the correct syntax for creating a javascript object?
const person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
Is it possible to add new properties to javascript objects?
Yes
person.isStudent = false;
If you want to include JavaScript on an HTML page, which tag do you use?
<script>
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
HTML Structure:
The word "animal" is wrapped in a <span> element with the ID animal, and "fish" is in a separate <span> with the ID fish.
JavaScript:
The line const animalElement = document.getElementById("animal"); selects the <span> element containing "animal".
The line animalElement.textContent = "crow"; changes the text inside that <span> to "crow".
Which of the following correctly describes JSON?
JSON, which stands for JavaScript Object Notation, is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. Here are some key characteristics that correctly describe JSON:
Text-Based Format:
JSON is a text format that uses human-readable text to represent structured data.
Data Representation:
JSON is primarily used to represent objects and arrays. It can represent complex data structures by nesting objects and arrays.
Language Independence:
Although JSON is derived from JavaScript, it is language-independent and can be used with many programming languages, including Python, Java, C#, and others.
Key-Value Pairs:
JSON data is organized in key-value pairs. Each key is a string (enclosed in double quotes), and the value can be a string, number, object, array, boolean, or null.
Syntax Rules:
JSON requires that:
Keys are always strings enclosed in double quotes.
Strings must also be enclosed in double quotes.
Objects are wrapped in curly braces {}.
Arrays are wrapped in square brackets [].
Commas separate key-value pairs in objects and elements in arrays.
Use in APIs:
JSON is commonly used in APIs for data exchange between a client and server because it is easy to work with in web applications.
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
1. chmod: Changes the file permissions of a file or directory.
2. pwd: Prints the current working directory (the directory you are currently in).
3. cd: Changes the current directory to another directory.
4. ls: Lists the files and directories in the current directory.
5. vim: Opens the Vim text editor to create or edit files.
6. nano: Opens the Nano text editor, which is simpler and more user-friendly than Vim.
7. mkdir: Creates a new directory.
8. mv: Moves or renames files or directories.
9. rm: Removes (deletes) files or directories.
10. man: Displays the manual page for a command, providing detailed information about its usage.
11. ssh: Establishes a secure shell (SSH) connection to a remote machine.
12. ps: Displays information about currently running processes.
13. wget: Downloads files from the web via HTTP, HTTPS, or FTP.
14. sudo: Executes a command with superuser (root) privileges.
Which of the following console command creates a remote shell session?
ssh
Which of the following is true when the -la parameter is specified for the ls console command?
Lists all files and directories in the current directory, including hidden files.
Displays detailed information in long format for each of these files and directories.
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Top-Level Domain (TLD): .click
Root Domain: bozo.click
Subdomains: fruit (subdomain of bozo.click), banana (subdomain of fruit.bozo.click)
In hierarchical terms:
banana is a subdomain of fruit.bozo.click.
fruit is a subdomain of bozo.click.
bozo.click is the root domain, and .click is the top-level domain.
Is a web certificate is necessary to use HTTPS?
Yes
Can a DNS A record can point to an IP address or another A record?
A DNS A (Address) record can only point to an IP address, not to another A record. If you need to point one domain to another domain, you would use a CNAME record instead.
Port 443, 80, 22 is reserved for which protocol?
Port 80: HTTP (unsecured web traffic)
Port 443: HTTPS (secured web traffic)
Port 22: SSH (secure remote access)
What will the following code using Promises output when executed?
Promises provide a cleaner, more manageable way to work with asynchronous operations in JavaScript. They represent the eventual completion (or failure) of an asynchronous operation and allow you to handle the result or error in a more organized manner.
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulating success or failure

    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed.");
    }
});

myPromise
    .then(result => {
        console.log(result); // This runs if the promise is fulfilled
    })
    .catch(error => {
        console.error(error); // This runs if the promise is rejected
    });
