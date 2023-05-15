const router = require("express").Router();

const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commRoutes = require("./commRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commRoutes);

module.exports = router;
