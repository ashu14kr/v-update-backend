require("../db/db");
const leadsModel = require("../models/leads");


exports.postNewLeads = async (req, res) => {
    try {
        const data = new leadsModel({
            adminid: req.body.adminid,
            leadname: req.body.leadname,
            leadAddress: req.body.leadAddress,
            time: req.body.time,
            status: req.body.status,
            leadno: req.body.leadno,
            email: req.body.email,
            taggedId: req.body.taggedId,
            taggedImg: req.body.taggedImg,
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


exports.getNewLeads = async (req, res) => {
    adminid = req.query.adminid;
    try {
        const data = await leadsModel.find({adminid: adminid});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.updateLeadInfo = async (req, res) => {
    const _id = req.query._id;
        try {
            const data = await leadsModel.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.json(data);
        } catch (error) {
            console.log(error);
        }
  }