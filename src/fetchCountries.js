export default function fetchCountries(name) {
    fetch('https://restcountries.com/v2/all')
  .then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Success:', data);
  })
  .catch ((error) => {
    console.error('Error:', error);
  })
};