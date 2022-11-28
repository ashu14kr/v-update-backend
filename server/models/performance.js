const mongoose = require("mongoose");

const performanceShema = mongoose.Schema({
    "userid": {
        type: String,
        unique: true
    },
    "note": {},
    "score": {},
});


module.exports = mongoose.model("empPerformance", performanceShema);