import { observable } from "mobx";

export default class Cocktail {
  @observable id;
  @observable name;
  @observable image;
  @observable thumbnail;
  @observable instructions;

  constructor(id, name, image, instructions) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.thumbnail = image + "/preview";
    this.instructions = instructions;
  }
}
