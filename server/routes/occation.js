const express = require("express");
const router = express.Router();
const occasionController = require("../controller/occation");

router.get("/getOccations/", occasionController.getoccations);
router.get("/getAllOccations/", occasionController.getAlloccations);
router.post("/postOccation/", occasionController.postOccations);
router.delete("/deleteOccation/", occasionController.deletedata);

module.exports = router;