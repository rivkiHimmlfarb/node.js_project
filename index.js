import express from 'express';
import chalk from 'chalk';
import router from './routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// ניתוב
app.use('/', router);

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
