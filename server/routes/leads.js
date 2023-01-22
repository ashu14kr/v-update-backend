const express = require("express");
const router = express.Router();
const leadController = require("../controller/leads");


router.post("/postLeads/", leadController.postNewLeads);
router.get("/getLeads/", leadController.getNewLeads);

module.exports = router;
