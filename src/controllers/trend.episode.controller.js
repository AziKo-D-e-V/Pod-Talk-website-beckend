const { v4: uuid } = require("uuid");
const Io = require("../utils/io");
const path = require("path");
const trendEpisodes = new Io("./database/trend.episodes.json");
const trendEpisode = require("../models/Trend.episode");

const create = async (req, res) => {
  const { title, actor, profession, text } = req.body;
  const { podcast, actor_image } = req.files;

  const podcastName = `${uuid()}${path.extname(podcast.name)}`;
  podcast.mv(process.cwd() + "/uploads/" + podcastName);

  const actorImageName = `${uuid()}${path.extname(actor_image.name)}`;
  actor_image.mv(process.cwd() + "/uploads/" + actorImageName);

  const newTrend = new trendEpisode(
    podcastName,
    title,
    actorImageName,
    actor, 
    profession,
    text
  );

  const trends = await trendEpisodes.read();

  const data = trends.length ? [...trends, newTrend] : [newTrend];

  await trendEpisodes.write(data);
  res.redirect("/form");
};
module.exports = { create };
