var form = document.getElementById('resume-builder');
var resumeDisplay = document.getElementById('resumeDisplay');
var inputs = document.getElementsByTagName('input');
//clear form
function clear() {
    for (var i = 0; inputs.length < 0; i++) {
        inputs[i].value = '';
    }
}
clear();
// adding event listener
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('tel');
    var education = document.getElementById('education');
    var skills = document.getElementById('skills');
    var experience = document.getElementById('experience');
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name.value, "</p> \n    <p><b>Email:</b>").concat(email.value, "</p> \n    <p><b>Phone Number:</b>").concat(phone.value, "</p> \n    <h3>Education</h3>\n    <p>").concat(education.value, "</p>\n    <h3>Experience</h3> \n    <p>").concat(experience.value, "</p>\n    <h3>Skills</h3> \n    <p>").concat(skills.value, "</p>");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume display element not found");
    }
});
