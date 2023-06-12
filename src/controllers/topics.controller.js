const { v4: uuid } = require("uuid");
const Io = require("../utils/io");
const Topics = new Io("./database/topics.json");
const Topic = require("../models/topics");
const path = require("path");

const create = async (req, res) => {
  const { name, text } = req.body;
  const { image } = req.files;

  const imageName = `${uuid()}${path.extname(image.name)}`;

  image.mv(process.cwd() + "/uploads/" + imageName);

  const newTopic = new Topic(name, imageName, text);

  const topics = await Topics.read();

  const data = topics.length ? [...topics, newTopic] : [newTopic];

  await Topics.write(data);

  res.redirect("/form");
};
module.exports = { create };
