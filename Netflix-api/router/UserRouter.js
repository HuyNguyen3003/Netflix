const router = require("express").Router();
const { addToLikeMovies, getLikedMovies, removeFromLikedMovies } = require("../controller/UserController")


router.post("/add", addToLikeMovies);
router.get("/liked/:email", getLikedMovies);
router.put("/remove", removeFromLikedMovies);

module.exports = router