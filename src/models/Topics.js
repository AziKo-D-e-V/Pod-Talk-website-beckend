const {v4: uuid} = require("uuid");

class Topics {
  constructor(name, image, text) {
    this.id = uuid();
    this.name = name;
    this.image = image;
    this.text = text;
  }
}

module.exports = Topics;
