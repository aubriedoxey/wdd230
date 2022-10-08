const date_now = new Date();

const full_date = new Intl.DateTimeFormat ('en-US', {dateStyle: 'full'}).format(date_now);

document.querySelector('.date').textContent = full_date;

console.log(full_date);

//click event
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classlist.toggle("responsive");
}

let date = new Date();
let year = date.getFullYear();
document.querySelector(".year").textContent = year;

let oLastModified = document.lastModified;
document.querySelector('.updated').textContent = oLastModified;