function formValidation(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const round = document.getElementById("round").value;
    const gender = document.querySelector("input[type=radio]:checked");
    const education = document.querySelectorAll("input[type=checkbox]:checked");
    const courses = document.querySelectorAll("input[type=checkbox]:checked");
    const location = document.getElementById("location").value;
    const remarks = document.getElementById("remarks").value;

    let newEducation = [];
    let newCourses = [];

    education.forEach(function (education) {
        newEducation.push(education.value);
    });    

    courses.forEach(function (courses) {
        newCourses.push(courses.value);
    });

    let output = "Name: " + name + "<br>";
    output += "Email: " + email + "<br>";
    output += "Password: " + password + "<br>";
    output += "Round: " + round + "<br>";
    output += "Gender: " + gender.value + "<br>";
    output += "Education: " + newEducation.join(", ") + "<br>";
    output += "Courses: " + newCourses.join(", ") + "<br>";
    output += "Location: " + location + "<br>";
    output += "Remarks: " + remarks + "<br>";

    let newWindow = window.open("", "_blank");
    newWindow.document.write("<pre>" + output + "</pre>");
}

let form=document.getElementById("form");
form.addEventListener("submit", formValidation);