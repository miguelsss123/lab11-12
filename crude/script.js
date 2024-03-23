let students = [];

function addStudent() {
    const name = document.getElementById('nameInput').value.trim();
    const age = document.getElementById('ageInput').value.trim();
    const gender = document.getElementById('genderSelect').value;

    if (name !== '' && age !== '') {
        const student = {
            name: name,
            age: age,
            gender: gender
        };
        students.push(student);
        renderStudents();
        document.getElementById('nameInput').value = '';
        document.getElementById('ageInput').value = '';
        document.getElementById('genderSelect').selectedIndex = 0;
    }
}

function renderStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Name:</strong> ${student.name}, <strong>Age:</strong> ${student.age}, <strong>Gender:</strong> ${student.gender} <button onclick="editStudent(${index})">Edit</button> <button onclick="deleteStudent(${index})">Delete</button>`;
        studentList.appendChild(li);
    });
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('nameInput').value = student.name;
    document.getElementById('ageInput').value = student.age;
    document.getElementById('genderSelect').value = student.gender;
    students.splice(index, 1);
    renderStudents();
}

function deleteStudent(index) {
    const confirmation = confirm("Are you sure you want to delete this student?");
    if (confirmation) {
        students.splice(index, 1);
        renderStudents();
    }
}

// Initial rendering
renderStudents();
