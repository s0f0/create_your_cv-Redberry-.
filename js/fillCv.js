// fill cv ------------------------------------------------------
// page 1
const firstname = document.querySelector('#fname');
const last_Name = document.querySelector('#lname');
const personEmail = document.querySelector('#email');
const PersonPhone = document.querySelector('#tel');
const AboutMe = document.getElementById('about_Me');
// page 2
const CVposition = document.querySelector('#position');
const workPlace = document.querySelector('#employer');
const WstartDate = document.querySelector('#start_date');
const WendDate = document.querySelector('#end_date');
const AboutWork = document.querySelector('#about_work');
// const f2NextBtn = document.querySelector('.f2_nextbtn');
// page 3
const eduSpace = document.querySelector('#education_speace');
const eduEndDate = document.getElementById("edu-end-date");
const aboutEdu = document.getElementById("about-edu");

// personal information ------------------
// first name
firstname.addEventListener('keyup', () => {
    document.getElementById("person_fname").innerHTML = firstname.value + " " ;
})
// last name
last_Name.addEventListener('keyup', () =>{
    document.getElementById("person_lname").innerHTML = last_Name.value;
})
// email
personEmail.addEventListener('keyup', () =>{
    document.getElementById("p_email").innerHTML = personEmail.value;
    document.getElementById("email_icon").style.display = "block";
    document.querySelector('.cvhr1').style.display = "block";
})
// phone number
PersonPhone.addEventListener('keyup', () =>{
    document.getElementById("Person_phone").innerHTML = PersonPhone.value;
    document.getElementById("Phone_icon").style.display = "block";
    document.querySelector('.cvhr1').style.display = "block";
})
//  about me 
AboutMe.addEventListener('keyup', () => {
    document.getElementById("about_me").innerHTML = AboutMe.value;
    document.querySelector('.section_h').style.display = "block";
    document.querySelector('.cvhr1').style.display = "block";
})

// experience --------------
// position
CVposition.addEventListener('keyup', () =>{
    document.getElementById('Position').innerHTML = CVposition.value;
    document.querySelector('.Work_experience').style.display = "block";
})
// work speace/employer
workPlace.addEventListener('keyup', () => {
    document.getElementById("Work_place").innerHTML = ", " + workPlace.value;
})
// work date

// start date
WstartDate.addEventListener('change', () => {
    document.getElementById("start-date").innerHTML = WstartDate.value;
})
// end date
WendDate.addEventListener('change', () => {
    document.getElementById("end-date").innerHTML = " - " + WendDate.value;
})
// about work
AboutWork.addEventListener('keyup', () => {
    document.getElementById("aboutwork").innerHTML = AboutWork.value;
    document.querySelector('.cvhr2').style.display = "block";
})

// education -----------------------

eduSpace.addEventListener('keyup', () => {
    document.getElementById("edu-spece").innerHTML = eduSpace.value;
    document.querySelector('.education-h').style.display = "block";
})
// quality speac filling is written in script.js 

// education date 
eduEndDate.addEventListener('change', () => {
    document.getElementById("edu_date").innerHTML = eduEndDate.value;
})
// about aducation
aboutEdu.addEventListener('keyup', () => {
    document.getElementById("aboutedu").innerHTML = aboutEdu.value;
})
