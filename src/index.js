import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const debounceValue = debounce(searchCountry, DEBOUNCE_DELAY)

const searchForm = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchForm.addEventListener('input', debounceValue);

function searchCountry(event) {
    event.preventDefault();
        const name = event.target.value.trim();

        if (!name.length) {
            return;
          }
       
        fetchCountries(name)
            .then(renderListCountries)
            .catch ((error) => {
                clearData();
                Notify.failure("Oops, there is no country with that name");
            });    
}

function renderListCountries(countries) {
   
    if (countries.length > 10) {
        clearData();
        Notify.info('Too many matches found. Please enter a more specific name.');          
    } else if (countries.length > 1 && countries.length <= 10) {
        clearData();
        showCountriesList(countries);
    } else if (countries.length === 1) {
        clearData();
        showCountriesInfo(countries);
    }
}

function showCountriesList(countries) {
    const markup = countries
    .map((country) => {
       return `
       <li class="country__item">
            <img src='${country.flags[0]}' 
            width="80px" 
            height="50px"/>
            <span>${country.name.official}</span>
       </li>                
        `;
    })
    .join('');
    countryList.innerHTML = markup;
}

function showCountriesInfo(countries) {
    clearData();
    const markup = countries
    .map((country) => {
        return `<ul>
        <li>
            <img src='${country.flags[0]}' 
            width="150px" 
            height="70px"/>
            <p style="text-transform: uppercase; font-weight: 700; font-size: large;">${country.name.official}</p>    
        </li>
        <li>
            <p><span style="font-weight:700;">Capital:</span> ${country.capital}</p>
        </li>
        <li>
            <p><span style="font-weight:700;">Population:</span> ${country.population}</p>
        </li>
        <li>    
            <p><span style="font-weight:700;">Languages:</span> ${Object.values(country.languages).join(' ')}</p>
        </li>
        </ul>`
    })
    .join('');
    countryInfo.innerHTML = markup;
}

function clearData() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}


