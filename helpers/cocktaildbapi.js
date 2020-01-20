import Cocktail from "../domain/Cocktail";

const rootEndpoint = "https://www.thecocktaildb.com/api/json/v1/1";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const _createCocktail = drink => {
  return new Cocktail(
    drink.idDrink,
    drink.strDrink,
    drink.strDrinkThumb,
    drink.strInstructions
  );
};

const _createCocktails = drinks => {
  let cocktails = [];
  drinks !== null &&
    drinks.forEach(drink => {
      // Add new cocktail at beginning of list
      cocktails = [_createCocktail(drink), ...cocktails];
    });
  return cocktails;
};

export const searchCocktailsByName = name =>
  // API handles trailing spaces as ordinary characters: we remove them
  fetch(`${rootEndpoint}/search.php?s=${name.trim()}`, { headers })
    .then(response => response.json())
    .then(jsonResponse => jsonResponse.drinks)
    .then(drinks => _createCocktails(drinks))
    .catch(error => {
      console.error(error);
    });

export const searchCocktailsByIngredientName = name =>
  // API handles trailing spaces as ordinary characters: we remove them
  fetch(`${rootEndpoint}/filter.php?i=${name.trim()}`, { headers })
    // FIXME: JSON parse error when ingredient is not found
    .then(response => response.json())
    .then(jsonResponse => jsonResponse.drinks)
    .then(drinks => _createCocktails(drinks))
    .catch(error => {
      console.error(error);
    });

export const findCocktailById = id =>
  fetch(`${rootEndpoint}/lookup.php?i=${id}`, { headers })
    .then(response => response.json())
    .then(jsonResponse => jsonResponse.drinks)
    .then(drinks => _createCocktail(drinks[0]))
    .catch(error => {
      console.error(error);
    });
