const express = require("express");
const router = express.Router();
const occasionController = require("../controller/occation");

router.get("/getOccations/", occasionController.getoccations);
router.post("/postOccation/", occasionController.postOccations);

module.exports = router;