const mongoose = require("mongoose");

const leadsShema = mongoose.Schema({
    "adminid": {},
    "leadname": {},
    "leadAddress": {},
    "time": {},
    "status": {},
    "leadno": {},
    "email": {},
    "taggedId": {},
    "taggedImg": {},
});

module.exports = mongoose.model("Leads", leadsShema);