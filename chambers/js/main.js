const date_now = new Date();

const full_date = new Intl.DateTimeFormat ('en-US', {dateStyle: 'full'}).format(date_now);

document.querySelector('.date').textContent = full_date;

console.log(full_date);

//click event
function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

let date = new Date();
let year = date.getFullYear();
document.querySelector(".year").textContent = year;

let oLastModified = document.lastModified;
document.querySelector('.updated').textContent = oLastModified;

if (date.getDay() == 1 || date.getDay() == 2) {
    document.querySelector('#banner').style.display = 'block';
}

//weather updates

let temp = document.querySelector('#t').textContent;
let windspeed = document.querySelector('#ws').textContent;
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
if (temp < 50 & windspeed > 3) {
    document.querySelector('#wc').textContent = chill;
} 
    else {
        chill='N/A';
    }

//join form
const feedbackElement = document.getElementById('feedback');
    const formElement = document.forms[0];
    formElement.addEventListener('submit', function(e){
        e.preventDefault();
        feedbackElement.innerHTML='Hello '+ formElement.user_name.value +'! Thank you for your message. We will get back with you as soon as possible!'
        feedbackElement.style.display="block";
        const footerElement = document.getElementById('footer');
        footerElement.setAttribute("class", "moveDown");
        console.log(footerElement);
    })