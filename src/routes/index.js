const auth = require("./auth.route");
const home = require("./home.route");
const teacher = require("./teacher.route");
const trendEpisodes = require("./trend.episodes.route");
const topics = require("./topics.route");
const deleteTeacher= require("./deletepost.route")


module.exports = [auth, home, teacher, trendEpisodes, topics, deleteTeacher];
