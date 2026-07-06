// 1. ייבוא של אקספרס ו-chalk
const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

app.use(express.json()); // חובה לקריאת JSON מה-body


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

app.get('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ error: 'Course not found' });
    }
})

app.get('/courses/',(req, res) => {
    res.json(courses);
});
app.post('/courses', (req, res) => {
    const nextId = courses.length > 0  
        ? Math.max(...courses.map(c => c.id)) + 1  
        : 1;

    const newCourse = {
        id: nextId, // כאן נשתמש ב-ID הבטוח שחישבנו
        name: req.body.name,
        price: req.body.price
    };
    
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

app.put('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === courseId);
    if (courseIndex !== -1) {       
        courses[courseIndex] = {
            id: courseId,
            name: req.body.name,
            price: req.body.price
        };
        res.json(courses[courseIndex]);
    }
    else {
        res.status(404).json({ error: 'Course not found' });
    }
});

app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === courseId);
    
    if (courseIndex === -1) {
        return res.status(404).json({ error: 'Course not found' });
    }

    const deletedCourse = courses.splice(courseIndex, 1);
    res.json(deletedCourse[0]);
});