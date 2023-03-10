require("../db/db");
const userDetailsModels = require("../models/userdetails");


exports.getUserData = async (req, res) => {
    username = req.query.username;
    password = req.query.password;
    try {
        const data = await userDetailsModels.find({username: username, password: password});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.admingetUserData = async (req, res) => {
    try {
        const data = await userDetailsModels.find({});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.getUserDatabyId = async (req, res) => {
    id = req.query._id;
    try {
        const data = await userDetailsModels.find({_id: id});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.getUserDatabyUserId = async (req, res) => {
    username = req.query.username;;
    try {
        const data = await userDetailsModels.find({username: username});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.postUserData = async (req, res) => {
    try {
        const data = new userDetailsModels({
            fullname: req.body.fullname,
            companyname: req.body.companyname,
            designation: req.body.designation,
            address: req.body.address,
            state: req.body.state,
            country: req.body.country,
            mobileno: req.body.mobileno,
            email: req.body.email,
            noofemployees: req.body.noofemployees,
            username: req.body.username,
            password: req.body.password,
            profileimg: req.files['img'][0].path,
            gstcertification: req.files['gst'][0].path,
            pancard: req.files['pan'][0].path,
            aadhaarcard: req.files['adhr'][0].path,
            status: req.body.status,
            indivdualuser: req.body.indivdualuser,
            expirydate: req.body.expirydate,
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


exports.uploadimg = async (req, res) => {
    try {
      res.json(req.file.filename);
    } catch (error) {
      console.log(error);
    }
  }


exports.updateUserData = async (req, res) => {
    const _id = req.query._id;
        try {
            const data = await userDetailsModels.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.json(data);
        } catch (error) {
            console.log(error);
        }
  }