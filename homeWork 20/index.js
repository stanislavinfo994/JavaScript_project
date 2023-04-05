class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25);
        this.attendance.fill(null);
        this.numOfAttendances = 0;
    }

    present() {
        if (this.numOfAttendances >= 25) {
            console.log("Cannot present anymore, attendance record is full");
            return;
        }
        this.attendance[this.numOfAttendances] = true;
        this.numOfAttendances++;
    }

    absent() {
        if (this.numOfAttendances >= 25) {
            console.log("Cannot absent anymore, attendance record is full");
            return;
        }
        this.attendance[this.numOfAttendances] = false;
        this.numOfAttendances++;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((acc, val) => acc + val);
        return sum / this.grades.length;
    }

    getAttendancePercentage() {
        if (this.numOfAttendances === 0) {
            return 0;
        }
        const numPresent = this.attendance.filter(a => a === true).length;
        return numPresent / this.numOfAttendances;
    }

    summary() {
        const avgGrade = this.getAverageGrade();
        const attendancePercentage = this.getAttendancePercentage();
        if (avgGrade > 90 && attendancePercentage > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || attendancePercentage > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}
const student1 = new Student("Іван", "Мазепа", 1991);
student1.grades = [90, 91, 95];
student1.present();
student1.present();
student1.present();
student1.absent();
console.log(`${student1.firstName} ${student1.lastName} - Вік: ${student1.getAge()}, Середній бал: ${student1.getAverageGrade()}, ${student1.summary()}`);

const student2 = new Student("Марія", "Стрілець", 2000);
student2.grades = [80, 85, 81];
student2.present();
student2.present();
student2.absent();
student2.present();
console.log(`${student2.firstName} ${student2.lastName} - Вік: ${student2.getAge()}, Середній бал: ${student2.getAverageGrade()}, ${student2.summary()}`);

const student3 = new Student("Олександр", "Хмельницький", 1996);
student3.grades = [100, 96, 92, 100];
student3.present();
student3.present();
student3.present();
student3.present();
console.log(`${student3.firstName} ${student3.lastName} - Вік: ${student3.getAge()}, Середній бал: ${student3.getAverageGrade()}, ${student3.summary()}`);

