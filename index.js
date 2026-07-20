import express from 'express';
import chalk from 'chalk';
import router from './routes.js';
import authenticateKey from './middleware.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(authenticateKey);
// ניתוב
app.use('/', router);

//בדיקה אם הנתיב קיים, אם לא, החזרת הודעת שגיאה
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'הכתובת המבוקשת אינה קיימת בשרת זה.'
  });
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
