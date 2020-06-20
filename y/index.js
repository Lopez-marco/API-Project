// const baseURL='https://api.spoonacular.com/food/jokes/random?apiKey=e9ebe15726214da1913ecfe2a16d67e4';


// fetch(baseURL)
// .then(function(response){
// return response.json();
// })
// .then(function(json){
//     console.log(json)
// });

// const searchURL = "https://api.spoonacular.com/food/videos/search";
const searchURL = "https://api.spoonacular.com/recipes/search";
const key = 'e9ebe15726214da1913ecfe2a16d67e4'
let url;

const search = document.querySelector('.search');
const searchForm = document.querySelector('form');
const sumbmit = document.querySelector('.submit');

const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults)
// let searchterm = 'meat'
function fetchResults(e){
    e.preventDefault(); 
    // url = searchURL + '?query=' + search + '?api-key=' + key;
    url = searchURL  + '?apiKey=' + key+ '&query=' + search.value;
    console.log("URL:", url);

    fetch(url)
    .then(function(result) {
        return result.json();
    }).then (function(json){
        console.log(json);
        // displayResults(json);
    });
}