const mongoose = require("mongoose");

const occasionShema = mongoose.Schema({
    "adminid": {},
    "note": {},
    "date": {},
    "time": {},
    "detime": {},
});

module.exports = mongoose.model("Occations", occasionShema);