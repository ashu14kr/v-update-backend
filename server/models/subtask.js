const mongoose = require("mongoose");

const subTasksShema = mongoose.Schema({
    "adminId": {},
    "projectId": {},
    "assignEmployeeId": {},
    "taskname": {},
    "taskdisc": {},
    "status": {},
    "startdate": {},
    "deadline": {},
});

module.exports = mongoose.model("SubTasks", subTasksShema);