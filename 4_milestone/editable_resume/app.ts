
const form = document.getElementById('resume-builder') as HTMLFormElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;   

 




// adding event listener

form.addEventListener('submit' , (event:Event)=>{
    event.preventDefault();
    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const phone = document.getElementById('tel') as HTMLInputElement;
    const education = document.getElementById('education') as HTMLInputElement;
    const skills = document.getElementById('skills') as HTMLInputElement;
    const experience = document.getElementById('experience') as HTMLInputElement;

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable='true'>${name.value}</span> </p> 
    <p><b>Email:</b> <span contenteditable='true'>${email.value}</span></p> 
    <p><b>Phone Number:</b> <span contenteditable='true'> ${phone.value}</span></p> 
    <h3>Education</h3>
    <p contenteditable='true' >${education.value}</p>
    <h3>Experience</h3> 
    <p contenteditable='true'>${experience.value}</p>
    <h3>Skills</h3> 
    <p contenteditable='true'>${skills.value}</p>`;

    if(resumeDisplay){
        resumeDisplay.innerHTML = resumeHTML;
        

    }else{
        console.error("Resume display element not found");
    }
    
        

})
