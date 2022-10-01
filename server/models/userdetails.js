const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "fullname": {},
    "companyname": {},
    "designation": {},
    "address": {},
    "state": {},
    "country": {},
    "mobileno": {},
    "email": {},
    "noofemployees": {},
    "username": {},
    "password": {},
    "profileimg": {},
    "gstcertification": {},
    "pancard": {},
    "aadhaarcard": {},
    "status": {},
    "expirydate": {}
});

module.exports = mongoose.model("Userdetails", userSchema);