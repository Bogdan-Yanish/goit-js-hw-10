// const fetchCountries = name => {
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (data.length > MAX_CONTRIES) {
//           throw new Error(MORE_MAX);
//         }
//         renderCountiesListItems(data);
//       })
//       .catch(error => {
//         if (error.message === '404') {
//           clearAll();
//           Notiflix.Notify.failure('Oops, there is no country with that name');
//         }
//         if (error.message === MORE_MAX) {
//           clearAll();
//           Notiflix.Notify.info(
//             'Too many matches found. Please enter a more specific name.'
//           );
//         }
//       });
//   };
  
//   function renderCountiesListItems(countries) {
//     let markup = '';
//     const isOne = countries.length === 1;
  
//     countryListRef.style.listStyle = 'none';
//     countryListRef.style.margin = '0';
//     countryListRef.style.padding = '0';
  
//     clearAll();
  
//     const fontSize = isOne ? '48px' : '30px';
  
//     markup = countries
//       .map(
//         country =>
//           `<li style="margin-botton:100px;display:flex;align-items:center">
//               <img style="display:block" src="${country.flags.svg}" alt="Flag of ${country.name.official}" width = 70 height = 35 />
//               <h1 style="font-size:${fontSize};margin:0;margin-left:16px;font-weight:700">${country.name.official}</h1>
//               </li>`
//       )
//       .join('');
  
//     countryListRef.insertAdjacentHTML('beforeend', markup);
  
//     if (isOne) {
//       markup = countries
//         .map(
//           country =>
//             `<p style="fontSize:16px"><b style="fontSize: 16px; fontWeight: 500">Capital: </b>${
//               country.capital
//             }</p>
//                       <p style="fontSize:16px"><b style="fontSize: 16px; fontWeight: 500">Population: </b>${
//               country.population
//             }</p>
//                       <p style="fontSize:16px"><b style="fontSize: 16px; fontWeight: 500">Languages: </b>${Object.values(
//               country.languages
//             ).join(', ')}</p>`
//         )
//         .join('');
  
//       countryInfoRef.insertAdjacentHTML('beforeend', markup);
//     }
//   }
//   =======================================================================================================
// fetchCountries(target.value.trim())
//     .then(data => {
//       if (data.length > 10) {
//         return Notiflix.Notify.info(
//           `Too many matches found. Please enter a more specific name.`
//         );
//       } else if (data.length >= 2 && data.length <= 10) {
//         insertMarkup(renderList(data));
//         refs.countryList.addEventListener('click', showInfo);
//       } else if (data.length === 1) {
//         insertMarkup(renderInfo(data));
//         refs.countryList.removeEventListener('click', showInfo);
//       }
//     })
//     .catch(error => {
//       console.log(error);
//       Notiflix.Notify.failure('Oops, there is no country with that name');
//     });
// }

// function showInfo(e) {
//   const { target } = e;
//   fetchCountries(target.textContent.trim()).then(data =>
//     insertMarkup(renderInfo(data))
//   );
//   refs.search.value = target.textContent.trim();
//   refs.countryList.removeEventListener('click', showInfo);
// }

// function renderList(array) {
//   return array.reduce((acc, { flags, name }) => {
//     acc += `<li class="item">
//     <img width="40px" src="${flags.svg}">
//     ${name.official}
//     </li>`;
//     return acc;
//   }, '');
// }
// function renderInfo(array) {
//   return array.reduce(
//     (acc, { name, flags, capital, population, languages }) => {
//       acc += `<li class="item-info">
//       <h2>
//       <img width="60px" src="${flags.svg}">
//       ${name.official}
//       </h2>
//       <p><span>Capital:</span> ${capital}</p>
//       <p><span>Population:</span> ${population}</p>
//       <p><span>Languages:</span> ${Object.values(languages).join(', ')}</p>
//       </li>`;
//       return acc;
//     },
//     ''
//   );
// }

// ===============================================================================================================
// fetchCountries(query)
// .then(countries => {
//   handleCountriesResponce(countries);
// })
// .catch(() => {
//   resetCountryMarkup();
//   Notify.failure('Oops, there is no country with that name', notifyOptions);
// });
// };

// function handleCountriesResponce(items) {
// resetCountryMarkup();
// if (items) {
// if (items.length > 10) {
//   Notify.info(
//     'Too many matches found. Please enter a more specific name.',
//     notifyOptions
//   );
// } else if (items.length > 2) {
//   items.forEach(item => {
//     const markup = baseMarkup(item);
//     refs.list.insertAdjacentHTML('beforeend', markup);
//   });
// } else if (items.length === 1) {
//   const markup = countryMarkup(items[0]);
//   refs.div.insertAdjacentHTML('beforeend', markup);
// }
// }
// }
// function baseMarkup({ flags, name }) {
//     return /*html*/ `<li class="country-list__item">
//       <img
//         class="country-list__flag"
//         width="30px"
//         height="20px"
//         src="${flags[0]}"
//       ></img>
//       <p class="country-list__name">${name.official}</p>
//     </li>`;
//   }
  
//   function countryMarkup({ flags, name, capital, population, languages }) {
//     const languageStr = Object.values(languages).join(' ');
  
//     return /*html*/ `<div class="country-list__item">
//       <img
//         class="country-list__flag"
//         width="60px"
//         height="40px"
//         src="${flags[0]}"
//       ></img>
//       <p class="country-list__name accent">${name.official}</p>
//     </div>
//     <div class = 'description'>
//             <p class ="description__name">Capital: <span>${capital}</span></p>
//             <p class ="description__name">Population: <span>${population}</span></p>
//             <p class ="description__name">Languages: <span>${languageStr}</span></p>
//         </div>`;
//   }
  
//   export { baseMarkup, countryMarkup };