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

// function searchCountry(event) {
//     event.preventDefault();
//     const formQuery = event.target.value.trim();
//    
//     fetchCountries(formQuery)
//         .then((countries) => {
//             clearInputCountry();
//             if (countries.length >= 10) {
//                 Notify.info("Too many matches found. Please enter a more specific name.");
//             } else 
//             if (countries.length >= 2) {
//                 const markup = showCountriesList(countries);
//                 countryList.insertAdjacentHTML('beforeend', markup);
//             } else
//             if (countries.length === 1) {
//                 const markup = showCountriesInfo(countries);
//                 countryInfo.insertAdjacentHTML('beforeend', markup);
//             }
//         })
//         .catch ((error) => {
//             clearInputCountry();
//             Notify.failure("Oops, there is no country with that name");
//         });
//     }

// function clearInputCountry() {
//     countryList.innerHTML = '';
//     countryInfo.innerHTML = '';
// }

// function showCountriesList(countries) {
//     return countries
//     .map(country =>
//         `<li>
//             <img style="" src="${country.flag.svg} 
//             alt="Flag of country" 
//             width="70px" 
//             height="40px">
//             <h1 style="">${country.name.official}</h1>    
//         </li>`)
//     .join('');
// }

// function showCountriesInfo(countries) {
//     const languages = Object.values(country.languages).join(' ');
//     return countries
//     .map(country =>
//         `<li>
//             <img style="" src="${country.flag.svg} 
//             alt="Flag of country" 
//             width="70px" 
//             height="40px">
//             <h1 style="">${country.name.official}</h1>    
//         </li>
//         <div>
//             <p>Capital: ${country.capital}</p>
//             <p>Population: ${country.population}</p>
//             <p>Languages: ${country.languages}</p>
//         </div>`)
//     .join('');
// }

// ==================================================================

function searchCountry(event) {
    event.preventDefault();
    const name = event.target.value.trim();
    console.log(name);

    fetchCountries(name)
        .then((data) => {
            console.log("Success:", data);
        })
        .catch ((error) => {
            console.error(error);
            Notify.failure("Oops, there is no country with that name");
        });

}

