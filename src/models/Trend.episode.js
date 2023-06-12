const { v4: uuid } = require("uuid");

class trendEpisode {
  constructor(podcast, title, actor_image, actor, profession, text) {
    this.id = uuid();
    this.podcast = podcast;
    this.title = title;
    this.actor_image = actor_image;
    this.actor = actor;
    this.profession = profession;
    this.text = text;
  }
}

module.exports = trendEpisode;
