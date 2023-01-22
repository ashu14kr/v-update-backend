require("../db/db");
const subtaskModels = require("../models/subtask");


exports.postSubTask = async (req, res) => {
    try {
        const data = new subtaskModels({
            adminId: req.body.adminId,
            projectId: req.body.projectId,
            assignEmployeeId: req.body.assignEmployeeId,
            taskname: req.body.taskname,
            taskdisc: req.body.taskdisc,
            status: req.body.status,
            startdate: req.body.startdate,
            deadline: req.body.deadline,
        });
        await data.save().then(()=> {
            res.json(data);
        }).catch((err)=>{
            console.log(err);
        });
    } catch (error) {
        console.log(error);
    }
}


exports.getSubTask = async (req, res) => {
    adminId = req.query.adminId;
    projectId = req.query.projectId;
    try {
        const data = await subtaskModels.find({adminId: adminId, projectId: projectId});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.getAllSubTask = async (req, res) => {
    adminId = req.query.adminId;
    try {
        const data = await subtaskModels.find({adminId: adminId,});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.getSubTaskByStatus = async (req, res) => {
    adminId = req.query.adminId;
    status = req.query.status;
    try {
        const data = await subtaskModels.find({adminId: adminId, status: status});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.getSubTaskByEmployees = async (req, res) => {
    adminId = req.query.adminId;
    assignEmployeeId = req.query.assignEmployeeId;
    try {
        const data = await subtaskModels.find({adminId: adminId, assignEmployeeId: assignEmployeeId});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.getSubTaskForEmployees = async (req, res) => {
    projectId = req.query.projectId;
    assignEmployeeId = req.query.assignEmployeeId;
    status = req.query.status;
    try {
        const data = await subtaskModels.find({projectId: projectId, assignEmployeeId: assignEmployeeId, status: status});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.updateSubTask = async (req, res) => {
    const _id = req.query._id;
        try {
            const data = await subtaskModels.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.json(data);
        } catch (error) {
            console.log(error);
        }
  }



