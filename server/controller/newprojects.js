require("../db/db");
const newProjectModel = require("../models/newproject");


exports.postNewProjects = async (req, res) => {
    try {
        const data = new newProjectModel({
            adminid: req.body.adminid,
            projectname: req.body.projectname,
            projecttitle: req.body.projecttitle,
            projectdescription: req.body.projectdescription,
            team: req.body.team,
            teaming: req.body.teaming,
            status: req.body.status,
            enddate: req.body.enddate,
            attachement: req.files['doc'][0].path,
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


exports.getNewProjects = async (req, res) => {
    adminid = req.query.adminid;
    try {
        const data = await newProjectModel.find({adminid: adminid});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.getNewProjectsByStatus = async (req, res) => {
    adminid = req.query.adminid;
    status = req.query.status;
    try {
        const data = await newProjectModel.find({adminid: adminid, status: status});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.updateProjectStatus = async (req, res) => {
    const _id = req.query._id;
        try {
            const data = await newProjectModel.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.json(data);
        } catch (error) {
            console.log(error);
        }
  }