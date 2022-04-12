const baseURL =
  "https://api.spoonacular.com/food/jokes/random?apiKey=e9ebe15726214da1913ecfe2a16d67e4";

let jokebox = document.querySelector(".card");

fetch(baseURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let joke = data.text;
    console.log(joke);

    let box = document.createElement("h1");
    jokebox.appendChild(box);
    box.textContent = joke;
  });

const searchURL = "https://api.spoonacular.com/recipes/search";
const key = "e9ebe15726214da1913ecfe2a16d67e4";
let url;

const search = document.querySelector(".search");
const searchForm = document.querySelector("form");
const sumbmit = document.querySelector(".submit");

const section = document.querySelector("section");

searchForm.addEventListener("submit", fetchResults);

function fetchResults(e) {
  e.preventDefault();
  url = searchURL + "?apiKey=" + key + "&query=" + search.value;
  console.log("URL:", url);

  fetch(url)
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      console.log(json.results);
      displayResults(json);
    });
}

function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  let recipe = json.results;
  if (recipe.length === 0) {
    console.log("No results");
  } else {
    for (let i = 0; i < recipe.length; i++) {
      let img = document.createElement("img");
      let recip = document.createElement("recipe");
      recip.setAttribute("class", "recipe");
      let heading = document.createElement("h2");
      let link = document.createElement("a");
      let para = document.createElement("p");
      let par = document.createElement("p");
      let clearfix = document.createElement("div");
      let card = document.createElement("card");
      let comida = recipe[i];
      console.log("comida:", comida);

      img.src = "https://spoonacular.com/recipeImages/" + comida.image;
      link.textContent = comida.title;
      link.href = comida.sourceUrl;
      para.textContent = `Ready In ` + comida.readyInMinutes + " minutes";
      par.textContent = "Servings: " + comida.servings + " servings";
      clearfix.setAttribute("class", "clearfix");
      card.appendChild(recip);
      recip.appendChild(img);
      section.appendChild(recip);
      recip.appendChild(heading);
      heading.appendChild(link);
      recip.appendChild(para);
      recip.appendChild(par);
      recip.appendChild(clearfix);
    }
  }
}
