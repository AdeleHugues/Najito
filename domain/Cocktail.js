export default class Cocktail {
  constructor(id, name, image, instructions) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.thumbnail = image + "/preview";
    this.instructions = instructions;
  }
}
