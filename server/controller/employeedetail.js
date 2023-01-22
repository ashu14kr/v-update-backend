require("../db/db");
const employeeModels = require("../models/emloyeedetail");


exports.postEmployee = async (req, res) => {
    try {
        const data = new employeeModels({
            name: req.body.name,
            refuserid: req.body.refuserid,
            username: req.body.username,
            password: req.body.password,
            designation: req.body.designation,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            mobileno: req.body.mobileno,
            email: req.body.email,
            img: req.files['img'][0].path,
            aadhar: req.files['adhr'][0].path,
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


exports.getEmployeeData = async (req, res) => {
    username = req.query.username;
    password = req.query.password;
    try {
        const data = await employeeModels.find({username: username, password: password});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.getEmployeeDataById = async (req, res) => {
    _id = req.query._id;
    try {
        const data = await employeeModels.find({_id: _id});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.getEmployeeRefData = async (req, res) => {
    refuserid = req.query.refuserid;
    try {
        const data = await employeeModels.find({refuserid: refuserid});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.updateEmpData = async (req, res) => {
    const _id = req.query._id;
        try {
            const data = await employeeModels.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.json(data);
        } catch (error) {
            console.log(error);
        }
  }

