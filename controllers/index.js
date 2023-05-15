// This file will require the routes and use them
const router = require("express").Router();

// These variables will require the routes
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes.js");
const dashboardRoutes = require("./dashboardRoutes.js");

// These variables will use the routes
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
