require("../db/db");
const occationModel = require("../models/occasions");


exports.getoccations = async (req, res) => {
    adminid = req.query.adminid
    try {
        const data = await occationModel.find({adminid: adminid});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.getAlloccations = async (req, res) => {
    try {
        const data = await occationModel.find({});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.deletedata = async (req, res) => {
    _id = req.query._id;
    try {
       const data = await occationModel.deleteOne({_id: _id});
       res.json(data.deletedCount);
    } catch (error) {
        console.log(error);
    }
  }

exports.postOccations = async (req, res) => { 
    try {
        const data = new occationModel({
            adminid: req.body.adminid,
            note: req.body.note,
            date: req.body.date,
            time: req.body.time,
            detime: req.body.detime,
        });
        await data.save().then(()=>{
            res.json(data);
        }).catch((e)=>{
            console.log(e);
        });
    } catch (error) {
        console.log(error);
    }
}