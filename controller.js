import * as dataServices from './service.js';

export function getData(req, res) {
  res.send('<h1>ברוכים הבאים לשרת האקספרס שלי!</h1><p>נסו לגשת ל-/courses או /students</p>');
}

export function getCourser(req, res) {
  dataServices.getAllCourses()
    .then((courses) => {
      res.status(200).json(courses);
    })
    .catch((error) => {
      console.error('שגיאה בשליפת הקורסים:', error);
      res.status(500).json({ message: 'שגיאת שרת פנימית' });
    });
}

export function getStudents(req, res) {
  dataServices.getAllStudents()
    .then((students) => {
      res.status(200).json(students);
    })
    .catch((error) => {
      console.error('שגיאה בשליפת רשימת הסטודנטים:', error);
      res.status(500).json({ message: 'שגיאת שרת פנימית' });
    });
}

export function get1course(req, res) {
  const id = parseInt(req.params.id);

  dataServices.getCourseById(id)
    .then((course) => {
      if (!course) return res.status(404).json({ message: 'הקורס לא נמצא' });
      res.status(200).json(course);
    })
    .catch((error) => {
      console.error('שגיאה בשליפת הקורס:', error);
      res.status(500).json({ message: 'שגיאת שרת פנימית' });
    });
}

export function addData(req, res) {
  const newCourse = req.body;

  dataServices.addCourse(newCourse)
    .then((addedCourse) => {
      res.status(201).json(addedCourse);
    })
    .catch((error) => {
      console.error('שגיאה בהוספת קורס:', error);
      res.status(500).json({ message: 'שגיאת שרת פנימית' });
    });
}

export function updateData(req, res) {
  const id = parseInt(req.params.id);
  const courseToUpdate = req.body;

  dataServices.updateCourse(id, courseToUpdate)
    .then((updatedCourse) => {
      if (!updatedCourse) return res.status(404).json({ message: 'הקורס לא נמצא' });
      res.status(200).json(updatedCourse);
    })
    .catch((error) => {
      console.error('שגיאה בעדכון הקורס:', error);
      res.status(500).json({ message: 'שגיאת שרת פנימית' });
    });
}

export function deleteData(req, res) {
  const id = parseInt(req.params.id);

  dataServices.deleteCourse(id)
    .then((deletedCourse) => {
      if (!deletedCourse) {
        return res.status(404).json({ message: 'הקורס לא נמצא' });
      }
      res.status(200).json({ message: 'הקורס נמחק בהצלחה' });
    })
    .catch((error) => {
      console.error('שגיאה במחיקת הקורס:', error);
      res.status(500).json({ message: 'שגיאת שרת פנימית' });
    });
}