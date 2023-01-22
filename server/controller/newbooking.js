require("../db/db");
const newBookingModel = require("../models/newbooking");


exports.postNewBooking = async (req, res) => {
    try {
        const data = new newBookingModel({
            adminid: req.body.adminid,
            facilatorid: req.body.facilatorid,
            facilatorimg: req.body.facilatorimg,
            name: req.body.name,
            desc: req.body.desc,
            team: req.body.team,
            teamimg: req.body.teamimg,
            date: req.body.date,
            attachement: req.files['doc'][0].path,
            status: req.body.status
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


exports.getNewBookings = async (req, res) => {
    adminid = req.query.adminid;
    try {
        const data = await newBookingModel.find({adminid: adminid});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

// exports.getNewProjectsByStatus = async (req, res) => {
//     adminid = req.query.adminid;
//     status = req.query.status;
//     try {
//         const data = await newProjectModel.find({adminid: adminid, status: status});
//         res.json(data);
//     } catch (error) {
//         console.log(error);
//     }
// }