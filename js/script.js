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
    select.classList.toggle('hidden')
}

options.forEach(function(option){
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
    // console.log(uploadBtn.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
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




// filling out the CV

// page 1 info

const fname = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const phone = document.querySelector('#tel');
const f1NextBtn = document.querySelector('.f1_nectbtn');
// page 2 info

const position = document.querySelector('#position');
const employer = document.querySelector('#employer');
const startDate = document.querySelector('#start_date');
const endDate = document.querySelector('#end_date');
const aboutWork = document.querySelector('#about_work');
const f2NextBtn = document.querySelector('.f2_nextbtn');

// page 3 info

const aducationSpace = document.querySelector('#education_speace');


// page 1 validation
let PersonData = [];

// first page Errors
let p1Error = [];

// first and last name validation

// console.log('')
fname.addEventListener("focusout", () =>{
    let res = /^[ა-ჰ]+$/.test(fname.value);
    let labelClass = '.' + fname.id + '_name';
    if(fname.value.length < 2 || fname.value == ''|| res === false){
        fname.style.borderColor = "#EF5050";
        document.querySelector(labelClass).style.color = "#EF5050";
        fname.classList.add('invalid');
        p1Error.firstname = false;
    }else{
        fname.style.borderColor = "#98E37E";
        document.querySelector(labelClass).style.color = "#000000";
        fname.classList.add('valid');
        PersonData.FirstName = fname.value;
        p1Error.firstname = true
    }
    return p1Error
});

lastName.addEventListener("focusout", () =>{
    let res = /^[ა-ჰ]+$/.test(lastName.value);
    let labelClass = '.' + lastName.id + '_name';
    if(lastName.value.length < 2 || lastName.value === ''|| res === false){
        lastName.style.borderColor = "#EF5050";
        document.querySelector(labelClass).style.color = "#EF5050";
        lastName.classList.add('invalid');
        p1Error.lastname = false;
    }else{
        lastName.style.borderColor = "#98E37E";
        document.querySelector(labelClass).style.color = "#000000";
        lastName.classList.add('valid');
        PersonData.LastName = lastName.value;
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
        p1Error.Email = false;
    }else{
        email.style.borderColor = "#98E37E";
        email.classList.add('valid');
        PersonData.email = email.value;
        p1Error.Email = true;
    }
  
})

// phone validation

phone.addEventListener("focusout", () => {
    let chackPhone = phone.value.match(/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/);
    if(phone.value === ''|| chackPhone === false){
        phone.style.borderColor = "#EF5050";
        document.querySelector('.phone-lab').style.color = "#EF5050";
        phone.classList.add('invalid');
        p1Error.Phonenumber = false;
    }else{
        phone.style.borderColor = "#98E37E";
        phone.classList.add('valid');
        PersonData.phone = phone.value;
        p1Error.Phonenumber= true;
    }
    return p1Error
})


// if input is empty
mybtn.addEventListener('click', (e) =>{
    if(document.querySelector('#upload-btn').value == ''){
        document.querySelector('.warningicon').style.display = "block";
        p1Error.image = false;
    }else{
        document.querySelector('.uploaded').style.display = "block";
        p1Error.image = true;
    }
    const emptyInput = document.querySelector('#form1').querySelectorAll('input');
    for(x=0; x<emptyInput.length; x++){
        console.log(emptyInput[x]);
        if(emptyInput[x].value == ''){
            emptyInput[x].style.borderColor = "#EF5050";
            emptyInput[x].classList.add('invalid');
        }
    }

})

// button validation

mybtn.addEventListener('click', () =>{
    
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


// ---------------------------------------------------------------------------------------------------------------------

// page 2 validation
// f2NextBtn.addEventListener('click', (e) => {
//     let F2error = [];

//     if(position.value === ''|| position.value.length < 2){
//         position.style.borderColor = "#EF5050";
//         document.querySelector('.position-labl').style.color = "#EF5050";
//     }else{
//        position.style.borderColor = "#98E37E"; 
//     }
 
//     // button validation
//     if(F2error.length > 0){
//         nextBtn.addEventListener('click', function(e){
//             e.preventDefault();
//         })
//     }
// })

const persons = [];
const person = {firstName:"John", lastName:"Doe", age:46};
const persontwo = {firstName:"John", lastName:"Doe", age:46};
person.favcolor = 'green';

// Object.values(person).forEach(val => console.log(val));
// console.log('fghjk')
// persons.push(persontwo);
// persons.push(person);
// console.log(persons);



