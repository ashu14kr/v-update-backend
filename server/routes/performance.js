const express = require("express");
const router = express.Router();
const performanceController = require("../controller/performance");


router.post("/postempPerformance/", performanceController.postempPerformance);
router.get("/getempPerformance/", performanceController.getempPerformance);

module.exports = router;
