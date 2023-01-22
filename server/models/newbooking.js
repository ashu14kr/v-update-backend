const mongoose = require("mongoose");

const newBookingShema = mongoose.Schema({
    "adminid": {},
    "facilatorid": {},
    "facilatorimg": {},
    "name": {},
    "desc": {},
    "team": {},
    "teamimg": {},
    "date": {},
    "attachement": {},
    "status": {},
});

module.exports = mongoose.model("NewBooking", newBookingShema);