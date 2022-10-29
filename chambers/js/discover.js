const image = document.querySelectorAll('img');

    const pimages = document.querySelectorAll('[data-src]');
    const options = {
        threshold: 1,
        rootMargin: "0px 0px 50px 0px"
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
// let current= Date.now();
// let previous = 1666630622520; 1666631134207
// let difference = current - previous;
// let diffdays=difference/1000/60/60/24;

if (!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your last visit';
} else {
    setStyles();
}

function setStyles() {
    let prevDate = localStorage.getItem('lastvisit');
    let currDate = Date.now();
    // let currDate = new Date('2022-03-24');

    let difference =  currDate - prevDate;
        let daysDifference = Math.floor(difference/1000/60/60/24);
        console.log(daysDifference);
    
    document.getElementById('diff').textContent = daysDifference;

    localStorage.setItem('lastvisit', Date.now());
}