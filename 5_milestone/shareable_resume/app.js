var form = document.getElementById('resume-builder');
var resumeDisplay = document.getElementById('resumeDisplay');
var shareableLinkContainer = document.getElementById('shareable-container');
var dowloadPDFBtn = document.getElementById('download-pdf');
var userName = document.getElementById('username');
var shareable = document.getElementById('link-shareable');
var shareableLinkElement = document.getElementById('link-shareable');
// adding event listener
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var userName = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('tel').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var dataStorage = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
    localStorage.setItem(userName, JSON.stringify(dataStorage));
    var resumeHTML = "\n    <h2><b>Shareable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>User Name:</b></p>\n\n\n    <p><b>Name:</b> <span contenteditable='true'>".concat(name, "</span> </p> \n    <p><b>Email:</b> <span contenteditable='true'>").concat(email, "</span></p> \n    <p><b>Phone Number:</b> <span contenteditable='true'> ").concat(phone, "</span></p> \n    <h3>Education</h3>\n    <p contenteditable='true' >").concat(education, "</p>\n    <h3>Experience</h3> \n    <p contenteditable='true'>").concat(experience, "</p>\n    <h3>Skills</h3> \n    <p contenteditable='true'>").concat(skills, "</p>");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume display element not found");
    }
    var shareablelink = "".concat(window.location.origin, "? userName=").concat(encodeURIComponent(userName));
    shareableLinkContainer.style.display = "block";
    shareable.href = shareablelink;
    shareable.textContent = shareablelink;
});
dowloadPDFBtn.addEventListener('click', function () {
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.origin);
    var userName = urlParams.get('userName');
    if (userName) {
        var savedResumeData = localStorage.getItem('userName');
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData)(document.getElementById('username')).value = userName;
            // (document.getElementById('name') as HTMLInputElement).value = resumeData.name
            // (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            // (document.getElementById('tel') as HTMLInputElement).value = resumeData.phone;
            // (document.getElementById('education') as HTMLInputElement).value = resumeData.education;
            // (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;
            // (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;
        }
    }
});
