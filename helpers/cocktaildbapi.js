const rootEndpoint = "https://www.thecocktaildb.com/api/json/v1/1";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const searchCocktailsByName = name =>
  // API handles trailing spaces as ordinary character: we remove them
  fetch(`${rootEndpoint}/search.php?s=${name.trim()}`, { headers })
    .then(response => response.json())
    .then(response => response.drinks)
    .catch(error => {
      console.error(error);
    });
