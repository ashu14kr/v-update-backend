require("../db/db");
const transactionModels = require("../models/transaction");

exports.postTransaction = async (req, res) => {
    try {
        const data = new transactionModels({
            userid: req.body.userid,
            plan: req.body.plan,
            duration: req.body.duration,
            price: req.body.price,
            startfrom: req.body.startfrom,
            expiry: req.body.expiry,
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

exports.getTransactionData = async (req, res) => {
    userid = req.query.userid;
    try {
        const data = await transactionModels.find({userid: userid});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}


exports.allGetTransactionData = async (req, res) => {
    try {
        const data = await transactionModels.find({});
        res.json(data);
    } catch (error) {
        console.log(error);
    }
}
