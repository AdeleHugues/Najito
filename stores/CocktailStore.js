import { observable, get } from "mobx";
import Cocktail from "../domain/Cocktail";

import { searchCocktailsByName } from "../helpers/cocktaildbapi";

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
          cocktailData.strDrinkThumb
        );
        this.cocktails = [cocktail, ...this.cocktails];
      });
    });
  }
}
