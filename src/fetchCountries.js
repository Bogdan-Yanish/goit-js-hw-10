export function fetchCountries(name) {
  return fetch('https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags.svg,languages')
  // return fetch('https://restcountries.com/v3.1/name/${name}')
  // return fetch('https://restcountries.com/v3.1/name')
  // return fetch('https://restcountries.com/v3.1/all')
  .then((response) => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
  });
}