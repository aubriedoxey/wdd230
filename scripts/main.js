let date = new Date();
let year = date.getFullYear();
//document.querySelector("year").textContent = year;
document.getElementById("year").textContent=year;

let oLastModified = document.lastModified;
//document.querySelector('updated').textContent = oLastModified;
document.getElementById("updated").textContent=oLastModified;