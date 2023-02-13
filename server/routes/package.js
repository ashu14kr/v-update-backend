const express = require("express");
const router = express.Router();
const packageController = require("../controller/package");

router.get("/getPackage/", packageController.getPackages);
router.post("/postPackage/", packageController.postPackages);
router.patch("/updatePackage/", packageController.updatePakage);

module.exports = router;