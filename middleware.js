// מפתח הגישה הסודי ששמור בשרת
const SECRET_API_KEY = process.env.SECRET_API_KEY || 'your-secret-api-key-here';

const authenticateKey = (req, res, next) => {
  // שליפת המפתח מכותרות הבקשה
  const clientApiKey = req.headers['x-api-key'];

  // בדיקה אם המפתח חסר או שגוי
  if (!clientApiKey || clientApiKey !== SECRET_API_KEY) {
    return res.status(401).json({
      statusCode: 401,
      error: 'Unauthorized',
      message: 'גישה נדחתה: מפתח הגישה חסר או אינו תקין.'
    });
  }

  // המפתח תקין! ממשיכים לפונקציה הבאה בתור (לראוטר)
  next();
};

export default authenticateKey;