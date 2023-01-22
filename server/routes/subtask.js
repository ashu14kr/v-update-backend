const express = require("express");
const router = express.Router();
const subTaskController = require("../controller/subtask");

router.get("/getSubtask/", subTaskController.getSubTask);
router.get("/getAllSubtask/", subTaskController.getAllSubTask);
router.get("/getSubtaskByStatus/", subTaskController.getSubTaskByStatus);
router.get("/getSubtaskByEmployee/", subTaskController.getSubTaskByEmployees);
router.get("/getSubtaskForEmployee/", subTaskController.getSubTaskForEmployees);
router.patch("/updatesubtask/", subTaskController.updateSubTask);
router.post("/postSubtask/", subTaskController.postSubTask);

module.exports = router;