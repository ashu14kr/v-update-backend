require("../db/db");
const userDetailsModels = require("../models/userdetails");

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
            profileimg: req.files['docs'][0],
            gstcertification: req.files['docs'][1],
            pancard: req.files['docs'][2],
            aadhaarcard: req.files['docs'][3],
            status: req.body.status,
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