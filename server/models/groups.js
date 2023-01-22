const mongoose = require("mongoose");

const groupsShema = mongoose.Schema({
    "adminid": {},
    "groupname": {},
    "teamname": {},
    "teamimg": {},
    "time": {},
});

module.exports = mongoose.model("Groups", groupsShema);