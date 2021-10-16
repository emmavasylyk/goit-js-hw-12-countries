// import './sass/main.scss';

import API from './js/fetchCountries'
import markupCard from './templates/markup.hbs';
import markupListCountry from './templates/markup-list-country.hbs'
import getRefs from './js/get-refs';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';



const refs = getRefs();

let debounce = require('lodash.debounce');
refs.inputRef.addEventListener('input', debounce(onSearch, 500))

function onSearch(e) {
  onClearRenderCountryList()
    e.preventDefault();

  API.fetchCountries(e.target.value.trim()).then(checkCountry).then(statusCountry).catch(onFetchError)
}

function renderCountryCard(country) {
  const markup = markupCard(country);
  refs.cardContainer.innerHTML = markup;
}

function renderCountryList(country) {
  const listCountryMarkup = markupListCountry(country)
  refs.listCountry.innerHTML = listCountryMarkup
}

function onClearRenderCountryList() {
  refs.listCountry.innerHTML = ''
}

function checkCountry(country) {
  if (country.length > 10) {
    error({
  title: 'Too many matches found. Please enter a more specific query!'
});
    } else if (country.length === 1){
      renderCountryCard(country)
    } else if (country.length <= 10){
      renderCountryList(country)
    }
}
  
const statusCountry = function (country) {
  if (country.status !== 200) {
    return Promise.reject(new Error(country.statusText))
  }
  return Promise.resolve(country)
}

function onFetchError(error) {
  error
}
