const express = require("express");
const router = express.Router();
const leadController = require("../controller/leads");


router.post("/postLeads/", leadController.postNewLeads);
router.get("/getLeads/", leadController.getNewLeads);
router.patch("/updateLeadsInfo/", leadController.updateLeadInfo);

module.exports = router;
