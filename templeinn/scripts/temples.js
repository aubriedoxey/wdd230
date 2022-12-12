//ASYNC AWAIT Fetch

const requestURL = 'https://aubriedoxey.github.io/wdd230/templeinn/temple.json';

async function getTemples(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const temples = jsObject['temples'];
        temples.forEach(displayTemples);
    
    }
};

getTemples(requestURL);

function displayTemples(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let services = document.createElement('p');
    let history = document.createElement('p');
    let ordinance = document.createElement('p');
    let session = document.createElement('p');
    let closure = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = item.name;
    console.log(item.name);
    address.textContent = item.address;

    phone.textContent = item.phone;

    services.textContent= item.services;

    history.textContent = item.history;

    ordinance.textContent = item.ordinance;

    session.textContent = item.session;

    closure.textContent = item.closure;

    img.setAttribute('src', item.imageurl);
    img.setAttribute('alt', item.name)

    card.appendChild(h2);
    // document.querySelector('.card').appendChild(card);

    card.appendChild(address);
    // document.querySelector('.card').appendChild(card);

    card.appendChild(phone);
    // document.querySelector('.card').appendChild(card);

    card.appendChild(services);
    // document.querySelector('.card').appendChild(card);
    card.appendChild(history);
    card.appendChild(ordinance);
    card.appendChild(session);
    card.appendChild(closure);
    card.appendChild(img);
    document.querySelector('.card').appendChild(card);

    // card.forEach((item)=> {
    //     item.remove();
    
    // })
}
function showCard(item) {
    document.querySelector('.card').style.display= "grid";    
    document.querySelector('.temples').style.display="none";    

}