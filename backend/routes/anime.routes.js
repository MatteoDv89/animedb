const express = require("express");
const router = express.Router();
const animeController = require("../controllers/anime.controller");

router.get("/:id", animeController.getHomePage);
router.get("/info/:id", animeController.getDetailPage);
router.get("/episode/info/:id", animeController.getEpisodePage);

module.exports = router;
