let Students = [
    {name:"Surya Teja", Age:19},
    {name:"Mahendra", Age:20},
    {name:"Sudheer LE", Age:22}
];

function b1(){
    const list = document.getElementById("ul");
    list.innerHTML = "";

    Students.forEach((student, index) => {
        let li = document.createElement("li");
        li.textContent = `${student.name} - Age: ${student.Age}`;
        list.appendChild(li);
    });
}

function b2(){
    Students.sort((a,b) => a.name.localeCompare(b.name));
    b1();
}

function b3(){
    Students.sort((a,b) => a.Age - b.Age);
    b1();
}