require("../db/db.js");
const policymodel = require("../models/privacypolicy");

exports.getlinks = async (req, res) => {
    try {
      const data = await policymodel.find({});
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  }



  exports.postterms = async (req, res) => {
    try {
      const data = new policymodel({
        privacylink: req.body.privacylink,
        policylink: req.body.policylink,
        password: req.body.password,
      });
      await data
        .save()
        .then(() => {
          res.json(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }


  exports.changelinks = async (req, res) => {
    const _id = req.query._id;
        try {
            const data = await policymodel.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.json(data);
        } catch (error) {
            console.log(error);
        }
  }