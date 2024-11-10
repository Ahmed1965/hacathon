
const form = document.getElementById('resume-builder') as HTMLFormElement;
const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;   
const shareableLinkContainer = document.getElementById('shareable-container') as HTMLDivElement;
const dowloadPDFBtn = document.getElementById('download-pdf') as HTMLButtonElement;
const userName = document.getElementById('username')as HTMLFormElement;
const shareable = document.getElementById('link-shareable') as HTMLAnchorElement;
const shareableLinkElement =document.getElementById('link-shareable')

 




// adding event listener

form.addEventListener('submit' , (event:Event)=>{
    event.preventDefault();
    const userName = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('tel') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    const dataStorage = {name,email,phone,education,experience,skills}
    localStorage.setItem(userName,JSON.stringify(dataStorage));


    const resumeHTML = `
    <h2><b>Shareable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>User Name:</b></p>


    <p><b>Name:</b> <span contenteditable='true'>${name}</span> </p> 
    <p><b>Email:</b> <span contenteditable='true'>${email}</span></p> 
    <p><b>Phone Number:</b> <span contenteditable='true'> ${phone}</span></p> 
    <h3>Education</h3>
    <p contenteditable='true' >${education}</p>
    <h3>Experience</h3> 
    <p contenteditable='true'>${experience}</p>
    <h3>Skills</h3> 
    <p contenteditable='true'>${skills}</p>`;

    if(resumeDisplay){
        resumeDisplay.innerHTML = resumeHTML;
        

    }else{
        console.error("Resume display element not found");
    }
    const shareablelink = `${window.location.origin}? userName=${encodeURIComponent(userName)}`
    
    shareableLinkContainer.style.display="block";
    
    shareable.href = shareablelink;
    shareable.textContent = shareablelink;

})

dowloadPDFBtn.addEventListener('click',()=>{


})

window.addEventListener('DOMContentLoaded',()=>{

    const urlParams = new URLSearchParams(window.location.origin); 
    const userName = urlParams.get('userName')

    if(userName){
        const savedResumeData = localStorage.getItem('userName')
        if(savedResumeData){
            const resumeData = JSON.parse(savedResumeData)
            (document.getElementById('username') as HTMLInputElement).value = userName;
            // (document.getElementById('name') as HTMLInputElement).value = resumeData.name
            // (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            // (document.getElementById('tel') as HTMLInputElement).value = resumeData.phone;
            // (document.getElementById('education') as HTMLInputElement).value = resumeData.education;
            // (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;
            // (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;
        }            

            
        }
    
})






    