***פרויקט node.js*** 

**שיעור 1**

Explain Node.js to a frontend

developer:

As a frontend developer, you already know 90% of the language syntax used in Node.js because it’s just JavaScript.



The simplest way to think about Node.js is this: It takes the JavaScript engine out of the browser and lets it run directly on a computer or server.



Here is a breakdown of how it works, framed around what you already know.



The Core Difference: Environment

In the browser, JavaScript interacts with the DOM and the user interface. In Node.js, JavaScript interacts with the operating system and filesystem.



What’s Missing in Node.js?

Since there is no browser window or HTML page, you don't have access to:



window or document



DOM manipulation methods (querySelector, addEventListener for clicks)



Web APIs like localStorage or History



What’s New in Node.js?

Node.js gives you access to built-in modules that allow JavaScript to do things a browser never could (for security reasons):



fs (File System): Read, write, and delete files on the computer.



path: Navigate and handle file directories.



http: Create an actual web server that listens for incoming network requests.



process: Interact with the environment running the code (like reading environment variables via process.env).



להריץ סקריפט פשוט ב-Node.js זה תהליך קל ומהיר. הנה השלבים הפשוטים ביותר לעשות זאת:



שלב 1: ודאו ש-Node.js מותקן במחשב

שלב 2: יצירת קובץ הסקריפט

פתחו את עורך הקוד שלכם (כמו VS Code) או אפילו פנקס רשימות (Notepad).



צרו קובץ חדש וקראו לו בשם לבחירתכם עם סיומת .js (למשל: app.js).



כתבו בפנים קוד ג'אווהסקריפט פשוט

שלב 3: הרצת הקובץ דרך הטרמינל

בטרמינל, נווטו אל התיקייה שבה שמרתם את הקובץ באמצעות הפקודה cd (למשל: cd Documents/my-project).



הריצו את הפקודה node ולאחריה שם הקובץ.



Here is a classic example of a simple HTTP server in Node.js using the built-in http module. It doesn't require installing any external packages like Express.

// 1. Import the built-in HTTP module

const http = require('http');



// Define the hostname and port where the server will listen

const hostname = '127.0.0.1'; // localhost

const port = 3000;



// 2. Create the server instance

const server = http.createServer((req, res) => {

&#x20; // Set the response HTTP status code and headers

&#x20; res.statusCode = 200;

&#x20; res.setHeader('Content-Type', 'text/plain');

&#x20; 

&#x20; // Send the response body text and end the connection

&#x20; res.end('Hello from your Node.js HTTP server!\\n');

});



// 3. Start the server and listen on the specified port

server.listen(port, hostname, () => {

&#x20; console.log(`Server running at http://${hostname}:${port}/`);

});

How to Run and Test It

Open your terminal or command prompt.



Navigate to the directory where you saved server.js.



Run the script using Node.js:



מהי ספריית chalk ולמה היא מיועדת?

ספריית chalk היא אחת הספריות הפופולריות ביותר באקו-סיסטם של Node.js, ותפקידה פשוט ונהדר: היא מאפשרת לעצב ולצבוע את הטקסט שמודפס בטרמינל (Console).



כברירת מחדל, הפלט של console.log() בטרמינל הוא טקסט לבן או שחור משעמם. בעזרת chalk אפשר להפוך את הטקסט לצבעוני (אדום, ירוק, כחול וכו'), להוסיף רקעים צבעוניים, ולהפוך טקסט למודגש (Bold) או נטוי (Italic).

כדי להתקין את הספרייה, פתחו את הטרמינל בתיקיית הפרויקט שלכם והריצו את הפקודה הבאה:npm install chalk



