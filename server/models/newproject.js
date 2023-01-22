const mongoose = require("mongoose");

const newprojectSchema = mongoose.Schema({
    "adminid": {},
    "projectname": {},
    "projecttitle": {},
    "projectdescription": {},
    "team": {},
    "teaming": {},
    "status": {},
    "enddate": {},
    "attachement": {}
});

module.exports = mongoose.model("newprojects", newprojectSchema);