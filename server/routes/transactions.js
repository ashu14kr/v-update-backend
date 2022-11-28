const express = require("express");
const router = express.Router();
const transactionController = require("../controller/transaction");

router.post("/posttransaction/", transactionController.postTransaction);
router.get("/gettransaction/", transactionController.getTransactionData);

module.exports = router;