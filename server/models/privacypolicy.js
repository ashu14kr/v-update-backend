const mongoose = require("mongoose");

const PolicySchema = mongoose.Schema({
    "privacylink": {},
    "policylink": {},
    "password": {},
});

module.exports = mongoose.model("PrivacyPolicy", PolicySchema);