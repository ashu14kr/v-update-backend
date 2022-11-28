const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    "name": {},
    "refuserid": {},
    "username": {
        type: String,
        unique: true
    },
    "password": {},
    "designation": {},
    "address": {},
    "city": {},
    "country": {},
    "mobileno": {},
    "email": {},
    "img": {},
    "aadhar":{}
});

module.exports = mongoose.model("employeeDetail", employeeSchema);