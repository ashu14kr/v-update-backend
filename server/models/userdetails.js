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
    "username": {
        type: String,
        unique: true
    },
    "password": {},
    "profileimg": {},
    "gstcertification": {},
    "pancard": {},
    "aadhaarcard": {},
    "status": {},
    "indivdualuser": {},
    "expirydate": {}
});

module.exports = mongoose.model("Userdetails", userSchema);