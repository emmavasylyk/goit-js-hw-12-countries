// const BASE_URL = 'https://restcountries.com/v2/';

// function fetchCountries(name){
// return fetch(`${BASE_URL}/name/${name}`).then(response =>
//     response.json()
// )}

// export default { fetchCountries };

// import { alert, defaultModules } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import * as PNotifyMobile from '@pnotify/mobile';
// import '@pnotify/mobile/dist/PNotifyMobile.css';


const BASE_URL = 'https://restcountries.com/v2';

function fetchCountries(countryName){
    return fetch(`${BASE_URL}/name/${countryName}`).then(response => 
            response.json()
     
    )
}

// var status = function (response) {
//   if (response.status !== 200) {
//     return Promise.reject(new Error(response.statusText))
//   }
//   return Promise.resolve(response)
// }
// var json = function (response) {
//   return response.json()
// }

// function fetchCountries(countryName) {
//     return fetch(`${BASE_URL}/name/${countryName}`)
//         .then(status)
//         .then(json)
//         .then(function (data) {
//             console.log('data', data)
//         })
//         .catch(function (error) {
//             console.log('error', error)
//         })
// }
// console.log(fetchCountries('switzerland'));
export default { fetchCountries }



