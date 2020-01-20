import { observable, get } from "mobx";
import Cocktail from "../domain/Cocktail";

import {
  searchCocktailsByName,
  searchCocktailsByIngredientName
} from "../helpers/cocktaildbapi";

export default class CocktailStore {
  @observable cocktails;

  searchByName(cocktailName) {
    this.cocktails = [];
    searchCocktailsByName(cocktailName).then(cocktails => {
      // TODO handle no results (undefined array)
      cocktails.forEach(cocktailData => {
        const cocktail = new Cocktail(
          cocktailData.idDrink,
          cocktailData.strDrink,
          cocktailData.strDrinkThumb,
          cocktailData.strInstructions
        );
        this.cocktails = [cocktail, ...this.cocktails];
      });
    });
  }

  searchByIngredient(ingredientName) {
    this.cocktails = [];
    searchCocktailsByIngredientName(ingredientName).then(cocktails => {
      // TODO handle no results (undefined array)
      cocktails.forEach(cocktailData => {
        const cocktail = new Cocktail(
          cocktailData.idDrink,
          cocktailData.strDrink,
          cocktailData.strDrinkThumb,
          cocktailData.strInstructions
        );
        this.cocktails = [cocktail, ...this.cocktails];
      });
    });
  }
}
