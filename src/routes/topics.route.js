const {Router} = require("express");
const isAuth = require("../middlewares/isAuth");
const {create} = require("../controllers/topics.controller");

const router = Router();

router.post("/admin/topics", isAuth, create);

module.exports = router;
