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
    toggleHidden();
}

// show upload img

const uploadBtn = document.getElementById("upload-btn");
const chosenImage = document.getElementById("chosen_image");


uploadBtn.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadBtn.files[0]);
    console.log(uploadBtn.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src", reader.result);
    }
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