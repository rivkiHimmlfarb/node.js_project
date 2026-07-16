import courses from './courses.js';
import students from './students.js';

export function getAllCoursesLogic() {
    return courses;
}
export function getAllStudentsLogic() {
    return students;
}
export function getCourseByIdLogic(courseId) {
    return courses.find(c => c.id === parseInt(courseId));
}
export function addCourseLogic(newCourse) {
    const nextId = courses.length > 0
? Math.max(...courses.map(c => c.id)) + 1
: 1;
    const courseToAdd = { id: nextId, ...newCourse };
    courses.push(courseToAdd);
    return courseToAdd;
}

export function updateCourseLogic(courseId, courseData) {
    const id = parseInt(courseId);
    const courseIndex = courses.findIndex(c => c.id === id);
    if (courseIndex !== -1) {
        courses[courseIndex] = {
            ...courses[courseIndex],
            ...courseData,
            id
        };

    }
    return courses[courseIndex];
}


export function deleteCourseLogic(courseId) {
    const index = courses.findIndex(c => c.id === parseInt(courseId));
    if(index==-1) {
        return false;
    }
     courses.splice(index, 1);
    return true;
}

