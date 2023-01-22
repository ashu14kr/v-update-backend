const express = require("express");
const router = express.Router();
const policyController = require("../controller/privacypolicy");


router.get("/getlinks/", policyController.getlinks);
router.post("/postlinks/", policyController.postterms);
router.patch("/updatelinks/", policyController.changelinks);

module.exports = router;