var form = document.getElementById('resume-builder');
var resumeDisplay = document.getElementById('resumeDisplay');
;
//clear form
// adding event listener
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('tel');
    var education = document.getElementById('education');
    var skills = document.getElementById('skills');
    var experience = document.getElementById('experience');
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span contenteditable='true'>".concat(name.value, "</span> </p> \n    <p><b>Email:</b> <span contenteditable='true'>").concat(email.value, "</span></p> \n    <p><b>Phone Number:</b> <span contenteditable='true'> ").concat(phone.value, "</span></p> \n    <h3>Education</h3>\n    <p contenteditable='true' >").concat(education.value, "</p>\n    <h3>Experience</h3> \n    <p contenteditable='true'>").concat(experience.value, "</p>\n    <h3>Skills</h3> \n    <p contenteditable='true'>").concat(skills.value, "</p>");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume display element not found");
    }
});
