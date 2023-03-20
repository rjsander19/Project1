let countryData, userInput;

const $name = $('#name')
const $capital = $('#capital')
const $continents = $('#continents')
const $flag = $('#flag')
const $population = $('#population')
const $languages = $('#languages')

const $input = $('input[type="text"]')

$('form').on('submit', handleGetData);


function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
$.ajax({
  url: `https://restcountries.com/v3.1/name/${userInput}?fullText=true`
}).then(
  (data) => {
   countryData = data[0];
   console.log(countryData)
   render();
  },
  (error) => {
   console.log('bad request: ', error);
  }
)
}

function render() {
    $name.text(countryData.name.common)
    $capital.text(countryData.capital)
    $continents.text(countryData.continents)
    $flag.text(countryData.flag)
    $languages.text(countryData.languages)
    $population.text(countryData.population)
}


// to make languages populate:
// 1. Have a dom element created on the html page ready to receive those newly found languages.
// 2. Grab every key or value in the language object(it’s up to you)
// 3. Use a method on the result of the above step  to append each key to the dom element created on the html page