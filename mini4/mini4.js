let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2"); 
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

/*b1.onclick = function() {
    red();
}

b2.onclick = function() {
    yellow();   
}

b3.onclick = function() {
    green();
} */

b1.addEventListener("click", red);
b2.addEventListener("click", yellow);
b3.addEventListener("click", green);

function red(){
    b1.style.backgroundColor = "red";
    b2.style.backgroundColor = "black";
    b3.style.backgroundColor = "black";
    c1.style.backgroundColor = "red";
    c2.style.backgroundColor = "#1f1d41";
    c3.style.backgroundColor = "#1f1d41";
}

function yellow(){
    b2.style.backgroundColor = "#ffbb01ff";
    b1.style.backgroundColor = "black";
    b3.style.backgroundColor = "black";
    c2.style.backgroundColor = "#f7c948";
    c1.style.backgroundColor = "#1f1d41";
    c3.style.backgroundColor = "#1f1d41";
}

function green(){
    b3.style.backgroundColor = "green";
    b1.style.backgroundColor = "black";
    b2.style.backgroundColor = "black";
    c3.style.backgroundColor = "#4caf50";
    c1.style.backgroundColor = "#1f1d41";
    c2.style.backgroundColor = "#1f1d41";
}