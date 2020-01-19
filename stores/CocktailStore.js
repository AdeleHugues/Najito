import { observable, get } from "mobx";
import { searchCocktailsByName } from "../helpers/cocktaildbapi";

export default class CocktailStore {
  @observable cocktails;

  searchByName(cocktailName) {
    this.cocktails = [];
    searchCocktailsByName(cocktailName).then(cocktails => {
      // TODO handle no results (undefined array)
      cocktails.forEach(cocktailData => {
        this.cocktails = [cocktailData, ...this.cocktails];
      });
    });
  }
}
