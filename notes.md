# CS260 Notes

I learned that using git is very helpful when trying to work on different machines and working with different people. it is also amazing how fast a push and pull happens. 


shh into my website

ssh -i '.\Documents\BYU 2024-2025\BYU Fall 2024\CS260\Y1ChangT!ng.pem' ubuntu@54.156.160.185

http://54.156.160.185/


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Midterm Questions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        h2 {
            color: #555;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
        }
        pre, code {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            margin: 10px 0;
            display: block;
        }
        p {
            margin: 10px 0;
        }
        .question {
            margin: 20px 0;
        }
        .question h3 {
            color: #007acc;
        }
    </style>
</head>
<body>

<h1>Midterm Questions</h1>

<div class="question">
    <h2>In the following code, what does the link element do?</h2>
    <p>The <code>&lt;link&gt;</code> element in HTML is typically used to link external resources to the HTML document, most commonly stylesheets.</p>
</div>

<div class="question">
    <h2>In the following code, what does a div tag do?</h2>
    <p>The <code>&lt;div&gt;</code> tag in HTML is a block-level container used to group elements together for the purposes of applying styles (CSS), layout, or scripting (JavaScript).</p>
</div>

<div class="question">
    <h2>What is the difference between the #title and .grid selector?</h2>
    <p><code>#title</code> targets an element with a specific ID of "title", while <code>.grid</code> targets one or more elements with a specific class of "grid".</p>
</div>

<div class="question">
    <h2>What is the difference between padding and margin?</h2>
    <p><b>Padding</b> is the space inside an element, between the element's content and its border.<br>
    <b>Margin</b> is the space outside an element, between the element’s border and surrounding elements.</p>
</div>

<div class="question">
    <h2>How will the images be displayed using flex?</h2>
    <p><code>display: flex;</code> makes the <code>.image-container</code> a flex container, and all the <code>&lt;img&gt;</code> elements become flex items. By default, flex items are laid out in a row (horizontally).</p>
</div>

<div class="question">
    <h2>What does the following arrow syntax function declaration do?</h2>
    <p>The arrow function syntax in JavaScript provides a concise way to write functions. It differs from traditional function expressions in syntax and behavior.</p>
</div>

<div class="question">
    <h2>What does the following code using map with an array output?</h2>
    <pre><code>const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);</code></pre>
    <p>Output: <code>[2, 4, 6, 8]</code></p>
</div>

<div class="question">
    <h2>What does the following code output using getElementById and addEventListener?</h2>
    <p>The <code>getElementById</code> method retrieves an element from the DOM based on its ID. <code>addEventListener</code> allows us to set up functions to be called when a specified event occurs.</p>
</div>

<div class="question">
    <h2>What does the following line of Javascript do using a # selector?</h2>
    <p>A line of JavaScript using a <code>#</code> selector selects an element by its ID. The selected element can then be manipulated, such as changing its content or adding event listeners.</p>
</div>

<div class="question">
    <h2>Which of the following are true about the DOM?</h2>
    <ul>
        <li>The DOM represents a tree structure.</li>
        <li>It allows dynamic changes to the page.</li>
        <li>It is language-independent.</li>
        <li>Events can be handled via the DOM.</li>
        <li>It includes all elements in the document.</li>
        <li>The DOM is created when a web page is loaded.</li>
    </ul>
</div>

<div class="question">
    <h2>By default, the HTML span element has a default CSS display property value of:</h2>
    <p><b>Inline</b></p>
</div>

<div class="question">
    <h2>How would you use CSS to change all the div elements to have a background color of red?</h2>
    <pre><code>div { background-color: red; }</code></pre>
</div>

<div class="question">
    <h2>How would you display an image with a hyperlink in HTML?</h2>
    <pre><code>&lt;a href="URL"&gt;
    &lt;img src="image-source.jpg" alt="Description"&gt;
&lt;/a&gt;</code></pre>
</div>

<div class="question">
    <h2>In the CSS box model, what is the ordering of the box layers starting at the inside and working out?</h2>
    <p>Content, Padding, Border, Margin</p>
</div>

<div class="question">
    <h2>How would you set the text "trouble" to green and leave "double" unaffected?</h2>
    <pre><code>&lt;span style="color:green"&gt;trouble&lt;/span&gt;double</code></pre>
</div>

<div class="question">
    <h2>What does the console.log output?</h2>
    <p><code>console.log</code> outputs messages or values to the browser's console for debugging purposes.</p>
</div>

<div class="question">
    <h2>How would you select an element with the id "byu" and change its text color to green using JavaScript?</h2>
    <pre><code>document.getElementById("byu").style.color = "green";</code></pre>
</div>

<div class="question">
    <h2>What are the opening tags for paragraph, ordered list, unordered list, and headings?</h2>
    <p>Paragraph: <code>&lt;p&gt;</code><br>
    Ordered List: <code>&lt;ol&gt;</code><br>
    Unordered List: <code>&lt;ul&gt;</code><br>
    Heading 1: <code>&lt;h1&gt;</code><br>
    Heading 2: <code>&lt;h2&gt;</code><br>
    Heading 3: <code>&lt;h3&gt;</code></p>
</div>

<div class="question">
    <h2>How do you declare the document type to be HTML?</h2>
    <pre><code>&lt;!DOCTYPE html&gt;</code></pre>
</div>

<div class="question">
    <h2>What is the correct syntax for creating a JavaScript object?</h2>
    <pre><code>const person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};</code></pre>
</div>

<div class="question">
    <h2>Is it possible to add new properties to JavaScript objects?</h2>
    <p>Yes, you can add new properties to JavaScript objects.</p>
</div>

<div class="question">
    <h2>Which tag do you use to include JavaScript in an HTML page?</h2>
    <pre><code>&lt;script&gt;&lt;/script&gt;</code></pre>
</div>

<div class="question">
    <h2>What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?</h2>
    <ul>
        <li><code>chmod</code>: Change file permissions.</li>
        <li><code>pwd</code>: Print working directory.</li>
        <li><code>cd</code>: Change directory.</li>
        <li><code>ls</code>: List directory contents.</li>
        <li><code>vim</code>: Open Vim text editor.</li>
        <li><code>nano</code>: Open Nano text editor.</li>
        <li><code>mkdir</code>: Create new directory.</li>
        <li><code>mv</code>: Move or rename files.</li>
        <li><code>rm</code>: Remove files.</li>
        <li><code>man</code>: Show manual for a command.</li>
        <li><code>ssh</code>: Secure shell to a remote machine.</li>
        <li><code>ps</code>: Display running processes.</li>
        <li><code>wget</code>: Download files from the web.</li>
        <li><code>sudo</code>: Execute command as superuser.</li>
    </ul>
</div>

<div class="question">
    <h2>What will the following code using Promises output when executed?</h2>
    <pre><code>const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed.");
    }
});

myPromise
    .then(result => {
        console.log(result); // If promise is fulfilled
    })
    .catch(error => {
        console.error(error); // If promise is rejected
    });</code></pre>
</div>

</body>
</html>
