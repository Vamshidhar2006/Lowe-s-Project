console.log("JavaScript connected");
let form = document.querySelector(".sf");
let students = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let math = document.querySelector("#math").value;
    let physics = document.querySelector("#physics").value;
    let chemistry = document.querySelector("#chemistry").value;
    let english = document.querySelector("#english").value;
    let history = document.querySelector("#history").value;
    let extra = document.querySelector("#extra").value;

    let student = {
        name:name,
        math:math,
        physics:physics,
        chemistry:chemistry,
        english:english,
        history:history,
        extra:extra
    };

    students.push(student);
    console.log(students);

    let display = document.querySelector("#display");
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    let mathCell = document.createElement("td");
    mathCell.textContent = student.math;
    row.appendChild(mathCell);

    let physicsCell = document.createElement("td");
    physicsCell.textContent = student.physics;
    row.appendChild(physicsCell);

    let chemistryCell = document.createElement("td");
    chemistryCell.textContent = student.chemistry;
    row.appendChild(chemistryCell);

    let englishCell = document.createElement("td");
    englishCell.textContent = student.english;
    row.appendChild(englishCell);

    let historyCell = document.createElement("td");
    historyCell.textContent = student.history;
    row.appendChild(historyCell);

    let extraCell = document.createElement("td");
    extraCell.textContent = student.extra;
    row.appendChild(extraCell);

    let marks = [
        Number(student.math),
        Number(student.physics),
        Number(student.chemistry),
        Number(student.english),
        Number(student.history)
    ];

    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / marks.length;
    let highest = Math.max(...marks);
    let weakest = Math.min(...marks);

    let grade;

    if (average >= 80) {
        grade = "A";
    }
    else if (average >= 60) {
        grade = "B";
    }
    else {
        grade = "C";
    }

    let a = document.createElement("td");
    a.textContent = total;
    row.appendChild(a);

    let b = document.createElement("td");
    b.textContent = average.toFixed(2);
    row.appendChild(b);

    let c = document.createElement("td");
    c.textContent = highest;
    row.appendChild(c);

    let d = document.createElement("td");
    d.textContent = weakest;
    row.appendChild(d);

    let e = document.createElement("td");
    e.textContent = grade;
    row.appendChild(e);

    display.appendChild(row);
});