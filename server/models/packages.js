const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
    "subscription": {},
    "point1": {},
    "point2": {},
    "duration": {},
    "price": {}
});

module.exports = mongoose.model("Package", packageSchema);