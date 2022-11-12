//ASYNC AWAIT Fetch

const requestURL = 'https://aubriedoxey.github.io/wdd230/chambers/data.json';

async function getBusiness(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const businesses = jsObject['businesses'];
        businesses.forEach(displayBusiness);
        businesses.forEach(displayBusinessTable);
    
    }
};

getBusiness(requestURL);

function displayBusiness(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = item.name;

    address.textContent = item.address;

    phone.textContent = item.phone;

    website.textContent= item.website;

    img.setAttribute('src', item.imageurl);
    img.setAttribute('alt', item.name + ' Logo')

    card.appendChild(h2);
    // document.querySelector('.card').appendChild(card);

    card.appendChild(address);
    // document.querySelector('.card').appendChild(card);

    card.appendChild(phone);
    // document.querySelector('.card').appendChild(card);

    card.appendChild(website);
    // document.querySelector('.card').appendChild(card);

    card.appendChild(img);
    document.querySelector('.card').appendChild(card);

    // card.forEach((item)=> {
    //     item.remove();
    
    // })
}
function displayBusinessTable(item) {
    let table = document.createElement('tr');
    let name = document.createElement('td');
    let address = document.createElement('td');
    let phone = document.createElement('td');
    let website = document.createElement('td');

    name.textContent = item.name;

    address.textContent = item.address;

    phone.textContent = item.phone;

    website.textContent= item.website;

    table.appendChild(name);
    // document.querySelector('.businesses').appendChild(table);

    table.appendChild(address);
    // document.querySelector('.businesses').appendChild(table);

    table.appendChild(phone);
    // document.querySelector('.businesses').appendChild(table);

    table.appendChild(website);
    document.querySelector('.businesses').appendChild(table);

    // card.forEach((item)=> {
    //     item.remove();
    
    // })
}

function showBusiness(item) {
    document.querySelector('.businesses').style.display="table";    
    document.querySelector('.card').style.display="none";    
}
function showCard(item) {
    document.querySelector('.card').style.display= "grid";    
    document.querySelector('.businesses').style.display="none";    

}