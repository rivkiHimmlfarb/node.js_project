import {
    getAllCoursesLogic,
    getAllStudentsLogic,
    getCourseByIdLogic,
    addCourseLogic,
    updateCourseLogic,
    deleteCourseLogic
} from './service.js';

export function getData(req, res) {
    res.send('<h1>ברוכים הבאים לשרת האקספרס שלי!</h1><p>נסו לגשת ל-/courses או /students</p>');
}

export function getCourser(req, res) {
    const allCourses = getAllCoursesLogic();
    res.json(allCourses);
}

export function getStudents(req, res) {
    const allStudents = getAllStudentsLogic();
    res.json(allStudents);
}

export function get1course(req, res) {
    const id = parseInt(req.params.id);
    const course = getCourseByIdLogic(id);
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ error: 'Course not found' });
    }
}

export function addData(req, res) {
    const newCourse = addCourseLogic(req.body);
    res.status(201).json(newCourse);
}

export function updateData(req, res) {
    const id = parseInt(req.params.id);
    const updated = updateCourseLogic(id, req.body);
    if (!updated) {
        return res.status(404).json({ error: 'Course not found' });
    }
    res.json(updated);
}

export function deleteData(req, res) {
    const id = parseInt(req.params.id);
    const deleted = deleteCourseLogic(id);
    if (!deleted) {
        return res.status(404).json({ error: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully' });
}
