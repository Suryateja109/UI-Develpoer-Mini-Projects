const  students = [];

function addStudent(){
    const name = document.getElementById("i1").value;
    const age = parseInt(document.getElementById("i2").value);
    const course = document.getElementById("i3").value;

    if (!name || !age || !course) {
        alert("Please enter all fields!");
        return;
    }

    const student = {
        name: name,
        age: age,
        course: course
    };
    students.push(student);
    displayStudents();
}

function displayStudents() {
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = ""; 

    students.forEach((stu, index) =>{
        const div = document.createElement("div");
        div.className = "student";
        div.innerHTML = `<strong>${index + 1} .${stu.name}</strong> (Age: ${stu.age}, Course: ${stu.course})`
        studentList.appendChild(div);
    });
}