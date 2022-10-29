const image = document.querySelectorAll('img');

// const io = new IntersectionObserver (
//     (entries, io) => {
//         entries.forEach(entry => {
//             console.log(entries);
//         }) 
//     },
//     {
//         threshold: [.5]
//     }
// );
// image.forEach(image => {
//     io.observe(image);    
// })

const pimages = document.querySelectorAll('[data-src]');
const options = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"
}

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }
    img.src = source;
}
const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
    },options
);
pimages.forEach(image => {
    io.observe(image);    
})

//local storage

// localStorage.setItem('msg1', 'Hello Permanent');

// sessionStorage.setItem('msg2', 'Hi Temporary');

//diff in last visit
// let currDate = new Date("2022-03-25");

// localStorage.setItem('currDate', Date.now());

// let prevDate = localStorage.getItem();

// let difDay;

if (!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your last visit';
} else {
    setStyles();
}

function setStyles() {
    let prevDate = localStorage.getItem('lastvisit');
    // let currDate = Date.now();
    let currDate = new Date('2022-04-24');

    let difference = prevDate - currDate;
        let daysDifference = Math.floor(difference/1000/60/60/24);
        console.log(daysDifference);
    
    document.getElementById('diff').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());
}
