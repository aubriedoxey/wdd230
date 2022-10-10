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