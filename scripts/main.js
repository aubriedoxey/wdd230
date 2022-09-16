let date = new Date();
let year = date.getFullYear();
console.log(year);
document.querySelector('year').textContent = year;

let currentdate = document.lastModified;
console.log(currentdate);

document.querySelector('updated').textContent = currentdate;
