const mongoose = require("mongoose");

const newprojectSchema = mongoose.Schema({
    "adminid": {},
    "projectname": {},
    "projecttitle": {},
    "projectdescription": {},
    "team": {},
    "status": {},
    "enddate": {},
    "attachement": {}
});

module.exports = mongoose.model("newprojects", newprojectSchema);