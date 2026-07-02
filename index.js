// 1. ייבוא של אקספרס ו-chalk
const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 3000;


// ייבוא המידע מהקובץ הסמוך
const  students  = require('./students.js'); // ייבוא המידע מהקובץ students.js
const courses  = require('./courses.js'); // ייבוא המידע מהקובץ courses.js
// עכשיו המשתנים courses ו-students זמינים לשימוש בנתיבים שלך!
console.log(students); // הדפסה לטרמינל כדי לוודא שהמידע נטען בהצלחה




// הדפסה יפה לטרמינל (אופציונלי, הקוד שלך)
for (let i = 0; i < courses.length; i++) {
    console.log(chalk.blue(`Course ID: ${courses[i].id}`));
    console.log(chalk.green(`Course Name: ${courses[i].name}`));
    console.log(chalk.yellow(`Course Price: ${courses[i].price}`));
    console.log('-----------------------------');
}

// 3. הגדרת הנתיבים (Routes) באקספרס

// נתיב ראשי (דף הבית)
app.get('/', (req, res) => {
    res.send('<h1>ברוכים הבאים לשרת האקספרס שלי!</h1><p>נסו לגשת ל-/courses או /students</p>');
});

// נתיב לקבלת הקורסים
app.get('/courses', (req, res) => {
    res.json(courses);
});

// נתיב לקבלת הסטודנטים
app.get('/students', (req, res) => {
    res.json(students);
});

// 4. הפעלת שרת האקספרס
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});