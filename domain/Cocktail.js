import { observable } from "mobx";

export default class Cocktail {
  @observable id;
  @observable name;
  @observable image;

  constructor(id, name, thumbnail) {
    this.id = id;
    this.name = name;
    this.image = thumbnail + "/preview";
  }
}
