let countryData, userInput;

const $name = $('#name')
const $capital = $('#capital')
const $continents = $('#continents')
const $languages = $('#languages')
const $flag = $('#flag')
const $population = $('#population')








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
    $languages.text(countryData.languages.eng)
    $flag.text(countryData.flag)
    $population.text(countryData.population)
}
