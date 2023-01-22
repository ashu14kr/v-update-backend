require("../db/db");
const groupsModel = require("../models/groups");


exports.postNewGroup = async (req, res) => {
    try {
        const data = new groupsModel({
            adminid: req.body.adminid,
            groupname: req.body.groupname,
            teamname: req.body.teamname,
            teamimg: req.body.teamimg,
            time: req.body.time,
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


exports.getNewGroups = async (req, res) => {
    adminid = req.query.adminid;
    try {
        const data = await groupsModel.find({adminid: adminid});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}