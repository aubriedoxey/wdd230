if (!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.getElementById('diff').textContent = 'This is your first visit';
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





if (!localStorage.getItem('boston')) {
    localStorage.setItem('boston', 'like');
    document.getElementById('diff').textContent = 'This is your first visit';
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