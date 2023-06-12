const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const { create } = require("../controllers/trend.episode.controller");

const router = Router();

router.post("/admin/trend-episodes", isAuth, create);

module.exports = router;
