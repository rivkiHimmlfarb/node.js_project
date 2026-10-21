import { promises as fs } from 'fs';

const pathC = './courses.json';
const pathS = './students.json';

// --- קורסים ---

export function getAllCourses() {
  return fs.readFile(pathC, 'utf8')
    .then((data) => JSON.parse(data));
}

export function saveCourses(courses) {
  return fs.writeFile(pathC, JSON.stringify(courses, null, 2));
}

export function getCourseById(courseId) {
  return getAllCourses()
    .then((courses) => {
      const course = courses.find((c) => c.id === parseInt(courseId));
      return course || null;
    });
}

export function addCourse(newCourse) {
  return getAllCourses()
    .then((courses) => {
      const nextId = courses.length > 0
        ? Math.max(...courses.map(c => c.id)) + 1
        : 1;
      const courseToAdd = { id: nextId, ...newCourse };
      courses.push(courseToAdd);

      return saveCourses(courses)
        .then(() => courseToAdd);
    });
}

export function updateCourse(courseId, courseData) {
  const id = parseInt(courseId);

  return getAllCourses()
    .then((courses) => {
      const courseIndex = courses.findIndex(c => c.id === id);
      if (courseIndex === -1) {
        return null;
      }

      courses[courseIndex] = {
        ...courses[courseIndex],
        ...courseData,
        id
      };

      return saveCourses(courses)
        .then(() => courses[courseIndex]);
    });
}

export function deleteCourse(courseId) {
  const id = parseInt(courseId);

  return getAllCourses()
    .then((courses) => {
      const index = courses.findIndex(c => c.id === id);
      if (index === -1) {
        return false;
      }

      courses.splice(index, 1);

      return saveCourses(courses)
        .then(() => true);
    });
}

// --- סטודנטים ---

export function getAllStudents() {
  return fs.readFile(pathS, 'utf8')
    .then((data) => JSON.parse(data));
}

export function saveStudents(students) {
  return fs.writeFile(pathS, JSON.stringify(students, null, 2));
}