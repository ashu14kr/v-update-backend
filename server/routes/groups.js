const express = require("express");
const router = express.Router();
const groupController = require("../controller/groups");


router.post("/postGroups/", groupController.postNewGroup);
router.get("/getGroups/", groupController.getNewGroups);

module.exports = router;
