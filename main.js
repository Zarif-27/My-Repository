fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountrys(data))


const displayCountrys = (countrys) => {
    const countrysDiv = document.getElementById('section-id');
    for (c of countrys) {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${c.name.common}</h3>
        <p>${c.capital}</p>
        <button onclick="displayCountryDetails('${c.cca2}')">Details</button>
        `
        countrysDiv.appendChild(div);

    }


}


const displayCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchCountry(data[0]))


}

const searchCountry = (data) => {

    const countryDiv = document.getElementById('show');
    const createNewDiv = document.createElement('div');
    createNewDiv.innerHTML = `
    <h1>${data.name.common}</h1>
    <p>${data.capital}</p>
    <img src="${data.flags.png}">
    `
    countryDiv.appendChild(createNewDiv);

}