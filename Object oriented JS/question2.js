class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courses = [];
    }

    enroll(course) {
        this.courses.push(course);
        console.log(`${this.name} has enrolled in ${course}.`);
    }

    showCourses() {
        console.log(`${this.name}'s enrolled courses: ${this.courses.join(', ')}`);
    }
}

class Admission {
    constructor() {
        this.students = [];
    }

    enrollStudent(student) {
        this.students.push(student);
        console.log(`${student.name} has been enrolled.`);
    }

    assignCourse(student, course) {
        if (student instanceof Student && student.email && course) {
            student.enroll(course);
        } else {
            console.log('Invalid student or course information.');
        }
    }

    showEnrolledStudents() {
        console.log('Enrolled students:');
        this.students.forEach(student => {
            console.log(`- ${student.name} (${student.email})`);
        });
    }
}


const admissionOffice = new Admission();

const student1 = new Student('Mithun', 'mithun@pw.live');
const student2 = new Student('Farman', 'farman@pw.live');

admissionOffice.enrollStudent(student1); // Mithun has been enrolled.
admissionOffice.enrollStudent(student2); // Farman has been enrolled.

admissionOffice.assignCourse(student1, 'Full Stack Web Development'); // Mithun has enrolled in Full Stack Web Development.
admissionOffice.assignCourse(student2, 'Data Science Masters'); // Farman has enrolled in Data Science Masters.

student1.showCourses(); // Mithun's enrolled courses: Full Stack Web Development
student2.showCourses(); // Farman's enrolled courses: Data Science Masters

admissionOffice.showEnrolledStudents();
// Enrolled students:
// - Mithun (mithun@pw.live)
// - Farman (farman@pw.live)
