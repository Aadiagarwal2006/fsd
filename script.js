const form = document.getElementById("studentForm");
const tbody = document.getElementById("tbody");
const count = document.getElementById("count");
const search = document.getElementById("search");
const submitBtn = document.getElementById("submitBtn");

let editIndex = -1;

// Load data from Local Storage
let students = JSON.parse(localStorage.getItem("students")) || [];

// ---------------- Render Table ----------------
function renderTable(data = students) {
    tbody.innerHTML = "";

    data.forEach((student, index) => {
        let row = `
        <tr>
            <td>${student.name}</td>
            <td>${student.section}</td>
            <td>${student.email}</td>

            <td>
                <button class="edit-btn" onclick="editStudent(${index})">
                    ✏️ Edit
                </button>

                <button class="delete-btn" onclick="deleteStudent(${index})">
                    🗑 Delete
                </button>
            </td>
        </tr>
        `;

        tbody.innerHTML += row;
    });

    count.innerHTML = students.length;

    localStorage.setItem("students", JSON.stringify(students));
}

// ---------------- Add / Update ----------------
form.addEventListener("submit", function (e) {

    e.preventDefault();

    let student = {
        name: document.getElementById("name").value.trim(),
        section: document.getElementById("section").value.trim(),
        email: document.getElementById("email").value.trim()
    };

    if (editIndex === -1) {

        students.push(student);

        showToast("✅ Student Added");

    } else {

        students[editIndex] = student;

        editIndex = -1;

        submitBtn.innerHTML =
            '<i class="fa-solid fa-plus"></i> Add Student';

        showToast("✏️ Student Updated");

    }

    form.reset();

    renderTable();

});

// ---------------- Edit ----------------
function editStudent(index) {

    document.getElementById("name").value = students[index].name;
    document.getElementById("section").value = students[index].section;
    document.getElementById("email").value = students[index].email;

    editIndex = index;

    submitBtn.innerHTML =
        '<i class="fa-solid fa-pen"></i> Update Student';

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ---------------- Delete ----------------
function deleteStudent(index) {

    if (confirm("Delete this student?")) {

        students.splice(index, 1);

        renderTable();

        showToast("🗑 Student Deleted");

    }

}

// ---------------- Search ----------------
search.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let filtered = students.filter(student =>

        student.name.toLowerCase().includes(value) ||

        student.section.toLowerCase().includes(value) ||

        student.email.toLowerCase().includes(value)

    );

    renderTable(filtered);

});

// ---------------- Live Clock ----------------
function updateClock() {

    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleDateString() +
        "<br>" +
        now.toLocaleTimeString();

}

setInterval(updateClock, 1000);

updateClock();

// ---------------- Toast Message ----------------
function showToast(message) {

    let toast = document.createElement("div");

    toast.innerHTML = message;

    toast.style.position = "fixed";
    toast.style.bottom = "25px";
    toast.style.right = "25px";
    toast.style.background = "#16a34a";
    toast.style.color = "white";
    toast.style.padding = "14px 20px";
    toast.style.borderRadius = "10px";
    toast.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";
    toast.style.fontWeight = "bold";
    toast.style.zIndex = "999";
    toast.style.animation = "fadeIn .3s";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);

}

// Initial Render
renderTable();