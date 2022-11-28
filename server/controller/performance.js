require("../db/db");
const performanceModel = require("../models/performance");

exports.postempPerformance = async (req, res)=>{
    try {
        const data = new performanceModel({
            userid: req.body.userid,
            note: req.body.note,
            score: req.body.score,
        });
        await data.save().then(()=>{
            res.json(data);
        }).catch(()=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}


exports.getempPerformance = async (req, res) => {
    userid = req.query.userid;
    try {
        const data = await performanceModel.find({userid: userid});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

