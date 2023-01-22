require("../db/db");
const packageModel = require("../models/packages");


exports.getPackages = async (req, res) => {
    try {
        const data = await packageModel.find({});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}

exports.postPackages = async (req, res) => {
    try {
        const data = new packageModel({
            subscription: req.body.subscription,
            point1: req.body.point1,
            point2: req.body.point2,
            duration: req.body.duration,
            price: req.body.price,
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