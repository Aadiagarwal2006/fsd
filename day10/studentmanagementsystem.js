const studentForm = document.getElementById("studentForm");
const searchInput = document.getElementById("search");
const studentTable = document.getElementById("studentTable");
const noRecords = document.getElementById("noRecords");
const message = document.getElementById("message");

let students = [];

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const roll = document.getElementById("rollNumber").value.trim();
    const selectedCourse = document.getElementById("course").value;
    const marks = Number(document.getElementById("marks").value);

    if (marks < 0 || marks > 100) {
        showMessage("Marks must be between 0 and 100.", "red");
        return;
    }

    if (students.some(function (student) {
        return student.roll.toLowerCase() === roll.toLowerCase();
    })) {
        showMessage("This roll number already exists.", "red");
        return;
    }

    students.push({ name, roll, course: selectedCourse, marks });
    studentForm.reset();
    showMessage("Student added.", "green");
    displayStudents();
});

searchInput.addEventListener("input", displayStudents);

function getGrade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    if (marks >= 60) return "C";
    if (marks >= 40) return "D";
    return "F";
}

function displayStudents() {
    const searchText = searchInput.value.toLowerCase().trim();
    const filteredStudents = students.filter(function (student) {
        return student.name.toLowerCase().includes(searchText) ||
            student.roll.toLowerCase().includes(searchText);
    });

    studentTable.innerHTML = "";

    filteredStudents.forEach(function (student) {
        const row = document.createElement("tr");
        row.innerHTML = `
			<td>${escapeHtml(student.name)}</td>
			<td>${escapeHtml(student.roll)}</td>
			<td>${escapeHtml(student.course)}</td>
			<td>${student.marks}</td>
			<td>${getGrade(student.marks)}</td>
			<td><button class="delete-button" type="button">Delete</button></td>
		`;

        row.querySelector(".delete-button").addEventListener("click", function () {
            students = students.filter(function (item) {
                return item.roll !== student.roll;
            });
            displayStudents();
        });

        studentTable.appendChild(row);
    });

    document.getElementById("totalStudents").textContent = students.length;
    const totalMarks = students.reduce(function (sum, student) {
        return sum + student.marks;
    }, 0);
    const average = students.length ? (totalMarks / students.length).toFixed(2) : "0";
    document.getElementById("averageMarks").textContent = average;
    noRecords.style.display = filteredStudents.length ? "none" : "block";
}

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}

function escapeHtml(text) {
    const element = document.createElement("div");
    element.textContent = text;
    return element.innerHTML;
}

displayStudents();