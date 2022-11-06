import './css/styles.css';
import fetchCountries from './fetchCountries';
import { debounce } from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
// const debounceValue = _.debounce(searchCountry, DEBOUNCE_DELAY)
const searchForm = document.querySelector('#search-box');

fetchCountries();
 
searchForm.addEventListener('input', searchCountry);

function searchCountry(event) {
    event.preventDefault();
    const form = event.target;
    console.log(form);

}

searchCountry();
