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
    console.log(uploadBtn.files[0]);
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

nextBtn.forEach(button=>{
    button.addEventListener('click', ()=> {
        changeStep('next');
    })
})
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
    console.log(index);
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

// f1NextBtn.addEventListener('click', (e) => {
//     let Error = [];
//     let res = /^[ა-ჰ]+$/.test(fname.value);
//     // first and last name validation
//     minTwoSymb(fname);
//     minTwoSymb(lastName);
//     function minTwoSymb(x){
//         if(x.value.length < 2 || x.value === ''|| res === false){
//             x.style.borderColor = "#EF5050";
//             let labelClass = '.' + x.id + '_name';
//             console.log(labelClass)
//             console.log(x.id);
//             document.querySelector(labelClass).style.color = "#EF5050";
//             Error.push('Error');
//         }else{
//             x.style.borderColor = "#98E37E";
//         }
//     }
//     // upload photo validation
//     if(document.querySelector('#upload-btn').value == ''){
//         document.querySelector('#upload_text').style.color = "#EF5050";
//         document.querySelector('.warningicon').style.display = "block";
//         Error.push('Error');
//     }else{
//         document.querySelector('.uploaded').style.display = "block";
//     }

//     // email validation

//     let checkEmail = /^[a-zA-Z0-9.]+@redberry.ge$/.test(email.value);
//     console.log(checkEmail);
//     if(email.value === '' || checkEmail === false){
//         email.style.borderColor = "#EF5050";
//         document.querySelector('.labl_email').style.color = "#EF5050";
//         Error.push('Error');
//     }else{
//         email.style.borderColor = "#98E37E";
//     }

//     // phone validation
//     // რეჯექსია გასასწორებელი ყოველთვის ფოლსია
//     let chackPhone = phone.value.match(/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/);
//     console.log(chackPhone);
//     if(phone.value === ''|| chackPhone === false){
//         phone.style.borderColor = "#EF5050";
//         document.querySelector('.phone-lab').style.color = "#EF5050";
//         Error.push('Error');
//     }else{
//         phone.style.borderColor = "#98E37E";
//     }

//     // button validation
//     if(Error.length > 0){
//         // button.addEventListener('click', function(e){
//         //     e.preventDefault();
//         // })
//         steps.indexOf(document.querySelector('form .step.active')) = 0;
//     }
// })


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




