const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
    "userid": {
        type: String,
        unique: true
    },
    "plan": {},
    "duration": {},
    "price": {},
    "startfrom": {},
    "expiry": {}
});

module.exports = mongoose.model("transaction", transactionSchema);