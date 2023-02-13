// form drop down for quality

const button = document.querySelector('#button');
const select = document.querySelector('#dropdown');
const options = document.querySelectorAll('.option');
const selectLabel = document.querySelector('#select-label');

button.addEventListener('click', function(e){
    e.preventDefault();
    toggleHidden();
})

function toggleHidden(){
    select.classList.toggle('hidden');
}

options.forEach(function(option){
    // console.log(option)
    option.addEventListener('click', function(e){
        setSelectTitle(e);
    })
})

function setSelectTitle(e){
    const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerHTML;
    selectLabel.innerHTML = labelElement;
    selectLabel.style.color = "#1A1A1A";
    // fill cv
    document.getElementById("edu-quality").innerHTML = ", " + selectLabel.innerHTML;
    toggleHidden();
}

// show upload img

const uploadBtn = document.getElementById("upload-btn");
const chosenImage = document.getElementById("chosen_image");
document.getElementById("personimg").style.display = "none";

uploadBtn.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadBtn.files[0]);
    console.log(uploadBtn.files[0].name);
    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
        console.log(reader.result);
    }
    document.getElementById("personimg").style.display = "block";
}



// change forms page

const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .previous-btn');
const form = document.querySelector('form');

function changepage(){
    nextBtn.forEach(button=>{
        button.addEventListener('click', ()=> {
            changeStep('next');
        })
    })
}

prevBtn.forEach(button=> {
    button.addEventListener('click', ()=> {
        changeStep('prev')
    })
})

function changeStep(btn) {
    let index = 0;
    const active = document.querySelector('form .step.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active');
    if(btn === 'next'){
        index++;
    }else if(btn === 'prev'){
        index--;
    }
    steps[index].classList.add('active');
    // console.log(index);
}


// აიდიებია გასასწორებელი ქაუნთერ ცვლადით დიდი ალბათობით ------------
// add more experience
const experienceDiv = document.querySelector('.experience');
const experiensInCv = document.querySelector('.work');
const AddExperience = document.querySelector('.exper_1');

function addExperience() {
    experienceDiv.insertAdjacentHTML('afterend', experienceDiv.innerHTML);
    experiensInCv.insertAdjacentHTML('afterend', AddExperience.innerHTML);
}   

// აიდიებია გასასწორებელი ქაუნთერ ცვლადით დიდი ალბათობით -----------
//   add more education
const educationDIv = document.querySelector('.education');
const educationInCv = document.querySelector('.educationCv');
const AddAducation = document.querySelector('.educ_1');

function addEducation() {
    educationDIv.insertAdjacentHTML('afterend', educationDIv.innerHTML);
    educationInCv.insertAdjacentHTML('afterend', AddAducation.innerHTML);
}


// data object -------------------------------
let PersonData ={};
PersonData.experiences =[];
PersonData.educations = [];

// page 1 validation ---------------------------------------------------
const fname = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const phone = document.querySelector('#tel');
const aboutMe = document.querySelector('#about_Me');
const f1NextBtn = document.querySelector('.f1_nectbtn');

// first page Errors
let p1Error = [];

// first and last name validation
fname.addEventListener("focusout", () =>{
    let res = /^[ა-ჰ]+$/.test(fname.value);
    let labelClass = '.' + fname.id + '_name';
    if(fname.value.length < 2 || fname.value == ''|| res === false){
        fname.style.borderColor = "#EF5050";
        fname.classList.add('invalid');
        fname.classList.remove('valid');
        p1Error.firstname = false;
    }else{
        fname.style.borderColor = "#98E37E";
        fname.classList.add('valid');
        fname.classList.remove('invalid');
        PersonData.name = fname.value;
        p1Error.firstname = true
    }
    return p1Error
});

lastName.addEventListener("focusout", () =>{
    let res = /^[ა-ჰ]+$/.test(lastName.value);
    let labelClass = '.' + lastName.id + '_name';
    if(lastName.value.length < 2 || lastName.value === ''|| res === false){
        lastName.style.borderColor = "#EF5050";
        lastName.classList.add('invalid');
        lastName.classList.remove('valid');
        p1Error.lastname = false;
    }else{
        lastName.style.borderColor = "#98E37E";
        lastName.classList.add('valid');
        lastName.classList.remove('invalid');
        PersonData.surname = lastName.value;
        p1Error.lastname = true;
    }
  
});

// email validation


email.addEventListener("focusout", () => {
    let checkEmail = /^[a-zA-Z0-9.]+@redberry.ge$/.test(email.value);
    if(email.value === '' || checkEmail === false){
        email.style.borderColor = "#EF5050";
        document.querySelector('.labl_email').style.color = "#EF5050";
        email.classList.add('invalid');
        email.classList.remove('valid')
        p1Error.Email = false;
    }else{
        email.style.borderColor = "#98E37E";
        email.classList.add('valid');
        email.classList.remove('invalid');
        PersonData.email = email.value;
        p1Error.Email = true;
    }
  
})

// phone validation

phone.addEventListener("focusout", () => {
    let chackPhone = phone.value.match(/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/);
    if(phone.value === ''|| chackPhone === false){
        phone.style.borderColor = "#EF5050";
        phone.classList.add('invalid');
        p1Error.Phonenumber = false;
    }else{
        phone.style.borderColor = "#98E37E";
        phone.classList.add('valid');
        PersonData.phone_number = phone.value;
        p1Error.Phonenumber= true;
    }
    return p1Error
})


// if input is empty
f1NextBtn.addEventListener('click', (e) =>{
    console.log(document.querySelector('#upload-btn').value);
    if(document.querySelector('#upload-btn').value == ''){
        document.querySelector('.warningicon').style.display = "block";
        p1Error.image = false;
    }else{
        document.querySelector('.uploaded').style.display = "block";
        p1Error.image = true;
    }
    if(aboutMe.value !== ''){
        PersonData.about_me = aboutMe.value;
    }
    const emptyInput = document.querySelector('#form1').querySelectorAll('input');
    for(x=0; x<emptyInput.length; x++){
        // console.log(emptyInput[x]);
        if(emptyInput[x].value == ''){
            emptyInput[x].style.borderColor = "#EF5050";
            emptyInput[x].classList.add('invalid');
            p1Error.emptyInput = false;
        }else{
            p1Error.emptyInput = true;
        }
        // console.log(p1Error);
    }

})

// button validation

f1NextBtn.addEventListener('click', () =>{
    
    let form1Error = true;

    Object.values(p1Error).forEach(val => {
        if(val === false){
            form1Error = false;
        }
    });  
    if(form1Error === true){
        steps[0].classList.remove('active');
        steps[1].classList.add('active');
    }

})


// page 2 validation ---------------------------------------------
const position = document.querySelector('#position');
const employer = document.querySelector('#employer');
const startDate = document.querySelector('#start_date');
const endDate = document.querySelector('#end_date');
const aboutWork = document.querySelector('#about_work');
const f2NextBtn = document.querySelector('.f2_nextbtn');

// second page error object
p2Error = [];

// position
position.addEventListener("focusout", () => {
    if(position.value.length < 2 ){
        position.style.borderColor = "#EF5050";
        position.classList.add('invalid');
        p2Error.position = false;
    }else{
        position.style.borderColor = "#98E37E";
        position.classList.add('valid');
        PersonData.experiences.push({});
        PersonData.experiences[0].position = position.value;
        p2Error.position = true;
    }
    return p2Error
})
// employer
employer.addEventListener("focusout", () => {
    if(employer.value.length < 2 ){
        employer.style.borderColor = "#EF5050";
        employer.classList.add('invalid');
        p2Error.employer = false;
    }else{
        employer.style.borderColor = "#98E37E";
        employer.classList.add('valid');
        PersonData.experiences[0].employer = employer.value;
        p2Error.employer = true;
    }
    return p2Error
})

// start date validation
    startDate.addEventListener('change', () => {
        if(startDate.value == ''){
            startDate.style.borderColor = "#EF5050";
            p2Error.startDate = false;
        }else{
            startDate.style.borderColor = "#98E37E";
            PersonData.experiences[0].start_date = startDate.value;
            p2Error.startDate = true;
        }
        
    })

// end date validation
endDate.addEventListener('change', () =>{
    if(endDate.value == ''){
        endDate.style.borderColor = "#EF5050";
        p2Error.endDate = false;
    }else{
        endDate.style.borderColor = "#98E37E";
        PersonData.experiences[0].due_date = endDate.value;
        p2Error.endDate = true;
    }
    return p2Error
})   

// about position validation
aboutWork.addEventListener("focusout", () => {
if(aboutWork.value == ''){
    aboutWork.style.borderColor = "#EF5050";
    p2Error.aboutWork = false;
    aboutWork.classList.add('invalid');
}else{
    aboutWork.style.borderColor = "#98E37E";
    aboutWork.classList.add('valid');
    PersonData.experiences[0].description = aboutWork.value;
    p2Error.aboutWork = true;
}
return p2Error
})

// if input is empty
f2NextBtn.addEventListener('click', (e) =>{
    if(aboutWork.value == ''){
        aboutWork.style.borderColor = "#EF5050";
        p2Error.aboutWork = false;
        aboutWork.classList.add('invalid');
    }
    // empty input validation
    const empty2Input = document.querySelector('#form2').querySelectorAll('input');
    for(i = 0; i<empty2Input.length; i++){
        if(empty2Input[i].value == ''){
            empty2Input[i].style.borderColor = "#EF5050";
            empty2Input[i].classList.add('invalid');
            p2Error.emptyInput = false;
        }else{
            p2Error.emptyInput = true;
        }

    }
    // console.log(p2Error);

})

// button validation

f2NextBtn.addEventListener('click', () =>{
    let form2Error = true;

    Object.values(p2Error).forEach(val => {
        if(val === false){
            form2Error = false;
        }
    });  
    if(form2Error === true){
        steps[1].classList.remove('active');
        steps[2].classList.add('active')
    }

})



// page 3 validation -----------------------------------------
const educationSpace = document.querySelector('#education_speace');
const EndDateedu = document.getElementById("edu-end-date");
const AboutEdu = document.getElementById("about-edu");
const endbtn = document.querySelector('.submit-btn');

// form 3 error
p3Error = [];

// education space
educationSpace.addEventListener("focusout", () => {
    if(educationSpace.value.length < 2 ){
        educationSpace.style.borderColor = "#EF5050";
        educationSpace.classList.add('invalid');
        p3Error.educationSpace = false;
    }else{
        educationSpace.style.borderColor = "#98E37E";
        educationSpace.classList.add('valid');
        PersonData.educations.push({});
        PersonData.educations[0].institute = educationSpace.value;
        p3Error.educationSpace = true;
    }
    return p3Error
})

// end date
EndDateedu.addEventListener("focusout", () => {
    if(EndDateedu.value.length < 2 ){
        EndDateedu.style.borderColor = "#EF5050";
        p3Error.EndDateedu = false;
    }else{
        EndDateedu.style.borderColor = "#98E37E";
        PersonData.educations[0].due_data = EndDateedu.value;
        p3Error.EndDateedu = true;
    }
    return p3Error
})
// about education
AboutEdu.addEventListener("focusout", () => {
    if(AboutEdu.value.length < 2 ){
        AboutEdu.style.borderColor = "#EF5050";
        AboutEdu.classList.add('invalid');
        p3Error.aboutEdu = false;
    }else{
        AboutEdu.style.borderColor = "#98E37E";
        AboutEdu.classList.add('valid');
        PersonData.educations[0].description = AboutEdu.value;
        p3Error.aboutEdu = true;
    }
    return p3Error
})

// education quality
// console.log(options);
// console.log(typeof(options))

let k = false;
Object.values(options).forEach(val =>{
    val.addEventListener("click", () =>{
        if(val.checked === true){
            document.querySelector('.button').style.borderColor = "#98E37E";
            k = true;
            p3Error.quality = true;
            PersonData.educations[0].degree = val.value;
        }
        // console.log(p3Error);
        return p3Error
    })
})


// if input is empty
endbtn.addEventListener('click', (e) =>{
    // education quality error
    if(k == false){
        document.querySelector('.button').style.borderColor = "#EF5050";
        p3Error.quality = false;
    }

    // empty textarea
    if(AboutEdu.value == ''){
        AboutEdu.style.borderColor = "#EF5050";
        AboutEdu.classList.add('invalid');
        p3Error.aboutEdu = false;
    }

    // empty input validation
    const empty3Input = document.querySelector('#form3').querySelectorAll('input');
    for(i = 0; i<empty3Input.length; i++){
        if(empty3Input[i].value == ''){
            empty3Input[i].style.borderColor = "#EF5050";
            empty3Input[i].classList.add('invalid');
            p3Error.emptyInput = false;
        }else{
            p3Error.emptyInput = true;
        }

    }
    // console.log(p3Error);

})

// end button validation

endbtn.addEventListener('click', () =>{
    let form3Error = true;

    Object.values(p3Error).forEach(val => {
        if(val === false){
            form3Error = false;
        }
    });  
    if(form3Error === true){
        document.querySelector('.form_container').style.display = "none";
        document.querySelector('.fillCV').classList.add('send-resume');
        document.querySelector('.pop-up').style.display = "block";
    }
    // console.log(PersonData);
})

const Form = document.getElementById('form');

// submite
Form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    console.log(PersonData);
    fetch('https://resume.redberryinternship.ge/api/cvs', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(PersonData),
    })

        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
})
// close popup
document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.pop-up').style.display = "none";
})


